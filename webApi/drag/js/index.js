const mainBox  = document.querySelector('.main-box');
let source;
// 开始拖动元素
mainBox.ondragstart = e => {
    currentDom = e.target;
    let type = e.target.dataset.effect;
    e.dataTransfer.effectAllowed = type;
    source = e.target;
    // e.target 当前拖动元素
    console.log('dragstart', e.target)
};
// 拖动到某个元素之上
mainBox.ondragover = e => {
    // 因为浏览器不允许拖动到表格上，所以要阻止浏览器的默认行为
    e.preventDefault();
    // 触发多次
    // console.log('over', e.target);
}
function clearBgColor() {
    document.querySelectorAll('.set-bg-color').forEach(node => {
        node.classList.remove('set-bg-color')
    })
}
function getDropNode(node) {
    while(true) {
        if(node?.dataset?.drop) {
            return node;
        }
        if(!node.parentNode) return '';
        node = node.parentNode;
    }
}
mainBox.ondragenter = e => {
    clearBgColor();
    const dropNode = getDropNode(e.target);
    console.log(dropNode);
    console.log(e.dataTransfer.effectAllowed);
    if(dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
        dropNode.classList.add('set-bg-color')
    }
}

mainBox.ondrop = e => {
    clearBgColor();
    const dropNode = getDropNode(e.target);
    if(dropNode && dropNode.dataset.drop === e.dataTransfer.effectAllowed) {
        if(dropNode.dataset.drop === 'copy') {
            e.target.innerHTML = ''
            const cloned = source.cloneNode(true);
            cloned.dataset.effect = 'move'
            e.target.appendChild(cloned)
        } else {
            source.remove();
        }
    }
}
console.log(mainBox)
