<template>
  <ul class="headerMenu">
    <li v-for="(item, key) in items" :key="key">
      <router-link :to="{name:'tab', params: { name: item.name }}">{{ item.text }}</router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'HeaderMenu',
  props: {
    items: {
      type: Array,
      defalut: []
    }
  },
  computed: {
    style() {
      return {
        
      }
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    list-style: none;
    display: block;
    padding: 0 10px;
    height: 30px;
  }
  li {
    float: left;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-weight: bold;
    transition: .4s;
  }
  li:hover {
    color: #000;
  }
</style>
