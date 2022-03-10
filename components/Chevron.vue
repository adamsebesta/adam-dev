<template>
  <svg
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="{
      transform: transform,
    }"
  >
    <path
      d="M12.072 7.16606C11.8664 7.35049 11.5332 7.35049 11.3277 7.16606L5.57152 2.00062C5.366 1.81619 5.366 1.51717 5.57152 1.33274L6.49948 0.50002L12.6278 5.9994C12.8333 6.18383 12.8333 6.48285 12.6278 6.66728L12.072 7.16606Z"
      :fill="color"
    />
    <path
      d="M0.372132 6.66731C0.166609 6.48288 0.166609 6.18386 0.372132 5.99943L6.50044 0.500057L7.4284 1.33278C7.63392 1.51721 7.63392 1.81623 7.4284 2.00066L1.67222 7.1661C1.4667 7.35053 1.13348 7.35053 0.927957 7.1661L0.372132 6.66731Z"
      :fill="color"
    />
  </svg>
</template>
<script>
export default {
  props: { transform: String, color: String },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
