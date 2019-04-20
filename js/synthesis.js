// 音声合成


// IDを取得
if ('speechSynthesis' in window) {
    console.log('合成に対応してます');
} else {
    alert('合成に対応していません');
}



$('#output').on('click', '.speak', function () {
    // clickを押した子要素の親idを取得
    var divID = $(this).parent().attr('id');
    console.log(divID);

    // clickをした class="speak" のidを取得
    var textID = $(this, '.speak').attr('id');
    console.log(textID);

    // 親divとspeakのidが同じならば
    if (divID == textID) {
        console.info(true);
        console.log('再生');

        // clickを押したspeakボタンの親要素に含まれる#chat_textのテキストを取得
        var docTEXT = $(this).parent().children('#chat_text').text();
        console.log(docTEXT);

        // 発言を作成(textarea内のval = textを取ってくる)
        var uttr = new SpeechSynthesisUtterance(docTEXT);

        // こえの設定------------------------------------
        // 言語の指定
        // アメリカ英語：es-US イギリス英語：en-GB 中国語：zh-CN 韓国語：ko-KR
        // 日本語を指定：ja-JP
        uttr.lang = 'ja-JP'
        // 速度(0.1-10)→初期値：１ 倍速：２、半分の倍速：0.5
        uttr.rate = 1.3
        // 音程(高さ 0-1)→初期値：１
        uttr.pitch = 1
        // 音量(0-1)→初期値：１
        uttr.volume = 1
        // ----------------------------------------------


        // 発言を再生 (発言キューにtextを追加)
        speechSynthesis.speak(uttr)

        textId = null;
        divID = null;
        docTEXT = null;
        uttr = null;

        // console.log(textId);
        // console.log(divID);
        // console.log(docTEXT);
        // console.log(uttr);


    } else {
        console.warn(false);
    }

});




$('#output').on('click', '.cancel', function () {
    console.log('停止');
    // 発言を停止(発言キューをクリアにして止まる) 
    speechSynthesis.cancel()
});


$('#output').on('click', '.pause', function () {
    console.log('一時停止');
    // 一次停止(発言キューを保持して止まる) 
    speechSynthesis.pause()

});


$('#output').on('click', '.resume', function () {
    console.log('再開');
    // 再生再開(一時停止解除) 
    speechSynthesis.resume()

});
