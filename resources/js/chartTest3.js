const ctx3 = document.getElementById('myChart3');

            new Chart(ctx3, {
                type: 'bar',
                data: {
                labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'],
                datasets: [{
                    label: 'CIRURGIAS',
                    data: [0, 12, 52, 10, 89, 159],
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