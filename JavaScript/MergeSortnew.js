// split function
function mergeSort(a, low, high) {
    // find mid point 
    let mid =Math.floor((low + high) / 2);

    if (low != high) {
        // split the array
        // first array
        mergeSort(a, low, mid)

        // second array
        mergeSort(a, mid + 1, high)

        // merge the single value
        merge(a,low,mid,high);
    }
}

// merge the array / single value
function merge(a, low, mid, high) {
    // temp array to hold sorted 
    // and merge value
    let temp = [];

    let left = low;

    let right = mid + 1;

    for (; left <= mid && right <= high;) {

        if (a[left] < a[right]) {
            temp.push(a[left]);

            left++;
        } else {
            temp.push(a[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(a[left++])
    }

    while (right <= high) {
        temp.push(a[right++]);
    }

    let i=low;
    for(let index in temp){
        a[i++]=temp[index]
    }

}

var array=[25,12,17,55,69,10]

mergeSort(array,0,array.length-1)
console.log(array)