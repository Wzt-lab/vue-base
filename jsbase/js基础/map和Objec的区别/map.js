/**
 * map的各种方法
 * 
 * */ 
let map = new Map([
    [1, 2], ['a', 'b']
]);
// 设置值
map.set('c', 222);
// 转成字符串
console.log(JSON.stringify(Array.from(map)));
// 删除某个属性
map.delete('c');
// 获取键值
console.log(map.get(1));
// 可以使用迭代器
// 获取键map.key()
for(let data of map.keys()) {
    console.log('%c [  ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', data);
};
// 获取键值map.values()
for(let data of map.values()) {
    console.log('%c [  ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', data);
};
// 获取键和值entries
for(let data of map.entries()) {
    console.log('%c [  ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', data);
};
map.forEach((value, keys, map) => {
    console.log('%c [  ]-27', 'font-size:13px; background:pink; color:#bf2c9f;', value, keys, map);
});
// 获取某个值是否存在
console.log(map.has(1));
// 获取长度
console.log(map.size);
// 清空map数据
map.clear();
console.log(map);
