class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}
function zipperList(head1,head2){
    var tail=head1;
    var current1=head1.next;
    var current2=head2;
    var count=0;
    while(current1!=null && current2!=null){
        if(count%2==0){
            tail.next=current2;
            current2=current2.next;
        }
        else{
            tail.next=current1;
            current1=current1.next;
        }
        tail=tail.next;
        count++;
    }
}
head1=new Node(1);
head1.next=new Node(3);
head1.next.next=new Node(5);
head1.next.next.next=new Node(7);
head1.next.next.next.next=new Node(8);
head1.next.next.next.next.next=new Node(9);

head2=new Node(2);
head2.next=new Node(4);
head2.next.next=new Node(6);

zipperList(head1,head2);
