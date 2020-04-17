/**
 * Title:Implementation of array in javascript.
 * File name: MyArray.js
 * Writer: Prince Yadav.
 */

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    //For getting data 
    get(index) {
        return this.data[index];
    }

    //For adding item to the last 
    // push(item) {
    //     //Left side assining index and right side assining value
    //     this.data[this.length] = item
    //     //incrementin length by 1
    //     this.length++;
    //     return this.data;
    // }

    //Adding multiple item to the list usign var argumets 'varargs'.
    push(...item) {
        for (let i = 0; i < item.length; i++) {
            //Left side assining index and right side assining value
            this.data[this.length] = item[i]
            //incrementin length by 1
            this.length++;
        }
        return this.data;
    }

    //To remove last item form array
    pop() {
        let itemForRemove = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return itemForRemove;
    }

    deleteAtIndex(index) {
        let itemForDelete = this.data[index];
        this.shiftItem(index)
        return itemForDelete;
    }

    shiftItem(index) {
        //starting i at index position 
        for (let i = index; i < this.length - 1; i++) {
            //shifting item to the left by 1 position
            this.data[i] = this.data[i + 1]
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push('aam', 'amrut', 'seb', 'kela', 'angur')
//console.log(newArray.pop())
//newArray.pop();
newArray.deleteAtIndex(5)
console.log(newArray);
console.log(newArray.get(3));