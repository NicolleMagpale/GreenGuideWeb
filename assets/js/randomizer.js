$(document).ready(function() {
    
	var tipList = Array();

	tipList.push("You don't always have to buy a new book. You can borrow from the Library or avail the Pahiram libro service of the USG.");
	tipList.push("Always visibly wear your ID whenever you’re inside the campus.");
	tipList.push("You can also buy second hand books from the Buy Back Books service of DLSU SCOOP.");
	tipList.push("Be informed. Familiarize yourself with the different University policies by reading the Student Handbook.");
	tipList.push("“H” in your EAF mean Huwebes/Thursday.");
	tipList.push("Maximize our computer laboratories and libraries.");
	tipList.push("Make sure to give leeway for elevator traffic if you have classes in Br. Andrew Gonzalez Hall ");
	tipList.push("Try the different food served by student entrepreneurs in Animo BIZ in the Manila Campus or The Entrep Hub in Laguna Campus.");
	tipList.push("Join student organizations. It’s a great way for your to meet new people.");
	tipList.push("As you start off college, try to get reallygood grades so that you can become a Dean’s Lister.");

	var rand = Math.floor((Math.random() * 10));
	//alert(tipList[rand]);

	var tipNo = rand + 1;

	$("#randomTip").html("<b>TIP #" + tipNo + "</b>: " + tipList[rand]);
    
});