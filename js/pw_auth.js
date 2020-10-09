(function() {
  'use strict';
  const storageKey = 'secret_token';
  const token = atob(document.querySelector('script[data-id="AnyID"][data-token]').getAttribute('data-token'));
  let value = fetch();

  while (!assertEqual(value)) {
    // パスワードの入力を求める
    value = window.prompt('パスワードを入力してください');
    // WebStorageに保存
    save(value);
  }

  /**
   * 認証処理
   * @param {String} key
   * @return {Boolean}
   */
  function assertEqual(key) {
    return (token === key);
  }

  /**
   * WebStorageからアイテムを取得
   * @return {String}
   */
  function fetch() {
    return atob(localStorage.getItem(storageKey));
  }

  /**
   * WebStorageにアイテムを保存
   * @param {String} key
   * @return {void}
   */
  function save(key) {
    localStorage.setItem(storageKey, btoa(key));
  }
})();
