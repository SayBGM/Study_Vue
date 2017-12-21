Vue Routers
=====
* Vue를 이용한 SPA(싱글 페이지 애플리케이션)를 제작할 때 유용한 라우팅 라이브러리 
* Vue 코어 라이브러리 외에 Router 라이브러리를 공식 지원하고 잇고 아래와 같이 설치 한다.
```
npm install vue-router
```

* Vue 라우터는 기본적으로 RootUrl'/#/'{Router name}의 구조로 되어 있다.
```
example.com/#/user
```
* 여기서 # 태그값을 제외하고 기본 URL 방식으로 요청을 할 때마다 index.html을 받아 라우팅을 하려면 
```
const router = new VueRouter({
    routes,
    // 아래와 같이 history 모드를 추가해주면 된다.
    mode: 'history'
})
```

Nested Routers
===============
* 라우터로 화면 이동시 Nested Routers를 이요하여 여러개의 컴포넌트를 동시에 렌더링 할 수 있다.
* 렌더링 되는 컴포넌트의 구조는 가장 큰 상위의 컴포넌트가 하위의 컴포넌트를 포함하는 **Parent - Child**형태와 같다.
```
<div id="app">
    <router-view></router-view>
</div>

<div>
    <p>Main Component rendered</p>
    <app-header></app-header>
```

주의 사항 - Vue Template Root Element
----
* Vue의 Template에는 최상위 태그가 1개만 있어야 렌더가 가능하다.
* 아래는 Template의 HTML 태그를 정의 할 떄 주의 해야하는 Vue의 성질이다.
```
var Foo = {
    template: `
        <div>foo</div>
        <router-view></router-view>
        //에러 발생
}
```
## ↓↓↓↓↓↓↓↓↓↓↓↓
```
var Foo = {
    template: `
    <div>
        foo
        <router-view></router-view>
    </div>
}
```

Named Views
========
* 라우터로 특정 URL로 이동시, 해당 URL에 해당하는 여러개의 View(컴포넌트)를 동시에 렌더링한다.
* 각 컴포넌트에 해당하는  **name**속성과 **router-view**지정이 필요
```
<div id="app">
    <router-view name="nestedHeader"></router-view>
    <router-view></router-view>
</div>
```
```
{
    path: '/home',
    components: {
        netedHeader: AppHeader,         //name이 nestHeader가 있는 곳에 AppHeader를 뿌려줌
        default: Body                   //설정되지 않는 것(default)에 Body를 뿌려줌
    }
},
```
Nested View vs Named Views
=========================
* 특정 URL에서 1개의 컴포넌트에 여러 개의 하위 컴포넌트를 갖는 것을 **Nested Routes**
* 특정 URL에서 여러 개의 컴포넌트를 쪼개진 뷰 단위로 렌더링 하는 것을 **Named View**

<img src="https://joshua1988.github.io/images/posts/web/vuejs/namedview-nestedroutes.png">


추가로 배운 것
----
```
var app = new Vue({
el: ‘#app’,
router : router
});
```
```
var app = new Vue({
router
}).$mount(‘#app’)
```
위 두개의 코드는 같은 역할을 한다.