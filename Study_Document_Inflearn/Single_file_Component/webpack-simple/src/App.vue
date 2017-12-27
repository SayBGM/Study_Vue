<template>
  <div id="app">
    <sinput></sinput>
    <!-- Global Component, check main.js -->
    <nav-header></nav-header>
    <login-form></login-form>
    <pop-up></pop-up>
  </div>
</template>

<script>
  import LoginForm from './components/LoginForm.vue';
  import PopUp from './components/PopUp.vue'
  export default {
    components: {
      'login-form': LoginForm,
      'pop-up': PopUp
      // 할일 #1
      // Local 컴포넌트를 하나 등록하고, login form 아래에 렌더링 해보세요.
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>