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

Class Binding
----
* CSS 스타일링을 위해서 class를 아래 2가지 방법으로 추가가 가능하다.
    * **v-bind:class**
    * _class="{{ className }}"_
        * _Vue 2.4버전부터 제거된 문법입니다._<br>
    _2.3 버전 이하에서는 라이브러리 이용자들이 다양한 방법으로 class 바인딩을 하도록 허용하였지만, 일관적인 코드 작성 규칙과 혼용했을 때의 에러를 방지하기 위해 더이상 HTML 의 attributes 안에 “{{ }}” 를 이용한 바인딩을 허용하지 않습니다._
* 주의할 점은 위의 두 방법을 함꼐 사용하지 않고 한 가지만 적용해야 **에러**를 미연에 **방지**할 수 있다.
    * 이렇게 하면 **테스팅**이나 **[트러블 슈팅](https://goo.gl/uW5Crc)** 할 때 유용하다.


* 아래와 같이 **class**속성과 **v-bind:class**속성을 동시에 사용해도 된다.
```
<div class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB}"></div>
<script>
    data:{
        isA: true,
        isB: false
    }
</script>
```
* 위 결과 값은
```
<div class="static class-a"></div>
```

* 아래와 같이 Array구문도 사용할 수 있다.
```
<div v-bind:class="[classA, classB]"></div>
<script>
    data:{
        classA: 'class-a',
        classB: 'class-b'
    }
</script>
```