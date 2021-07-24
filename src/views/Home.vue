<template>
  <div class="home">
    <header class="container">
      <h1 class="title">영채일보</h1>
    </header>
    <section class="container">
      <TextSlide :items="slideItem"/>
    </section>
  </div>
</template>

<script>
import TextSlide from '@/components/Slide/TextSlide.vue'

export default {
  name: 'Home',
  components: {
    TextSlide
  },
  data() {
    return {
      slideItem: [
        { articleId: 0, title: "최예나 너무 예쁘고 상큼해!!", state: '일반' },
        { articleId: 1, title: "최예나 너무 예쁘고 상큼해!!", state: '속보' },
        { articleId: 2, title: "최예나 너무 예쁘고 상큼해!!", state: '단독' },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    .container {
      min-width: 1080px;
      max-width: 1200px;
      margin: 0 auto;
    }
    header {
      height: 170px;
      display: flex;
      align-items: center;
      justify-content: center;
      .title {
        font-size: 50px;
        color: #000;
        font-weight: 300;
      }
    }
    section {
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
