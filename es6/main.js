"use strict";

document.addEventListener("DOMContentLoaded", () => {
	wpUnderscoresFork.init();
});

const wpUnderscoresFork = {
	environment: undefined
};

wpUnderscoresFork.init = () => {
	wpUnderscoresFork.checkEnv();
};

// check environment, i.e. check if URL contains "localhost"
wpUnderscoresFork.checkEnv = () => {
	if (window.location.href.indexOf("localhost") > -1) {
		wpUnderscoresFork.environment = "dev";
		wpUnderscoresFork.addHelpers();
	}
	else wpUnderscoresFork.environment = "prod";
};

// add CSS and JS helper files to the page
wpUnderscoresFork.addHelpers = () => {
	const wdHelper = {
		css: document.createElement("link"),
		js: document.createElement("script")
	};

	const path     = "http://localhost:4000/public",
		  filename = "window-dimensions-helper";

	const setAttribute = (element, attr, value) => {
		element.setAttribute(attr, value)
	};

	const appendChild = (parent, child) => {
		document.querySelector(parent).appendChild(child);
	}

	setAttribute(wdHelper.css, "rel", "stylesheet");
	setAttribute(wdHelper.css, "href", `${path}/styles/${filename}.css`);
	appendChild("head", wdHelper.css);

	setAttribute(wdHelper.js, "src", `${path}/scripts/${filename}.js`);
	appendChild("body", wdHelper.js);

	// wait 1000ms for loading/parsing time, then execute wdHelper.init() on callback
	setTimeout(() => {
		wDH.init();
	}, 1000);
};