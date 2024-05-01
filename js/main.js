
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

var ctx1 = $("#worldwide-chart1").get(0).getContext("2d");
var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["01-Feb", "02-Feb", "03-Feb", "04-Feb", "05-Feb", "06-Feb", "07-Feb"],
        datasets: [{
            data: [3000, 3200, 2900, 3300, 2800, 3500, 3100],
            backgroundColor: '#008000',  // Green color
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                max: 3500,
                min: 2500,
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, values) {
                        return kFormatter(value);
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                backgroundColor: '#ffffff',
                titleColor: '#000',
                titleAlign: 'center',
                bodyFont: {
                    size: 12
                },
                titleSpacing: 10, // Set padding for the title
                bodySpacing: 20, // Set padding for the body
                bodyColor: '#757575',
                callbacks: {
                    title: function(tooltipItems, index) {
                        var dateParts = tooltipItems[0].label.split('-');
                        var month = dateParts[1];
                        var day = dateParts[0];
                        return month + ' ' + day + ', 2024';
                    },
                    label: function(context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            var num = context.parsed.y;
                            label += Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
                        }
                        return label;
                    }
                }
            }
        },
        barPercentage: 0.7,
        categoryPercentage: 0.8
    }
});

//chart2//
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

var ctx1 = $("#worldwide-chart2").get(0).getContext("2d");
var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{
            data: [3000, 3200, 2900, 3300, 2800, 3500, 3100],
            backgroundColor: '#008000',  // Green color
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                max: 3500,
                min: 2500,
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, values) {
                        return kFormatter(value);
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                backgroundColor: '#ffffff',
                titleColor: '#000',
                titleAlign: 'center',
                bodyFont: {
                    size: 12
                },
                titleSpacing: 10, // Set padding for the title
                bodySpacing: 20, // Set padding for the body
                bodyColor: '#757575',
                callbacks: {
                    label: function(context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            var num = context.parsed.y;
                            label += Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
                        }
                        return label;
                    }
                }
            }
        },
        barPercentage: 0.6,
        categoryPercentage: 0.6
    }
});

