<template>
  <div id="container">
    <div class="links">
      <h1>MEMBERSHIP</h1>
      <ul>
        <li>> Become a member</li>
        <li>> Give a membership</li>
        <li>> Member News</li>
        <li>> FAQ</li>
      </ul>
    </div>
    <div class="subs">
      <h1>OUR PRICING PLANS</h1>
      <img src="../assets/images/Subs.png" alt="" />
      <img src="../assets/images/Subs-0.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#container {
  background: linear-gradient(35deg, #1a356c, #0f2043);

  .links {
    width: 72%;
    margin: auto;
    text-align: left;
  }
}

h1 {
  padding: 40px;
}

ul {
  list-style: none;
  li {
    color: #e8af30;
    margin: 10px;
  }
}

img {
  margin-top: -150px;
  scale: 0.8;
}
</style>