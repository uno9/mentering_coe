// 180分カウントダウン


var interval_id;
var start_click = false;
var time = 7200;//10800
var min = 7200;//10800
var sec = 0;

$(document).ready(function () {
    console.log("ready");
    interval_id = setInterval(count_down, 1000);

});


function count_down() {
    var display = document.getElementById('display');
    // console.log(time);
    if (time === 1) {
        display.innerHTML = "TIME UP!3秒後に移動します";
        setTimeout(function () {
            window.location.href = '../html/chooseRoom.html';
        }, 3000);

    } else {
        time--;

        min = Math.floor(time / 60);
        sen = Math.floor(time % 60);
        display.innerHTML = '0' + min + ':' + sen;
        if (sen < 10) {
            display.innerHTML = '0' + min + ':' + '0' + sen;
        }
    }

}


// function count_stop() {
//     clearInterval(interval_id);
// }


function count_reset() {
    time = 7200;
    min = 0;
    sen = 0;
    var reset = document.getElementById('display');
    reset.innerHTML = '120:00';

}


