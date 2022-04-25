export default {
  data() {
    return {
      keys: { 37: 1, 38: 1, 39: 1, 40: 1 },
      wheelOpt: null,
      wheelEvent: null,
      scrollPercentage: 0,
      supportsPassive: false,
    };
  },
  methods: {
    disableScroll() {
      window.addEventListener("DOMMouseScroll", this.preventDefault, false); // older FF
      window.addEventListener(
        this.wheelEvent,
        this.preventDefault,
        this.wheelOpt
      ); // modern desktop
      window.addEventListener("touchmove", this.preventDefault, this.wheelOpt); // mobile
      window.addEventListener(
        "keydown",
        this.preventDefaultForScrollKeys,
        false
      );
    },
    enableScroll() {
      this.$store.commit("setScrolledAbout", true);
      window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
      window.removeEventListener(
        this.wheelEvent,
        this.preventDefault,
        this.wheelOpt
      );
      window.removeEventListener(
        "touchmove",
        this.preventDefault,
        this.wheelOpt
      );
      window.removeEventListener(
        "keydown",
        this.preventDefaultForScrollKeys,
        false
      );
    },
    preventDefault(e) {
      e.preventDefault();
    },
    preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        this.preventDefault(e);
        return false;
      }
    },
  },
  mounted() {
    var supportsPassive;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        })
      );
    } catch (e) {}
    this.wheelOpt = supportsPassive ? { passive: false } : false;
    this.wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    this.wheelOpt = supportsPassive ? { passive: false } : false;
    this.wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  },
};
