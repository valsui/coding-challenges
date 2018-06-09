// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.
//
//
// OJ's undirected graph serialization:
// Nodes are labeled uniquely.
//
// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
// As an example, consider the serialized graph {0,1,2#1,2#2,2}.
//
// The graph has a total of three nodes, and therefore contains three parts as separated by #.
//
// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
// Second node is labeled as 1. Connect node 1 to node 2.
// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
// Visually, the graph looks like the following:
//
//        1
//       / \
//      /   \
//     0 --- 2
//          / \
//          \_/
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

 // wrong!!!
var cloneGraph = function(graph) {
  if (graph === null) {
    return null
  }

  const nodesSet = getNodes(graph);
  const mapping = {};

  nodesSet.forEach(node => {
    mapping[node] = node.label;
  });

  nodesSet.forEach(node => {
    let newNode = new UndirectedGraphNode(mapping[node]);
    for (let i = 0; i < node.neighbors.length; i++) {
      let neighbor = node.neighbors[i];
      let newNeighbor = new UndirectedGraphNode(mapping[neighbor]);
      newNode.neighbors.push(newNeighbor);
    }
  });


  return mapping[graph];
};

function getNodes(node) {
  const q = [];
  q.push(node);

  const set = new Set();
  set.add(node.label);

  while (q.length !== 0) {
    let node = q.shift();

    for (let i = 0; i < node.neighbors.length; i++) {
        let neighbor = node.neighbors[i];
        if (!set.has(neighbor)) {
          set.add(neighbor);
          q.push(neighbor);
        }
    }
  }
  return set;
}


// dfs
function cloneGraph(graph) {

  if (!graph) return graph;
  var map = {};
  return traverse(graph);

  function traverse(node) {
    if (!map[node.label]) {
      var newNode = new UndirectedGraphNode(node.label);
      map[node.label] = newNode;
      newNode.neighbors = node.neighbors.map(traverse);
    }
    return map[node.label];
  }
}

// BFS
var cloneGraph = function(graph) {
    if (graph === null) {
        return null;
    }

    const nodesSet = new Set();
    const mapping = new Map();
    
    // get all nodes
    let queue = [];
    nodesSet.add(graph);
    queue.push(graph);
    while (queue.length != 0) {
        let node = queue.shift();
        for (let i = 0; i < node.neighbors.length; i++) {
            if (!nodesSet.has(node.neighbors[i])) {
                nodesSet.add(node.neighbors[i]);
                queue.push(node.neighbors[i]);
            }
        }
    }
    console.log(graph);
    console.log(nodesSet);

    // clone nodes
    nodesSet.forEach(node => {
      mapping.set(node, new UndirectedGraphNode(node.label));
    });

    // clone edges
    nodesSet.forEach(node => {
    let newNode = mapping.get(node);
    for (let i = 0; i < node.neighbors.length; i++) {
      let neighbor = node.neighbors[i];
      let newNeighbor = mapping.get(neighbor);
      newNode.neighbors.push(newNeighbor);
    }
    });
 
    return mapping.get(graph);
};
