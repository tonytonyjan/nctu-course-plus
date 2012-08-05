var froot = document.createElement("div");
froot.id = "fb-root";

var fjs = document.createElement("script");
fjs.text = '(function(d, s, id) {' +
'  var js, fjs = d.getElementsByTagName(s)[0];' +
'  if (d.getElementById(id)) return;' +
'  js = d.createElement(s); js.id = id;' +
'  js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1&appId=466709103353124";' +
'  fjs.parentNode.insertBefore(js, fjs);' +
"}(document, 'script', 'facebook-jssdk'));";

document.body.appendChild(froot);
document.body.appendChild(fjs);

function FBLikeBtn(options){
  options = typeof options == 'object' ? options : {};
  options.url = typeof options.url !== 'undefined' ? options.url : document.URL;
  options.dataLayout = typeof options.dataLayout !== 'undefined' ? options.dataLayout : "standard";
  return '<div class="fb-like" style="' + options.style + '" data-href="' + options.url + '" data-layout="' + options.dataLayout + '" data-send="false" data-width="' + options.dataWidth + '" data-show-faces="true" data-action="recommend"></div>'
}

function FBCommentBox(style){
  return '<div class="fb-comments" style="' + style + '" data-href="' + document.URL + '" data-num-posts="5" data-width="900"></div>'
}