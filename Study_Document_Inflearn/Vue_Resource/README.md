Vue Resource
==============
Vue 에서 HTTP통신을 위해 제공하는 플러그인
axios
```
npm install vue-resource
```
위 명령어로 설치 후 Root Vue Instance를 선언하는 js파일에 아래와 같이 등록
```
// 뒤에서 배울 Single File Component 구조 기준
import VueResource from 'vue-resource';
...
Vue.use(VueResource);
```

사용법
```
this.$http.get(url).then(successCallback, failCallback);
```