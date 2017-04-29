var doughnutData = {
  labels: [
    "輕鬆", "起司", "去死", "情色", "氣死", "去鎖", "窮酸", "傾訴", "掐死", "ㄑㄙ", "七歲", "清算", "驅散", "遣送", "全塞"
  ],
  datasets: [{
    data: [47, 11, 9, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    backgroundColor: [
      "rgba(220,83,75,1)",
      "rgba(220,83,75,.95)",
      "rgba(220,83,75,.9)",
      "rgba(220,83,75,.85)",
      "rgba(220,83,75,.8)",
      "rgba(220,83,75,.75)",
      "rgba(220,83,75,.7)",
      "rgba(220,83,75,.65)",
      "rgba(220,83,75,.6)",
      "rgba(220,83,75,.55)",
      "rgba(220,83,75,.5)",
      "rgba(220,83,75,.45)",
      "rgba(220,83,75,.4)",
      "rgba(220,83,75,.3)",
      "rgba(220,83,75,.2)"
    ],
    hoverBackgroundColor: [
      "rgba(220,83,75,1)",
      "rgba(220,83,75,.9)",
      "rgba(220,83,75,.85)",
      "rgba(220,83,75,.8)",
      "rgba(220,83,75,.75)",
      "rgba(220,83,75,.7)",
      "rgba(220,83,75,.65)",
      "rgba(220,83,75,.6)",
      "rgba(220,83,75,.55)",
      "rgba(220,83,75,.5)",
      "rgba(220,83,75,.45)",
      "rgba(220,83,75,.4)",
      "rgba(220,83,75,.35)",
      "rgba(220,83,75,.3)",
      "rgba(220,83,75,.2)"
    ]
  }]
}
window.onload = function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myDoughnut = new Chart(ctx, {
    type: 'doughnut',
    data: doughnutData,
    options: {
      responsive: true,
      animationEasing: "easeOutQuart",
    }
  })
}