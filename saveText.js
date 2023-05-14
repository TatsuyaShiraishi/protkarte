const { MongoClient } = require('mongodb');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const textData = req.body.text;

    try {
      // MongoDBへの接続
      const uri = 'mongodb://<ホスト名>:<ポート番号>/<データベース名>';
      const client = new MongoClient(uri);
      await client.connect();

      // コレクションの取得
      const database = client.db('<データベース名>');
      const collection = database.collection('<コレクション名>');

      // テキストデータの保存
      const result = await collection.insertOne({ text: textData });

      // 接続のクローズ
      await client.close();

      // レスポンスを返す
      res.status(200).json({ message: 'テキストが保存されました。', insertedId: result.insertedId });
    } catch (error) {
      console.error('データベースエラー:', error);
      res.status(500).json({ error: 'データベースエラーが発生しました。' });
    }
  } else {
    res.status(405).json({ error: 'メソッドは許可されていません。' });
  }
};
