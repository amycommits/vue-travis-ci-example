<template>
  <div class="home">
    <div data-cy="display-count" class="display-count">{{ count }}</div>
    <button @click="decrementCount" class="count decrement">-</button>
    <button @click="incrementCount" class="count increment">+</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    decrementCount() {
      this.count -= 1
    },
    incrementCount() {
      this.count += 1
    },
  },
}
</script>
