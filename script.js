function drawGraphs() {
    var dataInput = document.getElementById('data-input');
    var labelInput = document.getElementById('label-input');
    var data = dataInput.value.split(',').map(function (item) {
      return parseFloat(item.trim());
    });
    var labels = labelInput.value.split(',').map(function (item) {
      return item.trim();
    });
  
    drawBarChart(data, labels);
    drawLineChart(data, labels);
    drawDonutChart(data, labels);
  }
  
  function drawBarChart(data, labels) {
    var chartCanvas = document.getElementById('bar-chart');
    var chartContext = chartCanvas.getContext('2d');
  
    new Chart(chartContext, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  function drawLineChart(data, labels) {
    var chartCanvas = document.getElementById('line-chart');
    var chartContext = chartCanvas.getContext('2d');
  
    new Chart(chartContext, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data',
          data: data,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  function drawDonutChart(data, labels) {
    var chartCanvas = document.getElementById('donut-chart');
    var chartContext = chartCanvas.getContext('2d');
  
    new Chart(chartContext, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(220, 220, 220, 0.8)',
            'rgba(64, 64, 64, 0.8)',
            'rgba(0, 255, 0, 0.8)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }
  