<template>

    <div class="profile">
      <div class="container">

        </div>
      </div>


</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.profile {
  font-family: 'Roboto', sans-serif;
  height: 100%;
  width: 100%;
  font-size: 40px;
  color: rgb(167, 167, 167);
  font-weight: 600;
  display: flex;
  justify-items: center;
  align-content: center;
}

.container{
  height: 92%;
  width: 95%;
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
</style>