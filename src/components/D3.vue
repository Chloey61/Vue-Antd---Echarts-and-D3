<template>
	<div>
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>D3</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', padding: '24px', height: centerH+'px' }">
      <div>
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "d3",
    data () {
      return {
        centerH: '',
      }
    },
    mounted(){
      this.centerH = this.mainJs.bodyHeight()
      window.onresize = () => {
        this.centerH = this.mainJs.bodyHeight()
      }
    },
	}
</script>

<style scoped>

</style>
