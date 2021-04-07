<template>
  <div id="mainpage">
    <div class="Column">

      <div class="Navbar">
        <header>
          <Navbar/>
        </header>
      </div>

      <div class="View">
        <SignIn/>
      </div>

    </div>

  </div>
</template>

<script>
import SignIn from "@/components/SignIn";
import Navbar from "@/components/Navbar";

export default {
name: "Mainpage",
  components: {SignIn,
    Navbar}
}
</script>

<style scoped>

#mainpage{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  color: #222;
  height: 100vh;
  display: flex;
  background-image: url('~@/assets/Main2.png');
  background-size: cover;
}

.View {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
}

.Column{
  display: flex;
  flex-direction: column;
}

.Navbar {
  width: 100vw;
  background: linear-gradient(to bottom right, #7fd625, #009345);
  opacity: 0.85;
  height: 4%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
}
</style>