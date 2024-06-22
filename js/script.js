const Rundes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];  // Runde numbers


document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('pointsChart').getContext('2d');
    const points = [66, 51, 68, 59, 67, 70, 50, 64, 57.5, 57, 6];  // Points for each Runde
    const pointsChart = new Chart(ctx, {
        type: 'line',  // Type of chart: line graph
        data: {
            labels: Rundes,  // X-axis labels
            datasets: [{
                label: 'Poeng',
                data: points,  // Y-axis data
                backgRundeColor: 'rgba(204, 23, 24, 0.6)',  // Color of the area under the line
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

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('pointsPerCategoryChart').getContext('2d');

    // Categories on the X-axis
    const categories = ['Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4', 'Kategori 5', 'Kategori 6'];

    // Data for each Runde - assuming extraction and conversion to this format
    const dataPerRunde = [
        { label: 'Runde 1', data: [8, 9, 7, 11, 17, 14], borderColor: 'rgba(255, 99, 132, 1)', fill: false },
        { label: 'Runde 2', data: [8, 10, 10, 2, 14, 7], borderColor: 'rgba(54, 162, 235, 1)', fill: false },
        { label: 'Runde 3', data: [10, 7, 6, 14, 24, 7], borderColor: 'rgba(75, 192, 192, 1)', fill: false },
        { label: 'Runde 4', data: [4, 6, 8, 12, 16, 13], borderColor: 'rgba(255, 206, 86, 1)', fill: false },
        { label: 'Runde 5', data: [9, 8, 6, 16, 14, 14], borderColor: 'rgba(153, 102, 255, 1)', fill: false },
        { label: 'Runde 6', data: [7, 10, 7, 14, 18, 14], borderColor: 'rgba(255, 159, 64, 1)', fill: false },
        { label: 'Runde 7', data: [6, 9, 7, 10, 10, 8], borderColor: 'rgba(199, 199, 199, 1)', fill: false },
        { label: 'Runde 8', data: [6, 10, 4, 12, 16, 16], borderColor: 'rgba(22, 160, 133, 1)', fill: false },
        { label: 'Runde 9', data: [8, 9.5, 7, 4, 12, 17], borderColor: 'rgba(241, 196, 15, 1)', fill: false },
        { label: 'Runde 10', data: [4, 6, 6, 10, 15, 16], borderColor: 'rgba(26, 188, 156, 1)', fill: false },
        { label: 'Runde 11', data: [4, 2, null, null, null, null], borderColor: 'rgba(46, 204, 113, 1)', fill: false }
    ];

    const pointsPerCategoryChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: categories,
            datasets: dataPerRunde
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true  // Start the y-axis at 0
                }
            },
            responsive: true,  // Ensure the graph is responsive
            maintainAspectRatio: false,  // Do not maintain aspect ratio to allow custom resizing
            plugins: {
                legend: {
                    position: 'top'  // Position the legend at the top of the chart
                }
            }
        }
    });
});
