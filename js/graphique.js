document.addEventListener('DOMContentLoaded', function() {
  const labels = JSON.stringify(labels) ;
  const data = JSON.stringify(data) ;
  
  // Sélectionnez votre élément canvas HTML
  const canvas = document.getElementById('myChart');

  // Créez le graphique avec les données
  const ctx = canvas.getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'Connexions',
              data: data,
              backgroundColor: 'rgba(0, 123, 255, 0.8)',
              borderColor: 'rgba(0, 123, 255, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Nombre de connexions'
                  }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Mois'
                  }
              }
          },
          plugins: {
              legend: {
                  display: true,
                  position: 'top'
              }
          }
      }
  });
  myChart.update();
})

