class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}

function reverseList(head){
  let current=head;
  let prev=null;
  while(current!=null){
    const next=current.next;
    current.next=prev;
    prev=current;
    current=next;
  }
  let current1=prev;
  while(current1!=null){
      console.log(current1.data);
      current1=current1.next;
  }
}

head =new Node(1);
head.next=new Node(1);
head.next.next=new Node(3);
head.next.next.next=new Node(5);
reverseList(head);
