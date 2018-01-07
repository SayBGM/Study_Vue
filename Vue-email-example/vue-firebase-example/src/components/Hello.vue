<template>
  <div class="hello">
    <h4>아이디</h4>
    <input v-model="email" type="text"/>
    <h4>패스워드</h4>
    <input v-model="password" type="password"/>
    <div ><button class="btn" @click="SignUp ()">가입하기</button></div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      email: '',
      password: ''
    }
  },
  methods: {
    SignUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        console.log(user)
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>
<style scoped>
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
  color: #35495E;
}
.btn{
  margin-top: 5vh;
  border-color:#35495E;
  height: 7vh;
  width: 20vw;
  background-color: rgb(65, 184, 131);
  border-radius: 1vh;
  color: white;

}
input{
  width: 50vmin;
  height: 5vmin;
  font-size: 5vh;
}
</style>
