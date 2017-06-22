var mycanvas,context;
window.onload = function(){
mycanvas = document.getElementById("mycanvas");
context = mycanvas.getContext("2d");
 // drawRect();
 drawImage();

}

//绘制图形
function drawRect(){
context.fillStyle = "#F00";//颜色
// context.rotate(45);//旋转
// context.translate(200,200);//移动
// context.scale(2,0.5);//缩放
context.fillRect(0,0,100,100);
}
function drawImage(){
  var img = new Image();
  img.onload = function (){
    context.drawImage(img,10,0);
  }
  img.src="1.jpg"
}