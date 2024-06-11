const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];  // Round numbers
const points = [66, 51, 68, 59, 67, 70, 50, 64, 57.5, 57, 6];  // Points for each round


document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('pointsChart').getContext('2d');
    const pointsChart = new Chart(ctx, {
        type: 'line',  // Type of chart: line graph
        data: {
            labels: rounds,  // X-axis labels
            datasets: [{
                label: 'Poeng',
                data: points,  // Y-axis data
                backgroundColor: 'rgba(204, 23, 24, 0.6)',  // Color of the area under the line
                borderColor: 'rgba(204, 23, 24, 1)',  // Color of the line
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true  // Start the y-axis at 0
                }
            },
            responsive: true,  // Ensure the graph is responsive
            maintainAspectRatio: false  // Maintain aspect ratio

        }
    });
});
