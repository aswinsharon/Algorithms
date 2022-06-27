const breadthFirst=(graph,source)=>{
   const queue=[source];

   while(queue.length>0){
       const current=queue.shift();
       console.log(current);

       for(let neighbour of graph[current]){
           queue.push(neighbour);
       }
   }
};
const graph={     //adjacency list
    a:['c','b'],            //interchanging c and b is not problem
    b:['d'],                                                                
    c:['e'],                                                              
    d:['f'],
    e:[ ],
    f:[ ]
};
breadthFirst(graph,'a');
