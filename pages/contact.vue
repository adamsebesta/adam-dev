<template>
  <div class="container-main">
    <!-- <span class="title-pop">
          GET IN TOUCH!
    </span> -->
    <nuxt-link to="/">
      <img class='logo-top' draggable="false" src='~static/logo clean.png'/>
      <div class='green-sqr' :style="logo? {'opacity': '100' }: {'opacity': '0'}"> </div>
    </nuxt-link>
    <div v-if="sent" class='thanks'>
      <h2> THANK YOU, </h2>
      <p> I WILL RESPOND AS SOON AS POSSIBLE </p> 
    </div>
    <div v-if="sent" class='background-img'> </div>
    <div v-if="!sent" class='form-background'>
      <div class='background-img'>
      </div>
      
       <FormulateForm
        class="form"
        v-model="formValues"
        @submit='send'
        name='contact'
      >
      <img class='logo-small' draggable="false" src='~static/logo text trans.png'/>

        
        <FormulateInput
          name="name"
          type="text"
          label=" Name"
          placeholder="Your name"
          validation="required"
        />
        <FormulateInput
          name="email"
          type="email"
          label="Email"
          placeholder="Your email address"
          validation="required|email"
        />
          <FormulateInput
            name="message"
            type="textarea"
            label="Message"
            placeholder="Your message"
            validation="required"
          />

          <div class="actions">
            <FormulateInput
              type="submit"
              name="Send"
              input-class='main-btn small'
              />

            <FormulateInput
              type="button"
              label="Reset"
              data-ghost
              @click="reset"
              input-class='main-btn small'
            />
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
export default {
  data() {
    return {
      formValues: {},
      logo: false,
      sent: false
    }
  },
  methods: {
     moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },
    async send() {
      let res = await fetch(process.env.LOGIC_APP_URL, {
         method: 'POST',
          body: JSON.stringify(this.formValues),
          headers: {
          'Content-Type': 'application/json'
          }
      });
        this.sent = true;
      },
    reset () {
      this.$formulate.reset('contact')
    }
  },
  created() {
    this.moveLogo();
  }
}
</script>

<style lang='scss'>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
* {
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



.logo-small {
  height: 100px;
  margin: 0 auto;
  margin-bottom: 25px;
  z-index: 10;
}

.green-sqr {
  transition: all 1.5s ease;
  height: 38px;
  width: 38px;
  position: absolute;
  top: 11px;
  left: 10px;
  background-color: #82ab71;
}

.small {
  padding: 10px 30px !important;
}

.logo-top {
  position: absolute;
  margin-top: 20px;
  margin-left: 10px;
  top: 10px;
  left: 10px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 25px;
  z-index: 2;
}

.background-img {
  transition: all 1.5s ease;
  background-image: url('~static/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}

.form-background {
  /* margin:  4% 0%; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  /* box-shadow: -5px 1px 10px 5px #4f654e; */
}

.form {
  position: absolute;
  width: 50%;
  background-color: white;
  font-size: 20px !important;
  /* border: 1px solid #004b19 !important; */
  /* box-shadow: -5px 1px 10px 5px #4f654e; */
}

.title-pop {
  position: absolute;
  top: 0;
  left: 10;
  /* z-index: -1; */
  text-shadow: 1px 1px grey;
  font-family:
    'Arial',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 600;
  font-size: 150px;
  color: #013011;
  letter-spacing: 1px;
  opacity: 0.08;
  color: white;
  text-shadow:
  -1px -1px 0 #000000,
  1px -1px 0 #000000,
  -1px 1px 0 #000000,
  1px 1px 0 #000000;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
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
  color: #013011;
  font-family: 'arial';
  
}

* {
  font-family: 'arial';
}

li {
  color: #004b19 !important;
  font-size: 12px !important;
  position: relative;
  
}

input, textarea {
  text-align: center !important;
  border: none !important;
  background-color: #f5f5f5 !important;
}

.thanks {
  color: #013011;
  position: absolute;
  p {
  font-weight: 600;
  font-family: "arial", "sans-serif";
  font-size: 16px;
  color: #013011;
  letter-spacing: 1px;
  }
  h2 {
    font-family:
    'Cormorant Garamond',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    font-size: 50px;
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
    width: 90%;
    font-size: 14px !important;
  }
  .logo-small {
    height: 60px;
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
