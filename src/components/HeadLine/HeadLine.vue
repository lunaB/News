<template>
  <article class="headLine">
    <img class="headImage" src="https://cdn.pixabay.com/photo/2014/03/05/21/12/desert-279862_1280.jpg" alt="">
    <div class="badge">
      <p>폭염 조심하세요!</p>
    </div>
    <h1 class="title">{{title}}</h1>
    <h2 class="subtitle">{{subtitle}}</h2>
  </article>
</template>

<script>
export default {
  name: 'HeadLine',
  components: {

  },
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
      defalut: 'Title'
    },
    subtitle: {
      type: String,
      defalut: 'subtitle'
    },
    articleId: {
      type: Number,
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
  article {
    width: 100%;
    height: 350px;
    box-sizing: border-box;
    position: relative;
    .headImage {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
    .badge {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 225px;
      left: 50px;
      height: 40px;
      padding: 8px;
      box-sizing: border-box;
      background-color: #111;
      color: #FFF;
      font-size: 20px;
      font-weight: 700;
      border: 2px solid #FFF;
    }
    .title {
      position: absolute;
      left: 25px;
      bottom: 32px;
      font-size: 38px;
      font-weight: 700;
      color: #000;
    }
    .subtitle {
      position: absolute;
      left: 25px;
      bottom: 15px;
      font-size: 20px;
      font-weight: 400;
      color: #333;
    }
  }
</style>

