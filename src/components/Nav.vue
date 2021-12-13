<template>
  <div>
    <div id="container">
      <div class="flex-items">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#container {
  position: relative;
  background: #0f2043;
}

.flex-items {
  border-bottom: 1px solid #707070;
  margin: auto;
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: space-between;
}

ul {
  padding: 10px 0;
  list-style: none;
  display: flex;
  li {
    padding: 20px;
  }
}

a {
  text-decoration: none;
  color: #f3f3f3;
  &.router-link-exact-active {
    color: #3498db;
  }
}
</style>