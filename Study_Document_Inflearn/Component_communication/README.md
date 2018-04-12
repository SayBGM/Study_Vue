# 부모와 자식 컴포넌트 관계

- 구조상 상-하 관계에 있는 컴포넌트의 통신은

  - 부모 -> 자식 : props down
  - 자식 -> 부모 : events up

# Props란

- 모든 컴포넌트는 각 컴포넌트 자체의 스코프를 갖는다.

  - ex) 하위 컴포넌트가 상위 컴포넌트의 값을 바로 참조할 수 없다.

- 상위에서 하위로 값을 전달하려면 props 속성을 사용한다.

```javascript
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

## 카멜 기법이란?

식별자의 첫 번째 문자는 소문자로 표시하고 연결된 각 후속 단어의 첫번째 문자는 대문자로 표시

- ex) backColor

## 케밥 기법이란?

연결된 후속 단어 앞에 - 를 붙여준다.'

- ex) back-color

## 같은 레벨의 컴포넌트 간 통신

동일한 상위 컴포넌트를 가진 2개의 하위 컴포넌트 간의 통신은

- Child -> Parent -> 다시 2개의 Children

컴포넌트 간의 직접적인 통신은 불가능하도록 되어 있는게 Vue의 기본 구조

### Event Bus - 컴포넌트 간 통신

Non Parent - Child 컴포넌트 간의 통신을 위해 Event Bus 를 활용할 수 있다.

- Event Bus를 위해 새로운 Vue를 생성하여 아래와 같이 Vue Root Instance 가 위치한 파일에 등록

```js
//Vue Root Instance 전에 꼭 등록 순서가 중요
export const eventBus = new Vue();
new Vue({
    ~~~
})
```

## 이벤트 발생

- 이벤트를 발생시킬 컴포넌트에 _eventBus_ import후 _$emit_으로 이벤트 발생

```js
import { eventBus } from '../../main';

eventBus.$emit('refresh' 10);
```

## 이벤트 수신

- 해당 이벤트를 받을 컴포넌트에도 동일하게 import 후 콜백으로 이벤트 수신 
```js 
import { eventBus } from '../../main';

created() { eventBus.$on('refresh', function(data){ console.log(data); //10 }); } ```
