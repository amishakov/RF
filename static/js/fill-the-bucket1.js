function stddev(range, mean, variance) {
	const factor = 1 / (Math.sqrt(2* 3.141592 * variance));
	return range.map(r => {
		const num= ((r - mean)*(r - mean));
		const denom = 2 * variance;
		const fact = num / denom;
		return factor * Math.exp(-fact);
	});
}
window.addEventListener("load", () => {
	doChart('simulation', 
	 {
	   'units' : { min: 1, max: 15, value: 10, name: 'Number of Units', step: 1 },
	   'mean' : { min: 20, max: 120, value: 60, name: 'Mean time to Complete Unit', step: 1 },
	   'variance' : { min: 1, max:50, value: 30, name: 'Variance In Unit Time', step: 1}
	 },
	 [
		 model => { 
			 var min = 0;
			 var max = 120;			 
			 return {
		    type: 'line',
		    data: {
		      labels: range(min, max, 1).map(r => Math.round(r)),
		      datasets: [{
		      	label: 'Time To Complete A Single Unit (minutes)',
		      	backgroundColor: [ 'rgba(255, 99, 132, 0.2)' ],
		      	borderColor: [ 'rgba(255, 99, 132, 1)' ],
		      	data: stddev(range(min,max,1), model.mean.value, model.variance.value)
		      }]
		    },
		    options: {
		    	scales: {
		            yAxes : [{
		                ticks : {
		                	max : .3,    
		                	min : 0
		                }
		            }]
		    	}
	        }
		  }
		 },
		 model => { 
			 var min = 0;
			 var max = 1000;		 
			 return {
			    type: 'line',
			    data: {
			      labels: range(min / 60, max/60, 10/60).map(r => Math.round(r)),
			      datasets: [{
			      	label: 'Time To Complete All Units (hours)',
			      	backgroundColor: [ 'rgba(132, 99, 255, 0.2)' ],
			      	borderColor: [ 'rgba(132, 99, 255, 1)' ],
			      	data: stddev(range(min,max,10), model.mean.value*model.units.value, model.variance.value * model.units.value)
			      }]
			    },
			    options: {
			    	scales: {
			            yAxes : [{
			                ticks : {
			                	max : .05,    
			                	min : 0
			                }
			            }]
			    	}
		        }
			  }
			 },	 
		]);
	});