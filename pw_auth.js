/*
<script async
  data-id="AnyID"
  data-token="cGFzc3dvcmQ="
  src="//example.com/embed.js">
</script>
*/
(function() {
  'use strict';
  STORAGE_KEY = 'secret_token';
  const token = atob(document.querySelector('script[data-id="AnyID"][data-token]').getAttribute('data-token'));

  console.log(token);

  // レンダリングが始まる前に実行
  window.addEventListener('DOMContentLoaded', function () {

    // Web Storage からパスワードを取得
    // パスワードがある => 認証処理
    // パスワードがない => ウィンドウ表示
    // パスワードの入力を求める
    // 入力したパスワード => 認証処理
    // 認証OK => Web Storage に保存
    // 認証NG => 再入力を促す

    // パスワードの入力を求める
    let value = '';

    while (!assertEqual(value)) {
      value = window.prompt('パスワードを入力してください');
    }

    // 認証処理
    function assertEqual(key) {
      return (token === key);
    }

    // WebStorageからパスワードを取得
    function fetch() {
    }

    // WebStorageに保存
    function save(key) {
    }
  });
})();
