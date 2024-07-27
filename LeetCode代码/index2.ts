type Node = {
  id: number;
  parent: number;
};
type TreeNode = {
  id: number;
  children: TreeNode[];
};
const list: Node[] = [
  { id: 5, parent: 4 },
  { id: 2, parent: 0 },
  { id: 3, parent: 1 },
  { id: 1, parent: 0 },
  { id: 4, parent: 1 },
  { id: 0, parent: -1 },
];
function buildTree(nodes) {
  const mapNode = new Map();
  let root = null;
  nodes.forEach(node => {
    mapNode.set(node.id,{id:node.id,children:[]})
  });
  console.log(nodes)
}
buildTree(list);
