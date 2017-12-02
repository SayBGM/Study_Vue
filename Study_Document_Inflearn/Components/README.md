Vue Components
================
* 화면에 비춰지는 뷰의 단위를 쪼개어 재활용이 가능한 형태로 관리하는 것이 컴포넌트

```
    <div id="app">
        <button>Parent Component</button>
        <my-component></my-component>                           치환할 태그
    </div>

    <script src="https://unpkg.com/vue@2.3.3"></script>         Vue 호출
    <script>
        Vue.component('my-component', {                         Vue component 선언, 치환할 태그
            template: '<div>A custom component</div>'           치환 시킬 값
        });

        new Vue({
            el: '#app'                                          #app에 넣는다.
        })
```

Global or Local Component
-------
* 컴포넌트를 뷰 인스턴스에 등록해서 사용할 때 다음과 같이 global 하게 등록 할 수 있다.
```
Vue.component('my-component',{
    // ...
})
```

* local하게 등록 하는 방법은 다음과 같다.
```
var cmp = {
    data: function(){
        return{
            // ...
        };
    }
    template: '<hr>',
    methods: {}
}

// 아래 Vue 인스턴스에서만 활용할 수 있는 로컬(지역) 컴포넌트 등록

new Vue({
    components:{
        'my-cmp' :cmp
    }
})
```

지역 컴포넌트 실습
-----
```
var cmp = {
    template: "<div>A local Component!</div>"
    };

    new Vue({
        el: '#app',
        components:{
           'my-local-component':cmp                 태그 이름
        }
    })
```


전역과 지역 컴포넌트 차이점
-----------------
```
    <div id="app">
        <button>Parent Component</button>
        <my-component></my-component>
        <my-local-component></my-local-component>    
    </div>

    <div id="app2">
        <button>Parent Component</button>
        <my-component></my-component>
        <my-local-component></my-local-component>    
    </div>

    <script src="https://unpkg.com/vue@2.3.3"></script>         Vue 호출
    <script>
        Vue.component('my-component', {                         Vue component 선언, 치환할 태그
            template: '<div>A custom component</div>'           치환 시킬 값
        });

        var cmp = {
            template: "<div>A local Component!</div>"
        };

        new Vue({
            el: '#app',
            components:{
                'my-local-component':cmp                        태그 이름
        }
    })

    new Vue({
            el: '#app2'
    })
```
전역(글로벌)이라는 의미는 Vue, 즉 접근자에 바로 등록하는 것이기 때문에 인스턴스를 생성할 때마다 쓸 수 있는 반면
지역 컴포넌트는 components를 반드시 입력해주어야 쓸 수 있다!


[강의 소스](https://backgwangm.github.io/Study_Vue/Study_Document_Inflearn/Components/)