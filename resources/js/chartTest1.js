const ctx1 = document.getElementById('myChart1');

            new Chart(ctx1, {
                type: 'line',
                data: {
                labels: ['Cachorro', 'Gato', 'Tartaruga', 'Coelho', 'Papagaio', 'Galo'],
                datasets: [{
                    label: 'Agosto',
                    data: [20, 2, 25, 10, 15, 8],
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