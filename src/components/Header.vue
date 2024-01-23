<template>

<header> 
    <div class="brown-header">
    <img src= "../assets/images/logo zootopia.png"/>
    <img src= "../assets/images/zootopia1.png"/>
    </div>
  </header>

    <div>
      <h1>Dashboard</h1>
      <p v-if="isAuthenticated">Bienvenido al panel de control</p>
      <p v-else>Inicia sesión para acceder al panel de control</p>
    </div>
  </template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.brown-header {
  background-color: #8b4513; 
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 100px;
  height: auto;
}

.login-icon {
  width: 30px; 
  height: 30px;
}
</style>