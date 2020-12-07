<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang='scss'>
  /* @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Cormorant+SC:wght@400;600;700&display=swap'); */

html {
  font-family: $bodyText;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  // background-image: url('~static/test-background.png');
  // background-repeat: no-repeat;
  // background-size: cover;
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  // background: #141E30;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.nuxt-link-exact-active {
    font-weight: bold;
}

.nav-links {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 60px;
  left: 10px;
  a {
    z-index: 10;
  color:#004b19;
  height: 10%;
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  margin-top: 5px;
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

// .button--green {
//   display: inline-block;
//   border-radius: 4px;
//   border: 1px solid #013011;
//   color: #013011;
//   text-decoration: none;
//   padding: 10px 30px;
// }

.main-btn {
  display: inline-block !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  letter-spacing: 0.15em !important;
  border: 2px solid $purple !important;
  color: $purple !important;
  font-family: 'arial' !important;
  text-decoration: none !important;
  padding: 10px 20px;
  margin: 5px !important;
  font-weight: 600 !important;
  font-size: 14px;
  background-color: transparent !important;
  /* box-shadow: -1px 1px 2px 1px #01301177; */
  &:hover {
    color: $purple !important;
    background-color: $lightBlue !important;
  }
}

.container-main {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  z-index:1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button--green:hover {
  
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@media only screen and (max-width: 420px) {
  .nav-links {
    a {
      font-size: 11px !important;
    }
  }
  .main-btn {
    &:hover {
      color: #004b19  !important;
      background-color: #FFF !important;
    }
     &:active {
      color: #FFF  !important;
      background-color: #004b19 !important;
    }
  }
}


</style>
