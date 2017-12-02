Vue Instance
=================

Vue.js를 이용하여 UI화면을 개발하기 위해서는 

 1. Vue js 라이브러리를 로딩했을 때 존재하는 Vue **생성자**로 인스턴스를 생성 해야 한다.

```
var vm = new Vue({
    // ...
})
```

2. Vue 라이브러리 로딩 후 접근 가능한 **Vue라는 기존의 객체에 화면에서 사용할 옵션 (데이터, 속성, 메서드 등등) 을 포함하여 화면의 단위를 생성한다**


Vue Instance 생성자
=============
* Vue 생성자로 인스턴스를 만드는 방법

```
// vm = ViewModel을 말한다. (관행적인 코딩 관습)

var vm = new Vue({
    //options
})
```



* Vue 객체를 생성할 때 아래와 같이 data, template, el, methods, life cycle callback등의 options 을 포함 가능

* template 같은 경우에는  한개의 요소등을 넣을 수 있다. 서버에 있는 값(뒷단에 있는 값)들을 앞단으로 넘겨 줄수 있다고 한다.<br>
ex)div, span

* el은 화면이 그려지는 시작점 element의 약자<br>
el에 작성된 태그부터 로딩이 시작된다. 다른 프레임워크에도 el과 비슷한게 있다고 한다.
```
var vm = new Vue({
    template: ...,
    el : ...,
    methods:{

    },
    created{

    }
    // ...
})
```

* 각 options로 미리 정의한 vue 객체를 확장하여 재사용이 가능하다. 하지만 아래 방법보다는 template에서 custom element로 작성하는 것이 더 좋다.

```
var MyComponent = Vue.extend({
    template : '<p>Hello {{message}}</p>',
    data:{
        message: 'Vue'
    }
    // ...
})

// 위에서 정의한 내용가지고 컴포넌트 생성
var myComponentInstance = new MyComponent()
```

Vue Instance 라이프싸이클 초기화
===================
**라이프 사이클은 어플리케이션이 생성되거나 변경, 소멸 될 때의 각각의 단계를 의미 한다.**

Vue 객체가 생성될 때 아래의 초기화 작업을 수행한다

* 데이터 관찰
* 템플릿 컴파일
* DOM에 객체 연결
* 데이터 변경시 DOM 업데이트

초기화 작업 이외에서 개발자가 의도하는 커스텀 로직을 아래와 같이 추가할 수 있다.
```
var vm = new Vue({
    data:{
        a: 1
    },
    created: function (){
        //this는 vm을 가리킴
        console.log('a is: '+ this.a)
    }
})
```

이 외에도 라이프싸이클 단계에 따라 아래 메서드를 사용할 수 있다.
* mounted
* updated
* destroyed

위와같이 초기화 메서드로 커스텀 로직을 수행 하기 때문에  Vue에서는 따로 Controller를 가지고 있지 않다.
![Image](https://vuejs.org/images/lifecycle.png)


실습
=========
```
<div id="app">
        {{ message }}
    </div>
    <script src="https://unpkg.com/vue@2.3.3"></script>
    <script>
    new Vue({
        el: '#app',                             id가 app인 곳에
        data: {
            message: "hello Vue.js!"            data중 message는 다음과 같다.
        },
        beforeCreate:                           생성되지 전에는
        function(){
            console.log("beforeCreate");
        },
        created: function(){                    생성되면
            console.log("created");
        },
        mounted: function(){                    값이 넣어지면(?)    
            console.log("mounted");
            setTimeout(() => {                  3초 뒤에 이곳의 message는 "~~"로 바뀐다.
                this.message = "안녕 Vue.js!"
            }, 3000);
        },
        updated: function(){                    값이 바뀌어지면
            console.log("updated")
        }
    })
```
