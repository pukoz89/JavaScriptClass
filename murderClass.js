/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") { var weapon = "knife";

} else if (room === "gallery") { var weapon = "trophy";

} else if (room === "billiards") { var weapon = "pool stick";

} else {var weapon = "poison";

}

if (room === "dining room" && suspect==="Mr. Parkes") { var solved = true;

} else if (room === "gallery" && suspect==="Ms. Van Cleve") { var solved = true;

} else if (room === "billiards room" && suspect==="Mrs. Sparr") { var solved = true;

} else if (room === "ballroom" && suspect==="Mr. Kalehoff") { var solved = true;

} else {var solved =false;}

/* Qué pasa si aquí digo if (solved == true)? */ 

if (solved) {
	console.log(suspect+" did it in the "+room+" with the "+weapon+"!");
} else {console.log ("impossible to identify")}

/* Otras personas hicieron este: */
var room = "Dining room";
var suspect ="Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "Dining room" && suspect === "Mr. Parkes") {
weapon = "knife";
solved = true;

} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
weapon = "trophy";
solved = true;

} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
weapon = "pool stick";
solved = true;

} else {
weapon = "poison";
solved = true;

}

if (solved) {
console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
