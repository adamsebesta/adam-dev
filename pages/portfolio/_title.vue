<template tabIndex="0">
  <div class="page">
    <Nav />
    <div class="container-main">
      <div class="left-container"></div>
      <img :src="`http://localhost:3000/${projectTitle}.jpg`" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav";

export default {
  asyncData({ params }) {
    const projectTitle = params.title;
    return { projectTitle };
  },
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
      title: `Adam Sebesta Development | Portfolio | ${this.projectTitle}`,
      description: "A Recent Project of Mine",
      image: "~/static/meta.png",
    };
  },

  computed: {},
  methods: {},
  created() {},

  mounted() {},
};
</script>

<style lang="scss">
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
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
    .left-container {
      position: fixed;
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
  }
}
</style>
