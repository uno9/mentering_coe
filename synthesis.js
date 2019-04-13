// < !--表示テキストを音声合成 -->
// < !-- < script type = "text/javascript" src = "../00_Coeco/synthesis.js" ></script > -->


if ('speechSynthesis' in window) {
    console.log('対応してます');
} else {
    alert('対応していません');
}

// speakBtnを押したときに処理
$('#speak-btn').on('click', function () {
    console.log('再生');

    // 発言を作成(textarea内のval=textを取ってくる) 
    const uttr = new SpeechSynthesisUtterance(v.text);

    console.log(v.text);

    // こえの設定------------------------------------
    // 言語の指定
    // アメリカ英語：es-US イギリス英語：en-GB 中国語：zh-CN 韓国語：ko-KR
    // 日本語を指定：ja-JP
    uttr.lang = 'ja-JP'
    // 速度(0.1-10)→初期値：１ 倍速：２、半分の倍速：0.5
    uttr.rate = 4
    // 音程(高さ　0-1)→初期値：１
    uttr.pitch = 1
    // 音量(0-1)→初期値：１
    uttr.volume = 1
    // ----------------------------------------------


    // 発言を再生 (発言キューにtextを追加)
    speechSynthesis.speak(uttr)

});

$('#cancel-btn').on('click', function () {
    console.log('停止');
    // 発言を停止(発言キューをクリアにして止まる) 
    speechSynthesis.cancel()

});

$('#pause-btn').on('click', function () {
    console.log('一時停止');
    // 一次停止(発言キューを保持して止まる) 
    speechSynthesis.pause()

});

$('#resume-btn').on('click', function () {
    console.log('再開');
    // 再生再開(一時停止解除) 
    speechSynthesis.resume()

});



