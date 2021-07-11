//Graphs:
//Graphs are a collection of data and the relationships between those pieces of data

//data pieces: nodes or vertices
//connections are called edges

//adjacency list:

// const undirectedGraph = {
//   'Node1': ['Node2', 'Node3'],
//   'Node2': ['Node1'],
//   'Node3': ['Node3'],
// };
//or
const undirectedGraph2 = [[1, 2], [0], [2]];

//adjacency matrix:
//2D array where each nested array has the same number of elements as the outer array
//ex: 1s mean there is a relationship, 0s mean there is no relationship
const adjacencyMatrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

//To build the graph:
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const adjacencyList = new Map();

//add Node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

//add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

//create the graph:
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(adjacencyList);
// Map(11) {
//   'PHX' => [ 'LAX', 'JFK' ],
//   'BKK' => [ 'MEX', 'LIM' ],
//   'OKC' => [ 'JFK' ],
//   'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
//   'LAX' => [ 'PHX', 'MEX' ],
//   'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
//   'EZE' => [ 'MEX' ],
//   'HEL' => [ 'JFK' ],
//   'LOS' => [ 'JFK' ],
//   'LAP' => [],
//   'LIM' => [ 'MEX', 'BKK' ]
// }

function bfs(start) {
  const visited = new Set(); //to hold the nodes we have visited
  const queue = [start]; //holds the nodes to visit

  while (queue.length > 0) {
    //while our queue isn't empty
    const airport = queue.shift(); //grab our first node (FIFO structure)
    const destinations = adjacencyList.get(airport); //will get all destinations for the airport(or it's children nodes) so we can loop over them
    for (const destination of destinations) {
      queue.push(destination); //add those children nodes to our queue

      //in this situation we are seeing if 'BKK' is a destination of our airport
      if (destination === "BKK") {
        console.log("Found it!");
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

//DFS Depth First Search:

function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log(`DFS found Bangkok`);
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("PHX");
