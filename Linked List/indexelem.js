class Node{
    constructor(val){
      this.data=val;
      this.next=null;
    }
}

const indexElem = (head,index) => {
    var count = 0;
    var current = head;
   while(current != null){
      if(count == index){
          console.log("Element of index is:"+current.data);
          break;
      }
      count++;
      current=current.next;
   }
 
};                   
                                                                      // 1--->18--->3--->6--->null                                                                                         //  0        1        2       3                                                                                   
head =new Node(1);
head.next=new Node(18);
head.next.next=new Node(3);
head.next.next.next=new Node(6);

indexElem(head,2);