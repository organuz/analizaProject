// components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.id),
        datasets: [
            {
                label: 'מספר קורסים',
                data: data.map(item => item.courses),
                backgroundColor: 'rgba(75,192,192,0.6)',
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default BarChart;
