class Node{
    constructor(val){
        this.data=val;
        this.left=null;
        this.right=null;
    }
}

function postOrder(root){
    const stack1=[ root ];
    const stack2 =[ ];
    while(stack1.length>0){
        root=stack1.pop();
        stack2.push(root);
        if(root.left != null){
            stack1.push(root.left);
        }
        if(root.right !=null){
            stack1.push(root.right);
        }
    }
    while(stack2.length !=0){
        root=stack1.pop();
        console.log(root.data);
    }
}
root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.left=new Node(4);
root.left.right=new Node(5);
root.left.right.left=new Node(6);
root.right.right=new Node(7);
root.right.right.right=new Node(8);

postOrder(root);