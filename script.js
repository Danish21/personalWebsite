$(document).ready(function(){



	//intializing wrapper objects
	$iconWrapper = $("#iconWrapper");
	$aboutMeWrapper = $("#aboutMeWrapper");
	$projectsWrapper = $("#projectsWrapper");
	$blogWrapper =$("#blogWrapper");

	//intializing project#1
	$project1 = $("#project1");

	//intialize icons
	$icons = $(".icons");
	$blogIcon = $("#blogIcon");
	$meIcon = $("#meIcon");
	$projectsIcon = $("#projectsIcon");
	$homeButton = $(".homeButton");



	///////navigations for homeScreen to blog, project, and about screens

	$blogIcon.click(function(e){ 
		
		$iconWrapper.animate({
		 top: "39%",
		}, 2000);

		$icons.animate({
		 width: "50px",
		 height: "50px",
		 marginTop: "2px",
		}, 2000);

		$blogWrapper.css("visibility","visible");
		$projectsWrapper.css("visibility","hidden");
		$("#project"+projectNumber).css("visibility", "hidden");
		$aboutMeWrapper.css("visibility","hidden");

	})

	$projectsIcon.click(function(e){
		
		$iconWrapper.animate({
		 top: "39%",
		}, 2000);

		$icons.animate({
		 width: "50px",
		 height: "50px",
		 marginTop: "2px",
		}, 2000);

		$projectsWrapper.css("visibility","visible");
		$project1.css("visibility","visible");
		$blogWrapper.css("visibility","hidden");
		$aboutMeWrapper.css("visibility","hidden");


	})

	$meIcon.click(function(e){
		
		$iconWrapper.animate({
		 top: "39%",
		}, 2000);

		$icons.animate({
		 width: "50px",
		 height: "50px",
		 marginTop: "2px",
		}, 2000);

		$aboutMeWrapper.css("visibility","visible");
		$projectsWrapper.css("visibility","hidden");
		$blogWrapper.css("visibility","hidden");
		$("#project"+projectNumber).css("visibility", "hidden");

	})

	$homeButton.click(function(e){
		$iconWrapper.animate({
		 top: "20px",
		}, 2000);

		$icons.animate({
		 width: "100px",
		 height: "100px",
		 marginTop: "50px",
		}, 2000);

		$aboutMeWrapper.css("visibility","hidden");
		$projectsWrapper.css("visibility","hidden");
		$blogWrapper.css("visibility","hidden");
		$("#project"+projectNumber).css("visibility", "hidden");
	})

	/////////////////



	////////////////////project scroller

	//intializing buttons and screens

	$nextButton = $(".nextButton");
	$projectInfo = $(".projectInfo");
	var projectNumber= 1; // keeps track of what project were on
	var numberOfProjects = $projectInfo.length;


	$nextButton.click(function(){
		
		$("#project"+projectNumber).css("visibility", "hidden"); // make current project slide hidden
		projectNumber++;

		if(projectNumber > numberOfProjects){
			projectNumber=1; // if past the number of projects then next slide is the first slide
		}
		$("#project"+projectNumber).css("visibility", "visible"); // make next slide visible

	})











})