let asyncBox = document.getElementById('async-box');
setTimeout(() => {
    console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', asyncBox, 1)
}, 1000);