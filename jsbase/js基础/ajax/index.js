let reqHeader = 'http://localhost:9000'
function getAjax(url) {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            console.log('%c [  ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', this.status)
            if (this.status === 200) {
                console.log('%c [  ]-9', 'font-size:13px; background:pink; color:#bf2c9f;', this.response)
                resolve(this.response)
            } else {
                console.log(this.statusText)
                reject(new Error(this.statusText))
            }
        }
        xhr.onerror = function () {
            console.log(this.statusText)
            reject(new Error(this.statusText))
        }
        xhr.responseType = 'json';
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send(null)
    })
}
getAjax(reqHeader + '/user/test').then(res => console.log(res))
