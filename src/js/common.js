import $ from "jquery";
import is from "is_js/is";
window.jQuery = $
window.$ = $
window.is = is

require("./jquery.fancybox.js");

document.addEventListener("DOMContentLoaded", function(){
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});

	$("body").on("mousedown", ".default-input__input--select", function(e){
		const $this = $(this);
	
	
		if (is.touchDevice()) return;
	
		e.preventDefault();
		
		if (this.classList.contains("my-select"))
			$this.closest("div").find(".my-select__list-cont").remove();
		
		const select = window.selectInitial(this);
	
		this.classList.add("my-select");
		this.closest("div").style.position = "relative";
	
		$this.addClass("js__opened");
	});


});