const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6730698a1fmsh8728d391983ae95p1d3b35jsn3f43269de5a6',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
	}
};
fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
	.then(function(response) {
		return response.json();
	})
	.then(function(data){ 	
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	});