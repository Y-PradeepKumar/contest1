// api url
const api_url =
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Image</th>
		<th>Name</th>
		<th>Id</th>
        <th>Symbol</th>    
		<th>Current_price</th>
        <th>Fully_diluted_valuation</th>
        <th>Market_cap</th>
        </tr>`;
	
	// Loop to access all rows
     var c=data.list;
	for (let r of c) {
		tab += `<tr>
	<td>${r.image}</td>
	<td>${r.name} </td>
	<td>${r.id}</td>
	<td>${r.symbol}</td>	
    <td>${r.current_price}</td>		
    <td>${r.fully_diluted_valuation}</td>	
    <td>${r.market_cap}</td>	
    </tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
