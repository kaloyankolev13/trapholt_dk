<template>
  <div id="container">
    <Slider />
    <div class="content">
      <div class="working-hours">
        <div class="hours-text">
          <svg
            id="Group_3"
            data-name="Group 3"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="25"
            height="25"
            viewBox="0 0 25 25"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_9"
                  data-name="Rectangle 9"
                  width="25"
                  height="25"
                  fill="#e8af30"
                />
              </clipPath>
            </defs>
            <g id="Group_2" data-name="Group 2" clip-path="url(#clip-path)">
              <path
                id="Path_1"
                data-name="Path 1"
                d="M12.414,0A12.426,12.426,0,1,0,24.853,12.426,12.42,12.42,0,0,0,12.414,0m.012,22.368a9.941,9.941,0,1,1,9.941-9.941,9.938,9.938,0,0,1-9.941,9.941m.621-16.154H11.184v7.456l6.524,3.914.932-1.528-5.592-3.318Z"
                fill="#e8af30"
              />
            </g>
          </svg>
          <h2>Museum Hours</h2>
        </div>
        <p>Open today from 10.00 - 17.00.</p>
      </div>
      <div class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34.66"
          height="38.511"
          viewBox="0 0 34.66 38.511"
        >
          <path
            id="Path_2"
            data-name="Path 2"
            d="M17.33,30.809h9.628V21.181H17.33ZM3.851,13.479H30.809V34.66H3.851ZM25.032,0V3.851H9.63V0H5.777V3.851H.019L0,38.511H34.66V3.851H28.886V0Z"
            fill="#fff"
          />
        </svg>
        <p>Plan your visit</p>
      </div>
    </div>
    <div class="block">
      <div class="left-block">
        <h1>Your next school trip</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          dolores quae ducimus neque perferendis consequatur hic. Aperiam harum
          dolor omnis aut quaerat ut tempore, beatae magni deserunt blanditiis
          corrupti quis, reprehenderit qui distinctio, ipsum necessitatibus
          totam? Voluptates veniam quam architecto.
        </p>
        <p class="orange-text">> School trip at trapholt</p>
      </div>
      <div class="right-block">
        <p>Æblehaven 23</p>
        <p>Kolding 6000</p>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
#container {
  background: linear-gradient(#1a356c, #0f2043);
}
.orange-text {
  color: #e8af30;
}
.working-hours {
  margin-top: -100px;
  justify-content: flex-start;
  margin-left: 270px;
  text-align: left;
}
.hours-text {
  display: flex;
  flex-direction: row;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 85%;
}
.block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 500px;

  .left-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    width: 60%;
    background: #f3f3f3;
    color: #333;
    height: 100%;
    padding: 50px;
    p {
      width: 40%;
      margin-top: 40px;
    }
  }
  .right-block {
    width: 40%;
    background: url("../assets/images/home-2.png") no-repeat center center;
    background-size: 1300px 700px;
    height: 100%;
  }
}

.btn {
  display: flex;
  justify-content: space-evenly;
  margin-top: -100px;
  background: #e8af30;
  padding: 20px;
  width: 300px;
  align-self: center;
  font-size: 30px;
}
</style>