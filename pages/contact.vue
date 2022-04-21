<template>
  <div class="page">
    <div class="container-main">
      <div v-if="!sent" class="form-background">
        <h5>Contact</h5>
        <div class="contact-email">
          <a href="mailto:info@adamsebesta.dev?subject=Inquiry"
            >info@adamsebesta.dev</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";

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
      background: null,
      title: "Adam Sebesta Development | Contact",
      description: "Get in Touch",
      image: "~/static/meta.png",
      formValues: {},
      logo: false,
      basicTimeline: null,
      sent: false,
    };
  },
  computed: {
    // logicAppUrl() {
    //   return this.$config.logicAppUrl
    // }
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.form-background {
  /* margin:  4% 0%; */
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 1;
  transform: translateY(-2rem);
}
.contact-email a {
  color: white;
  text-decoration: none;
  background: $mainBlue;
  padding: 10px 20px;
  border-radius: 20px;
}

h5 {
  font-size: 65px;
  margin-bottom: 1rem;
  color: $mainGold;
}

@media only screen and (max-width: 600px) {
  .thanks {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 10px;
    }
  }
  .contact-email a {
    color: white;
    text-decoration: none;
    background: $mainBlue;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
  }

  h5 {
    font-size: 45px;
    margin-bottom: 0.5rem;
    color: $mainGold;
  }
}
</style>
