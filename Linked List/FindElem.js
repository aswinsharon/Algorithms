class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}
const findElem=(head,target)=>{
  var current=head;
  var flag =false;
  while(current !=null){
      if(current.data == target)
      {
         flag=true;
         break;
      }
      current=current.next;
  }
  console.log(flag);
};
head =new Node(1);
head.next=new Node(1);
head.next.next=new Node(3);
head.next.next.next=new Node(6);

findElem(head,1);