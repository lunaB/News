<template>
  <span class="iconButton">
    <a :href="link" :style="style"><font-awesome-icon :style="style" :icon="[prefix, name]"/></a>
  </span>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    prefix: {
      type: String,
      default: 'fas'
    },
    name: String,
    link: String,
    size: String
  },
  computed: {
    style() {
      return {
        fontSize: this.size+'px', 
        width: this.size+'px',
        height: this.size+'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  a {
    display: inline-block;
  }
</style>
