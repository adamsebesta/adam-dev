<template tabIndex="0">
  <div id="portfolio" class="page portfolio scroll">
    <div class="container-main">
      <div class="left-container">
        <p class="fixed-title">Selected Works</p>
      </div>
      <div class="portfolio-background">
        <div class="portfolio-wrapper">
          <div v-for="(v, k) in portfolioItems">
            <nuxt-link class="portfolio-item-wrapper" :to="v.to" :key="k">
              <div
                :class="'portfolio-item ' + v.length"
                :style="{ backgroundImage: `url(${v.img})` }"
              ></div>
              <div class="portfolio-item-hover">
                <p class="portfolio-item-title">{{ v.title }}</p>
                <div class="center-con">
                  <div class="round">
                    <div id="cta">
                      <span class="arrow primera next"></span>
                      <span class="arrow segunda next"></span>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- <div class="background-center" :style="{ width: '70%' }"></div> -->
    </div>
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import staticData from "~/config/portfolio";
export default {
  components: { Nav },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        { hid: "og:title", property: "og:title", content: this.title },
        { hid: "og:image", property: "og:image", content: this.image },
      ],
    };
  },
  data() {
    return {
      title: "Adam Sebesta Development | Portfolio",
      description: "My Recent Work",
      image: "~/static/meta.png",
    };
  },
  computed: {
    portfolioItems() {
      return staticData;
    },
  },
  methods: {},
  created() {},

  mounted() {},
};
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

img {
  -moz-user-select: none; /* These user-select properties are inheritable, used to prevent text selection */
  -webkit-user-select: none;
  -ms-user-select: none; /* From IE10 only */
  user-select: none; /* Not valid CSS yet, as of July 2012 */

  -webkit-user-drag: none; /* Prevents dragging of images/divs etc */
  user-drag: none;
}
.page {
  .container-main {
    .left-container {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      padding-left: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
      .fixed-title {
      }
    }
    .portfolio-background {
      width: 80%;
      max-width: 1200px;
      height: calc(100% - 100px);
      display: flex;
      z-index: 1;
      padding: 0px 5rem 0rem 10rem;
      overflow: hidden;
      align-items: center;
      .portfolio-wrapper {
        overflow: auto;
        width: 100%;
        // display: grid;
        columns: 3 250px;
        column-gap: 1rem;
        // display: flex;
        .portfolio-item-wrapper {
          height: 100%;
          width: 100%;
          max-width: 300px;

          display: flex;
          position: relative;
          &:hover {
            .portfolio-item {
              filter: blur(1px);
              webkit-filter: blur(1px);
            }
            .portfolio-item-hover {
              opacity: 0.9;
              background: #00000021;
            }

            .arrow {
              animation-name: bounceAlpha;
              animation-duration: 1.4s;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
            }
            .arrow.primera {
              animation-name: bounceAlpha;
              animation-duration: 1.4s;
              animation-delay: 0.2s;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
            }
          }
          .portfolio-item {
            color: white;
            position: relative;
            border-radius: 1px;
            margin: 0 0rem 1rem 0;
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: 2rem;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            transition: filter 200ms ease-in-out;
            transition: -webkit-filter 200ms ease-in-out;
            &.short {
              height: 200px;
            }
            &.tall {
              height: 275px;
            }
          }
          .portfolio-item-hover {
            width: 100%;
            height: calc(100% - 1rem);
            position: absolute;
            display: flex;
            top: 0;
            left: 0;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px 0;
            z-index: 2;
            opacity: 0;
            .portfolio-item-title {
              top: 10px;
              left: 10px;
              font-size: 1rem;
              font-weight: 400 !important;
              color: white;
              font-size: 16px;
              text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
            }
            .center-con {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .round {
              position: absolute;
              border: 2px solid #fff;
              width: 30px;
              height: 30px;
              border-radius: 100%;
              bottom: 10px;
            }

            #cta {
              width: 100%;
              cursor: pointer;
              position: absolute;
            }

            #cta .arrow {
              left: 30%;
            }
            .arrow {
              position: absolute;
              bottom: 0;
              margin-left: -1px;
              width: 10px;
              height: 10px;
              background-size: contain;
              top: 9px;
            }
            .segunda {
              margin-left: 6px;
            }
            .next {
              background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==);
            }

            @keyframes bounceAlpha {
              0% {
                opacity: 1;
                transform: translateX(0px) scale(1);
              }
              25% {
                opacity: 0;
                transform: translateX(10px) scale(0.9);
              }
              26% {
                opacity: 0;
                transform: translateX(-10px) scale(0.9);
              }
              55% {
                opacity: 1;
                transform: translateX(0px) scale(1);
              }
            }

            .bounceAlpha {
              animation-name: bounceAlpha;
              animation-duration: 1.4s;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
            }

            .arrow.primera.bounceAlpha {
              animation-name: bounceAlpha;
              animation-duration: 1.4s;
              animation-delay: 0.2s;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    height: 100% !important;

    .container-main {
      flex-direction: column;
      height: unset;
      position: unset;
      .left-container {
        position: unset;
        margin: 1.5rem 0;
        height: unset;
        padding-left: 0;
        overflow: unset;
      }
      .portfolio-background {
        padding: 0;
        margin: 0 auto;
        overflow: unset;
        width: 90%;
        .portfolio-wrapper {
          .portfolio-item-wrapper {
            max-width: unset;
            .portfolio-item {
              height: 235px !important;
              margin: 0 0rem 2rem 0;
            }
            .portfolio-item-hover {
              height: calc(100% - 2rem);
            }
          }
        }
      }
    }
  }
}
</style>
