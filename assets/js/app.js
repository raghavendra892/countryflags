// alert("helloo123");
let cl = console.log;

let countryinfo = document.getElementById("countrylist");

let result = '';

countries.forEach(function(country){
	result += `
	
		<div class="col-sm-3">
			<div class="card mb-5">
				<div class="card-body">
					<div class="flag">
						<img src="${country.flag}" alt="${country.name}" title="${country.name}">
					</div>
					<h3 class="cname">${country.name}</h3>
					<div class="details">
						<p><strong>capital:-</strong>
							${country.capital}
						</p>
						<p><strong>languages:-</strong>
							${country.languages}
						</p>
						<p><strong>population:-</strong>
							${country.population}
						</p>
					</div>
				</div>
			</div>
			
		</div>
		
		`;
	
	
	

	
	
	
});


countryinfo.innerHTML = result;
