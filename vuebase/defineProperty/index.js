class Observer {
    constructor(value) {
        this.value = value;
        if(!Array.isArray(value)) {
            this.walk(value)
        }
    };
    walk(obj) {
        for(let key of Object.keys(obj)) {
            defineReactive(obj, key, obj[key])
        }
    }
}
class Dep {
    constructor() {
        this.subs = [];
    }
    addSubs (sub) {
        this.subs.push(sub)
    }
    removeSub (sub) {
        remove(this.subs, sub)
    }
    depend () {
        if(window.target) {
            this.addSubs(window.target)
        }
    }
    notify() {
        const subs = this.subs.slice();
        for(let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
    remove (arr, sub) {
        if (arr.length) {
            const index = arr.indexOf(sub);
            if (index > -1) {
                return arr.splice(index, 1)
            }
        }
    }
}
class Watcher {
    constructor(vm, exOrFn, cb) {
        this.vm = vm;
        this.getter = parsePath(exOrFn);
        this.cb = cb;
        this.value = this.get();
    }
    get() {
        window.target = this;
        let value = this.getter.call(this.vm, this.vm);
        window.target = undefined;
        return value;
    }
    update() {
        const oldValue = this.value;
        this.value = this.get();
        this.cb.call(this.vm, this.value, oldValue)
    }
}
const bailRE = /[^\w.$]/
function parsePath (path) {
    if (bailRE.test(path)) {
        return
    }
    const segments = path.split('.');
    return function (obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}
function defineReactive(data, key, value) {
    if(typeof value === 'object') {
        new Observer(value);
    }
    let dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log('%c [  ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', `访问${key}:`,value)
            dep.depend();
            return value
        },
        set(newValue) {
            if(newValue === value) {
                return
            }
            dep.notify();
            console.log(`设置${key}值`,newValue);
            value = newValue
        }
    })
};

let obj = {
        a: 1,
        b: 2,
        c: {
            a: 1
        }
    };
new Observer(obj)
console.log(parsePath('c.a')())

console.log(obj.c.a)
obj.c.a = 2
