<template>
  <div class="header">
    <router-link class="bars" to="#"><font-awesome-icon icon="bars" class="bars-icon"/></router-link>
    <HeaderMenu :items="menuItem"/>
    <div class="right" >
      <TextButton text="로그인" bg="#222222"/>
      <TextButton text="회원가입" bg="#1565c0"/>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/Menu/HeaderMenu.vue'
import TextButton from '@/components/Button/TextButton.vue'

export default {
  name: 'Header',
  components: {
    HeaderMenu,
    TextButton
  },
  data() {
    return {
      menuItem: [
        {name: '최예나', text: '최예나'},
        {name: '안유진', text: '안유진'},
        {name: '조유리', text: '조유리'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .bars {
      .bars-icon {
        width: 30px;
        height: 30px;
        color: #000;
      }
    }
    
    .right {
      margin-left: auto;
      * {
        margin: 0 3px;
      }
    }
    
  }
</style>

