// 保存ボタンをクリックしたときの処理
document.getElementById('saveButton').addEventListener('click', function() {
  // 入力されたテキストを取得
  var inputText = document.getElementById('inputArea').value;

  // 現在の日時を取得
  var currentDate = new Date();
  var timestamp = currentDate.toLocaleString();

  // テキストと日時を表示
  var savedTextElement = document.getElementById('savedText');
  savedTextElement.textContent = '保存されたテキスト: ' + inputText + ' (保存日時: ' + timestamp + ')';
});
