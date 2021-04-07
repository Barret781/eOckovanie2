<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>

import Sidebar from '../components/Sidebar'
import router from "@/router";
export default {
    name: 'home',

    components: {
        Sidebar
    },

}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background: #7fd645;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto', sans-serif;

}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
  /*  box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);*/
}
</style>