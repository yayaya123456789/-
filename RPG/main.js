var mapArray,ctx,currentImgMainX,currentImgMainY;
var imgMountain,imgMain,imgEnemy;
$(document).ready(function(){
    mapArray = [0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMainX =0;
    currentImgMainY =0;
    imgMain.onload=function()//等到圖片載入後再執行這一段
    {
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for(var x in mapArray)
                {
                    if(mapArray[x]==1)
                    {
                        ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                    }else if(mapArray[x]==3)
                        {
                        ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                        }
                }
        };};
});
$(document).keydown(function(event){
    var targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    event.preventDefault();//鎖死其他瀏覽器鍵盤的功能
    switch(event.which){
        case 37:
            targetImgMainX = currentImgMainX-200;   
            targetImgMainY = currentImgMainY;       //console.log("左");
            cutImagePositionX=175;
            break;
        case 38:
            targetImgMainX = currentImgMainX;       
            targetImgMainY = currentImgMainY-200;   //console.log("上");
            cutImagePositionX=355;
            break;
         case 39:
            targetImgMainX = currentImgMainX+200;   
            targetImgMainY = currentImgMainY;       //console.log("右");
            cutImagePositionX=540;
            break;
         case 40:
            targetImgMainX = currentImgMainX;       
            targetImgMainY = currentImgMainY+200;   //console.log("下");
            cutImagePositionX=0;
            break;
        default:
            return ;
    }
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0)
    {
        targetBlock=targetImgMainX/200+targetImgMainY/200*3;
    }else
    {
        targetBlock=-1;//停止，不移動
    }
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);//清空
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3)
    {
        
    }
    else
    {
        $("#talkBox").text("");
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);//在原地可以轉頭,範圍一樣在200~200
    
    switch(mapArray[targetBlock])
        {
            case undefined://撞牆
                $("#talkBox").text("邊界");
                break;
            case 1://障礙
                $("#talkBox").text("有山");
                break;
            case 2://終點
                $("#talkBox").text("抵達終點");
                break;
            case 3://有人
                $("#talkBox").text("嗨~");
                break;
        }
});