/*variable*/
let myvariable = "panda";
document.getElementById("animal").innerHTML = myvariable;

let myvariable1 = "dog"
document.getElementById("animal1").innerHTML = myvariable1;

let myvariable2 = "cat"
document.getElementById("animal2").innerHTML = myvariable2;

let myvariable3 = "sheep"
document.getElementById("animal3").innerHTML = myvariable3;

let myvariable4 = "lion"
document.getElementById("animal4").innerHTML = myvariable4;

/*operator*/
document.getElementById("test").innerHTML = (49 + 20) -19;

var x, y ;
x = 30;
y = 20;
document.getElementById("test1").innerHTML = (x + y) *10;

/*function*/
var z = myFunction (40, 20, 10);
document.getElementById("test2").innerHTML =z;
function myFunction (a, b, c) {
	return a + b -10;
}


/*cindition*/
function myFunction1() {

	var hour = new Date().getHours();
	var greeting; 
	if (hour < 9) {
		greeting = "Good morning";
	} else {
		greeting = "Hello";
	}
	document.getElementById ("test3").innerHTML = greeting;
}









