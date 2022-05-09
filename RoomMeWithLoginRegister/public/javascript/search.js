const searchBar = document.getElementById("searchBar");
const commonCheck = document.getElementById("commons");
const presCheck = document.getElementById("presidents");

const dormBuildings = ["commonwealth", "dominion", "piedmont", "tidewater", "blue ridge", "sandbridge",
                       "amherst", "brunswick", "essex", "dickenson", "carroll", "franklin", "grayson",
					   "adams", "harrison", "jackson", "jefferson", "kennedy", "lincoln", "madison",
					   "monroe", "roosevelt", "taylor", "truman", "washington", "wilson", "eastern shore",
					   "hampton roads", "liberty square", "northern neck", "potomac heights", "rogers",
					   "townhouses", "whitetop", "angel cabrera"];

const notCommons = ["commonwealth", "dominion", "piedmont", "tidewater", "blue ridge", "sandbridge",
					"adams", "harrison", "jackson", "jefferson", "kennedy", "lincoln", "madison",
					"monroe", "roosevelt", "taylor", "truman", "washington", "wilson", "eastern shore",
					"hampton roads", "liberty square", "northern neck", "potomac heights", "rogers",
					"townhouses", "whitetop", "angel cabrera"];

const notPresidents = ["commonwealth", "dominion", "piedmont", "tidewater", "blue ridge", "sandbridge",
					   "amherst", "brunswick", "essex", "dickenson", "carroll", "franklin", "grayson",
					   "eastern shore", "hampton roads", "liberty square", "northern neck", "potomac heights",
					   "rogers", "townhouses", "whitetop", "angel cabrera"];

const notEither = ["commonwealth", "dominion", "piedmont", "tidewater", "blue ridge", "sandbridge",
				   "eastern shore", "hampton roads", "liberty square", "northern neck", "potomac heights",
				   "rogers", "townhouses", "whitetop", "angel cabrera"];

searchBar.addEventListener("keyup", displayResults);
commonCheck.addEventListener("change", displayResults);
presCheck.addEventListener("change", displayResults);

function displayResults(e){
	for(let i = 0; i < dormBuildings.length; i++){
		let x = document.getElementById(dormBuildings[i]);
		x.style.display = "block";
	}
	if(commonCheck.checked && presCheck.checked){
		for(let i = 0; i < notEither.length; i++){
			document.getElementById(notEither[i]).style.display = "none";
		}
	}else if(commonCheck.checked){
		for(let i = 0; i < notCommons.length; i++){
			document.getElementById(notCommons[i]).style.display = "none";
		}
	}else if(presCheck.checked){
		for(let i = 0; i < notPresidents.length; i++){
			document.getElementById(notPresidents[i]).style.display = "none";
		}
	}
	const search = searchBar.value.toLowerCase();
	if(search !== ""){
		for(let i = 0; i < dormBuildings.length; i++){
			let x = document.getElementById(dormBuildings[i]);
			if(!dormBuildings[i].includes(search)){
				x.style.display = "none";
			}
		}
	}
}