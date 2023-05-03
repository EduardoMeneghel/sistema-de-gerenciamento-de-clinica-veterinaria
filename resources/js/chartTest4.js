const ctx4 = document.getElementById('myChart4');

            new Chart(ctx4, {
                type: 'line',
                data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Vendas',
                    data: [25,65,85,10,51,100],
                    borderWidth: 1
                }]
                },
                options: {
                scales: {
                    y: {
                    beginAtZero: true
                    }
                }
                }
            });