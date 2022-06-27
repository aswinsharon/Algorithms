class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;

    }
}
//preorder
const depthFirstValues = (root) =>{
  if(root ==null)
  {
      return [ ];
  }
  const leftValues=depthFirstValues(root.left); // [b, d, e]
  const rightValues=depthFirstValues(root.right); // [c, f]
  return [root.val,...leftValues,...rightValues];  //... -unpacks array
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

console.log(depthFirstValues(a));