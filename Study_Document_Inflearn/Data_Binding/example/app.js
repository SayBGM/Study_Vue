var app = new Vue({
    el: '#app',
    data: {
      message : 'Hello Vue.js',
      input: 'I want to know about you.',
      uid: '10',
      flag: true
    },
    methods: {
      clickBtn() {
        console.log("hi");
      },
      alert(){
          alert("Hello Vue.js")
      }
    }
  });