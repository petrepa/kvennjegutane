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
            plugins: {
                legend: {
                    display: false  // Hide the legend
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#F5F5F5'  // Color of X-axis labels
                    }
                },
                x: {
                    ticks: {
                        color: '#F5F5F5'  // Color of X-axis labels (participant names)
                    }
                }
            },
            responsive: true,  // Ensure the graph is responsive
            maintainAspectRatio: false  // Maintain aspect ratio

        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('relativePositionChart').getContext('2d');
    const points = [0.75, 0.53, 0.41, 0.78, 0.55, 0.58, 0.74, 0.65, 0.64, 0.75, 1.00];  // Points for each Runde
    const relativePositionChart = new Chart(ctx, {
        type: 'line',  // Type of chart: line graph
        data: {
            labels: Rundes,  // X-axis labels
            datasets: [{
                label: '',
                data: points,  // Y-axis data
                backgRundeColor: 'rgba(204, 23, 24, 0.6)',  // Color of the area under the line
                borderColor: 'rgba(204, 23, 24, 1)',  // Color of the line
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false  // Hide the legend
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#F5F5F5'  // Color of X-axis labels
                    }
                },
                x: {
                    ticks: {
                        color: '#F5F5F5'  // Color of X-axis labels (participant names)
                    }
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
                    beginAtZero: true,
                    ticks: {
                        color: '#F5F5F5'  // Color of X-axis labels
                    }
                },
                x: {
                    ticks: {
                        color: '#F5F5F5'  // Color of X-axis labels (participant names)
                    }
                }
            },
            responsive: true,  // Ensure the graph is responsive
            maintainAspectRatio: false,  // Do not maintain aspect ratio to allow custom resizing
            plugins: {
                legend: {
                    position: 'top',  // Position the legend at the top of the chart
                    labels: {
                        color: '#F5F5F5'  // Color of legend labels
                    }
                }
            }
        }
    });
});


function showAverages() {
    // Hide standard deviations and show averages
    document.getElementById('average').style.display = 'flex';
    document.getElementById('stdDeviation').style.display = 'none';
    document.getElementById('stdDevBtn').classList.remove('selected');
    document.getElementById('avgBtn').classList.add('selected');
}

function showStdDeviations() {
    // Hide averages and show standard deviations
    document.getElementById('average').style.display = 'none';
    document.getElementById('stdDeviation').style.display = 'flex';
    document.getElementById('avgBtn').classList.remove('selected');
    document.getElementById('stdDevBtn').classList.add('selected');
}

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('roundsParticipationChart').getContext('2d');

    // Data for participants and rounds
    const participants = ['Peter', 'Østen', 'Håvard Olai', 'Truls', 'Marcus', 'Elias'];
    const rounds = [11, 9, 7, 5, 9, 4];

    // Combine participants and rounds into an array of objects for sorting
    const data = participants.map((participant, index) => ({
        participant: participant,
        rounds: rounds[index]
    }));

    // Sort data in descending order based on rounds participated
    data.sort((a, b) => b.rounds - a.rounds);

    // Extract sorted participants and rounds back into separate arrays
    const sortedParticipants = data.map(entry => entry.participant);
    const sortedRounds = data.map(entry => entry.rounds);

    const roundsParticipationChart = new Chart(ctx, {
        type: 'bar',  // Type of chart: bar chart
        data: {
            labels: sortedParticipants,  // X-axis labels (participants sorted by rounds)
            datasets: [{
                label: 'Number of Rounds Participated',
                data: sortedRounds,  // Y-axis data (number of rounds sorted)
                backgroundColor: 'rgba(204, 23, 24, 0.5)',  // Color of the bars
                borderColor: 'rgba(204, 23, 24, 1)',  // Border color of the bars
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,  // Hide the legend (optional)
                    color: '#F5F5F5'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#F5F5F5',  // Color of Y-axis labels
                        callback: function (value, index, values) {
                            if (value === 11) {  // Check if the tick value is 11
                                return '';  // Return empty string to hide the tick
                            } else {
                                return value;  // Otherwise, return the tick value as it is
                            }
                        }
                    },
                    max: 11
                },
                x: {
                    ticks: {
                        color: '#F5F5F5'  // Color of X-axis labels (participant names)
                    }
                }
            },
            responsive: true,  // Ensure the chart is responsive
            maintainAspectRatio: false  // Maintain aspect ratio
        }
    });
});
