<template>
  <!-- 相机父类视图必须撑满整个视图 -->
  <div style="width: 100vw; height: 100vh; margin: 0 auto; overflow: hidden">
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <!-- position 0 0 0  中间的0表示距离地面的高度  -->
      <a-box
        material="color: red;"
        scale="5 5 5"
        gps-entity-place="latitude: 44.504493; longitude: 11.301134;"
        position="0 0 0"
      ></a-box>

      <!-- scale="15 15 15" 第一个15表示宽度  第二个15表示高度  第三个15表示长度 -->
      <a-box
        material="color: yellow;"
        scale="15 15 15"
        gps-entity-place="latitude: 44.506477; longitude: 11.301524;"
      ></a-box>

      <!-- 如果想要实地测试 必须设定gps-entity-place的经纬度为你所在地的经纬度 并且a-camera标签 用最后注释的那个 可以根据gps获取的真实相机位置 -->
      <a-box
        material="color: green;"
        scale="15 15 15"
        gps-entity-place="latitude: 44.500013; longitude: 11.277351;"
      ></a-box>

      <!-- simulate 是模拟相机位置， -->
      <a-camera
        rotation-reader
        gps-camera="simulateLatitude: 44.504348; simulateLongitude: 11.301027;"
      >
      </a-camera>

      <!-- 没有填写simulate就代表arjs会自动调用gps 获取当前地理位置 上面的a-camera 用于模拟，下面a-camera是真实位置 两者只能用一个 -->
      <!-- <a-camera
        gps-camera="gpsMinDistance: 5;maxDistance:20"
        look-controls-enabled="false"
        arjs-look-controls="smoothingFactor: 0.1"
        rotation-reader
      >
      </a-camera> -->
    </a-scene>
  </div>
  <!-- 注意：在本地运行时候会产生找不到 dom标签的错误，所以必须要通过搭建服务器发布工程，然后在手机上运行 支持Safari Chrome 微信-->
</template>

<script>

export default {
  name: "Home",
};
</script>
