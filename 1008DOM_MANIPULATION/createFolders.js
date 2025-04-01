const fs = require("fs");
const path = require("path");

const folderStructure = {
	"js-dom-manipulation": {
		"01-selecting-elements": {
			"basic-selection": ["index.html", "script.js"],
			"advanced-selection": ["index.html", "script.js"],
		},
		"02-manipulating-content": {
			"innerHTML-textContent": ["index.html", "script.js"],
			"set-attribute": ["index.html", "script.js"],
		},
		"03-manipulating-style": {
			"inline-style": ["index.html", "script.js"],
			classList: ["index.html", "script.js"],
		},
		"04-creating-inserting-removing-elements": {
			"creating-elements": ["index.html", "script.js"],
			"inserting-elements": ["index.html", "script.js"],
			"removing-elements": ["index.html", "script.js"],
		},
		"05-event-handling": {
			"basic-events": ["index.html", "script.js"],
			"event-object": ["index.html", "script.js"],
			"event-delegation": ["index.html", "script.js"],
		},
		"06-traversing-the-dom": {
			"basic-traversal": ["index.html", "script.js"],
			"advanced-traversal": ["index.html", "script.js"],
			"searching-elements": ["index.html", "script.js"],
		},
		"07-working-with-forms": {
			"form-interaction": ["index.html", "script.js"],
			"form-validation": ["index.html", "script.js"],
			"form-events": ["index.html", "script.js"],
		},
		"08-layout-and-dimensions": {
			dimensions: ["index.html", "script.js"],
			"layout-modification": ["index.html", "script.js"],
		},
		"09-dynamic-dom-manipulation": {
			"dynamic-content": ["index.html", "script.js"],
			"template-literals": ["index.html", "script.js"],
		},
		"10-advanced-topics": {
			"shadow-dom": ["index.html", "script.js"],
			"mutation-observer": ["index.html", "script.js"],
			optimization: ["index.html", "script.js"],
		},
	},
};

function createStructure(basePath, structure) {
	for (const folder in structure) {
		const folderPath = path.join(basePath, folder);
		fs.mkdirSync(folderPath, { recursive: true });

		if (Array.isArray(structure[folder])) {
			structure[folder].forEach((file) => {
				fs.writeFileSync(path.join(folderPath, file), "", "utf8");
			});
		} else {
			createStructure(folderPath, structure[folder]);
		}
	}
}

const baseDir = "./";
createStructure(baseDir, folderStructure);
