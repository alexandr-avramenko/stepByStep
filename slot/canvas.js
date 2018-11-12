var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');





function Line(x1, y1, x2, y2) {
    var me= this;

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.color = 'black';
    this.width = '5';
    this.rotation = '';

    this.setRotation = function (newRotate) {
        me.rotation = newRotate;
    };

    this. setWidth = function (newWidth) {
        me.width = newWidth;
    };

    this.setColor = function (newColor) {
        me.color = newColor;
    };

    this.draw = function (ctx) {
        ctx.save();
        ctx.rotate(me.rotation * Math.PI / 180);
        ctx.lineWidth = me.width;
        ctx.strokeStyle = me.color;
        ctx.beginPath();
        ctx.moveTo(me.x1, me.y1);
        ctx.lineTo(me.x2, me.y2);
        ctx.stroke();
        ctx.restore();
    }

}


var line = new Line(60, 200, 100, 100);
line.setColor('red');
line.setWidth('10');
line.setRotation('10');
line.draw(context);

var newLine = new Line(90, 150, 100, 300);
newLine.draw(context);