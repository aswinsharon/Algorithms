class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;

    }
}
//preorder

const depthFirstValues=(root)=>{
      if (root == null)
      {
         return [ ];
      }
    const result = [ ];
    const stack=[ root ];
    while(stack.length > 0){
        const current=stack.pop();
        result.push(current.val);

        if(current.right)
        {
            stack.push(current.right);
        }
        if(current.left)
        {
            stack.push(current.left);
        }
    }
    return result;
}

root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.left.left = new Node(70);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.left.left.right = new Node(80);
console.log(...depthFirstValues(root));