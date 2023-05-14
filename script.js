// Firebaseの初期化
firebase.initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  // その他の設定...
});

// Firestoreへの参照を取得
const firestore = firebase.firestore();

// 保存ボタンをクリックしたときの処理
document.getElementById('saveButton').addEventListener('click', async function() {
  const inputText = document.getElementById('inputArea').value;

  try {
    // テキストデータを保存
    await firestore.collection('texts').add({ text: inputText });
    
    // 保存成功メッセージを表示
    const savedTextElement = document.getElementById('savedText');
    savedTextElement.textContent = 'テキストが保存されました。';

    // 入力エリアをクリア
    document.getElementById('inputArea').value = '';
  } catch (error) {
    console.error('データベースエラー:', error);
    // エラーメッセージを表示
    const savedTextElement = document.getElementById('savedText');
    savedTextElement.textContent = '保存中にエラーが発生しました。';
  }
});
