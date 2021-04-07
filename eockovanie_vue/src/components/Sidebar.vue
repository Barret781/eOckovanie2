<template>
    <div class="sidebar">
        <div class="title">
            eOčkovanie
        </div>
        <div class="menu-items">
            <router-link to="/overview" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Prehľad
                </div>
            </router-link>
          <router-link to="/profile" active-class="active" tag="button" exact class="side-btn">
            <div class="link-container">
              Profil
            </div>
          </router-link>
            <router-link to="/messages" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Registrácia <br> na očkovanie
                </div>
            </router-link>
            <router-link to="/settings" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Nastavenia
                </div>
            </router-link>
          <button id="btn-odhlasenie" v-on:click="logout"  >Odhlasenie</button>
        </div>
    </div>
</template>

<script>
import router from "@/router";
/* eslint-disable*/
export default {
  methods: {
    logout() {
      localStorage.removeItem('accessToken'); /*button na logout*/
      /*sessionStorage.removeItem('accessToken'); */
      router.push({path: '/'}).catch(() => {
      });
      console.log(localStorage.accessToken);
    }

  }
}
</script>

<style scoped>
.title {
    font-size: 40px;
    margin-top: 20px;
    padding-left: 50px;
    color: #444;
    font-family: 'Brush Script MT', cursive;
    font-weight: bold;

}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}

.menu-items > * {
    margin-top: 60px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
  font-family: 'Roboto', sans-serif;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: #444;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #7fd645;

}
</style>