// 1. Using getElementById - Selects an element by its unique ID.
document.getElementById("getByIdButton").addEventListener("click", function () {
	const element = document.getElementById("elementById");
	element.textContent = "Text changed by getElementById!";
});

// 2. Using getElementsByClassName - Selects elements by their class name.
document
	.getElementById("getByClassButton")
	.addEventListener("click", function () {
		// getElementsByClassName returns a live HTMLCollection
		const elements = document.getElementsByClassName("myClass");
		Array.from(elements).forEach((element) => {
			element.textContent = "Text changed for element with myClass";
		});
	});

// 3. Using getElementsByTagName - Selects elements by their tag name.
document
	.getElementById("getByTagButton")
	.addEventListener("click", function () {
		// getElementsByTagName returns a live HTMLCollection
		const paragraphs = document.getElementsByTagName("p");
		Array.from(paragraphs).forEach((paragraph) => {
			paragraph.textContent = "Text changed for a paragraph";
		});
	});

// 4. Using querySelector - Selects the first element that matches the CSS selector.
document
	.getElementById("getQuerySelectorButton")
	.addEventListener("click", function () {
		// querySelector returns the first matching element
		const childElement = document.querySelector(".container .child");
		childElement.textContent =
			"Text changed by querySelector (first child only)";
	});

// 5. Using querySelectorAll - Selects all elements that match the CSS selector.
document
	.getElementById("getQuerySelectorAllButton")
	.addEventListener("click", function () {
		// querySelectorAll returns a NodeList (static, not live)
		const items = document.querySelectorAll(".item");
		items.forEach((item) => {
			item.textContent = "Text changed for all items";
		});
	});
