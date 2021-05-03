<template>
  <div class="profile">

    <div class="container">

    <div class="avatar">
        <img src="@/assets/avatar.png"  width="250" height="250" class="center" alt="">
      <p class="blocktext">Môj profil</p>
    </div>
<div class="Two">
  <form class="sign-up" action="#">

 <h4 class="nadpis">Ste v editácii Vašho profilu</h4>

        <label>
          <input type="text" v-model="input.FirstName" placeholder="Meno" />
        </label>

        <label>
          <input type="text" v-model="input.LastName" placeholder="Priezvisko" />
        </label>

        <label>
          <input type="email" v-model="input.Email" placeholder="Email" />
        </label>




        <label>
          <input type="number" v-model="input.PhoneNumber" placeholder="Telefónne číslo" />
        </label>

        <label>
          <input type="number" v-model="input.Pin" placeholder="Rodné číslo" />
        </label>

        <label>
          <input type="text" v-model="input.InsuranceCompany" placeholder="Poisťovňa" />
        </label>
        <br>
        <button id="btn-edit" type="button" v-on:click="Edit()"  >Uloziť editovanie profilu</button>


  </form>
  </div>
</div>

  </div>
</template>

<script>
import $ from 'jquery'
import axios from "axios"

/* eslint-disable*/

    export default {

      data: () => {
        return {
          input: {
            FirstName: "",
            LastName: "",
            PhoneNumber: "",
            Pin: "",
            InsuranceCompany: "",
            Password: "",
            Email: ""
          },
        }
      },

      methods: {
        Edit() {

          let self = this;
          const Token = localStorage.getItem("accessToken");

          var reqData1 = {
            "Email": this.input.Email,
            "FirstName": this.input.FirstName,
            "LastName": this.input.LastName,
            "Pin": this.input.Pin,
            "PhoneNumber": this.input.PhoneNumber,
            "InsuranceCompany": this.input.InsuranceCompany,
          };

          axios({
            method: "POST",
            url: "https://eockovanie.somee.com/api/User/Update",
            data: $.param(reqData1),
            headers: { "content-type": "application/x-www-form-urlencoded",
              "authorization": "Bearer " + Token }
          }).then(function () {
            alert("Vas ucet bol upraveny!");
            self.$router.push({path: '/Profile'}).catch(() => {
            });

          }).catch(function (error) {

          });

        },
        getuser(){
          const self = this
          const Token = localStorage.getItem("accessToken");

          axios({
            method: "GET",
            url: "https://eockovanie.somee.com/api/User",
            headers: { "content-type": "application/x-www-form-urlencoded",
              "authorization": "Bearer " + Token }
          }).then(function (response) {
            self.input.FirstName = response.data.FirstName
            self.input.LastName = response.data.LastName
            self.input.Pin = response.data.Pin
            self.input.Password = response.data.Password
            self.input.Email = response.data.Email
            self.input.InsuranceCompany = response.data.InsuranceCompany
            self.input.PhoneNumber = response.data.PhoneNumber
          }).catch(function (error) {
            console.log(error)
          });

        }
      },

      mounted() {
        const _self = this
        $(document).ready (function () {
          _self.getuser();
        } )

      }
    }
</script>

<style scoped>

.profile {
    font-family: 'Roboto', sans-serif;
    height: 85%;
    width: 80%;
    font-size: 40px;
    color: rgb(167, 167, 167);
    font-weight: 600;
    display: flex;
    justify-items: center;
    align-content: center;
    padding-left: 15%;
  padding-top: 5%;
}

.container{
  height: 85%;
  width: 85%;
  margin: 50px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
  background: white linear-gradient(to bottom, #efefef, #ccc);
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  padding-top: 25px;
}

P.blocktext {
  margin-left: auto;
  margin-right: auto;
  width: 4.5em;
  color: cornflowerblue;
  font-family: 'Roboto', sans-serif;
  text-shadow: 0 10px 25px rgba(0, 0, 0, .2), 0 5px 5px rgba(0, 0, 0, .2);
}

button {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, .2);
  background-color:#009345;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
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
  /*position: absolute;*/
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 20px;
  width: calc(100% - 30px);
  height: calc(100% - 200px);
  text-align: center;
  transition: all 0.5s ease-in-out;
}

form input {
  background-color: #eee;
  border: none;
  padding: 8px 15px;
  margin: 6px 0;
  width: calc(100% - 30px);
  font-size: 20px;
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
}
form input:focus {
  outline: none;
  background-color: #fff;
}

.Two{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.nadpis{
  color: #222222;
  font-size: 18px;
  margin-top: -5px;
}
</style>