export default {
  data() {
    return {
      windowWidth: 1200,
      windowHeight: 1200,
      mobile: null
    }
  },
  methods: {
    setupWindow() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    resizeWindow() {
      window.addEventListener('resize', () => {
        setTimeout(() => {
          console.log('test')
          this.setupWindow();
          this.isMobile();
        }, 250)
      })
    },
    windowWrapper() {
      this.setupWindow();
      this.resizeWindow();
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && this.windowWidth < 1025) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeWindow);
  },
  mounted() {
    this.windowWrapper();
    this.isMobile();
  }

};
