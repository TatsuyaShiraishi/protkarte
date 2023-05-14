const admin = require('firebase-admin');

// Firebase Admin SDKの初期化
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  // Firestoreの設定
  databaseURL: 'https://<your-project-id>.firebaseio.com'
});

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const textData = req.body.text;

    try {
      // Firestoreへの参照を取得
      const firestore = admin.firestore();

      // テキストデータの保存
      const docRef = await firestore.collection('texts').add({ text: textData });

      res.status(200).json({ message: 'テキストが保存されました。', documentId: docRef.id });
    } catch (error) {
      console.error('データベースエラー:', error);
      res.status(500).json({ error: 'データベースエラーが発生しました。' });
    }
  } else {
    res.status(405).json({ error: 'メソッドは許可されていません。' });
  }
};
