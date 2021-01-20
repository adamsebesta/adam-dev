<template>
  <div @click="proceedContact" class="top-banner">
    <span>NOW BOOKING FEBRUARY 2021. APPLY HERE!</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    proceedContact() {
      document.querySelector("#contact").click();
    }
  }
};
</script>

<style lang="scss" scoped>
.top-banner {
  height: 3%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $purple;
  color: $lightBlue;
  position: fixed;
  z-index: 10000;
  span {
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
  }
}

@media only screen and (max-width: 1030px) {
  .top-banner {
    span {
      font-weight: 700;
      font-size: 10px;
    }
  }
}
</style>
