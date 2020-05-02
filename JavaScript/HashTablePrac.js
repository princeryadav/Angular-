/**
 * in javascript object are a type of hash table.
 * Hash table is present in all programmming language
 * like C++, java, python, C# etc. 
 */

//so let see hash table in javascript

class MyHashTable {
    constructor(size) {
        //setting memory for hash table with
        //given size
        this.data = new Array(size);
    }

    //Hashing the key 
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let i = this._hash(key);
        //checking wether i th array is present in data object
        if (!this.data[i]) {
            //for collision we are creating array of array.
            this.data[i] = [];
        }
        this.data[i].push([key, value]);
        return this.data;
    }

    get(key) {
        let i = this._hash(key);
        let bucket = this.data[i];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }
}

let newMyHashTable = new MyHashTable(2);
// newMyHashTable._hash('greaps');
newMyHashTable.set('greaps', 10000);
newMyHashTable.set('kela', 100);
newMyHashTable.set('tes', 100);
console.log(newMyHashTable.set('aam', 200));

 console.log(newMyHashTable.get('test'))

