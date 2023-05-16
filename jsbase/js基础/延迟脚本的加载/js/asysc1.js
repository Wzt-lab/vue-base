let asyncBox1 = document.getElementById('async-box');
setTimeout(() => {
    console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', asyncBox1, 2)
}, 1000);