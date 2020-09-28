import colors from "../styles/colours";

// Blob from https://codepen.io/shshaw/pen/MXvLzm

var circ = (4*(Math.sqrt(2)-1)/3);

var count = Math.PI;

export const draw = (ctx, frameCount, cx,cy,r) => {

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cx*2, cy*2);

    var c;
    var offsetX = 20 * Math.sin(count);
    var offsetY = 15 * Math.cos(count * 2);
    r = r/2;

    count += 0.01;

    ctx.translate(cx,cy); // translate to centerpoint

    ctx.beginPath();

    // top right
    c = circ + ( 0.2 * Math.sin(count) );
    ctx.moveTo(offsetX + 0, offsetY + -r);
    ctx.bezierCurveTo(
        offsetX + c*r, offsetY + -r, 
        offsetX + r, offsetY + -c*r, 
        offsetX + r, offsetY + 0
    );

    // bottom right
    c = circ + ( 0.2 * Math.cos(count) );
    ctx.bezierCurveTo(
        offsetX + r, offsetY + c*r, 
        offsetX + c*r, offsetY + r, 
        offsetX + 0, offsetY + r
    );

    // bottom left
    c = circ + ( 0.2 * Math.sin(count * 2) );
    ctx.bezierCurveTo(
        offsetX + -c*r, offsetY + r, 
        offsetX + -r, offsetY + c*r, 
        offsetX + -r, offsetY + 0
    );

    // top left
    c = circ + ( 0.2 * Math.cos(count + 1) );
    ctx.bezierCurveTo(
        offsetX + -r, offsetY + -c*r, 
        offsetX + -c*r, offsetY + -r, 
        offsetX + 0, offsetY + -r
    );

    ctx.fillStyle = colors.blob;

    ctx.fill();
}
