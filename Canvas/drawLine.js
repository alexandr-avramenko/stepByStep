var canvas = document.getElementById('myCanvas'),
    context = canvas.getContext('2d');

function Line (x1, y1, x2, y2) {
    var me = this;



    this.x1 = x;
    this.y1 = y;
    this.x2 = x + Math.cos(angle * Math.PI / 180) * length;
    this.y2 = y + Math.cos(angle * Math.PI / 180) * length;
    this.color = 'black';

    this.setColor = function(newColor){
        me.color = newColor;
    };

    this.draw = function(ctx) {
       ctx.save();
       ctx.rotate(me.rotation * Math.PI/180);
       ctx.strokeStyle = me.color;
       ctx.lineWidth = 500;
       ctx.beginPath();
       ctx.moveTo(me.x1, me.y1);
       ctx.lineTo(me.x2, me.y2);
       ctx.stroke();
       ctx.reset();
    }
}