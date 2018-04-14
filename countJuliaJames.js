/*
 * Programming Quiz: JuliaJames (4-1)
 */
/* 
var x =15;
x%5 === 0 && x%3 === 0 ? console.log("JuliaJames") : (x%5 === 0 ? console.log("James"): (x%3 === 0 ? console.log("Julia")): console.log (x))

¿Esto por qué está mal? Me dice que hay un paréntesis sobrante.
*/
var x = 1;
while (x<=20) {
	x%5 === 0 && x%3 === 0 ? console.log("JuliaJames") : x%5 === 0 ? console.log("James"): x%3 === 0 ? console.log("Julia"): console.log (x);
	x = x + 1; 
    }