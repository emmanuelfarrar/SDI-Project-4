//alert("JavaScript works!");
//Name: Emmanuel Farrar
//SDI - 1406 - Week 4 Assignment

//global variable
var wordCaseReturn;




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

//Does the string follow aaa@bbb.ccc pattern like an email address
var validEmail = function (myEmail)
{
	var lengthOfEmail = myEmail.length;
	var myDotCom = myEmail.substring(myEmail.length - 4);
	var foundAtPosition;
	foundAtPosition = myEmail.indexOf("@");
	
	//using the redefined variable to identify the "." and a way to identify the "@"
	if (myDotCom[0] ==="." && foundAtPosition != -1)
	{
		console.log ("Valid Email");
		} else {
		console.log("Next time try a valid email");
		}
	
};

//Is the string a URL (Does it start with http:// or https://?
var validUrl = function (enteredUrl)
{
	var subValidUrl = enteredUrl.substring(0,4);
	console.log(subValidUrl);
	var subValidUrl2 = enteredUrl.substring(0,5);
	
	if (subValidUrl === "http" ||subValidUrl2 === "https")
		{
		console.log("Congrats");
		}else{
		console.log("Loser")
		}
	
};

//Format a number to use a specific number of decimals places as for money: 2.1-->2.10
var decimalPlace = function (num1, num2)
{
	var useNumber = num1;
	useNumber = useNumber.toFixed(num2);
	console.log(useNumber);
};

//Given a string version of a number, such as "42", return the value as an actual Number data type, such as 42.
var stringToNumber = function (strNumber)
{
var theString;
theString = parseInt(strNumber);
console.log("The number is " + theString);
};

//Title-case a string (split into words, then uppercase the first letter of each word).
var wordCase = function (someString)
{
var firstLetter = someString.substring(0,1).toUpperCase();
var secondCap = someString.substring(5,6).toUpperCase();
console.log(firstLetter + secondCap);
return firstLetter;
};

//main code

//function call for thePhoneNum
thePhoneNum("123-456-7890");
//function call for the validEmail function
validEmail("javascript@gmail.com");
//function call for the validUrl function
validUrl("http://nike.com");
//fucntion call for decimalPlace function
decimalPlace(10.15552, 2);
//function call for isThisANum
stringToNumber("250");
//function call for wordCase function
wordCaseReturn = wordCase("bed time");

