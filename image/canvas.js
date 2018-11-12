var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext('2d');

function Texture(fileName) {
    var me = this;
    this.loaded = false;
    this.image = new Image();

    this.image.onload = function () {
        me.loaded = true;
    };

    this.image.src = fileName;

    this.draw = function (ctx) {
        if (me.loaded) {
            ctx.drawImage(me.image, 50, 50);
        }
    }

}

var texture = new Texture('images/500.jpg');
setTimeout(function () {
    texture.draw(ctx);
}, 5000);


console.log(texture.loaded);