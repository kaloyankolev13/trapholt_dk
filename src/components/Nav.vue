<template>
  <div>
    <div id="container">
      <h1>hello</h1>
      <ul class="links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/exhibitions">Exhibitions</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: auto;
  border-bottom: 1px solid #ccc;
}
ul {
  padding: 10px 0;
  list-style: none;
  display: flex;
  li {
    padding: 20px;
  }
}
</style>