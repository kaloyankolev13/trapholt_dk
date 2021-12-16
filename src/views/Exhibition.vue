<template>
  <div id="container">
    <div class="main">
      <div class="img">
        <img src="../assets/exhibitions-img/1.jpg" alt="" />
      </div>
      <div class="info">
        <h1>Exhibiton Name</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#container {
  background: linear-gradient(#1a356c, #0f2043);
}
.main {
  width: 72%;
  margin: auto;
  height: 1000px;
  display: flex;
  justify-content: space-between;
  .img {
    width: 50%;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  .info {
    width: 50%;
    height: auto;
    h1 {
      font-size: 50px;
      color: #e8af30;
    }
  }
}
</style>