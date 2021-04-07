<template>

  <article>
    <h1 class="h1-shadow"><span style="color: indianred">e</span> - OČKOVANIE</h1>
      <form class="sign-in" action="#">
        <h2 class="h2-shadow">Prihlásenie</h2>
          <label>
            <input type="text" placeholder="Rodné číslo" />
          </label>
          <label>
            <input id="password" type="password" value="boomer" placeholder="Heslo" />
              <font-awesome-icon icon="eye" id="togglePassword" v-on:click="passwordVisibility" style="float: right; margin-left: -50px; margin-top: 18px; position: relative; z-index: 2; margin-bottom: -30px; cursor: pointer;" />
          </label>
          <div>
            Zabudli ste heslo? Kliknite <a href="#">TU</a>.
          </div>
          <button id="btn-prihlasenie" v-on:click="login" >Prihlásiť sa</button>
          <div>
            Ak nie ste prihlásený zaregistrujte sa <a href="#">TU</a>.
          </div>
<<<<<<< HEAD
        </div>
      </div>
      <form class="sign-up" action="#">
        <h2>Vytvorenie registrácie</h2>
        <div>Použite Váš mail pre zaregistrovanie</div>
        <label>
          <input type="text" placeholder="Name" />
        </label>
        <label>
          <input type="email" placeholder="Email" />
        </label>
        <label>
          <input type="password" placeholder="Heslo" />
        </label>
        <button>Registrácia</button>
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
        <button id="btn-prihlasenie" v-on:click="login()" >Prihlásenie</button>
      </form>


=======
      </form>

    <div style="text-align: right; margin-top: 15px;">
      <font-awesome-icon icon="question-circle" v-on:click="info" />
>>>>>>> 8f336aa79ac0fdf164bed09a736df7ca52fc29ee
    </div>

  </article>

</template>

<script>
  import $ from 'jquery'
  import axios from "axios";

  /* eslint-disable*/
  export default {

    data: () => {
      return {
        signUp: false,
        input: {
          email: "",
          password: ""
        },

      }
    },

    methods: {
<<<<<<< HEAD
      login() {

        let self = this ;
=======
      login(){
        $.ajax({

          url: 'https://eockovanie.somee.com/token',
          method: 'POST',
          contentType: 'application/x-www-form-urlencoded',
          data: {
            grant_type: 'password',
            username: 'nick.bohdan@gmail.com',
            password: 'Ahoj123.',
          },
>>>>>>> 8f336aa79ac0fdf164bed09a736df7ca52fc29ee

        var res = this.input.email.toLowerCase();

        var reqData = {
          "username": res,
          "password": this.input.password,
          "grant_type": "password"
        };

        axios({ method: "POST",
          url: "https://eockovanie.somee.com/token",
          data: $.param(reqData),
          headers: { "content-type": "application/x-www-form-urlencoded" }
        }).then(function (response) {
          const token = response.data.access_token;
          if (token) {
            localStorage.setItem('accessToken', token);
          }
          /*sessionStorage.setItem("accessToken", token);*/

          self.$router.push({path: '/overview'}).catch(() => {});

        }).catch(function (error) {

        });
        console.log(localStorage.accessToken);
      },

      register(){

// dorobit registraciu axios

      },

      passwordVisibility(){
        const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');

        togglePassword.addEventListener('click', function (e) {
          // toggle the type attribute
          const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
          password.setAttribute('type', type);
          // toggle the eye slash icon
          this.classList.toggle('fa-eye fa-eye-slash');
        });
      },

      info(){
        alert ("Jednoduchá aplikácia pre registráciu na Vami vybrané očkovanie. Najprv sa v našej aplikácií zaregistrujete a potom prihlásite. Môžete si editovať svoj profil pomocou tlačidla editácia. V registrácií na očkovanie vyplníte všetky polia a vyberiete si časové rozmedzie. Ako posledný krok kliknite na tlačidlo dokončiť." );
      }
<<<<<<< HEAD
=======

    }
>>>>>>> 8f336aa79ac0fdf164bed09a736df7ca52fc29ee


    }
  }

</script>

<style  scoped>
<<<<<<< HEAD
*{
  font-family: 'Roboto', sans-serif;
}
.container {
  position: relative;
  width: 768px;
  height: 480px;
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
=======

.h1-shadow {
  font-weight: normal;
  font-size: 48px;
>>>>>>> 8f336aa79ac0fdf164bed09a736df7ca52fc29ee
  text-align: center;
  letter-spacing: 1px;
  margin-top: -10px;
  margin-bottom: 100px;
  text-shadow: 0 10px 25px rgba(0, 0, 0, .2), 0 5px 5px rgba(0, 0, 0, .2);
}

.h2-shadow {
  font-weight: normal;
  font-size: 32px;
  margin-top: -60px;
  text-shadow: 0 10px 25px rgba(0, 0, 0, .2), 0 5px 5px rgba(0, 0, 0, .2);
}

h2 {
  margin: 0;
}
p {
  margin: 20px 0 30px;
}
a {
  /*color: #222;*/
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}

button {
  color: indianred;
  text-shadow: 0 10px 25px rgba(0, 0, 0, .2), 0 5px 5px rgba(0, 0, 0, .2);
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid indianred;
  font-size: 1.8rem;
  padding: 10px 40px;
  letter-spacing: 1px;
  cursor: pointer;
  /*transition: transform 0.1s ease-in;*/
}

button:active {
  transform: scale(0.9);
}

button:focus {
  outline: none;
}

/*button.invert {
  background-color: transparent;
  border-color: #fff;
}*/

form {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: 350px;
  height: 370px;
  text-align: center;
  background: white; /*linear-gradient(to bottom, #efefef, #ccc);*/
  transition: all 0.5s ease-in-out;
  box-shadow: 0 10px 25px rgba(0, 0, 0, .2), 0 5px 5px rgba(0, 0, 0, .2);
  border-radius: 10px;
}
form div {
  font-size: 1rem;
}
form input {
  background-color: #eee;
  font-size: 18px;
  border: none;
  padding: 8px 15px;
  margin: 6px 0;
  width: 270px;
  height: 33px;
  border-bottom: 1px solid black;
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

</style>
