module.exports = (req, res) => {
  if (req.method === 'POST') {
    // リクエストボディからテキストデータを取得
    const textData = req.body.text;

    // テキストデータをデータベースに保存するロジックを実装する
    // 例: MongoDBを使用する場合
    // const savedData = saveToMongoDB(textData);

    // 必要に応じてレスポンスを返す
    res.status(200).json({ message: 'テキストが保存されました。' });
  } else {
    // POST以外のリクエストにはエラーレスポンスを返す
    res.status(405).json({ error: 'メソッドは許可されていません。' });
  }
};
