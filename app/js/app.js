// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
	writeDescription();
	queryFormHandler();
	// Custom JS
})

function writeDescription() {
	var i = 0;
	var txt = "Hi! \n My name is Furkan AYDIN. What would you like to know about me?"; /* The text */
	var speed = 50; /* The speed/duration of the effect in milliseconds */

	const typeArea = document.getElementById("typewriter");
	function _write(){
		if (i < txt.length) {
			let text = txt.charAt(i);
			typeArea.innerHTML += text === "\n" ? "<br/>" : text;
			i++;
			setTimeout(_write, speed);
		} else {
			document.getElementById("query").focus()
		}
	}
	_write()
}

const queries = {
	"help()": 'help',
	"about()": "about-me"
}

function queryFormHandler(){
	const queryForm = document.getElementById("form-query");
	queryForm.addEventListener("submit", function(e){
		e.preventDefault();

		const query_input = document.getElementById("query");
		if(queries[query_input.value]) {
			ChangeSection(queries[query_input.value])
		} else {
			ChangeSection('notFound')
		}
		query_input.value = "";
	})
}

function ChangeSection(section_id){
	const sections = document.querySelectorAll(".query-section");
	sections.forEach(section => {
		if(section.id == section_id) {
			section.classList.add("active");
		}else {
			section.classList.remove("active")
		}
	})
}