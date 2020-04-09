function MyFunction(id,name)//'arguments' is passed EVERY JS funcyion.
{
    //Real Array
    realArray=[1,'Marc'];
    console.log(realArray[0],realArray[1]);
    console.log("realArray is an array:",realArray instanceof Array);
    console.log("realArray",realArray);
    console.log("realArray.length",realArray.length)
    console.log();

    //Fake Array
    //'argumenst' is not an array but an object
    //Wickedly, the members are named 0,1,2
    console.log(arguments[0],arguments[1]);
    console.log("arguments is an array",arguments instanceof Object);
    console.log("arguments",arguments);
    console.log("arguments.length",arguments.length);//How? if it's not an array?
    console.log()

    //My fake array
    myFakeArray=
    {
        0:3,
        1:"Eich",
      //  get length(){return Object.keys(this).length}
    }

    myFakeArray.__proto__.__defineGetter__("length",function(){return Object.keys(this).length})
    console.log(myFakeArray[0],myFakeArray[1]);
    console.log("myFakeArray is an array",myFakeArray instanceof Array)
    console.log("myFakeArray", myFakeArray);
    console.log("myFakeArray.length",myFakeArray.length);
    console.log();
}

MyFunction(1,"Andreessen")