// 音声認識でテキスト化
SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

// 使用チェック
if ('SpeechRecognition' in window) {
    console.log('対応しています');
} else {
    alert('対応していません');
}

// マイクを通じた音声を自動的に認識
let recognition = new SpeechRecognition();

// アメリカ英語：es-US イギリス英語：en-GB 中国語：zh-CN 韓国語：ko-KR
// 日本語を指定：ja-JP
recognition.lang = 'ja-JP';

// interim(インタラム):暫定的 ->認識中の音声を文字化
recognition.interimResults = true;

// 認識期限(沈黙の1分までは暫定的にとらえる)
recognition.continuous = true;

// 確定した認識
let finalTranscript = '';



recognition.onresult = (event) => {

    recognition.onresult = (event) => {

        // 暫定的な認識
        let interimTranscript = '';

        // 配列に結果が入ってきたとき(暫定的な状況から認識start)
        for (let i = event.resultIndex; i < event.results.length; i++) {

            // consoleのresults[i][0]に入った認識語を出力
            let transcript = event.results[i][0].transcript;
            console.log(event.results[i].isFinal);


            // false(終了)なら確定認識を出力
            if (event.results[i].isFinal) {
                alert('認識終了');
                finalTranscript += transcript;

                // 音声認識がおわったら送信する
                $('#send').on('click', function () {
                    if (file_blob != null) {
                        chatPostRef.push({
                            name: $('#name').val(),
                            text: $('#text').val(),
                            file: file_url,
                            blob: file_blob.type,
                            time: ymd()
                        });
                        $('#text').val('');
                        $('#imgfile').val('');
                        $('#audiofile').val('');
                        $('#videofile').val('');

                        file_url = null;
                        file_blob = null;

                    } else {
                        chatPostRef.push({
                            name: $('#name').val(),
                            text: $('#text').val(),
                            time: ymd()
                        });
                        $('#text').val('');
                        $('#imgfile').val('');
                        $('#audiofile').val('');
                        $('#videofile').val('');

                        file_url = null;
                        file_blob = null;

                    }

                });

                // true(認識中)なら暫定認識を出力
            } else {
                interimTranscript = transcript;
            }

            if (transcript == 'ストップ') {
                recognition.stop();
            }
        }

        // textにhtmlを表示させる
        text.innerHTML = finalTranscript + interimTranscript;
    }
};


$('#start_btn').on('click', function () {
    recognition.start();
});


$('#stop_btn').on('click', function () {
    // 音声認識終了
    recognition.stop();
});
