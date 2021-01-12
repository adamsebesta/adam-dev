<template>
  <div class="wrapper">
    <a
      href="https://www.linkedin.com/company/69564956/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa fa-linkedin" aria-hidden="true"></i>
    </a>
    <a
      href="https://github.com/adamsebesta"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa fa-github-alt" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 5%;
  right: 2%;
  display: inline-flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.wrapper i {
  padding: 0px 10px;
  font-size: 20px;
}

.wrapper a:nth-child(1) {
  color: $lightBlue;
  cursor: pointer;
  text-shadow: 0px 7px 10px rgba(255, 255, 255, 0.3);
  transition: all ease-in-out 150ms;
}

.wrapper a:nth-child(1):hover {
  margin-top: -10px;
  text-shadow: 0px 16px 10px rgba(255, 255, 255, 0.3);
  transform: translate(0, -8);
}

.wrapper a:nth-child(2) {
  color: $lightBlue;
  cursor: pointer;
  text-shadow: 0px 7px 10px rgba(255, 255, 255, 0.3);
  transition: all ease-in-out 150ms;
}

.wrapper a:nth-child(2):hover {
  margin-top: -10px;
  text-shadow: 0px 16px 10px rgba(255, 255, 255, 0.3);
  transform: translate(0, -8);
}

@media only screen and (max-width: 1630px) {
  .wrapper i {
    padding: 0px 10px;
    font-size: 16px;
  }
}
</style>
