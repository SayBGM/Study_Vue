Vue Templates
==========
Vue로 그리는 화면의 요소들, 함수, 데이터 속성을 모두 Templates안에 포함된다.
* Vue는 DOM의 요소와 Vue 인스턴스를 매핑할 수 있는 HTML Template을 사용.
* Vue는 Template으로 렌더링 할 때 Virtual DOM을 사용하여
* DOM 조작을 최소화 하고 렌더링을 꼭 다시 해야만 하는 요소를 계산하여 성능 부하를 최소화
* 원하면 render function을 직접 구현하여 사용할 수 있음

Attributes
------
HTML Attributes를 Vue의 변수와 연결할 때는 v-bind를 이용
```
<div v-bind:id="dynamicId"></div>
```

JS Expressions
----
{{ }}안에 다음과 같이 javascript 표현식도 가능하다.
```
<div>{{ number + 1 }}</div>                         <!-- O -->
<div>{{ message.split('').reverse().join('') }}     <!-- O -->
<div>{{ if (ok) {return message} }}                 <!-- X -->
```

Directive
---
**v-** 접두사를 붙인 attributes로, javscript 표현식ㅇ로 값을 나타내는 게 일반적이다. **:** 을 붙여 인자를 받아 취급할 수 있다.
* [v-if](https://kr.vuejs.org/v2/guide/#조건문과-반복문)
* [v-bind](https://kr.vuejs.org/v2/guide/#선언적-렌더링)
* [v-on:click](https://kr.vuejs.org/v2/guide/#사용자-입력-핸들링)
```
<p v-if="seen">Now you see me</p>

<!-- :뒤에 선언한 href 인자를 받아 url 값이랑 매핑-->
<a v-bind:href="url"></a>

<!-- click 이라는 이벤트를 받아 Vue에 넘겨준다.>
<a v-on:click="doSomething"></a>
```
[Filters](https://kr.vuejs.org/v2/guide/filters.html)
----------
화면에 표시되는 텍스트의 형식을 편하게 바꿀 수 있도록 고안된 기능이며, **|** 을 이요하여 여러 개의 필터를 적용할 수 있다.
```
<!-- message에 표시될 문자에 capitalize 필터를 적용하여 첫 글자를 대문자로 변경한다. -->
{{ message | capitalize}}
```
```
new Vue({
    // ...
    filters: {
        capitalize: function (value) {
            if(!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})
```
_charAt() = 지정된 위치에 존재하는 문자를 찾아 반환하는 함수_
_toUpperCase() = 문자열에 있는 모든 영문자를 대문자로 변환하는 함수_
_slice() = 문자열의 일정 부분을 반환합니다.(삭제한다고 봐도 된다)_
