let sidebar = document.querySelector('.sidebar');
let menu = document.querySelector('.menu');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.nav-bar');

function showSidebar(){
	sidebar.style.display = "flex";
	menu.style.display = "none";
	logo.style.display = "none";
	navbar.style.display = "none";
}

function hideSidebar(){

	sidebar.style.display = "none";
	menu.style.display = "block";
	logo.style.display = "block";
	navbar.style.display = "block";

}