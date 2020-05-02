// function fizzBuzz(){
//     for(let i=0;i<100;i++){
//         if(i%3==0 && i%5==0){
//             console.log("FizzBuzz")
//         }else if(i%3==0){
//             console.log("Fizz")
//         }else if(i%5==0){
//             console.log("Buzz")
//         }else {
//             console.log(i)
//         }
//     }
// }

fizzBuzz();

function fizzBuzz(){
    for(let i=1;i<100;i++){
       console.log(fizzBuzzCopute(i)) ;
    }
}

function fizzBuzzCopute(n){
    let result="";
    if(n%3==0){
        result += "Fizz";
    }
    if(n%5==0){
        result += "Buzz";
    }
    return result===""?n.toString() :result;
}