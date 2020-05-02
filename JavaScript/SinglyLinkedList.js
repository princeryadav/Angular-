class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    pushBack(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            this.tail = newNode;
        }
        return this; //For mehtod chaning
    }

    revers(){
        let first=this.head;

        if (!first.next) { return first; }

        let second = first.next;

        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second=temp;
        }

        this.head.next=null;
        this.head=first;

    }

    newRevers(){
        let current=this.head;

        if (!current.next) { return current; }

        let prev=null;
        let next=null;
        while(current!=null){
            next=current.next;
            current.next=prev;
            prev =current;
            current=next;
        }
        this.head = prev;
    }

    printForword() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const newLinkList = new SinglyLinkedList();
newLinkList.pushBack(1);
newLinkList.pushBack(2);
newLinkList.pushBack(3);
newLinkList.pushBack(4).pushBack(5).pushBack(6)
newLinkList.printForword();
//newLinkList.revers();
newLinkList.newRevers();
console.log("---Revers---")
newLinkList.printForword();