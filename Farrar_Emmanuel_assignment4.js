//alert("JavaScript works!");
//Name: Emmanuel Farrar
//SDI - 1406 - Week 4 Assignment

//global variable





//functions

//Does a string follow a 123-456-7890 pattern like a phone number?
var thePhoneNum = function (phoneStr)
{
	var lengthOfPhone = phoneStr.length;
	var firstDash = phoneStr.charAt(3);
	var secondDash = phoneStr.charAt(7);
	
	console.log("The phone number is " + phoneStr);
	console.log("The length of this number is " +phoneStr.length);
	
	if (lengthOfPhone === 12 && firstDash === "-" && secondDash ==="-")
	{
		console.log("This is a valid phone number")
		return true;
	}else {
		console.log("Not a valid phone number.");
		return false;
	};
	
	return phoneStr;
};



//main code

//function call for thePhoneNum
thePhoneNum("123-456-7890");