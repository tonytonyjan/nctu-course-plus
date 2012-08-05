$('td:first-child a').each(function(){
  var url = this.href;
  var options = {url: url, dataLayout: "button_count"};
  var btn = $("</br>" + FBLikeBtn(options));
  $(this).closest('td').append(btn);
});