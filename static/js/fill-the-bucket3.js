window.addEventListener("load", () => {

function stddev(range, mean, variance) {
	const factor = 1 / (Math.sqrt(2* 3.141592 * variance));
	return range.map(r => {
		const num= ((r - mean)*(r - mean));
		const denom = 2 * variance;
		const fact = num / denom;

		return factor * Math.exp(-fact);
	});
}

var days = 60;
var mean = 2;
var variance = 1;


doChart('simulation3', 
 {
	'estimate': { min: 20, max: 80, value: 20, name: 'Estimate', step: 1 },
	'records' : { min: 100, max: 700, value: 500, name: 'Records', step: 1 },
	'mean' : { min: 1, max: 3, value: 2, name: 'Mean', step: .1 },
	'variance' : { min: .5, max: 3, value: 1, name: 'Variance', step: .1 },
	'staff' : { min: 1, max: 10, value: 4, name: 'Staff', step: 1 },
	'hours' : { min: 1, max: 17, value: 8, name: 'Hours Per Day', step: 1 },
	
 },
 [
	 model => { 
		 
		 var meanEffort = model.records.value * model.mean.value;
		 var varEffort = model.records.value * model.variance.value;
		 var manPower = model.staff.value * model.hours.value;
		 var daysPDF = stddev(range(0,days,1), meanEffort / manPower, varEffort / manPower);
		 
	 return {
		    type: 'line',
		    data: {
		        labels: range(0, days, 1),
		        datasets: [{
		        	label: 'Days To Complete',
		        	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
			      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
		        	data: daysPDF
		        }
		        ]
		    },
		   
		}},
		
		model => {
			var penalty = (model.estimate.value - 20) * 300;
			var returns = range(0, days, 1).map(d => 10000 - penalty - (Math.max(0, d - model.estimate.value) * 1000));

			return {
			    type: 'line',
			    data: {
			        labels: range(0, days, 1),
			        datasets: [{
			        	label: 'Return',
			        	backgroundColor: [ 'rgba(132, 99, 255, 0.2)' ],
				      	borderColor: [ 'rgba(132, 99, 255, 1)' ],
			        	data: returns
			        }
			        ]
			    },
			   
			}
			
			
		},
		model => {
			var penalty = (model.estimate.value - 20) * 300;
			var returns = range(0, days, 1).map(d => 10000 - penalty - (Math.max(0, d - model.estimate.value) * 1000));
			var meanEffort = model.records.value * model.mean.value;
			var varEffort = model.records.value * model.variance.value;
			var manPower = model.staff.value * model.hours.value;
			var daysPDF = stddev(range(0,days,1), meanEffort / manPower, varEffort / manPower);
			var riskAdjustedReturn = daysPDF.map((v, i) => v * returns[i]);
			
			return {
			    type: 'line',
			    data: {
			        labels: range(0, days, 1),
			        datasets: [{
			        	label: 'Financial Risk',
			        	backgroundColor: [ 'rgba(255, 132, 99, 0.2)' ],
				      	borderColor: [ 'rgba(255, 132, 99, 1)' ],
			        	data: riskAdjustedReturn
			        }
			        ]
			    },
			   
			}
			
			
		}
		]);
		
	});

