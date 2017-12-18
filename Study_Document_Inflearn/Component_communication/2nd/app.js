Vue.component('todo-item',{
    props: ['todo'],
    template: '<p>{{ todo.text }}</p>'
});

Vue.component('languages',{
    props:['lang'],
    template: '<p>{{lang.id}}번째 {{lang.text}}</p>'
})

var app = new Vue({
    el:'#app',
    data:{
        Todos:[
            {id:0, text:'Learn 1'},
            {id:1, text:'Learn 2'},
            {id:2, text:'Learn 3'},
            {id:3, text:'Learn 4'}
        ],
        Languages:[
            {id:0, text:'python'},
            {id:1, text:'c++'},
            {id:2, text:'java'},
            {id:3, text: 'objective-c'}
        ]
    }
})