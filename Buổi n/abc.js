var p = 2;//phút
var s = 30;//giây

var timeout = null

function start() {

}
function stop() {
    clearTimeout(timeout);
}
function start()

if (p == null) {
    p = parseInt(document.getElementById('p').value);
    s = parseInt(document.getElementById('s').value);
}

if (s == -1) {
    p -= 1;
    s = 59;
}

if (p == -1) {
    clearTimeout(timeout);
    return false
}

document.getElementById('p').innerText = m.toString() + ":";
document.getElementById('s').innerText = s.toString();

timeout = setTimeout(function() {
    s--;
    start();
}, 1000);