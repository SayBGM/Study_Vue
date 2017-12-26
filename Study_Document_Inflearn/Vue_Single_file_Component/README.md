Single File Components with JSX(ES6)
=====
* 앱의 복잡도가 증가할 때, **.vue**파일 단위 안에 html, js, css를 관리할 수 있는 방법
* 복잡도가 커짐에 따라 야기될 수 있는 문제들
    * **모든 컴포넌트에 고유의 이름**을 붙여야 함
    * js 파일에서 template 안의 html의 **문법 강조가 되지 않음**
    * js 파일상에서 **css 스타일링 작업이 거의 불가**
    * ES5를 이용하여 계속 앱을 작성할 경우 **Babel 빌드가 지원되지 않음**
* **.vue**파일을 브라우저가 렌더할 수 있는 파일들로 변환하려면 **webpack**의 **vue-loader**또는 **browserify**이용
```
<template>
    <!-- ... -->
</template>

<script>
    // ...
</script>

<style>
    /* ... */
</style>
```
    * ES5만 사용하는 경우 Single File Component의 혜택을 볼 수 없음