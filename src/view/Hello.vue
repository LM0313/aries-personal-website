<template>
  <div class="layer" v-bind:class="{ fade : isFade }">
    <div class="hello">
      <header>
        <div class="image"></div>
        <div class="container">
          <h2 class="subtitle">Aries Cs</h2>
          <p class="content">
            Hi, I'm Aries,
            <br>A Web Developer,
            <br>Programmer,
            <br>PC Hardware Engineer,
            <br> UI / UX Designer,
            <br>Also a student.
          </p>
          <div class="button" @click="isFade = !isFade">
            <span>Know More About Me</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </header>
    </div>
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/view/Home'
export default {
  components: {
    Home
  },
  data() {
    return {
      isFade: false
    }
  },
}
</script>

<style scope lang="scss">
@import "../assets/scss/main";

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    transform: translateX(-100vw);
    position: relative;
  }
}

.fade {
  animation: fadeout 1s;
  animation-fill-mode: forwards;
}

.layer {
  position: fixed;
  z-index: 1;
  pointer-events: none;
}

.hello {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  justify-content: center;
  align-items: center;
  header {
    display: flex;
    height: 50%;
    width: 70%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1024px) {
      height: 100%;
      width: 100%;
      flex-direction: column;
    }
    .image {
      z-index: 1;
      border: 1px solid $gray;
      height: 20em;
      width: 20em;
      border-radius: 50%;
      background-image: url("../assets/images/profile.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      @media screen and (max-width: 1024px) {
        margin-top: 1em;
      }
    }
    .container {
      display: flex;
      height: 18em;
      width: 16em;
      padding: 1em 2em;
      margin: 1em 2em;
      flex-direction: column;
      justify-content: center;
      border-left: 1px solid $gray;
      @media screen and (max-width: 1024px) {
        border-left: 0;
        * {
          text-align: center !important;
          justify-content: center;
        }
      }
      * {
        display: flex;
        text-align: left;
        color: $gray;
      }
      .button {
        z-index: 1;
        padding: 1.5em 2em;
        border: 1px solid $gray;
        transform: translateX(calc(-2em - 1px));
        @media screen and (max-width: 1024px) {
          transform: translate(0);
        }
        &:hover {
          background: $gray;
          * {
            color: $white !important;
          }
        }
      }
    }
  }
}
</style>

