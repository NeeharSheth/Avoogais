var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 23;
player_y = 100;

var face = ["hulk_face.png", "ironman_face.png", "spiderman_face.png", "thor_face.png"]

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_obj = Img;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(150);
        player_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_obj);
    });

}

function new_image(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        block_img_obj = Img;
        block_img_obj.scaleToWidth(block_image_width);
        block_img_obj.scaleToHeight(block_image_height);
        block_img_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_img_obj);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keypressed = e.keyCode;

    if (keypressed == "70") {
        new_image("hulk_face.png")
        console.log("f");
    }

    if (keypressed == "66") {
        new_image("ironman_body.png")
        console.log("b");
    }

    if (keypressed == "82") {
        new_image("thor_right_hand.png")
        console.log("r");
    }

    if (keypressed == "72") {
        new_image("hulk_left_hand.png")
        console.log("h");
    }

    if (keypressed == "76") {
        new_image("spiderman_legs.png")
        console.log("l");
    }

    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keypressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
}

function right(){
    if (player_x<=653){
    player_x+= block_img_width;
    canvas.remove(player_obj);
    player_update();
console.log("x= "+player_x+"y= "+player_y);
console.log("block width "+block_img_width);
}
}

function left(){
    if (player_x>=0){
    player_x-= block_img_width;
    canvas.remove(player_obj);
    player_update();
console.log("x= "+player_x+"y= "+player_y);
console.log("block width "+block_img_width);
}
}

function down(){
    if (player_y<=460){
    player_y+= block_img_height;
    canvas.remove(player_obj);
    player_update();
console.log("x= "+player_x+"y= "+player_y);
console.log("block width "+block_img_height);
}
}

function up(){
    if (player_y>0){
    player_y-= block_img_height;
    canvas.remove(player_obj);
    player_update();
console.log("x= "+player_x+"y= "+player_y);
console.log("block width "+block_img_height);
}
}