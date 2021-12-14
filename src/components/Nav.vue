<template>
  <div>
    <div id="container">
      <div class="flex-items">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="72"
          viewBox="0 0 336 72"
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-209 -82)">
            <rect
              id="Rectangle_2"
              data-name="Rectangle 2"
              width="232"
              height="72"
              transform="translate(313 82)"
              fill="#e8af30"
            />
            <text
              id="TRAPHOLT"
              transform="translate(209 89.664)"
              fill="#fff"
              font-size="50"
              font-family="MicrosoftSansSerif, Microsoft Sans Serif"
            >
              <tspan x="0" y="46">TRA</tspan>
              <tspan y="46" fill="#0f2043">PHOLT</tspan>
            </text>
          </g>
        </svg>

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