// vue的底层渲染器renderer函数调用
let app = document.getElementById('app');
// 引入组件
const myComponent = {
    render() {
        return {
            tag: 'div',
            props: {
                onclick: () => { console.log('myComponent') }
            },
            children: 'myComponent'
        }
    }
}
const data = {
    tag: 'div',
    children: [
        {
            // 这里是为了可以封装组件
            tag: myComponent
        },
        {
            // 要渲染的dom元素
            tag: 'input',
            // 要添加的监听事件
            props: {
                onclick: () => { console.log(123) },
                onkeydown: () => { console.log('keydown') }
            },
            // 渲染的内容
            children: 'click event'
        }
    ]
}
function renderer(data, root) {
    if(typeof data.tag === 'string') {
        mountElement(data, root)
    } else if (typeof data.tag === 'object') {
        mountCompoent(data, root);
    }
}
function mountElement(data, root) {
    const el = document.createElement(data.tag);
    for (let key in data.props) {
        if(/^on/.test(key)) {
            el.addEventListener(key.substring(2).toLowerCase(), data.props[key]);
        }
    }
    if(typeof data.children === 'string') {
        const text = document.createTextNode(data.children);
        console.log('%c [ text ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', text)
        el.appendChild(text);
    }else if(data.children instanceof Array) {
        data.children.forEach(item => { renderer(item, root) })
    }
    root.appendChild(el)
}
function mountCompoent(data, root) {
    let vnode = data.tag.render();
    console.log('%c [ vnode ]-57', 'font-size:13px; background:pink; color:#bf2c9f;', vnode)
    renderer(vnode, root);
}
renderer(data, app);