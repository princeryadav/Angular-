function Tree(){
    function Node(value){
        this.left=null;
        this.value=value;
        this.right=null;
    }

    //Root of the tree
    this.root=null;

    Tree.prototype.add=function (value){
        function addNode(node,value){

            if (!node) { return new Node(value); }

            if(value>node.value){
                node.right=addNode(node.right,value)
            }else{
                node.left=addNode(node.left,value);
            }

            return node;
        }
        this.root=addNode(this.root,value);        
    }

    Tree.prototype.print=function (){
        let level=0
        function inorder(node){
            if (node) {
                level++;
                inorder(node.right);
                let str=' '.repeat((level-1)*4)+node.value; 
                //console.log(node.value)
                console.log(str);
                inorder(node.left);
                level--;
            }
        }
        inorder(this.root);
    }
}

let myTree=new Tree();

myTree.add(5);
myTree.add(3);
myTree.add(2);
myTree.add(4);
myTree.add(8);
myTree.add(7);
myTree.add(9);

myTree.print();