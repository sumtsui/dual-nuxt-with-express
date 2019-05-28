<template>
  <div>
    <h1>mobile</h1>
    <p>{{ ua  }}</p>
    <List />
  </div>
</template>

<script>
import List from '~shared/components/List'

export default {
  name: 'mobile-home',
  components: {
    List
  },
  middleware: ['checkUA'],
  computed: {
    ua() {
      return this.$store.state.ua
    }
  }
}
</script>