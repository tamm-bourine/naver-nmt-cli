# naver-nmt-cli

네이버 신경망 번역기의 CLI 버전 입니다. 200자 제한없이 사용할 수 있습니다.

## Quickstart

```
> node app.js -k example.txt
```

```
-  '최순실 게이트' 파문에도 27일 부산을 전격 방문한 박근혜 대통령을 맞이한 건 지역 대학생들의 '기습 하야 시위'였다
+  It was a surprise visit from the local university students who visited Busan on July 27 to visit Busan, which also visited Busan on July 27.
-  당황한 경호원들은 학생들의 시위를 거칠게 막아섰고, 미란다 원칙도 알리지 않은 채 체포한 사실을 뒤늦게 깨닫고 경찰차에 태웠던 일부 학생을 풀어주는 촌극까지 벌였다
+  Danghwang guards blocked students ' protest, Miranda. He belatedly released a documentary on the police who arrested the arrested policemen and arrested some of the arrested policemen.
-  박 대통령은 이날 오전 해운대구 벡스코 제2전시장에서 열린 '제4회 지방자치의 날' 기념식과 '제4회 대한민국 지방자치 박람회'를 찾았다
+  On April 4, Park sought the fourth anniversary of the fourth anniversary of the opening ceremony of the 2nd Regional Government Exhibition Hall and the fourth Korea-Japan Regional Government Exhibition Fair.
```

## Setup

```
> npm install naver-nmt
```

## Usage

```
> node app.js [options] [textfile path]
```

## Options

```
-e : 텍스트를 영어로 번역합니다.
-k : 텍스트를 한글로 번역합니다.
```

## License

MIT



