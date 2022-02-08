
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */
class GraphNode {
  val: number
  neighbors: GraphNode[]
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = (val===undefined ? 0 : val)
    this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}

// Version 1
const cloneGraph = (node: GraphNode | null): GraphNode | null | any => {
  if (!node) {
    return null;
  }

  const clonedNodes: GraphNode[] = [];
  const cloneNode = (node: GraphNode) : GraphNode => {
    // if the node already exists in our array of cloned nodes
    if (clonedNodes[node.val]) {
      // return the clone from clonedNodes array
      return clonedNodes[node.val];
    }

    // create a clone for the given node, we don't have cloned neighbors as of now
    const clonedNode: GraphNode = (clonedNodes[node.val] = {
      val: node.val,
      neighbors: []
    });
    // iterate through the neighbors to generate their clones
    //  prepare a list of cloned neighbors to be added to the cloned ndoe
    node.neighbors.forEach((neighbor, index) => {
      clonedNode.neighbors[index] = cloneNode(neighbor);
    });
    return clonedNode;
  }

  return cloneNode(node)
};

// Time Complextiy: O(N + M), where N is the number of nodes (vertices) and M is a number of edges
// Space Complexity: O(N), space is occupied by the visted hash map

// Version 2
const cloneGraphTwo = (node: GraphNode | null): GraphNode | null | any => {
  // create a hash map to store the reference of the copy of all the nodes that have already been visited and cloned
  // the key would be the node of the original graph
  // the corresponding value would be the corresponding cloned node of the cloned graph
  // we'll be stuck in a cycle if we don't use a hash map
  const visited: Map<number, GraphNode> = new Map<number, GraphNode>();
  // traverse through graph for a given node using this helper function
  return cloneNode(node, visited);
}

const cloneNode = (node: GraphNode | null, visited: Map<number, GraphNode>): GraphNode | null | any => {
  if (!node) return null;

  // a copy of a given node is the node's value, initially set with no neighbors
  const copy: GraphNode = new GraphNode(node.val, []);
  // they key node's value  and value is the clone node
  visited.set(copy.val, copy)

  // iterate through the  neighbors to generate their clones
  // push lists of cloned neighbors into a copy node's neighbors
  node.neighbors.forEach((neighbor: GraphNode) => {
    // copied is key/value pair in our hash table for a given value of a neighbor node
    const copied = visited.get(neighbor.val);
    // if copied exists in our hash table, we will push it's values into a given node's neighbors array
    // if a key/value does not exists in the hash map, we will recursively call cloneNode on the neighbor node and push the return value into a given node's neighbors array
    copy.neighbors.push(copied ? copied : cloneNode(neighbor, visited));
  })

  return copy;
}
