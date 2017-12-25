Data Binding
====
* DOM 기반 HTML Template에 Vue 데이터를 바인딩 하는 방법은 아래와 같이 크게 3가지가 있다.
    * Interpolation(값 대입)
    * Bindeing Expressions(값 연결)
    * Directives(디렉티브 사용)

Interpolation - 값 대입
----
* Vue의 가장 기본적인 데이터 바인딩 체계는 **Mustache {{}}**를 따른다
```
<span>Message: {{ msg }}</span>
<span>This will never change: {{* msg }}</span>

/*
+ javascript의 msg 값이 바뀌어도 * 가 붙어있으면 값이 바뀌지 않는다.
++ {{* msg }}는 예전 문법이다. 이제는 <span v-once>{{ msg }}</span>을 사용한다.
*/

<div id="item-{{ id }}"></div>      //이 문법은 최신 vue버전 (2.4d이상)에서 지원하지 않는 다고 하니 기억해두자!
```
### [참고 자료](https://kr.vuejs.org/v2/guide/instance.html#속성과-메소드)

Binding Expressions - 값 연결
----
* **{{ }}**를 이용한 데이터 바인딩을 할 때 자바스크립트 표현식을 사용할 수 있다.
```
<div>{{ number + 1 }}</div>                                 <!-- O -->
<div>{{ message.split('').reverse().join('') }}</div>       <!-- O -->
<div>{{ if (ok) { return message} }}</div>                  <!-- X -->
```
* Vue에 내장된 Filter를 **{{ }}** 안에 사용할 수 있다. 여러개 필터 체인 가능
```
{{ message | capitalize }}
{{ message | capitalize | upcapitalize }}
```

Directives
---
* Vue에서 제공하는 특별한 Attributes이며 **v-**의 prefix(접두사)를 갖는다.
* 자바스크립트 표현식, filter 모두 적용된다.
```
<!-- login의 결과에 다라 p가 존재 또는 미존재 -->
<p v-if="login">Hello</p>
<!-- click = {{doSomething}} 과 같은 역할>
<a v-on:click="doSomething"></a>
```