function Tree() {

    /**
     * Node that holds the actual values
     * and it's left and rigt nodes
     * @param {value} value 
     */
    function Node(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }

    this.root = null;

    // We need to have only one copy of add method
    Tree.prototype.add = function (value) {
        function addNode(node) {

            // Check if the node is null
            // We need to add a new node here
            if (!node)
                return new Node(value);

            // if value is greater than current node's value
            // go right
            if (value > node.value)
                node.right = addNode(node.right);

            // If value is lesser tha current node's value
            // go left
            if (value < node.value)
                node.left = addNode(node.left);

            // return the node once done
            return node;
        }

        // Get the root node
        this.root = addNode(this.root);
    }

    // Inorder recursive function
    Tree.prototype.print = function () {
        let level = 0;
        function inOrder(node) {
            if (node) {
                level++;
                inOrder(node.right);
                let str = ' '.repeat((level - 1) * 4) + node.value;
                console.log(str);
                inOrder(node.left);
                level--;
            }
        }

        // Call the inroder function to print values
        // The recursion will start from here
        inOrder(this.root);
    }

    Tree.prototype.MorrisInOrderPrint = function () {
        function inOrder(node) {

            // We would need two variables
            // one that always holds the current node
            // the other which holds the predecessor
            let current;
            let predecessor;

            // Check if the root is null, we can exit the funtion here
            if (node == null)
                return;

            // let's hold the node's reference   
            current = node;

            // We need to continue till we reach a null node
            while (current) {

                // When the left node is null
                // we can simply print the node and proceed to right
                if (!current.left) {
                    console.log(current.value);
                    current = current.right;
                }
                // If left is not null, we need to find the predecessor
                else {

                    // Find the predecessor of current node
                    predecessor = current.left;

                    // stop iterating when we find a null right node
                    // and the right node points to current node
                    while (predecessor.right && predecessor.right != current)
                        predecessor = predecessor.right;

                    // if predecessor's right is null
                    // Make current as right node of predecessor
                    if (!predecessor.right) {
                        predecessor.right = current;

                        // Move the current to its left
                        current = current.left;
                    }
                    // When we set the predecessor's right to current node
                    // we might come across the same node again
                    // therefore we need to make sure we don't go into inifinite loop
                    else {
                        predecessor.right = null;
                        console.log(current.value);
                        current = current.right;
                    }
                }
            }
        }

        inOrder(this.root);
    }
}

let myTree = new Tree();
myTree.add(5);
myTree.add(2);
myTree.add(7);
myTree.add(9);
myTree.add(1);
myTree.add(6);
myTree.add(4);
myTree.add(3);
myTree.add(8);

myTree.MorrisInOrderPrint();
