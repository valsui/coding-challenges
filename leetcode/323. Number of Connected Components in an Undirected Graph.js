// Given n nodes labeled from 0 to n - 1 and a list of undirected edges
// (each edge is a pair of nodes),
// write a function to find the number of connected components in an undirected graph.
//
// Example 1:
//      0          3
//      |          |
//      1 --- 2    4
// Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.
//
// Example 2:
//      0           4
//      |           |
//      1 --- 2 --- 3
// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.
//
// Note:
// You can assume that no duplicate edges will appear in edges.
// Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

class UF {
  constructor(n) {
    this.id = new Array(n);
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
    this.numComponent = n;
  }

  find(i) {
    while (i !== this.id[i]) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
    return i;
  }

  union(p, q) {
    let i = this.find(p);
    let j = this.find(q);

    if (i !== j) {
      this.numComponent--;
    }
    this.id[i] = j;
  }

  getNumComponent() {
    return this.numComponent;
  }
}
var countComponents = function(n, edges) {
  const uf = new UF(n);

  for (var i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1])
  }

  return uf.getNumComponent();
};

const edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
console.log(countComponents(5, edges));