$('td:first-child > font > a').slice(0, 10).each(function(){
  var url = this.href;
  var options = {url: url, dataLayout: "button_count"};
  $(this).closest('td').next().find('font').append(FBLikeBtn(options));
});