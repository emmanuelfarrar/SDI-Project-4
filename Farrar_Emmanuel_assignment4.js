//alert("JavaScript works!");
//Name: Emmanuel Farrar
//SDI - 1406 - Week 4 Assignment

//global variable
var phoneNumReturn;
var validEmailReturn;
var validUrlReturn;
var decimalPlaceReturn;
var strToNumReturn
var wordCaseReturn;




//functions

//Does a string follow a 123-456-7890 pattern like a phone number?
var thePhoneNum = function (phoneStr)
{
	var lengthOfPhone = phoneStr.length;
	var firstDash = phoneStr.charAt(3);
	var secondDash = phoneStr.charAt(7);
	
	if (lengthOfPhone === 12 && firstDash === "-" && secondDash ==="-")
	{
		console.log("The number " +phoneStr +" is a valid phone number.")
		return true;
	}else {
		console.log("The number " +phoneStr +" is not Not a valid phone number.");
		return false;
	};
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
		console.log ("The email address " +myEmail +" is a valid email address.");
		return true;
		} else {
		console.log("Next time try a valid email");
		return false;
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
		console.log("This is a proper URL heading");
		return true;
		}else{
		console.log("This is not a proper URL heading");
		return false;
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
return theString;
};

//Title-case a string (split into words, then uppercase the first letter of each word).
var wordCase = function (someString)
{
var firstLetter = someString.substring(0,1).toUpperCase() +someString.substring(1,4);
var secondCap = someString.substring(4,5).toUpperCase() +someString.substring(5);
console.log(firstLetter + secondCap);
return firstLetter.toUpperCase() + someString.substring(1);
};

//main code

//function call for thePhoneNum
phoneNumReturn = thePhoneNum("123-456-7890");
//function call for the validEmail function
validEmailReturn = validEmail("javascript@gmail.com");
//function call for the validUrl function
validUrlReturn = validUrl("http://nike.com");
//function call for decimalPlace function
decimalPlaceReturn = decimalPlace(10.15552, 2);
//function call for isThisANum
strToNumReturn = stringToNumber("250");
//function call for wordCase function
wordCaseReturn = wordCase("bed time");

