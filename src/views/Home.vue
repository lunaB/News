<template>
  <div class="home">
    <header class="container">
      <h1 class="title">영채일보</h1>
    </header>
    <div class="container">
      <TextSlide :items="slideItem"/>
    </div>
    <section class="container">
      <section class="mainSection">
        <HeadLine :img="headLineData.img" :title="headLineData.title" :subtitle="headLineData.subtitle"/>
      </section>
      <section class="subSection">
        asdf
      </section>
    </section>
  </div>
</template>

<script>
import TextSlide from '@/components/Slide/TextSlide.vue'
import HeadLine from '@/components/HeadLine/HeadLine.vue'

export default {
  name: 'Home',
  components: {
    TextSlide,
    HeadLine
  },
  data() {
    return {
      slideItem: [
        { articleId: 0, title: "최예나 너무 예쁘고 상큼해!!", state: '일반' },
        { articleId: 1, title: "최예나 너무 예쁘고 상큼해!!", state: '속보' },
        { articleId: 2, title: "최예나 너무 예쁘고 상큼해!!", state: '단독' },
      ],
      headLineData: {
        img: 'https://cdn.pixabay.com/photo/2020/11/07/10/24/desert-5720527_1280.jpg',
        title: '나영채 "방 너무더워, 마치 사막과 같을 것."',
        subtitle: '[단독 인터뷰] 논산캠프 나영채, 당시 너무 더워 정신이 없었다. 방에 선풍기 투입.'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    header {
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
      .title {
        font-size: 50px;
        color: #000;
        font-weight: 300;
      }
    }
    .container {
      display: flex;
      align-items: center;
      padding: 10px 0;
      box-sizing: border-box;
      .mainSection {
        width: 900px;
        padding-right: 10px;
      }
      .subSection {
        width: calc(100% - 900px);
        padding-left: 10px;
      }
    }
  }
</style>
