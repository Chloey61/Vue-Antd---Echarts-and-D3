export default{
  height () {
    // 窗口高度
    let clientHeight=0;
    if(document.body.clientHeight&&document.documentElement.clientHeight) {
      clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    } else {
      clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    }
    return clientHeight
  },
  bodyHeight () {
    let body = this.height() - 64 - 21 - 16 - 16 - 21 - 24 - 24
    return body
  },
  contentHeight () {
    let center = this.bodyHeight() - 24 - 24 - 34
    return center
  },
  echartW () {
    let echartW= $('.box').width()-20+'px'
    return echartW
  },
  echartH () {
    let echartH= $('.box').height()-34-20+'px'
    return echartH
  }


}
