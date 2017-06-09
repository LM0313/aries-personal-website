<template>
  <div class="root">
    <Sideview></Sideview>
    <div class="home">
      <div id="skill" class="spotlight">
        <div class="container">
          <h1 class="title">自評能力指標</h1>
          <chart :type="'horizontalBar'" :data="skillData" :options="options"></chart>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
      <div class="spotlight">
        <div class="container">
          <h1 class="title"></h1>
          <p class="content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'
import Sideview from '@/components/Sideview'
export default {
  components: {
    Chart,
    Sideview
  },
  data() {
    return {
      options: {
        segmentShowStroke: false,
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var index = tooltipItem.index
              var rate = data.datasets[0].data[index]
              return ' ' + rate + ' %'
            }
          }
        },
        showTooltips: true,
        scales: {
          xAxes: [{
            ticks: {
              min: 0
            }
          }]
        },
        legend: {
          display: false
        },
      },
      labels: ['UI/UX Design', 'Hardware', 'Node.js', 'JavaScript', 'HTML 5 & CSS 3', 'Python', 'Linux', 'Meow meow like a kitten'],
      backgroundColor: ['#F8625C', '#EF8C39', '#FABC40', '#3AC769', '#247ACF', '#6B0392', '#8B43A2', '#F8528C'],
      data: [4, 3.8, 2.9, 3.2, 4.1, 2.4, 2.6, 5].map(e => (e * 20))
    }
  },
  computed: {
    skillData() {
      return {
        labels: this.labels,
        datasets: [{
          label: '',
          data: this.data,
          borderColor: this.backgroundColor,
          backgroundColor: this.backgroundColor
        }]
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/main";

.root {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
}

.home {
  display: flex;
  min-height: 100%;
  width: 60%;
  padding: 0 2em;
  position: relative;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  .spotlight {
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 35em;
    margin: 2em 0;
    pointer-events: none;
    .container {
      background: rgba($bright, .3);
      box-shadow: 1px 1px 2px rgba($gray, .7);
      flex-direction: column;
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
      padding: 1.2em;
      border-radius: 1em;
      h1 {
        display: flex;
        justify-content: center;
      }
      canvas {
        position: relative;
        display: flex;
      }
    }
  }
}
</style>

