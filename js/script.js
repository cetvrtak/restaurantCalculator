const small = document.querySelector("#small");
small.addEventListener("input", displayTotal);

const middle = document.querySelector("#middle");
middle.addEventListener("input", displayTotal);

const big = document.querySelector("#big");
big.addEventListener("input", displayTotal);

const output = document.getElementById("output");

function displayTotal() {
	output.textContent = 3 * small.value + 4 * middle.value + 6 * big.value + " KM";
}

displayTotal();