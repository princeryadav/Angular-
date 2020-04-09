var x = 1 ;
var y = 2 ;

//problem with Sequence point 
x^=y^=x^=y;
console.log(x,y)

// No problem with sequence point 
x^=y;
y^=x;
x^=y;
console.log(x,y)