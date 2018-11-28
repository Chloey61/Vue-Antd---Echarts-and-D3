<template>
  <div>
    <a-breadcrumb :style="{ margin: '16px 0' }">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>Echarts</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ background: '#fff', padding: '24px', height: bodyH+'px' }">
      <a-row>
        <a-col :span="4">
          <div class="title">图例类型</div>
          <a-card :style="{height:centerH+'px'}">
            <ul class="rightList">
              <li v-for="item in list"  :class="{active:item.key==isActive}" @click="checkItem(item)">
                <span>
                  <a-icon :type="item.icon"/>
                  {{item.text}}
                </span>
                <span>{{item.english}}</span>
              </li>
            </ul>
          </a-card>
        </a-col>
        <a-col :span="19" :push="1" id="leftBox">
          <div class="title"><span>操作台</span><span><a-icon type="delete" @click="closeBox"/></span></div>
          <a-card :style="{height:centerH+'px',overflow:'hiden',position:'relative'}" id="leftCard">
            <div class="box1 clearfix"  v-show="boxBol">
              <div class="tit" @mousemove="moveDiv(isActive,iconType)">
                <span><a-icon type="left" /></span>
                <span><a-icon :type="iconType" @click="minBox(isActive,iconType)"/></span>
              </div>
              <div class="con">
                <div-line v-show="isActive=='1'" id="divLine" :width="echartW" :height="echartH"></div-line>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import moveDiv from '../assets/demo'
  import list from '../assets/echarts/listEcharts'
  import divLine from './echarts/Line'
  import echarts from 'echarts'
	export default {
    name: "test",
    components: {
      divLine
    },
    data() {
      return {
        bodyH: '',
        boxBol: false,
        centerH: '',
        echartW: '',
        echartH: '',
        isActive: '',
        number: /^[1-9]+[0-9]*]*$/,
        list: [],
        iconType: 'minus',
        chart:null,
        myChart: {}
      }
    },
    mounted() {
      this.dynHeight()
      window.onresize = () => {
        this.dynHeight()
      }
      // 菜单
      this.list = list
    },
    updated () {
      this.dynHeight()
      window.onresize = () => {
        this.dynHeight()
      }
    },
    watch:{
    
    },
    methods: {
		  dynHeight () {
        this.bodyH = this.mainJs.bodyHeight()
        this.centerH = this.mainJs.contentHeight()
        this.echartH = this.mainJs.echartH()
        this.echartW = this.mainJs.echartW()
        console.log(this.echartH)
        console.log(this.echartW)
      },
      // 选择打开窗口
      checkItem(e){
		    this.isActive=parseInt(e.key)
        this.boxBol=true
        $('.box'+e.key).addClass('box')
        console.log(e)
        console.log(this.isActive)
      },
      // 关闭窗口
      closeBox(){
        this.boxBol=false
      },
      minBox(e,bol){
        if (bol=='down-square-o') {
          this.iconType='minus'
          $('.box'+e).css({'height':'200px'})
        } else {
          this.iconType='down-square-o'
          $('.box'+e).css({'height':'30px','top':'0'})
        }
      },
      moveDiv(e){
        $(document).ready(function() {
          $('.box'+e).bg_move({
            move:'.tit',
            size : 6
          });
        });
      },
    }
	}
</script>

<style scoped>
.rightList li{
  list-style:none;
  margin: 10px 0;
  display: flex;
  cursor: default;
  padding: 10px ;
  font-size: 14px;
  transition: .7s;
}
.rightList li:hover,.active{
  background-color: #001529;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.rightList li>span{
  flex: 1;
}
.rightList li>span>i{
  margin-right: 7px;
}
.rightList {
  margin: 0;
  padding: 0;
}
.box{
  border: 1px solid #ddd;
  position: absolute;
  min-width:200px;
  min-height:30px;
  height: 300px;
  width: 300px;
  border-top: none;
  border-radius: 5px;
  z-index: 1;
  transition: .1s;
  overflow: hidden;
}
.ant-card-body>div .tit{
  height:30px; min-width:200px;
  width: 100%;
  background:#ddd;
  line-height: 30px;
  display: flex;
  color:#001529;
  padding: 0 10px;
  border-radius: 5px 5px 0 0;
}
.ant-card-body>div .tit>span{
  text-align: left;
  display: inline-block;
  flex: 1;
}
.ant-card-body>div .tit>span:nth-child(2){
  text-align: right;
}
.ant-card-body>div .tit i{
  z-index: 2;
}
.ant-card-body>div .con{
  padding: 10px;
}
.bg_change_size { background-color: black;color: black }
.title{
  display: flex;
  text-align: left;
}
.title span{
  flex: 1;
}
.title span:nth-child(2){
  text-align: right;
}
</style>
