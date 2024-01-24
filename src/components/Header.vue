<template>

<header> 
    <div class="brown-header">
    <img src= "../assets/images/zootopia2.png"/>
    <img src= "../assets/images/zootopia1.png"/>
    </div>
  </header>

    
  </template>

<script >
export default {
  name: 'Header',
};
</script>

<style scoped>
.brown-header {
  background-color: #A8856F; 
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