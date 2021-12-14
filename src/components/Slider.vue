<template>
  <div id="container">
    <div class="slider">
      <div class="slider-dots">
        <ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
          >
            <g
              id="Group_14"
              data-name="Group 14"
              transform="translate(-192 -380)"
            >
              <path
                id="Path_3"
                data-name="Path 3"
                d="M0,15.62H4.463V0H0Zm8.926,0h4.463V0H8.926Z"
                transform="translate(216 403.525)"
                fill="#fff"
              />
              <g
                id="Ellipse_1"
                data-name="Ellipse 1"
                transform="translate(192 380)"
                fill="none"
                stroke="#fff"
                stroke-width="1"
              >
                <circle cx="31" cy="31" r="31" stroke="none" />
                <circle cx="31" cy="31" r="30.5" fill="none" />
              </g>
            </g>
          </svg>

          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
        </ul>
      </div>
      <div class="slider-text">
        <p class="slider-text-item">Exhibit / VERNER PANTON</p>
        <h1 class="slider-text-item">COLORING A NEW WEORLD</h1>
        <p class="link slider-text-item">Learn more</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
li {
  font-size: 40px;
  list-style: none;
}
#container {
  height: auto;
  background: linear-gradient(#1a356c, #0f2043);
  margin: auto;
  text-align: center;
}
.slider {
  background: url(../assets/images/home-main.png) no-repeat center center;
  margin: auto;
  height: 800px;
  display: flex;
  align-items: center;
}
.slider-text {
  text-align: left;
  width: 75%;
  margin: auto;
  .slider-text-item {
    margin: 100px 0;
    padding: 0;
  }
}
.link {
  color: #e8af30;
  border-bottom: 1px solid #e8af30;
  width: 85px;
  text-align: center;
}
.slider-dots {
  position: relative;
  left: 150px;
}
</style>