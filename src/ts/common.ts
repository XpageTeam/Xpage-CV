// import domReady from "./xpage/ready";
// import App from "./xpage/core";
import select from './xpage/select';

declare global {
	interface Window {
		$: Function;
		is: any;
		requestIdleCallback: Function;
		notificator: any;
		selectInitial: Function;
	}
}

window.selectInitial = (targetSelect: HTMLSelectElement) => new select(targetSelect);
