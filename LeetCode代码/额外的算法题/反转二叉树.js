function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

function invertTree (root) {
  if (root != null) {
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
  }
  return root

}

//对二叉树进行赋值的操作
const obj = new TreeNode(4);
obj.left = new TreeNode(2);
obj.left.left = new TreeNode(1);
obj.left.right = new TreeNode(3);
obj.right = new TreeNode(7);
obj.right.left = new TreeNode(6);
obj.right.right = new TreeNode(9);

//进行二叉树的反转操作
let res = invertTree(obj);
console.log(res)