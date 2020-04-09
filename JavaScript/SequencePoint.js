var x = 1 ;
var y = 2 ;

//Problem with Sequence point 
x^=y^=x^=y;
console.log(x,y)

// No problem with Sequence Point 
x^=y;
y^=x;
x^=y;
console.log(x,y)
