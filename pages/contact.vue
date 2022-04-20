<template>
  <div class="page">
    <div class="container-main">
      <div class="thanks">
        <h3>Thank you</h3>
        <p>You will receive a response within 24 hours</p>
      </div>
      <div v-if="!sent" class="form-background">
        <FormulateForm
          class="form"
          v-model="formValues"
          @submit="send"
          name="contact"
          ref="form"
        >
          <div class="contact-logo">
            <p class="contact-logo-upper">Contact</p>
          </div>

          <FormulateInput
            name="name"
            type="text"
            placeholder="Your Name"
            validation="required"
          />
          <FormulateInput
            name="email"
            type="email"
            placeholder="Your Email Address"
            validation="bail|required|email"
          />
          <FormulateInput
            name="message"
            type="textarea"
            placeholder="Your Message"
            validation="required"
          />

          <div class="actions">
            <!-- <FormulateInput
              type="submit"
              name="SEND"
              input-class='main-btn small'
              /> -->

            <div class="button" @click="submitForm">
              <div class="text">Submit</div>
            </div>

            <div class="progress-bar"></div>
            <svg
              class="contact-button-svg"
              x="0px"
              y="0px"
              viewBox="0 0 25 30"
              style="enable-background: new 0 0 25 30"
            >
              <path class="check" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
            </svg>

            <!-- <FormulateInput
              type="button"
              label="RESET"
              data-ghost
              @click="reset"
              input-class='main-btn small'
            /> -->
          </div>
          <div class="contact-email">
            <a href="mailto:info@asdevelopment.ca?subject=Inquiry"
              >Prefer to email?</a
            >
          </div>
          <!-- <pre
          class="code"
          v-text="formValues"
        /> -->
        </FormulateForm>
      </div>
      <div class="background-center"></div>
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

<style lang="scss">
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
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 1;
  /* box-shadow: -5px 1px 10px 5px #4f654e; */
}

.form {
  position: absolute;
  width: 50%;
  background-color: transparent;
  font-size: 20px !important;
  /* border: 1px solid #004b19 !important; */
  /* box-shadow: -5px 1px 10px 5px #4f654e; */
  .formulate-input {
    opacity: 0;
  }
  .contact-logo {
    // position: absolute;
    text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
    z-index: 1;
    text-align: center;
    margin: 30px auto;

    .contact-logo-upper {
      color: $mainGold;
      font-size: 70px;
      line-height: 1.25;
      letter-spacing: 1px;
      text-indent: -0.025em;
      font-weight: 700;
    }
    .contact-logo-lower {
      color: $mainBlue;
      font-size: 30px;
      line-height: 1.5;
      letter-spacing: 1px;
      // text-transform: uppercase;
      text-indent: -0.025em;
      font-weight: 700;
      margin-top: -8px;
    }
  }
}
.logo-small {
  margin-left: 4px;
  opacity: 0;
}

.button {
  background: $background;
  height: 60px;
  width: 150px;
  text-align: center;
  border: 3px solid $mainBlue;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 4px;
  opacity: 0;
}

.text {
  color: $mainBlue;
  position: absolute;
  font-weight: 700;
  font-size: 16px;
  top: 50%;
  transform: translateY(-52%);
  left: 0;
  right: 0;
}

.progress-bar {
  position: absolute;
  height: 10px;
  width: 0;
  right: 0;
  top: 50%;
  left: 50%;
  border-radius: 200px;
  transform: translateY(-50%) translateX(-50%);
  background: $mainBlue;
}

.contact-button-svg {
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  right: 0;
}

.check {
  fill: none;
  stroke: $grey;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0;
}

.links {
  padding-top: 15px;
}

.form {
  padding: 2em;
  border-radius: 0.5em;
  max-width: 500px;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.form::v-deep .formulate-input .formulate-input-element {
  margin: 0 auto;
}

.formulate-input .formulate-input-element {
  max-width: none !important;
}

.formulate-input .formulate-input-label {
  color: $mainBlue;
}
li {
  color: $grey !important;
  font-size: 12px !important;
  position: relative;
}

input {
  text-align: center !important;
  border: 1px solid rgb(56, 65, 92) !important;
  background-color: transparent !important;
  font-family: $bodyFont !important;
  font-size: 16px !important;
  padding: 30px !important;
  color: $mainBlue !important;
}

textarea {
  text-align: left !important;
  border: 1px solid rgb(56, 65, 92) !important;
  background-color: transparent !important;
  font-family: $bodyFont !important;
  font-size: 16px !important;
  padding: 30px !important;
  color: $mainBlue !important;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  text-align: center !important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 100px $background inset !important;
}

input:-webkit-autofill {
  -webkit-text-fill-color: $mainBlue !important;
}

label {
  font-size: 14px !important;
  color: $mainBlue !important;
}

.thanks {
  color: $grey;
  position: absolute;
  opacity: 0;
  top: 35%;
  font-weight: 700;
  z-index: -1;
  padding: 0 20%;
  h3 {
    font-size: 22px;
  }
  p {
    font-size: 18 px;
    color: $grey;
  }
}

.actions {
  display: flex;
  margin: 40px 0px 10px 0px;
  justify-content: center;
}
.actions .formulate-input {
  margin-right: 0.5em;
  margin-bottom: 0;
  opacity: 0;
}

.contact-email {
  opacity: 0;
  a {
    color: $darkerBlue;
    font-size: 12px;
    opacity: 0.5;
  }
}

@media only screen and (max-width: 1200px) {
  .form-background {
    margin-top: 0;
  }
  .form {
    width: 80%;
  }
}

.code {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
}

@media only screen and (max-width: 800px) {
  .form-background {
    margin-top: 0;
    .form {
      width: 80%;
      .logo-small {
        height: 70px;
        margin: 0 auto;
        margin-bottom: 10px;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .form-background {
    margin-top: 0;
  }
  .form {
    position: absolute;
    width: 90%;
    margin-top: -20px;
    font-size: 14px !important;
    .contact-logo {
      .contact-logo-upper {
        font-size: 34px;
      }
      .contact-logo-lower {
        font-size: 20px;
      }
    }
  }

  input,
  textarea {
    font-size: 12px !important;
    padding: 20px !important;
  }
  .logo-small {
    height: 100px;
    margin: 0 auto;
    margin: 15px auto;
    margin-top: -7px;
  }

  li {
    font-size: 8px !important;
  }

  .thanks {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 10px;
    }
  }
}
</style>
