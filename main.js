var canvas= new fabric.Canvas("myCanvas");

block_img_width= 30;
block_img_height= 30;

player_x=23;
player_y= 100;

var player_obj="";

var

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_obj= Img;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(150);
        player_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_obj);
    });

}

function new_img(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_img_obj= Img;
        block_img_obj.scaleToWidth(block_img_width);
        block_img_obj.scaleToHeight(block_img_height);
        block_img_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_obj);
    });

}