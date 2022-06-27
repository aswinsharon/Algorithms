class Node{
    constructor(val){
     this.data=val;
     this.left=this.right=null;
    }
}

const height=(root)=>{
     if(root==null){
         return -1;
     }
     const leftHeight=height(root.left);
     const rightHeight=height(root.right);
     return 1+Math.max(leftHeight,rightHeight);
}

root =new Node(10);
root.left=new Node(5);
root.right=new Node(6);
root.right.left=new Node(8);
root.right.right=new Node(7);
root.right.right.right=new Node(4);


console.log(height(root));