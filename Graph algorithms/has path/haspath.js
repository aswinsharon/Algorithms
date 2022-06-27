
const hasPath=(graph,src,dest)=>{
    const queue=[src];
    let condition=false;
    while(queue.length>0){
        const current=queue.shift();
        if(current==dest){
            condition=true;
            break;
        }
        for(let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
    return condition;
};


const graph={     //adjacency list
    a:['c','b'],            //interchanging c and b is not problem
    b:['d'],                                                                
    c:['e'],                         //graph illustration in note                                     
    d:['f'],
    e:[ ],
    f:[ ]
};
console.log(hasPath(graph,'c','f'));