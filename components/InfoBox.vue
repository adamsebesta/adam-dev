<template>
  <div @click="hideInfoBox" class="info-box">
    <div class="info-box-block"></div>
    <div class="info-box-text">
      <span>{{ text }}</span>
      <p>{{ mobile ? "tap" : "click" + "to dismiss" }}</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  data() {
    return {};
  },
  props: {
    text: String
  },
  methods: {
    showInfoBox() {
      anime({
        targets: [".info-box"],
        translateX: [
          {
            duration: 1000,
            value: ["-100%", 0]
          }
        ],
        easing: "easeOutExpo",
        delay: 1000
      });
    },
    hideInfoBox() {
      anime({
        targets: [".info-box"],
        translateX: [
          {
            duration: 400,
            value: ["-100%"]
          }
        ],
        easing: "easeInExpo"
      });
    }
  },
  mounted() {
    this.showInfoBox();
    setTimeout(() => {
      this.hideInfoBox();
    }, 60000);
  }
};
</script>

<style lang="scss" scoped>
.info-box {
  // padding: 1rem;
  width: 175px;
  height: 75px;

  color: $darkerBlue;
  background-color: rgb(13 16 39 / 99%);
  position: absolute;
  top: 13%;
  left: 0;
  text-align: left;
  line-height: 15px;
  display: flex;
  // flex-direction: column;
  justify-content: space-around;
  transform: translateX(-100%);
  border-radius: 0px 5px 5px 0px;
  z-index: 100000;
  cursor: pointer;
  .info-box-block {
    background-color: rgba($color: $purple, $alpha: 1);
    height: 100%;
    width: 15%;
    border-radius: 0px 5px 5px 0px;
  }
  .info-box-text {
    padding: 10px;
    position: relative;
    border-radius: 0px 5px 5px 0px;
    span {
      font-weight: 700;
      font-size: 12px;
      word-spacing: 1px;
    }
    p {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-weight: 600;
      font-size: 10px;
      text-align: right;
      // padding-top: 5px;
    }
  }
}

@media only screen and (max-width: 1030px) {
  .info-box {
    // padding: 1rem;
    width: 150px;
    height: 50px;
    color: $darkerBlue;
    background-color: rgb(13 16 39 / 99%);
    position: absolute;
    top: 15%;
    left: 0;
    text-align: left;
    line-height: 15px;
    display: flex;
    // flex-direction: column;
    justify-content: space-around;
    transform: translateX(-100%);
    border-radius: 0px 5px 5px 0px;
    z-index: 100000;
    cursor: pointer;
    .info-box-block {
      background-color: rgba($color: $purple, $alpha: 1);
      height: 100%;
      width: 10%;
      border-radius: 0px 5px 5px 0px;
      margin-left: -10px;
    }
    .info-box-text {
      padding: 10px;
      position: relative;
      border-radius: 0px 5px 5px 0px;
      span {
        font-weight: 700;
        font-size: 10px;
        word-spacing: 1px;
      }
      p {
        position: absolute;
        bottom: 5px;
        right: 5px;
        font-weight: 600;
        font-size: 8px;
        text-align: right;
        // padding-top: 5px;
      }
    }
  }
}
</style>
