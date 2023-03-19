const ctx = document.getElementById('myChart');

            new Chart(ctx, {
                type: 'bar',
                data: {
                labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'],
                datasets: [{
                    label: 'CIRURGIAS',
                    data: [12, 19, 3, 5, 2, 3],
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