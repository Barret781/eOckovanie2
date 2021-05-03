<template>
  <article>
    <h4 class="h4-shadow">Registrácia na očkovanie</h4>
        <div class="messages">

          <form>

            <div class="col">

              <label>
                <input type="text" v-model="input.FirstName" placeholder="Meno" required />
              </label>

              <label>
                <input type="text" v-model="input.Pin" placeholder="Rodné číslo" required/>
              </label>

              <label>
                <input type="email" v-model="input.Email" placeholder="Email" required/>
              </label>

              <select v-model="input.selectedInsuranceCompany">
                <option disabled value="">Poisťovňa</option>
                <option v-for="company in input.InsuranceCompanies" :key="company.id" v-bind:value="company">
                  {{ company.name }}
                </option>
              </select>

            </div>

            <div class="col">

              <label><span style="padding-left: 3px">
                <input type="text" v-model="input.LastName" placeholder="Priezvisko" value="ee" required/></span>
              </label>

              <select v-model="input.selectedDoctor">
                <option disabled value="">Meno lekára</option>
                <option v-for="doctor in input.Doctors" :key="doctor.Id" v-bind:value="doctor">
                  {{ doctor.FirstName + " " + doctor.LastName }}
                </option>
              </select>

              <select v-model="input.selectedVaccine">
                <option disabled value="">Očkovanie proti</option>
                <option v-for="vaccine in input.Vaccines" :key="vaccine.Id" v-bind:value="vaccine">
                  {{ vaccine.ShortName }}
                </option>
              </select>

              <label>
                <input type="date" v-model="input.Date" placeholder="Dátum" required/>
              </label>

              <div class="col">

                <label>
                  <input class="time" v-model="input.Time1" type="time" placeholder="Čas" required/>
                </label>

              </div>

              <div class="col">

                <label>
                  <input class="time" v-model="input.Time2" type="time" placeholder="Čas" required/>
                </label>

              </div>
              <p style="font-size: 14px; padding-top: -30px">Časové rozmedzie v hodinách.</p>

              <div style="padding-top: 10px">
                <button type="button" class="button buttonGreen" v-on:click="sendRegistration()">Dokončiť</button>
              </div>

               <p style="font-size: 16px; text-align: center"><span style="color: red">*</span>Registráciu potvrdí lekár emailom.</p>

            </div>

          </form>

        </div>

  </article>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
  import  Vue from 'vue';
  import $ from 'jquery';
  import axios from "axios";
  import jQuery from 'jquery';

    export default {
      /* eslint-disable*/
      data() {
        return {
          input: {
            UserId: null,
            FirstName: "",
            LastName: "",
            Pin: "",
            Email: "",
            DoctorLastName: "",

            selectedVaccine: "",
            Vaccines: [],

            selectedDoctor: "",
            Doctors: [],

            InsuranceCompanies: [
              { id: 1, name: "Všeobecná zdravotná poisťovňa" },
              { id: 2, name: "Zdravotná poisťovňa Dôvera" },
              { id: 3, name: "Zdravotná poisťovňa Union" },
              //{ id: 4, name: "AAA" }
            ],
            selectedInsuranceCompany: null,

            Location: "", // location
            Status: "", // status

            Date: "",
            Time1: "",
            Time2: ""
          },
        }
      },

      methods: {

        fillForm() {
          const self = this
          const Token = localStorage.getItem("accessToken");

          // Get user info
          axios({
            method: "GET",
            url: "https://eockovanie.somee.com/api/User",
            headers: { "content-type": "application/x-www-form-urlencoded",
              "authorization": "Bearer " + Token }
          }).then(function (response) {
            self.input.UserId = response.data.Id
            self.input.FirstName = response.data.FirstName
            self.input.LastName = response.data.LastName
            self.input.Pin = response.data.Pin
            self.input.Email = response.data.Email
            self.input.InsuranceCompany = response.data.InsuranceCompany
            self.input.selectedInsuranceCompany = self.input.InsuranceCompanies.find(c => c.name === response.data.InsuranceCompany)
          }).catch(function (error) {
            console.log(error)
          });

          // Get vaccines
          axios({
            method: "GET",
            url: "https://eockovanie.somee.com/api/Vaccine",
            headers: { "content-type": "application/x-www-form-urlencoded",
              "authorization": "Bearer " + Token }
          }).then(function (response) {
            self.input.Vaccines = response.data
          }).catch(function (error) {
            console.log(error)
          });

          // Get doctors
          axios({
            method: "GET",
            url: "https://eockovanie.somee.com/api/Doctor",
            headers: { "content-type": "application/x-www-form-urlencoded",
              "authorization": "Bearer " + Token }
          }).then(function (response) {
            self.input.Doctors = response.data
          }).catch(function (error) {
            console.log(error)
          });
        },

        sendRegistration() {
          const self = this
          const Token = localStorage.getItem("accessToken")

          axios({
            method: "POST",
            url: "https://eockovanie.somee.com/api/Appointment/Create",
            headers: { "content-type": "application/json",
              "authorization": "Bearer " + Token },
            data: {
              "DocId": self.input.selectedDoctor.Id,
              "UserId": self.input.UserId,
              "Location": "Bratislava", // location
              "Status": "Odoslané", // status
              "Time1": self.input.Time1,
              "Time2": self.input.Time2,
              "VacId": self.input.selectedVaccine.Id,
              "Date": self.input.Date
            }
          }).then((response) => {
            console.log(response.data)
          }).catch(function (error) {
            console.log(error)
          });
        },

      },

      mounted() {
        const _self = this
        $(document).ready (function () {
          _self.fillForm();
        } )
      }

    }
</script>

<style scoped>
.messages {

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 40px;
    /*color: rgb(167, 167, 167);*/
    color: black;
    font-weight: 600;
}

.h4-shadow {
  padding-top:20px;
  float: left;
  margin-bottom: 20px;
  text-align: center !important;
  width: 100%;
  text-shadow: 0 10px 25px rgba(0, 0, 0, .2), 0 5px 5px rgba(0, 0, 0, .2);
  color: black;
}

form {
  margin-top:4%;
  position: relative;
  top: 0;
  display: flex;
  padding: 90px 60px;
  width: 700px;
  height: 500px;
  text-align: center;
  background: white linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;
  box-shadow: 0 10px 25px rgba(0, 0, 0, .2), 0 5px 5px rgba(0, 0, 0, .2);
  border-radius: 10px;
}

form div {
  font-size: 1rem;
}
form input, select {

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

select {
  width: calc(100% - 5px);
  height: 38px;
}

.time {
  width: 100px;
}

form input:focus {
  outline: none;
  background-color: #fff;
}

.col {
  float: left;
  width: 50%
}

.button {
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
}

.buttonGreen {
  background-color:#009345;
}

</style>