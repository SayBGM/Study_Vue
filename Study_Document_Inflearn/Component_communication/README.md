부모와 자식 컴포넌트 관계
=====
* 구조상 상-하 관계에 있는 컴포넌트의 통신은
    * 부모 -> 자식 : props down
    * 자식 -> 부모 : events up

Props란
===
* 모든 컴포넌트는 각 컴포넌트 자체의 스코프를 갖는다.
    * ex) 하위 컴포넌트가 상위 컴포넌트의 값을 바로 참조할 수 없다.
* 상위에서 하위로 값을 전달하려면 props 속성을 사용한다.

```
Vue.component('child-component',{
    props: ['passedData'],
    template: '<p>{{passedData}}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue! from Parent Component',
    }
})
```

```
<div id="app">
    <child-component v-bind:passed-data="message"></child-component>
</div>
```
**js에서 props 변수 명명을 카멜 기법으로 하면 html에서 접근은 케밥 기법(-)으로 가야한다**

카멜 기법이란?
----
식별자의 첫 번째 문자는 소문자로 표시하고 연결된 각 후속 단어의 첫번째 문자는 대문자로 표시
* ex) backColor

케밥 기법이란?
---
연결된 후속 단어 앞에 - 를 붙여준다.'
* ex) back-color
