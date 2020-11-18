<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang='scss'>
  /* @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Cormorant+SC:wght@400;600;700&display=swap'); */

html {
  font-family:
    'Cormorant Garamond',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
  color:#35495e;
  height: 10%;
  text-align: left;
  font-size: 11px;
  letter-spacing: 1px;
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #013011;
  color: #013011;
  text-decoration: none;
  padding: 10px 30px;
}

.main-btn {
  display: inline-block !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  letter-spacing: 0.15em !important;
  border: 1px solid #004b19 !important;
  color: #004b19 !important;
  font-family: 'arial' !important;
  text-decoration: none !important;
  padding: 10px 30px;
  margin-left: 15px !important;
  font-weight: 400 !important;
  font-size: 14px;
  background-color: transparent !important;
  /* box-shadow: -1px 1px 2px 1px #01301177; */
  &:hover {
    color: #fff !important;
    background-color: #004b19 !important;
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
  color: #fff;
  background-color: #3b8070;
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
</style>
