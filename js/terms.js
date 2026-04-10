/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Menu


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initMenu();

	$(window).on('resize', function()
	{
		
	});

	$(document).on('scroll', function()
	{
		
	});

	$(document).on('load', function()
	{
		
	});

	/* 

	2. Init Menu

	*/

	function initMenu()
	{
		const hamburger = document.querySelector(".hamburger");
		const menu = document.querySelector(".menu");
		
		hamburger.addEventListener("click", () =>
		{
			menu.classList.toggle("active");
			hamburger.classList.toggle("active");
		});
	}

});