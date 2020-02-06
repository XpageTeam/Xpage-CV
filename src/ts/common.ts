import domReady from "./xpage/ready";
import App from "./xpage/core";

domReady(async () => {
	const selects = App.transformNodeListToArray(document.querySelectorAll(".default-input__input.default-input__input--select"));

	if (!selects.length) return;

	const mySelect = (await import("./xpage/select")).default;

	for (const select of selects)
		if (!select.closest(".popup"))
			new mySelect(select as HTMLSelectElement);
});