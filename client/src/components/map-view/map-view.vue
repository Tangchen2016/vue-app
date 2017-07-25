<template>
  <div>
    <div id="allmap"></div>

    <div id="result">
      <button onclick="Editing('enable')">开启线、面编辑功能</button>
      <button onclick="Editing('disable')">关闭线、面编辑功能</button>
      <br>
      <button onclick="draw(BMAP_DRAWING_POLYGON)" >画多边形</button>
      <button onclick="draw(BMAP_DRAWING_RECTANGLE)" >画矩形</button>
      <button onclick="draw(BMAP_DRAWING_POLYLINE)" >画线</button>
    </div>
  </div>
</template>
<script>
  import {MP} from '../../service/map'
  export default {
    mounted() {
      var map = new BMap.Map('allmap')
      var poi = new BMap.Point(116.331398,39.897445);
      map.centerAndZoom(poi, 16);
      map.enableScrollWheelZoom();

      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
        }
      },{enableHighAccuracy: true})

      var overlays = [];
      var overlaycomplete = function(e){
        overlays.push(e.overlay);
      };
      var styleOptions = {
        strokeColor:"red",    //边线颜色。
        fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
      }

      var drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        //enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
          anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
          offset: new BMap.Size(5, 5), //偏离值
        },
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
      });

      //添加鼠标绘制工具监听事件，用于获取绘制结果
      drawingManager.addEventListener('overlaycomplete', overlaycomplete);

      map.addEventListener("rightclick",function(e){
        alert(e.point.lng + "," + e.point.lat)
      });
      window.draw = (type) => {
        drawingManager.open();
        drawingManager.setDrawingMode(type);
      }
      window.showPolygon = (btn) => {
        var polygon = new BMap.Polygon([
          new BMap.Point(113.941853,22.530777),
          new BMap.Point(113.940487,22.527789),
          new BMap.Point(113.94788,22.527597),
          new BMap.Point(113.947925,22.530618)
        ], styleOptions);  //创建多边形
        map.addOverlay(polygon);   //增加多边形
        // overlays.push(polygon); //是否把该图像加入到编辑和删除行列
        btn.setAttribute('disabled','false');
      }
      window.Editing = (state) => {
        for(var i = 0; i < overlays.length; i++){
          state=='enable'?overlays[i].enableEditing():overlays[i].disableEditing();
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  html, body, #allmap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
  }
  #result {
    position: fixed;
    top: 50px;
    left: 20px;
    border: 3px solid;
    padding: 10px 20px;
  }
</style>
