<script setup>
import { ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { useAuthStore } from '../assets/store/auth';



const username = ref('');
const password = ref('');
const store = useAuthStore()

const router = useRouter();
const route = useRoute();


function login() {
  if (username.value == store.user.username&&password.value == store.user.password){
    store.user.isAuthenticated = true
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  } else {
    const redirectPath = route.query.redirect || '/login'
    router.push(redirectPath)
  }
}


</script>

<template>
    <div id="main-container">
        <div class="login-container">
            <img class="logo" src="/src/assets/images/logo-zootopia.png">
        
            <form class="login-form" @submit.prevent="login">
                <label for="username">User:</label>
                <input class="input-field" type="text" v-model="username" required>
                
                <label for="password">Password:</label>
                <input class="input-field" type="password" v-model="password" required>
                
                <button  class="login-button" type="submit">Login</button>
            </form>
      </div>
    </div>
 

</template>
<style scoped>
#main-container {
  background-image: url('/src/assets/images/fondo-zootopia.png');
  background-size: cover;
  background-position: center;
  margin: 0;
  height: 100vh;
  overflow: hidden;
}


.logo{
    width:70%;
    margin-left:14%;
    margin-top: 10%;
}

.login-container {

  width: 450px;
  height: 400px;
  margin:25%;
  margin-top: 12%;
  margin-left: 38%;
  padding: 5px;
  border: 2px solid rgb(235, 202, 159);
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(250, 247, 247, 0.1);
  background:burlywood;
  opacity: 0.9;
  
}

.login-form {
  display: flex;
  flex-direction: column;
  padding:20px ;
}

.input-field {
  margin-bottom: 30px;
  padding: 8px;
  border: 2px solid rgb(212, 163, 99);
  border-radius: 6px;
}

.login-button {
  background-color:white;
  color:black;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width:30%;
  margin-left: 35%;
  margin-top: 5%;
  transition: 0.3s;
}

.login-button:hover {
  background-color: #45a049;
  color : white;
}

</style>