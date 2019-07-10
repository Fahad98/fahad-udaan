const globalAccuracy = {
    data: canvas => {
        let borderWidth = 3;

        if(canvas.data.length > 50){
            borderWidth = 1;
        }

        else if(canvas.data.length > 20){
            borderWidth = 2;
        }

        return {
            labels: canvas.label,
            datasets: [
                {
                    borderColor: "#163868",
                    backgroundColor: "white",
                    pointRadius: 2,
                    pointHoverRadius: 4,
                    borderWidth: borderWidth,
                    data: canvas.data
                },
            ]
        };
    },
    responsive: true,
    maintainAspectRatio: false,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false
        },

        tooltips: {
            enabled: true
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "#9f9f9f",
                        beginAtZero: false,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        drawBorder: false,
                        zeroLineColor: "#ccc",
                        color: "rgba(255,255,255,0.05)"
                    }
                }
            ],

            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent",
                        display: false
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9f9f9f"
                    }
                }
            ]
        }
    }
};

const globalLoss = {
    data: canvas => {
        let borderWidth = 3;

        if(canvas.data.length > 50){
            borderWidth = 1;
        }

        else if(canvas.data.length > 20){
            borderWidth = 2;
        }

        return {
            labels: canvas.label,
            datasets: [
                {
                    borderColor: "#163868",
                    backgroundColor: "white",
                    pointRadius: 2,
                    pointHoverRadius: 4,
                    borderWidth: borderWidth,
                    data: canvas.data
                },
            ]
        };
    },
    responsive: true,
    maintainAspectRatio: false,
    options: {
        legend: {
            display: false
        },

        tooltips: {
            enabled: true
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "#9f9f9f",
                        beginAtZero: false,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        drawBorder: false,
                        zeroLineColor: "#ccc",
                        color: "rgba(255,255,255,0.05)"
                    }
                }
            ],

            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent",
                        display: false
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9f9f9f"
                    }
                }
            ]
        }
    }
};

const averageAccuracy = {
    data: canvas => {
        return {
            labels: canvas.label,
            datasets: canvas.data.map(function (data, index) {
                const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7' ,'#3F51B5',
                    '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50'];

                let borderWidth = 3;

                if(data.length > 50){
                    borderWidth = 1;
                }

                else if(data.length > 20){
                    borderWidth = 2;
                }

                return {
                    label: 'Client ' + (index + 1),
                    borderColor: colors[index],
                    backgroundColor: 'white',
                    pointRadius: 1,
                    pointHoverRadius: 4,
                    borderWidth: borderWidth,
                    data: data
                };
            })
        };
    },
    responsive: true,
    maintainAspectRatio: false,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false
        },

        tooltips: {
            enabled: true
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "#9f9f9f",
                        beginAtZero: false,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        drawBorder: false,
                        zeroLineColor: "#ccc",
                        color: "rgba(255,255,255,0.05)"
                    }
                }
            ],

            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent",
                        display: false
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9f9f9f"
                    }
                }
            ]
        }
    }
};

const averageLoss = {
    data: canvas => {
        return {
            labels: canvas.label,
            datasets: canvas.data.map(function (data, index) {
                const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7' ,'#3F51B5',
                    '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50'];

                let borderWidth = 3;

                if(data.length > 50){
                    borderWidth = 1;
                }

                else if(data.length > 20){
                    borderWidth = 2;
                }

                return {
                    label: 'Client ' + (index + 1),
                    borderColor: colors[index],
                    backgroundColor: 'white',
                    pointRadius: 1,
                    pointHoverRadius: 4,
                    borderWidth: borderWidth,
                    data: data
                };
            })
        };
    },
    responsive: true,
    maintainAspectRatio: false,
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false
        },

        tooltips: {
            enabled: true
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "#9f9f9f",
                        beginAtZero: false,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        drawBorder: false,
                        zeroLineColor: "#ccc",
                        color: "rgba(255,255,255,0.05)"
                    }
                }
            ],

            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent",
                        display: false
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9f9f9f"
                    }
                }
            ]
        }
    }
};

module.exports = {
    globalAccuracy,
    globalLoss,
    averageAccuracy,
    averageLoss
};