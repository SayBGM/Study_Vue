Webpack Entry
* webpack으로 묶은 모든 라이브러리들을 로딩할 시작점 설정
* a,b,c 라이브러리를 모두 번들링한 bundle.js를 로딩한다.
* 1개 또는 2개 이상의 엔트리 포인트를 설정할 수 있다.
```
    entry: '/public/src/index.js'           //string
    entry: ['/public/src/index.js']         //array
    entry: {'/public/src/index.js'},        //Object
```

Mutiple Entry points
---
* 앞에 복수개 엔트리 포인트에 대한 설정 예시
```
module.exports = {
    entry:{
        Profile: './profile.js',
        Feed: './feed.js'
    },
    output: {
        path: 'build',
        filename: '[name].js'       //위에 지정된 entry 키의 이름에 맞춰서 결과 산출
    }
};

// 번들파일 Profile.js, Feed.js가 산출됨
```