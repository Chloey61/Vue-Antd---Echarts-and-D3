<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">
        <span>(๑•ᴗ•๑)</span>
      </div>
      <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['2']" :style="{ lineHeight: '64px' }" @click="routerLink">
        <a-menu-item key="Echarts">Echarts</a-menu-item>
        <a-menu-item key="D3">D3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <router-view/>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }" id="food">
      Ant Design and Echarts and D3 ©2018 Created by 61~(๑•ᴗ•๑)
    </a-layout-footer>
  </a-layout>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      current: ['mail'],
    }
  },
  created () {
    document.title = this.$route.meta.title
  },
  mounted () {
  },
  methods: {
    routerLink (item) {
      this.$router.push(item.key)
    }
  
  }
}
</script>

<style scoped>
  #components-layout-demo-fixed .logo {
    width: 80px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 24px 16px 0;
    color: white;
    line-height: 31px;
    text-align: center;
    float: left;
  }
  #components-layout-demo-fixed{
    height: 100%;
  }
</style>
