module.exports = function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}