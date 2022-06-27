class Node{
	constructor(val){
		this.data=val;
		this.next=null;
	}
}
function insert(head,elem,loc){

	var newNode=new Node(elem);
	var current=head;
	var count=0;
	var prev=null;
	while(current!=null){
		if( loc==count){
			prev.next=newNode;
			newNode.next=current;
			break;
		}
	
		prev=current;
		current=current.next;
		count++;
	}
	var current1=head;
	while(current1!=null){
		console.log(current1.data+'--->');
		current1=current1.next;
	}
}
head =new Node(1);
head.next=new Node(2);
head.next.next=new Node(3);
head.next.next.next=new Node(5);
insert(head,4,3);

 