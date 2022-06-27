const buildGraph = (edges)=>{
    const graph = { };
    for(let edge of edges){
        const [a, b] = edge;
        if(!(a in graph)){
             graph[a] = [ ];
        }
        if(!(b in graph)) {
            graph[b] = [ ];   
        }                                                           //conversion of edge list to graph
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};
const hasPath=(edges)=>{
    
    if(src==dst){
        
    }
};
const edges =[
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],                           //edge list
    ['k', 'l'],
    ['o', 'n'],
]

