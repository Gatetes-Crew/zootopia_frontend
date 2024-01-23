
<template>
    <div>
      <h1>Contador de Animales: {{ animalCount }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      initialCount: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        animalCount: this.initialCount,
      };
    },
    watch: {
      initialCount(newValue) {
        this.animalCount = newValue;
      },
    },
    methods: {
      incrementAnimal() {
        
        this.$emit('incrementAnimal');
      },
      decrementAnimal() {
        
        this.$emit('decrementAnimal');
      },
    },
  };
  </script>
  
  <style scoped>
  

  
  </style>



    
      
  