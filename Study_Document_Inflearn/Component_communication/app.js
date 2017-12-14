Vue.component('child-component',{
    props: ['passedData'],
    template: '<p>{{passedData}}</p>'
});
Vue.component('sibling-component',{
    props: ['passedMessage'],
    template: '<p>{{passedMessage}}</p>'
});

var app = new Vue({
    el: '#app',
    data:{
        message: 'hello! passed from parent component',
        anotherMessage: 'hi! hi!'
    }
})