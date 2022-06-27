class Node{
	constructor(val){
		this.data=val;
		this.next=null;
	}
}
function insertHead(head,elem){
    newHead=new Node(elem);
    newHead.next=head;
    head=newHead;

   var current=newHead;
    while(newHead!=null){
          console.log(current.data);
          current=current.next;
    }
}
head =new Node(1);
head.next=new Node(2);
head.next.next=new Node(3);
head.next.next.next=new Node(5);
insertHead(head,100);