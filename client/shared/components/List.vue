<template>
  <div>
    <li
    v-for="(item, idx) in list"
    :key=idx>
      {{ item }}
    </li>
  </div>
</template>

<script>
  export default {
    computed: {
      list() {
        const arr = []
        let i = 20
        while (i > 0) {
          arr.push('apple')
          i--
        }
        return arr 
      }
    }
  }
</script>

<style scoped>

</style>