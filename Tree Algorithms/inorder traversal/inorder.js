class Node{
    constructor(val){
        this.data=val;
        this.left=null;
        this.right=null;
    }
}

function inOrder(root){
   if(root == null){
       return [ ];
   }
   const stack = [ ];
   while(true){
       if(root !=null){
     stack.push(root);
     root=root.left;
     }
     else{
         if(stack.length == 0)
         {
             break;
         }
         root=stack.pop();
         console.log(root.data);
         root=root.right;
     }
 }
}
root=new Node(10);
root.left=new Node(11);
root.right=new Node(16);
root.left.left=new Node(2);
root.left.right=new Node(-1);
root.right.left=new Node(20);
root.right.left.left=new Node(9);
root.right.left.right=new Node(15);

inOrder(root)