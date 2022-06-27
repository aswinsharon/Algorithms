class Node{
    constructor(val){
    this.val=val;
    this.next=null;
}
}
const LinkedlistValues=(head)=>{
    const arr=[ ];
    let current=head;
    while(current!=null){
        arr.push(current.val);
        current=current.next;
    }
    return arr;
};
const a=new Node('A');
const b=new Node('B');
const c=new Node('C');
const d=new Node('D');

a.next=b;
b.next=c;
c.next=d;
console.log(LinkedlistValues(a));