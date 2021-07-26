<template>
  <div class="textSlide">
    <ul :style="{'margin-top': slideMargin}">
      <li v-for="(item, key) in items" :key="key">
        <router-link :to="{name:'article', params: { articleId: item.articleId }}">
          "{{ item.state }}" {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TextSlide',
  props: {
    items: {
      type: Array,
      defalut: []
    }
  },
  data() {
    return {
      interval: null,
      step: 0,
      direction: 0,
      h: 45
    }
  },
  mounted() {
    this.start();
  },
  computed: {
    slideMargin() {
      return -1 * (this.step * this.h) + 'px'
    },
  },
  methods: {
    start() {
      this.interval = setInterval(this.next, 3000);
    },
    stop() {
      clearTimeout(this.interval);
      this.interval = null;
    },
    next() {
      if(this.step == 0) {
        this.direction = 0
      }else if(this.step+1 == this.items.length) {
        this.direction = 1
      }
      this.step += (this.direction == 0 ? 1 : -1)
    }
  }
}
</script>

<style scoped lang="scss">
  $h: 45px;
  $t: 1s;

  .textSlide {
    border-top: 2px solid #333;
    border-bottom: 1px solid #333;
    width: 100%;
    height: $h;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
  }
  ul {
    list-style: none;
    display: block;
    transition: .4s;
    li {
      height: $h;
      line-height: $h;
      padding: 0 10px;
      font-weight: bold;
      transition: $t;
    }
    li:hover {
      color: #000;
    }
  }
</style>
