class Node{
    constructor (val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
const breadthFirst = (root)=>{
    if(root == null)
    {
        return [ ];
    }
  const queue=[ root ]; 
  const result=[ ];
  while(queue.length>0)
  {
      const current=queue.shift();
      result.push(current.val);
      if(current.left)
      {
          queue.push(current.left);
      }
      if(current.right)
      {
          queue.push(current.right);
      }
  }
  return result;
};
const a=new Node('a');
const b=new Node('b');
const c=new Node('c');
const d=new Node('d');
const e=new Node('e');
const f=new Node('f');

a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;
console.log(...breadthFirst(a));