
<template>
    <div>
      <AnimalCounter :initialCount="initialCount" @incrementAnimal="handleIncrement" @decrementAnimal="handleDecrement" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AnimalCounter from "@/components/AnimalCounter.vue";
  
  const initialCount = ref(5);
  
  const handleIncrement = () => {
    initialCount.value++;
  };
  
  const handleDecrement = () => {
    initialCount.value--;
  };
  </script>



                                                                                                                                                                                              





<style scoped>

    </style>

