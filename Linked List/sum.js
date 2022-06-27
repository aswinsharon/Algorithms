class Node{
    constructor(val){
      this.data=val;
      this.next=null;
    }
}
const sumLinkedlist=(head)=>{
  if(head == null)
  {
    return 0;
  }
  var current=head;
  var sum=0;
  while(current != null){
    sum=sum+current.data;
    current=current.next;
  }
  return sum;
};

head =new Node(1);
head.next=new Node(2);
head.next.next=new Node(3);
head.next.next.next=new Node(6);

console.log(sumLinkedlist(head));
//1-->2-->3-->6