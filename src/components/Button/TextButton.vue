<template>
  <span class="textButton">
    <a href="#" :style="style">{{ text }}</a>
  </span>
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    text: { type: String, default: '' },
    color: { type: String, default: '#FFF' },
    bg: { type: String, default: '#000' },
  },
  computed: {
    style() {
      return {
        color: this.color,
        backgroundColor: this.bg
      }
    }
  }
}
</script>

<style scoped lang="scss">
  a {
    padding: .375rem .75rem;
    text-align: center;
    background: #111;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    border-radius: .25rem;
  }
</style>
