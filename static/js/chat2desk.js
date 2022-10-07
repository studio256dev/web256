window.chat24_token = "0603f11aef469bd06d04af6c05cbf5e4";
window.chat24_url = "https://livechatv2.chat2desk.com";
window.chat24_socket_url ="wss://livechatv2.chat2desk.com/widget_ws_new";
window.chat24_show_new_wysiwyg = "true";
window.chat24_static_files_domain = "https://storage.chat2desk.com/";
window.lang = "ru";
window.fetch("".concat(window.chat24_url, "/packs/manifest.json?nocache=").concat(new Date().getTime())).then(function (res) {
  return res.json();
}).then(function (data) {
  var chat24 = document.createElement("script");
  chat24.type = "text/javascript";
  chat24.async = true;
  chat24.src = "".concat(window.chat24_url).concat(data["application.js"]);
  document.body.appendChild(chat24);
});
