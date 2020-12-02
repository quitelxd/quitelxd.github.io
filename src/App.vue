<template>
  <div id="app">
    <router-view/>
    <video class="bgVideo" autoplay loop muted>
      <source src="./assets/img/mainBg.mp4" type="video/mp4"/>
    </video>
  </div>
</template>
<style scoped lang="less">
  #app {
    height: 100%;
    .bgVideo {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      height: auto;
      width: auto;
      /*加滤镜*/
      /*filter: blur(5px); //背景模糊设置*/
      /*-webkit-filter: grayscale(100%);*/
      /*filter:grayscale(10%); //背景灰度设置*/
      z-index: -11;
      source {
        min-width: 100%;
        min-height: 100%;
        height: auto;
        width: auto;
      }
    }
  }

</style>