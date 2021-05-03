<template>
 <div class="navbar">

  <div class="Logo1">

    <div class="logo">eOčkovanie</div>
  </div>
  <nav>

    <div class="menu-item"><a href="#">O nás</a></div>
    <Dropdown title="Služby" :items="Služby" />
    <div class="menu-item"><a href="#">Galeria</a></div>
    <div class="menu-item"><a href="#">Kontakt</a></div>
  </nav>

   <div class="Siete">

   </div>

 </div>
</template>

<script>
import Dropdown from './Dropdown';
/* eslint-disable*/
export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      Služby: [
        {
          title: 'Očkovanie',
          link: '#'
        },
        {
          title: 'Historia',
          link:'#'
        },
        {
          title: 'Formular',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style>

.navbar{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.logo{

  font-family: 'Brush Script MT', cursive;
  font-size: 30px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;

}

nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
  opacity: 0.9;

}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>