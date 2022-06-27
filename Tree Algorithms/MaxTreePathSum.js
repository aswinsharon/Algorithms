class Node{
    constructor(val){
     this.data=val;
     this.left=this.right=null;
    }
}
const MaxPathSum =(root)=>{
  if(root == null)
  {
      return -Infinity;
  }
  if(root.left == null && root.right == null){
      return root.val;
  }
  const MaxChildPathSum=Math.max(MaxPathSum(root.left),MaxPathSum(root.right));
  return MaxChildPathSum.data;
};
root=new Node(5);
root.left=new Node(11);
root.right=new Node(3);
root.left.right=new Node(15);
root.left.left=new Node(4);
root.right.right=new Node(12);

console.log(MaxPathSum(root));