/**
 * Title: Revers the given string 
 * File name: ReversString.js
 * Writer: Prince Yadav
 * 
 * Input : Hi my name is prince
 * 
 * Output : ecnirp si eman ym iH
 */

function reversString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
}

function revers(str) {
    //converting string into array
    let newStr=str.split('');
    console.log(newStr);
    //looping half of the array.
    for (let i = 0; i < (newStr.length - 1) / 2; i++) {
        //swaping the array value 
        let temp = newStr[i];
        newStr[i] = newStr[str.length - i - 1];
        newStr[str.length - 1 - i] = temp;
    }
    //converting arrya into string.
    console.log(newStr.join(''));
}
//reversString('Hi my name is prince');
revers('Hi my') 