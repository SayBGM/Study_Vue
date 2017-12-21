var login = {
    template: `
                <div>
                    <span>login</span>
                    <router-view></router-view>
                </div>
`
}
var loginForm = {
    template: `
    <form action="/" method="post">
        <div>
            <label for="account">E-mail : </label>
            <input type="email" id="account">
        </div>
        <div>
            <label for="password">Password : </label>
            <input type="password" id="password">
        </div>
    </form>
    `
}

var List = {
    template: `
    <div>
    List Section
        <router-view></router-view>
    </div>
`
}
var listItems = {
    template: `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        </ul>
    `
}

var Main = {
    template:`
    <div>
        <h1>hello</h1>
        <router-view></router-view>
    </div>
    `
}

var MainItem = {
    template: `
    <h2>환영합니다.</h2>
    `
}

var routes=  [{
        path: '/login',
        component: login,
        children: [{
            path: '',
            component: loginForm
        }]

    },
    {
        path: '/list',
        component: List,
        children: [{
            path: '',
            component: listItems
        }]
    },
    {
        path: '/main',
        component: Main,
        children: [{
            path: '',
            component: MainItem
        }]
    }
]

var router = new VueRouter({
    routes
})

var app = new Vue({
    el:'#app',
    router
})