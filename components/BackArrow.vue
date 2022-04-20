<template>
  <a
    :style="{ '--color': color, '--altColor': altColor }"
    class="link"
    @click="$router.back()"
  >
    <span class="link__arrow">
      <span></span>
      <span></span>
    </span>
    <span class="link__line"></span>
    <span class="link__text">Back</span>
  </a>
</template>
<script>
export default {
  props: { color: String, altColor: String },
};
</script>
<style lang="scss">
.link {
  $self: &;
  display: inline-flex;
  align-items: center;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  &__arrow {
    display: inline-flex;

    span {
      position: relative;
      width: 12px;
      height: 1px;
      border-radius: 1px;
      overflow: hidden;
      background: var(--color);
      z-index: 2;

      &:nth-child(1) {
        transform-origin: left bottom;
        transform: rotate(45deg) translate3d(7px, -8px, 0);
      }

      &:nth-child(2) {
        transform-origin: left bottom;
        transform: rotate(-45deg);
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 0;
        height: 1px;
        z-index: 2;
        background: $mainGold;
      }
    }
  }

  &__line {
    position: relative;
    margin-left: -12px;
    margin-right: 30px;
    width: 60px;
    height: 1px;
    background: var(--color);
    overflow: hidden;
    z-index: 1;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 80px;
      width: 30px;
      height: 1px;
      background: $mainGold;
    }
  }

  &__text {
    color: var(--color);
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
  }

  &:hover {
    #{$self} {
      &__line {
        &:after {
          animation: animation-line 1s forwards;
        }
      }

      &__arrow {
        span {
          &:after {
            animation: animation-arrow 1s forwards;
            animation-delay: 0.75s;
          }
        }
      }
    }
  }
}

@keyframes animation-line {
  0% {
    left: 80px;
  }

  100% {
    left: 0;
  }
}

@keyframes animation-arrow {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
