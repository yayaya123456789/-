/*$(document).ready(function(){
    $("input").click(function()
    {
        $("H1").text($("li:first").text());
        
    });
});
$(document).ready(function(){
    $("input").click(function()
    {
        $("H1").text($("li:last").text());
        <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiemO3L-oXhAhVW5rwKHbGEBhgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.ytower.com.tw%2Frecipe%2Fiframe-recipe.asp%3Fseq%3DA02-2613&psig=AOvVaw1fgj1wgVjR-ZygD5kMKRBB&ust=1552801524411082">
    });
});

$(document).ready(function(){
    $("input").click(function()
    {
        $("H1").text($("li").eq(1).text());
    });
}); 
*/
var picture=[
    "https://cw1.tw/CW/images/article/201702/article-58a50e8280597.jpg",
    "https://3.bp.blogspot.com/-erNvuQGE3O8/V4JBBPHIO2I/AAAAAAAA4Gc/X7pPiH5oi5onQJ9kHSJt6bckGABbvX6bQCKgB/s400/nEO_IMG_x00%2B%25282%2529.jpg",
    "https://tshop.r10s.com/ff1/509/d51e/03a9/70e2/a6f3/687b/11a8e682fd2c600ce3781e.jpg"
]
/*創一個圖片陣列*/
$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListItem=$("li").length;//計算有幾筆資料 得到3筆
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);//0~2...
        
        $("H1").text($("li").eq(randomChildNumber).text());//eq從0開始
        $("img").attr("src",picture[randomChildNumber]);
        });
    });