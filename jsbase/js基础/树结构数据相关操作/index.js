// 定义一个树形结构对象
const tree = {
    id: 1,
    text: 'Node1',
    children: [
      { id: 2, text: 'Node2', children: [] },
      {
        id: 3,
        text: 'Node3',
        children: [
          { id: 4, text: 'Node4', children: [] },
          { id: 5, text: 'Node5', children: [] }
        ]
      }
    ]
  };
  
  // 递归函数查找指定节点及其路径
  function findNodeWithPath(tree, id, path = []) {
    if (tree.id === id) {
      // 找到目标节点，将路径加上当前节点并返回
      return [...path, tree];
    } else if (tree.children) {
      for (let i = 0; i < tree.children.length; i++) {
        const newPath = [...path, tree]; // 将当前节点添加到路径中
        const nodePath = findNodeWithPath(tree.children[i], id, newPath);
        if (nodePath) {
          return nodePath;
        }
      }
    }
    return null; // 没有找到目标节点
  }
  
  // 查找 id 为 4 的节点及其路径
  const nodePath = findNodeWithPath(tree, 4);
  console.log(nodePath);