'use strict';

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false });

var fs = require('fs');

var switchInit = false;

function progress(text, callback) {
    console.log('- ', text);

    nightmare
        .goto('http://labspace.naver.com/nmt/')
        .wait('textarea')
        .evaluate(function(v) {
            document.querySelector('textarea').value = v;
        }, text + '.')
        .type('textarea', ' ');

    if (!flag && !switchInit) {
        switchInit = true;
        nightmare.click('.btn_switch');
    }

    nightmare
        .click('.menu-target .button')
        .wait(1000)
        .evaluate(function () {
            return document.querySelector('.messageWrap span').innerHTML;
        })
        .then(function (result) {
            callback(result);
        })
        .catch(function (error) {
            console.error('Search failed:', error);
        });

    return;
}

function next(text) {
    console.log('+ ', text);

    if (arr.length < 1) {
        return process.exit();
    } else {
        return progress(arr.shift(), next);
    }
}

function start(params) {
    var file = params[3];

    if (!file) {
        console.log('- 대상 파일을 찾을 수 없습니다.');
        process.exit();
    }

    fs.readFile(file, function(err, data) {
        var text = data.toString();

        if (err || !text) {
            console.log('- 파일을 불러오지 못했거나 번역할 내용이 없습니다.');
            process.exit();
        }

        global.arr = text.split('. ');
        global.flag = params[2] === '-e';

        return progress(arr.shift(), next);
    });
}

start(process.argv);
