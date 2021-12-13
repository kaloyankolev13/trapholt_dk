<template>
  <div id="container">
    <div class="slider">
      <div class="slider-text">
        <h1>Hello</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: auto;
  background: linear-gradient(#1a356c, #0f2043);
  margin: auto;
  text-align: center;
}
.slider {
  background: url(../assets/images/home-main.png) no-repeat center center;
  margin: auto;
  height: 1200px;
}
.slider-text {
  text-align: left;
  width: 1500px;
  margin: auto;
}
</style>