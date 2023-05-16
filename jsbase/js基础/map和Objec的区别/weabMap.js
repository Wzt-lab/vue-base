let weakMap = new WeakMap();
weakMap.set({}, '123');
weakMap.set([], '123');
// 键必须使用对象
// weakMap.set('a', '123')