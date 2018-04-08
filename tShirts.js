/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 19;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here

if (
	(shirtWidth >= 18) && (shirtWidth < 20) &&
	(shirtLength >= 28) && (shirtLength < 29) && 
	(shirtSleeve >= 8.13) && (shirtLength < 8.38)
		)
	{ console.log ("S") 
	}
	else if (
	(shirtWidth >= 20) && (shirtWidth < 22) &&
	(shirtLength >= 29) && (shirtLength < 30) && 
	(shirtSleeve >= 8.38) && (shirtLength < 8.63)
		) { console.log ("M")
}	else {console.log("hola")}
 if (
	(shirtWidth >= 22) && (shirtWidth < 24) &&
	(shirtLength >= 30) && (shirtLength > 31) && 
	(shirtSleeve >= 8.63) && (shirtLength > 8.88)
			) { console.log ("L")}
				else if (
	(shirtWidth >= 24) && (shirtWidth < 26) &&
	(shirtLength >= 31) && (shirtLength > 33) && 
	(shirtSleeve >= 8.88) && (shirtLength > 9.63)
			) {
		console.log ("Na") }