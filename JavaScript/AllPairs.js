/**
 * Find All Pairs of an array.
 */

const boxes = [1, 2, 3, 4, 5];

function allPairs(boxes) {
    let count=0;
    for(let i=0;i<boxes.length;i++){
        for(let j=0;j<boxes.length;j++){
            console.log(boxes[i],boxes[j]);
            count++;
        }
    }
    console.log("Total count:"+count);
}

allPairs(boxes);