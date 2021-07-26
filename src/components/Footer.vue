<template>
  <footer class="footer">
    <div class="container">
      <div>
        <p>상호명: News Na!</p>
        <p>대표자: 나영채, CEO</p>
        <p>주소: 나영채 아일랜드</p>
        <p>전화번호: +82 010-xxxx-xxxx</p>
        <strong>Copyright by lunaB. All Rights Reserved</strong>
      </div>
      <div class="right">
        <ul>
          <li><IconButton size="30" prefix="fab" name="github"/></li>
          <li><IconButton size="30" prefix="fab" name="facebook"/></li>
          <li><IconButton size="30" prefix="fab" name="instagram"/></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import IconButton from '@/components/Button/IconButton.vue'

export default {
  name: 'Footer',
  props: {
    text: String
  },
  components: {
    IconButton
  },
  data() {
    return {
      menuItem: [
        { text: '어쩌고'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  $h: 110px;
  footer {
    width: 100%;
    height: 180px;
    background-color: #DDD;
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      &>div {
        height: $h;
      }
      .right {
        margin-left: auto;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 200px;
        ul {
          display: inline-block;
          list-style: none;
          li {
            float: left;
            margin: 0 8px;
          }
        }
      }
    }
  }
</style>
