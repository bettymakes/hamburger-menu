// Clicking on the hamburger menu should change the menu state to an `x`
// The sidebar should also pop out
console.log("menu!!");

// 1. Get the button (with id menu)
// 2. Add click event listener to the button
// 3. Change the menu to an X
	// 3b. Add class menu-expanded to the button's parent element

// 4. IF the button has class menu-expanded
   // 4a. REMOVE the class of menu-expanded
// 4b. OTHERWISE (else)
   // ADD the class of menu-expanded to the button

// 5. 

const menuButton = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');

menuButton.addEventListener('click', function(eventObj) {
	console.log("menu was clicked!");

	// Toggle the class of menu-expanded on the button element
	// if(eventObj.currentTarget.classList.contains('menu-expanded')) {
	// 	eventObj.currentTarget.classList.remove('menu-expanded');
	// }
	// else {
	// 	eventObj.currentTarget.classList.add('menu-expanded');
	// }

	eventObj.currentTarget.classList.toggle('menu-expanded');

	// Toggle the class of sidebar-expanded on the sidebar element
	// if(sidebar.classList.contains('sidebar-expanded')) {
	// 	sidebar.classList.remove('sidebar-expanded');
	// }
	// else {
	// 	sidebar.classList.add('sidebar-expanded');
	// }
	sidebar.classList.toggle('sidebar-expanded');


});













