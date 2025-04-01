// Wait for the document to load completely
document.addEventListener("DOMContentLoaded", function () {
	// Select the div with id "example"
	const div = document.getElementById("example");

	// Select the button with id "checkText"
	const button = document.getElementById("checkText");

	// Add an event listener to the button that will execute a function when clicked
	button.addEventListener("click", function () {
		// Get the text content of the div, including hidden elements (like the span with 'display: none')
		const textContent = div.textContent;

		// Get the visible text content of the div (excluding hidden elements)
		const innerText = div.innerText;

		// Log both the values to the console
		console.log("textContent: ", textContent); // Will include "World"
		console.log("innerText: ", innerText); // Will NOT include "World"
	});
});
