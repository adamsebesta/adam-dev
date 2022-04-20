<template tabIndex="0">
  <div class="page">
    <div
      :class="
        'container-main ' +
        (info ? 'info ' : '') +
        (reveal ? 'reveal ' : '') +
        (first ? 'first' : '')
      "
    >
      <div class="translate-box back-arrow-wrapper">
        <back-arrow :color="data.textColor" class="translate hold"></back-arrow>
      </div>
      <div class="text-wrapper" :style="{ color: data.textColor }">
        <div class="translate-box translate">
          <h1 class="headline">{{ projectTitle }}</h1>

          <div class="stack-wrapper">
            <h5 v-for="s in data.stack">{{ s }}</h5>
          </div>

          <p class="project-text">
            {{ data.desc }}
          </p>
          <a
            v-if="data.liveLink"
            target="blank"
            class="live-link"
            :href="data.liveLink"
            ><img src="~/static/new_tab.png"
          /></a>
        </div>
      </div>
      <div
        class="background-image"
        :style="{
          backgroundImage: `url(http://localhost:3000/${projectTitle}_prev.jpg)`,
        }"
      ></div>
      <!-- <div class="translate-box" @click="toggleReveal"> -->
      <!-- <eye-icon
          class="toggle-text translate hold"
          :color="data.textColor"
        ></eye-icon> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import staticData from "~/config/portfolio";
import BackArrow from "~/components/BackArrow";
import EyeIcon from "~/components/EyeIcon";

export default {
  asyncData({ params }) {
    const projectTitle = params.title;
    return { projectTitle };
  },
  components: { Nav, BackArrow },
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
      info: true,
      reveal: false,
      first: false,
      title: `Adam Sebesta Development | Portfolio | ${this.projectTitle}`,
      description: "A Recent Project of Mine",
      image: "~/static/meta.png",
    };
  },

  computed: {
    data() {
      return staticData[this.projectTitle];
    },
  },
  methods: {
    toggleReveal() {
      this.info = !this.info;
      this.reveal = !this.reveal;
    },
  },
  created() {},

  mounted() {},
};
</script>

<style lang="scss" scoped>
.translate-box {
  overflow: hidden;
}
.page {
  overflow: hidden;
  .container-main {
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 90%;
    .toggle-text {
      position: absolute;
      bottom: 50px;
      right: 100px;
      z-index: 2;
      cursor: pointer;
      padding: 10px;
    }
    .translate {
      transform: translateY(200%);
      will-change: transform;
      transition: transform 500ms ease-in-out;
    }
    .back-arrow-wrapper {
      position: absolute;
      top: 12%;
      left: 0;
      z-index: 2;
    }

    .text-wrapper {
      z-index: 2;
      width: 45%;
      margin: 0;
      text-align: left;
      overflow: hidden;
      .translate-box {
        width: 100%;

        h1 {
          text-transform: capitalize;
          font-size: 75px;
          // text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
        }
        .live-link {
          img {
            width: 18px;
            height: 18px;
            margin-top: 1rem;
          }
        }
        .stack-wrapper {
          width: 32%;
          margin: 1rem 0 1.5rem 0;
          display: flex;
          h5 {
            font-size: 12px;
            background: #c7c7c730;
            padding: 3px 7px;
            border-radius: 2px;
            margin: 0 0.5rem;
            // text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
            &:first-of-type {
              margin-left: 0;
            }
          }
        }
        p {
          width: 100%;
          margin: 0 auto;
          font-weight: 400;
          // text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
        }
      }
    }
    &.info {
      .background-image {
      }
      .translate {
        transform: translateY(0%);
      }
    }
    &.reveal {
      .background-image {
      }
      .translate {
        transform: translateY(0%) !important;
        transition: transform 500ms ease-in-out !important;
      }
      .translate:not(.hold) {
        transform: translateY(100%) !important;
      }
    }
    .background-image {
      width: 50%;
      border-radius: 2px;
      height: 75%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  @media only screen and (max-width: 450px) {
    .container-main {
      flex-direction: column;
      height: calc(100% - 1rem);
      margin: 1rem auto 0 auto;
      justify-content: space-evenly;
      .back-arrow-wrapper {
        display: none;
      }
      .text-wrapper {
        width: 100%;
        .translate-box {
          .stack-wrapper {
            width: 25%;
            margin: 0.5rem 0 1rem 0;
            h5 {
              font-size: 8px;
            }
          }
          p {
            font-size: 10px;
          }
          h1 {
            font-size: 22px;
          }
          .live-link {
            img {
              width: 15px;
              height: 15px;
              margin-top: 0.75rem;
            }
          }
        }
      }
      .background-image {
        width: 100%;
        height: 65%;
      }
    }
  }
}
</style>
