class Node{
    constructor(val){
        this.data=val;
        this.left=this.right=null;
    }
}
const SumTree=(root)=>{
    const stack=[root];
    var sum=0;
    while(stack.length>0){
        var current=stack.pop();
        sum=sum+current.data;
        if(current.left){
            stack.push(current.left);
        }
        if(current.right){
            stack.push(current.right);
        }
    }
    return sum;
};


root=new Node(5);
root.left=new Node(11);
root.right=new Node(3);
root.left.right=new Node(15);
root.left.left=new Node(4);
root.right.right=new Node(12);

console.log(SumTree(root));