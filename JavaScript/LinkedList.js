/**
 * Node represents a single link in a list
 * It contains
 * Value 
 * Pointer to the next node
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

/**
 * List represents the linked list
 * and holds head and tail
 */

function List() {
    this.head = null;
    this.tail = null;

    /**
     * PushBack
     * Add the value to the end of list
     */

    function pushBack(value) {
        //create a new node
        var newNode = new Node(value);

        if (null == this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    List.prototype.pushBack=pushBack;

    /**
     * PushFront
     * Add a value to the fornt(Begining) of the list 
     */

    function pushFront(value) {
        //create new Node 
        var newNode = new Node(value);

        //check if it is first node, then point head and tail to it
        if (null == this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            //first need to make newNode connection with the current node
            newNode.next = this.head;
            this.head = newNode;

            // what is wrong with this line of code
            // this.head.next = newNode;
            // this.head = newNode;
        }
    }

    List.prototype.pushFront=pushFront;

    /**
     * Delete node from linked list 
     */
    function remove(value) {
        //hmm...value can be anywhere 1.at head 2.at tail 
        //3. ONLY node 4. somewhere in between.
        for (var current = this.head; current; current = current.next) {
            //see if we can found it?
            if(value==current.value)
            {
                //1.At head 
                if(current==this.head)
                {
                    this.head=this.head.next;
                    current=null;
                }

                //2.At tail
                if(current==this.tail)
                {
                    
                }
            }
        }

    }


    /**
     * print linked list
     */
    function printForword() {
        for (var current = this.head; current; current = current.next) {
            console.log(current.value);
        }
    }

    List.prototype.printForword=printForword;
}
//create a list object
var list = new List();
console.log(list)
//push some value to the end 
list.pushBack(12);
list.pushBack(13);
list.pushBack(14);

//push some value to the front
list.pushFront(11);
list.pushFront(10);

//Print Value
list.printForword();