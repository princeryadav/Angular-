const {performance} = require('perf_hooks');

const prince = ["prince"];
const large = new Array(10000).fill('prince')

    function getName(array) {
        let t1 = performance.now();
        for (let i = 0; i < array.length; i++) {
            if (array[i] == "prince") {
                console.log("Found Prince")
            }
        }
        let t2 = performance.now();
        console.log("time took by this loop is :" + (t2 - t1))
    }

getName(large);

//Log All Pair of array
const boxes=[1,2,3,4,5]
