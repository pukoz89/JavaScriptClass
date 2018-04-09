/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here

// Size limits
var S_MIN_WIDTH = 18, S_MAX_WIDTH = 20,
  M_MIN_WIDTH = 20, M_MAX_WIDTH = 22,
  L_MIN_WIDTH = 22, L_MAX_WIDTH = 24,
  XL_MIN_WIDTH = 24, XL_MAX_WIDTH = 26;

var S_MIN_LENGTH = 28, S_MAX_LENGTH = 29,
  M_MIN_LENGTH = 29, M_MAX_LENGTH = 30,
  L_MIN_LENGTH = 30, L_MAX_LENGTH = 31,
  XL_MIN_LENGTH = 31, XL_MAX_LENGTH = 33;

var S_MIN_SLEEVE = 8.13, S_MAX_SLEEVE = 8.38,
  M_MIN_SLEEVE = 8.38, M_MAX_SLEEVE = 8.63,
  L_MIN_SLEEVE = 8.63, L_MAX_SLEEVE = 8.88,
  XL_MIN_SLEEVE = 8.88, XL_MAX_SLEEVE = 9.63;

var size = "";

if ( 
  (shirtWidth >= S_MIN_WIDTH) && (shirtWidth < S_MAX_WIDTH) &&
  (shirtLength >= S_MIN_LENGTH) && (shirtLength < S_MAX_LENGTH) &&
  (shirtSleeve >= S_MIN_SLEEVE) && (shirtSleeve < S_MAX_SLEEVE)
  ) {
  size = "S";
}

else if ( 
  (shirtWidth >= M_MIN_WIDTH) && (shirtWidth < M_MAX_WIDTH) &&
  (shirtLength >= M_MIN_LENGTH) && (shirtLength < M_MAX_LENGTH) &&
  (shirtSleeve >= M_MIN_SLEEVE) && (shirtSleeve < M_MAX_SLEEVE)
  ) {
  size = "M";
}

else if ( 
  (shirtWidth >= L_MIN_WIDTH) && (shirtWidth < L_MAX_WIDTH) &&
  (shirtLength >= L_MIN_LENGTH) && (shirtLength < L_MAX_LENGTH) &&
  (shirtSleeve >= L_MIN_SLEEVE) && (shirtSleeve < L_MAX_SLEEVE)
  ) {
  size = "L";
}
else {
  size = "Unknown";
}


console.log('T-Shirt Size: ', size);
