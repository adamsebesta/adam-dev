<template>
  <div class="footer-main">
    <div class="copyright">
      <span class="copyright-info">© 2021 Design & Build by Adam Sebesta.</span>
    </div>
    <img class="footer-logo" src="logo.png" alt="" />
    <div class="social-wrapper">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-main {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  // bottom: 0;
  height: 100px;
  width: 100%;
  z-index: 1;
  padding: 0px 5%;
  // margin-bottom: 10px;
  // box-shadow: 0 10px 30px -15px #010310;
  // transform: translateY(100%);
}

.footer-logo {
  width: 5%;
  margin-right: 10%;
}

.copyright {
  .copyright-info {
    font-size: 12px;
    color: black;
  }
}
.social-wrapper {
  // position: absolute;
  // right: 2%;
  display: inline-flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0.4;
}

.social-wrapper i {
  padding: 0px 10px;
  font-size: 20px;
  color: black;
}

.social-wrapper a:nth-child(1) {
  color: $lightBlue;
  cursor: pointer;

  transition: all ease-in-out 150ms;
}

.social-wrapper a:nth-child(1):hover {
  margin-top: -10px;
  transform: translate(0, -8);
}

.social-wrapper a:nth-child(2) {
  color: $lightBlue;
  cursor: pointer;

  transition: all ease-in-out 150ms;
}

.social-wrapper a:nth-child(2):hover {
  margin-top: -10px;
  transform: translate(0, -8);
}

@media only screen and (max-width: 1030px) {
  .copyright {
    position: absolute;
    left: 2%;
    .copyright-info {
      font-size: 8px;
      color: $lightBlue;
    }
  }
  .social-wrapper i {
    padding: 0px 10px;
    font-size: 8px;
    opacity: 0.8;
  }
  .social-wrapper a:nth-child(1),
  .social-wrapper a:nth-child(1):hover {
    margin-top: unset;
    text-shadow: unset;
    transform: unset;
  }
  .social-wrapper a:nth-child(2),
  .social-wrapper a:nth-child(2):hover {
    margin-top: unset;
    text-shadow: unset;
    transform: unset;
  }
}
@media only screen and (max-width: 450px) {
  .footer-main {
    display: none;
  }
}
</style>
