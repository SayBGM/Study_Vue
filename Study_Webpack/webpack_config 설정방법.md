Webpack Entry
====
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

Webpack Output
===
* entry에서 설정하고 묶은 파일의 결과값을 설정
```
var path = require('path');
module.exports={
    entry: {
        // ...
    },
    output
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    // 혹은 filename: '[name].js'
}
```

OutPut Name Options
----
```
output: {
    filename: '[name].js',
    filename: '[hash].js',
    filename: '[chunkhash].js'
}
```

참고 API
---
### path.join()
* 해당 API가 동작되는 OS의 파일 구분자를 이용하여 파일 위치를 조합한다.
```
path.join('/foo', 'bar', 'baz/asdf');
// Returns: '/foo/bar/baz/asdf'
```

Webpack Loader
====
* 웹팩은 자바스크립트 파일만 처리가 가능하도록 되어있다.
* loader를 이용하여 다른 형태의 웹 자원(img, css ...)들을 js로 변환하여 로딩한다.
```
module.exports={
    entry: {
        // ...
    },
    output: {
        // ...
    },
    module: {
        rules: [
            { test : /\.css$/, use: ['style-loader', 'css-loader']}
            // css, 정규표현식 style-loader와 함께 css-loader를 사용한다는 의미
        ]
    }
};
```
* loader 에서 모듈 로딩 순서는 배열의 요소 오른쪽에서 왼쪽으로 진행된다.
```
test: /backbone/,                               //backbone이라는 키워드를 만났을 때
use: [
    'expose-loader?Backbone',
    'imports-loader?_=underscore,jquery'
]
```