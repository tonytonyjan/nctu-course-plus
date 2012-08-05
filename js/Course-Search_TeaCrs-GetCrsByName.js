// 只顯示前 10 個，再多會太慢
$('td:nth-child(3) > a').slice(0, 10).each(function(){
  var url = this.href;
  var options = {url:url};
  $(this).closest('td').nextAll('td:nth-child(5)').append(FBLikeBtn(options));
});