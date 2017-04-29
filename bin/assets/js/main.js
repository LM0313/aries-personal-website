var ctx = document.getElementById("myChart").getContext("2d");
var data, total, x = [],
  span = [],
  labels = [],
  color = [],
  colorAlpha = [],
  n = 0
$(document).ready(function () {
  draw()
  $('.point').click(function () {
    $('.point').toggleClass('active')
    bar()
  })
})

function draw() {
  data = '', total = '', x = [],
    span = [],
    labels = []
  n = $('#n')[0].value
  var i = 0
  total = Math.pow(2, n)
  while (i <= n) {
    labels[i] = i
    x[i] = (cC(n, i) / total)
    color[i] = "rgba(220,83,75,1)"
    colorAlpha[i] = "rgba(220,83,75,.75)"
    console.log(x[i])
    i = i + 1
  }
  // var j = 0
  // while (j < n) {
  //   x[j] = span[j] / total
  // }
  console.log(labels, x, total)
  data = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: '近似曲線',
        data: x,
        borderColor: 'rgba(72,159,249,1)',
        backgroundColor: 'rgba(72,159,249,.1)',
        borderWidth: 2
      },
      {
        label: '二項分布機率',
        data: x,
        borderColor: color,
        backgroundColor: colorAlpha,
        borderWidth: 1
      }
    ]
  }
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      animationEasing: "easeOutQuart",
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  })
}

function factorial(num) {
  if (num == 0 | num == 1) {
    return 1
  } else {
    var tmp = num
    var ans = num,
      k = 1
    while (k < num) {
      ans = ans * (tmp - k)
      k = k + 1
    }
    return ans
  }
}

function cC(num, i) {
  return factorial(num) / (factorial(num - i) * factorial(i))
}

function bar() {
  document.onmousemove = mousePos()
  document.onmousedown = mouseClicked()

  var mouseClick
  var keyClicked

  var mouseX = 0
  var mouseY = 0
  document.onmousemove = function (e) {
    mousePos(e)
  }

  function mousePos(e) {

    mouseX = e.pageX
    mouseY = e.pageY

    document.show.mouseXField.value = mouseX
    document.show.mouseYField.value = mouseY

    console.log(mouseX, mouseY)

    return true
  }
}