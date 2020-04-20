/**
 * Title: Implementation of Merge Sort
 * File Name: MergeSort.js
 * Writer: Prince Yadav
 * 
 * Input: [2,5,9,30]  [1,4,31]
 * 
 * Output: [1,2,4,5,9,30,31]
 * 
 */


//Function taking two ascending order Array.
function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i=1;
    let j=1;
    //If array1 is empty return array2.
    if (array1.length <= 0) { return array2; }

    //If array2 is empty return array1.
    if (array2.length <= 0) { return array1; }

    //loop untile both array gets empty.
    while(array1Item||array2Item){
        //if array1 itme is less than array2 item then 
        //push array1 item into merged array object
        //and also check array2Item is undefined.
        if(!array2Item || array1Item<array2Item){
            mergedArray.push(array1Item);
            array1Item=array1[i];
            i++;
        }
        else{
            mergedArray.push(array2Item);
            array2Item=array2[j];
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays([2,5,9,30],[1,23]));