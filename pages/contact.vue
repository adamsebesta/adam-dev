<template>
  <div class="container-main">
    <!-- <span class="title-pop">
          GET IN TOUCH!
    </span> -->
    <Nav/>
    <!-- <div v-if="sent" class='thanks'>
      <h2> THANK YOU, </h2>
      <p> YOU WILL RECEIVE A RESPONSE TO YOUR REQUEST WITHIN 24 HRS </p> 
    </div> -->
    <div v-if="!sent" class='form-background'>
      
       <FormulateForm
        class="form"
        v-model="formValues"
        @submit='send'
        name='contact'
        ref='form'
      >
      <img class='logo-small' draggable="false" src='~static/logo text trans.png'/>

        
        <FormulateInput
          name="name"
          type="text"
          label=" NAME"
          placeholder="YOUR NAME"
          validation="required"
        />
        <FormulateInput
          name="email"
          type="email"
          label="EMAIL"
          placeholder="YOUR EMAIL ADDRESS"
          validation="required|email"
        />
          <FormulateInput
            name="message"
            type="textarea"
            label="MESSAGE"
            placeholder="YOUR MESSAGE"
            validation="required"
          />

          <div class="actions">
            <!-- <FormulateInput
              type="submit"
              name="SEND"
              input-class='main-btn small'
              /> -->
          

            <div class="button" @click='submitForm'>
              <div class="text">Submit</div>
            </div>
            <div class="progress-bar"></div>
            <svg class=contact-button-svg x="0px" y="0px"
            viewBox="0 0 25 30" style="enable-background:new 0 0 25 30;">
              <path class="check" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
            </svg>
          

            <!-- <FormulateInput
              type="button"
              label="RESET"
              data-ghost
              @click="reset"
              input-class='main-btn small'
            /> -->
        </div>
        <!-- <pre
          class="code"
          v-text="formValues"
        /> -->
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav';
import anime from 'animejs';

export default {
  components: {Nav},
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        { hid: 'og:title',  property: 'og:title', content: this.title },
        { hid: 'og:image', property: 'og:image', content: this.image },
      ],
    }
  },
  data() {
    return {
      background: null,
      title: 'Adam Sebesta Development | Contact',
      description: 'Get in Touch',
      image: '~/static/meta.png',
      formValues: {},
      logo: false,
      basicTimeline: null,
      sent:false
    }
  },
  computed: {
    // logicAppUrl() {
    //   return this.$config.logicAppUrl
    // }
  },
  methods: {
     moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },
    submitForm() {
      this.morphSumbitBtn()
      // this.$refs.form.$el.submit()
    },
    displayThanks() {

    },
    hidefields() {
      anime({
        targets: ['.formulate-input'],
        duration: 300,
        opacity: "0",
        easing: "easeInOutSine",
        delay: anime.stagger(300)
      })
    },
    morphSumbitBtn() {
      let that = this;
      this.hidefields();
      let basicTimeline = anime.timeline({
        autoplay: false
       });

      var pathEls = document.querySelectorAll(".check");
      for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute("stroke-dashoffset", offset);
      }

      basicTimeline
        .add({
          targets: ".text",
          duration: 1,
          opacity: "0"
        })
        .add({
          targets: ".button",
          duration: 1300,
          height: 10,
          width: 300,
          backgroundColor: "$purple",
          border: "0",
          borderRadius: 100
        })
        .add({
          targets: ".progress-bar",
          duration: 2000,
          width: 300,
          easing: "linear"
        })
        .add({
          targets: ".button",
          width: 0,
          duration: 1
        })
        .add({
          targets: '.check', 
          opacity: 1
          })
        .add({
          targets: ".progress-bar",
          width: 80,
          height: 80,
          delay: 500,
          duration: 750,
          borderRadius: 80,
          backgroundColor: "#364cf4"
        })
        .add({
          targets: pathEl,
          strokeDashoffset: [offset, 0],
          duration: 200,
          easing: "easeInOutSine",
          complete: function(anim) {
          that.displayThanks()
        }
        })

        basicTimeline.play();
    },
    async send() {
      this.sent = true;
      let res = await fetch(this.$config.logicAppUrl, {
         method: 'POST',
          body: JSON.stringify(this.formValues),
          headers: {
            'Content-Type': 'application/json',
            'Connection': 'keep-alive',
          }
      });
      },
    reset () {
      this.$formulate.reset('contact')
    }
  },
  mounted() {
  }
}
</script>

<style lang='scss'>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
html {
  overflow: hidden;
}

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
  background-color: $background;
  /* box-shadow: -5px 1px 10px 5px #4f654e; */
}

.form {
  position: absolute;
  width: 50%;
  background-color: $background;
  font-size: 20px !important;
  /* border: 1px solid #004b19 !important; */
  /* box-shadow: -5px 1px 10px 5px #4f654e; */
}

.button {
  background: $background;
  height: 60px;
  width: 150px;
  text-align: center;
  border: 3px solid $purple;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
}

.text {
  color: $purple;
  position: absolute;
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
  background: $purple;
}

.contact-button-svg{
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  right: 0;
}

.check {
  fill: none;
  stroke: $lightBlue;
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
  border-radius: .5em;
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
  color: $purple;
  
}
li {
  color: $lightBlue !important;
  font-size: 12px !important;
  position: relative;
  
}

input, textarea {
  text-align: center !important;
  border: none !important;
  background-color: $lightBlue !important;
  letter-spacing: 2px !important;
  font-size: 12px !important;
  padding: 20px !important;
  color: $purple!important;
}

label {
  letter-spacing: 2px !important;
  font-size: 14px !important;
  color: $purple !important;
}

.thanks {
  color: $lightBlue;
  position: absolute;
  p {
  font-size: 16px;
  color: $purple;
  letter-spacing: 1px;
  }
}

.actions {
  display: flex;
  margin: 40px 0px;
  justify-content: center;
}
.actions .formulate-input {
  margin-right: 0.5em;
  margin-bottom: 0;
}

@media only screen and (max-width: 1200px) {
  .title-pop {
    font-size: 100px;
     margin-top: 20px;
  }
  .form-background {
    margin-top: 0;
  }
  .form {
    width: 80%;
  }
}

.code {
  white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;   
}

@media only screen and (max-width: 800px) {
  .title-pop {
    font-size: 60px;
    margin-top: 40px;
  }
  .form-background {
    margin-top :0;
  }
  .form {
    width: 70%;
  }
  .logo-small {
    height: 70px;
  }
}

@media only screen and (max-width: 600px) {
  .title-pop {
    font-size: 60px;
    margin-top: 40px;
  }
  .form-background {
    margin-top :0;
  }
  .form {
    position: absolute;
    width: 90%;
    margin-top: 45px;
    font-size: 14px !important;
  }
  .logo-small {
    height: 55px;
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
