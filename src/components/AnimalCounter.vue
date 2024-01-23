
<template>
  <div>
    <h1>Contador de Animales: {{ animalCount }}</h1>
    <button @click="incrementAnimal">Incrementar</button>
    <button @click="decrementAnimal">Decrementar</button>
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
  
  computed: {
    animalCount: {
      get() {
        return this.initialCount;
      },
      set(newValue) {
        this.$emit('update:initialCount', newValue);
      },
    },
  },
  watch: {
    initialCount(newValue) {
      this.animalCount = newValue;
    },
  },
  methods: {
    incrementAnimal() {
      this.animalCount++;
      this.$emit('incrementAnimal', this.animalCount);
    },
    decrementAnimal() {
      this.animalCount--;
      this.$emit('decrementAnimal', this.animalCount);
    },
  },
};
</script>

<style scoped>


</style>



    
      
  