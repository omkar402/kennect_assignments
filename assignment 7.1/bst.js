class bstNode{
    constructor(data) {
       this.data = data;
       this.left = null;
       this.right = null;
    };
 };
 class BinarySearchTree{
    constructor(){
       this.root = null;
    }
insert(data){
       var newNode = new bstNode(data);
       if(this.root === null){
          this.root = newNode;
       }else{
          this.insertNode(this.root, newNode);
       };
};
   
insertNode(node, newNode){
       if(newNode.data < node.data){
          if(node.left === null){
             node.left = newNode;
          }else{
             this.insertNode(node.left, newNode);
          };
       } else {
          if(node.right === null){
             node.right = newNode;
          }else{
             this.insertNode(node.right,newNode);
          };
       };
};

inorder(bstNode)
 {
     if(bstNode !== null)
     {
         this.inorder(bstNode.left);
         console.log(bstNode.data,);
         this.inorder(bstNode.right);
     }
 };
 
 getRootNode()
{
    return this.root;
};
 
};
 
 const BST = new BinarySearchTree();
 BST.insert(5);
BST.insert(25);
BST.insert(60);
BST.insert(17);
BST.insert(32);
BST.insert(13);
BST.insert(11);
BST.insert(50);
BST.insert(1);
BST.insert(2);
 var root = BST.getRootNode();
BST.inorder(root);