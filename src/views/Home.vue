<template>
  <div class="home">
    <h1 class="title">Holding a count</h1>
    <div data-cy="display-count" class="display-count">{{ count }}</div>
    <button @click="decrementCount" class="count decrement">-</button>
    <button @click="incrementCount" class="count increment">+</button>
    <div class="color-display">{{ color }}</div>
    <button @click="changeColor">CHANGE THE COLOR</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      count: 0,
      color: 'blue',
    }
  },
  methods: {
    decrementCount() {
      this.count -= 1
    },
    incrementCount() {
      this.count += 1
    },
    changeColor() {
      this.color = 'green'
    },
  },
}
</script>
