const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

function bfs(graph, root) {
  const nodesLength = {}; //stores the distances to the root node

  for (let i = 0; i < graph.length; i++) {
    nodesLength[i] = Infinity; //we start all distances at infinity, which indicates that a node is not reachable from the root node
  }
  nodesLength[root] = 0; //distance from root from root reassigned to 0

  const queue = [root]; //keeps track of nodes to visit
  let current; //keeps track of current node we are traversing

  while (queue.length != 0) {
    //keep traversing nodes until there are no more nodes to visit
    current = queue.shift(); //dequeue the first node to traverse (FIFO structure)
    let currentConnected = graph[current]; //all nodes connected to the current node (remember that each index in the graph is an array of nodes)
    let neighborIdx = []; //keep track of list of nodes connected to current node
    let idx = currentConnected.indexOf(1); //gets the first node connected to the current node because the number 1 indicates a connection
    //if there is no node connected to the current node (no indexOf 1) the idx will be set to -1
    while (idx != -1) { //as long as idx is not -1
      neighborIdx.push(idx); //push the idx to the neighborIdx array (our list of neighbors)
      idx = currentConnected.indexOf(1, idx + 1); //searches for the next connected node
    }
    for (let j = 0; j < neighborIdx.length; j++) { //now that we know all the nodes connected to the current node, we loop through them
      if (nodesLength[neighborIdx[j]] == Infinity) { //if the value from the nodesLength array at the index of the neighbor from the neighborIdx array equals infiinty, that means we haven't set the distance at that node yet
        nodesLength[neighborIdx[j]] = nodesLength[current] + 1; //increment the nodesLength array at that index for the current node plus 1 
        queue.push(neighborIdx[j]); //push the neighbor into the queue so the next time through the while loop we will check the distances for that neighbor too
      }
    }
  }
  return nodesLength; //at the end, return the nodesLength array
}

console.log(bfs(exBFSGraph, 1));
