<template>
  <div>
    <h1>desktop</h1>
    <p>{{ ua }}</p>
    <List />
  </div>
</template>

<script>
import List from '~shared/components/List'

export default {
  name: 'desktop-home',
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