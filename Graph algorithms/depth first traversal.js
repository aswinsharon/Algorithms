
const depthFirst=(graph,source)=>{
 const stack=[source];

 while(stack.length>0){
     const current=stack.pop();
     console.log(current);

     for(let neighbour of graph[current]){
            stack.push(neighbour);
     }
 }
};

const graph={     //adjacency list
    a:['c', 'b'],
    b:['d'],                                                                
    c:['e'],                                                              
    d:['f'],
    e:[ ],
    f:[ ]
};
depthFirst(graph,'a');
