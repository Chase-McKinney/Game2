//Dom Variables
const metalResource = document.querySelector("#metal-resource");
const metalBtn = document.querySelector("#metal-btn");

//Game Variables
let metal = 0;

//Event Listeners
metalBtn.addEventListener("click", function() {
    metal += 1;
    updateUI;
});

//Functions
function updateUI() {
    metalResource.innerHTML = `Metal: ${metal}`;
}
