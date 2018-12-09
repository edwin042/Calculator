$(document).ready(function(){
	
	$("#menuDiv").click(function(){
		$("#menuItems").toggle("slow");
	})
	$("#standard").click(function(){
		$("p").text("Standard");
	});
	//showing the numbers in the box
	$("#nin").click(function(){
		$("#textBox").val($("#nin").val());
		$("#showResult").text($("#nin").val());
	});
	$("#eig").click(function(){
		$("#textBox").val($("#eig").val());
		$("#showResult").text($("#eig").val());
	});
	$("#sev").click(function(){
		$("#textBox").val($("#sev").val());
	});
	$("#six").click(function(){
		$("#textBox").val($("#six").val());
	});
	$("#fiv").click(function(){
		$("#textBox").val($("#fiv").val());
	});
	$("#fou").click(function(){
		$("#textBox").val($("#fou").val());
	});
	$("#thr").click(function(){
		$("#textBox").val($("#thr").val());
	});
	$("#two").click(function(){
		$("#textBox").val($("#two").val());
	});
	$("#one").click(function(){
		$("#textBox").val($("#one").val());
	});
	$("#zero").click(function(){
		$("#textBox").val($("#zero").val());
	});

	// Hamburger icon items functions
	$("#scientific").click(function(){
		$("p").text("Scientific");
		alert("Application in progress");
	});
	$("#programmer").click(function(){
		$("p").text("Programmer");
		alert("Application in progress");
	});
	$("#dataCalc").click(function(){
		$("p").text("Data Calculation");
		alert("Application in progress");
	});
	$("#aboutThis").click(function(){
		alert("Version: 1.1 \nDeveloped by: CodeEd \n" );
	});
});