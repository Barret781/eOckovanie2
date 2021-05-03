<template>
  <article>
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Vitajte späť!</h2>
            <p>Prosím prihláste sa s Vašimi údajmi:</p>
            <button class="invert" id="SignIn"  @click="signUp = !signUp">Prihlásiť sa</button>
          </div>
          <div class="overlay-right">
            <h2>Dobrý deň!</h2>
            <p>Prosím zaregistrujte sa s Vašími osobnými údajmi</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">Registrovať sa</button>
          </div>
        </div>
      </div>
      <form class="sign-up" action="#">
        <h2>Vytvorenie registrácie</h2>
        <label>
          <input type="text" v-model="input2.FirstName" placeholder="Meno" />
        </label>
        <label>
          <input type="text" v-model="input2.LastName" placeholder="Priezvisko" />
        </label>
        <label>
          <input type="email" v-model="input2.Email" placeholder="Email" />
        </label>
        <label>
          <input type="number" v-model="input2.PhoneNumber" placeholder="Telefónne číslo" />
        </label>
        <label>
          <input type="password" v-model="input2.Password" placeholder="Heslo" />
        </label>
        <label>
          <input type="number" v-model="input2.Pin" placeholder="Rodné číslo" />
        </label>
        <label>
          <input type="text" v-model="input2.InsuranceCompany" placeholder="Poisťovňa" />
        </label>
        <button id="btn-registracia" type="button"  v-on:click="register()" >Registrácia</button>
      </form>

      <form class="sign-in" action="#">
        <h2>Prihlásenie</h2>
        <div>Použite Váš účet</div>
        <label>
          <input type="email" v-model="input.email" placeholder="Email" />
        </label>
        <label>
          <input type="password" v-model="input.password" placeholder="Heslo" />
        </label>
        <a href="#">Zabudli ste heslo?</a>
        <button id="btn-prihlasenie" type="button" v-on:click="login()" >Prihlásenie</button>
      </form>


    </div>
  </article>
</template>

<script>
  import $ from 'jquery'
  import axios from "axios"

  /* eslint-disable*/
  export default {

    data: () => {
      return {
        signUp: false,

        input: {
          email: "",
          password: ""
        },

        input2: {
          FirstName: "",
          LastName: "",
          PhoneNumber: "",
          Pin: "",
          InsuranceCompany: "",
          Password:"",
          Email:""
        },

      }
    },

    methods: {
      login() {

        let self = this;

        const res = this.input.email.toLowerCase();

        var reqData1 = {
          "username": res,
          "password": this.input.password,
          "grant_type": "password"
        };

        axios({
          method: "POST",
          url: "https://eockovanie.somee.com/token",
          data: $.param(reqData1),
          headers: {"content-type": "application/x-www-form-urlencoded"}
        }).then(function (response) {
          const token = response.data.access_token;
          if (token) {
            localStorage.setItem('accessToken', token);
          }
          /*sessionStorage.setItem("accessToken", token);*/

          self.$router.push({path: '/Profile'}).catch(() => {
          });

        }).catch(function (error) {

        });
        console.log(localStorage.accessToken);
      },

      register() {

        var reqData2 = {
          "Email": this.input2.Email,
          "Password": this.input2.Password,
          "ConfirmPassword": this.input2.Password,
          "FirstName": this.input2.FirstName,
          "LastName": this.input2.LastName,
          "Pin": this.input2.Pin,
          "PhoneNumber": this.input2.PhoneNumber,
          "InsuranceCompany": this.input2.InsuranceCompany,
          "Consent": true
        };

        let self = this;

        axios({
          method: "POST",
          url: "https://eockovanie.somee.com/api/Account/Register",
          data: $.param(reqData2),
          headers: {"content-type": "application/x-www-form-urlencoded"}
        }).then(function () {
          alert("Váš účet bol zaregistrovaný, pozrite si email!");
          self.$router.push({path: '/'}).catch(() => {
          }); console.log(data);

        }).catch(function (error) {});

      }

    } //methods end
  } // all end
</script>

<style  scoped>
*{
  font-family: 'Roboto', sans-serif;
}
.container {
  position: relative;
  width: 768px;
  height: 530px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
  background: linear-gradient(to bottom, #efefef, #ccc);
}
.container .overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  z-index: 100;
}
.container .overlay {
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  background: linear-gradient(to bottom right, #7fd625, #009345);
  color: #fff;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
}
.container .overlay-left {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 70px 40px;
  width: calc(50% - 80px);
  height: calc(100% - 140px);
  text-align: center;
  transform: translateX(-20%);
  transition: transform 0.5s ease-in-out;
}
.container .overlay-right {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 70px 40px;
  width: calc(50% - 80px);
  height: calc(100% - 140px);
  text-align: center;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
  right: 0;
}
h2 {
  margin: 0;
}
p {
  margin: 20px 0 30px;
}
a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}
button {
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #009345;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;
}
button:active {
  transform: scale(0.9);
}
button:focus {
  outline: none;
}
button.invert {
  background-color: transparent;
  border-color: #fff;
}
form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 200px);
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;
}
form div {
  font-size: 1rem;
}
form input {
  background-color: #eee;
  border: none;
  padding: 8px 15px;
  margin: 6px 0;
  width: calc(100% - 30px);
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
}
form input:focus {
  outline: none;
  background-color: #fff;
}
.sign-in {
  left: 0;
  z-index: 2;
}
.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}
.sign-up-active .sign-in {
  transform: translateX(100%);
}
.sign-up-active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.5s;
}
.sign-up-active .overlay-container {
  transform: translateX(-100%);
}
.sign-up-active .overlay {
  transform: translateX(50%);
}
.sign-up-active .overlay-left {
  transform: translateX(0);
}
.sign-up-active .overlay-right {
  transform: translateX(20%);
}
@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}

</style>
