Vue Loader
====
* **.vue**형태 파일을 javascript 모듈 형태로 보여주는 Webpack loader
* 장점
    * ES6 지원
    * `<style>`와 `<template>`에 각각의 webpack loader 지원 **ex) sass, jade**
    * 각 **.vue 컴포넌트의 스코프로 좁힌 css 스타일링 지원
        * ex) `<style scoped>`를 작성하면 해당 컴포넌트에만 영향을 준다. 
    * webpack의 모듈 번들링에 대한 지원과 의존성 관리가 제공
    * 개발 시 hot reloading 지원