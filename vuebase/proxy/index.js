/**
 * target -> key -> 副作用函数
 * 
 * */ 
let obj = {
    text: '123',
    ok: true,
    ccc: '1111111',
    ddd: '2222222',
    inputValue: '',
    foo: 1
};
let activeEffect;
// 事件栈，嵌套调用
const effectStack = [];
const bucket = new WeakMap();
// 任务队列
const jobQueue = new Set();
// 使用Promise.resolve创建一个微队列，把任务添加进去
const p = Promise.resolve();
// 一个标志代表是否还在刷新队列
let isFlushing = false;
function flushJob() {
    if (isFlushing) return;
    isFlushing = true;
    p.then(() => {
        console.log('%c [  ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', jobQueue)
        jobQueue.forEach(job => job())
    }).finally(() => {
        isFlushing = false
    })
}
function effect(fn, options = {}) {
    /**
     * 1.先把原先的依赖清除
     * 2.重新执行副作用函数，再重新收集依赖，这么做是为了预防下面那种情况
     * doucument.getElementById('id') = data.ok ? data.text : 'not'
     * 当data.ok为true时，改变ok和text的值都会重新执行副作用函数
     * 但是当把data.ok改为false时，只有改变data.ok的值才会重新执行副作用函数，改变data.text不会执行副作用函数
     * 所以要先把依赖去除然后再重新执行副作用函数，去重新收集依赖
     * */ 
    const effectFn = () => {
        activeEffect = effectFn;
        effectStack.push(activeEffect);
        cleanup(effectFn);
        fn();
        effectStack.pop();
        activeEffect = effectStack[effectStack.length - 1] || '';
    };
    effectFn.options = options
    effectFn.deps = [];
    effectFn();
}
// 代理原始数据
let data = new Proxy(obj, {
    get: function(target, key) {
        if(!activeEffect) return target[key];
        track(target, key);
        return target[key];
    },
    set: function(target, key, newValue) {
        target[key] = newValue;
        trigger(target, key);
    }
});
// 清除依赖
function cleanup(effectFn) {
    for(let i = 0; i < effectFn.deps.length; i++) {
        const deps = effectFn.deps[i];
        deps.delete(effectFn);
    }
    effectFn.deps.length = 0;
};
// 在 get 拦截函数内调用 track 函数追踪变化
function track(target, key) {
    let depsMap = bucket.get(target);
    if(!depsMap) bucket.set(target, depsMap = new Map());
    let deps = depsMap.get(key);
    if(!deps) depsMap.set(key, deps = new Set());
    deps.add(activeEffect);
    // 收集依赖
    activeEffect.deps.push(deps);
}
// 在 set 拦截函数内调用 trigger 函数触发变化
function trigger(target, key) {
    let depsMap = bucket.get(target);
    if(!depsMap) return;
    const effects = depsMap.get(key);
    /**
     * 如果直接执行effexts && newEffects.forEach(fn => fn())这行代码
     * 会出现死循环
     * 因为这里先执行了cleanup函数去清楚依赖，然后执行副作用函数，会重新收集依赖，一个删一个增。
     * 在调用 forEach 遍历 Set 集合时，如果一个值已经被访问过了，
     * 但该值被删除并重新添加到集合， 如果此时 forEach 遍历没有结束，
     * 那么该值会重新被访问。代码会无限执行。
     * 构造另外一个 Set集合并遍历它，这样就不会无限执行了
     * */ 
    const newEffects = new Set();
    effects.forEach(item => {
        if(item !== activeEffect) {
            newEffects.add(item);
        }
    });
    newEffects && newEffects.forEach(fn =>{
        if(fn.options.scheduler) {
            fn.options.scheduler();
        }else{
            fn();
        }
    });
}
// 支持嵌套
// function testEffect() {
//     console.log('testEffect1')
//     const app = document.getElementById('app');
//     effect(() => {
//         console.log('testEffect2')
//         const app1 = document.getElementById('app1');
//         app1.innerHTML = data.ccc;
//         effect(() => {
//             console.log('inputValue');
//             const span = document.getElementsByClassName('input-value')[0];
//             span.innerHTML = data.inputValue;
//         })
//     })
//     app.innerHTML = data.ddd;
// }
// effect(testEffect);


// 打印最终的值，多次调用只会刷新一次,相当于vue里多次改变了值，只会刷新一次dom元素并且值是最新的

const fn = () => { console.log(data.foo)};
effect(fn , {
    scheduler() {
        jobQueue.add(fn);
        flushJob();
    }
});
data.foo ++ 
data.foo ++;
data.foo ++;
// let input = document.getElementsByClassName('input')[0];
// input.addEventListener('change', function () {
//     data.inputValue = this.value;
//     console.log(this.value);
// })
// effect(() => {
//     const app = document.getElementById('app');
//     app.innerHTML = data.ccc;
// })
// effect(() => {
//     const app1 = document.getElementById('app1');
//     app1.innerHTML = data.ok ? data.text : 'not';
// })
// setTimeout(() => {
//     data.ok = false;
//     // data.text = '456';   
// }, 1000);
// setTimeout(() => {
//     // data.ok = false;
//     data.text = '456';   
// }, 2000);
// setTimeout(() => {
//     // data.ok = false;
//     data.ccc = '222222';   
// }, 2000);
// setTimeout(() => {
//     // data.ok = false;
//     data.ccc = '33333';
// }, 3000);
