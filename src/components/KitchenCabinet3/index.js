
import { MyChart, range } from '../MyChart'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend
)

const days = 20;


const model = {
	'lambda': { min: .01, max: 1, value: .25, name: 'Lambda', step: 0.01 },
	'estimate': { min: 0, max: 20, value: 6, name: 'Estimate', step: .5 },
}

const chart1 = (model) => {

	var lambda = range(0, days, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))

	return {
		type: 'line',
		id: "1",
		data: {
			labels: range(0, days, 1),
			datasets: [{
				label: 'Probability Density',
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				data: lambda
			},
			{
				label: 'Proportion of Projects Completed',
				data: range(0, days, 1).map(i => 1 - Math.exp(-model.lambda.value * i))
			},
			]
		},
		options: {
			scales: {
				y: {
					ticks: {
						beginAtZero: true
					}
				}
			}
		}
	}
}

const chart2 = (model) => {
	var early = range(0, days, 1).map(i => Math.max(0, model.estimate.value - i));
	var late = range(0, days, 1).map(i => Math.max(0, i - model.estimate.value))

	return {
		type: 'line',
		id: "2",
		data: {
			labels: range(0, days, 1),
			datasets: [{
				label: 'Too-Early Risks',
				backgroundColor: ['rgba(132, 99, 255, 0.2)'],
				borderColor: ['rgba(132, 99, 255, 1)'],
				data: early
			},
			{
				label: 'Too-Late Risks',
				backgroundColor: ['rgba(132, 200, 99, 0.2)'],
				borderColor: ['rgba(132, 200, 99, 1)'],
				data: late
			}
			]
		},
		options: {
			scales: {
				y: {
					ticks: {
						beginAtZero: true
					}
				}
			}
		}
	}
}

const chart3 = (model) => {
	var lambda = range(0, days, 1).map(i => model.lambda.value * Math.exp(-i * model.lambda.value))
	var early = range(0, days, 1).map(i => Math.max(0, model.estimate.value - i));
	var late = range(0, days, 1).map(i => Math.max(0, i - model.estimate.value))
	var rar = lambda.map((v, i) => v * (early[i] + late[i]));

	return {
		type: 'line',
		id: "3",
		data: {
			labels: range(0, days, 1),
			datasets: [{
				label: 'Risk',
				backgroundColor: ['rgba(255, 132, 99, 0.2)'],
				borderColor: ['rgba(255, 132, 99, 1)'],
				data: rar
			}
			]
		},
		options: {
			scales: {
				y: {
					ticks: {
						beginAtZero: true
					}
				}
			}
		}
	}
}

const chart4 = (model) => {
	var k = model.estimate.value;
	var l = model.lambda.value;

	var early = l * ((Math.exp(-k * l) / (l * l)) + ((k * l - 1) / (l * l)))
	var late = (Math.exp(-k * l) / l);
	var total = early + late;

	return {
		type: 'bar',
		id: "4",
		data: {
			labels: ['Too Early', 'Too Late', 'Total'],
			datasets: [{
				label: 'Risk',
				data: [early, late, total],
				borderWidth: 1,
				backgroundColor: ['rgba(132, 99, 255, 0.2)', 'rgba(132, 200, 99, 0.2)', 'rgba(99, 99, 99, 0.2)'],
				borderColor: ['rgba(132, 99, 255, 1)', 'rgba(132, 200, 99, 1)', 'rgba(99, 99, 99, 1)'],
			}]
		},
		options: {
			scales: {
				y: {
					ticks: {
						beginAtZero: true
					}
				}
			}
		}
	}
}



export default function() {
	return (
		<MyChart model={model} charts={[chart1, chart2, chart3, chart4]} />
	)
}