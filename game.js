Crafty.init(500,350, document.getElementById('game'));

var player = Crafty.e('2D, Canvas, Color, Twoway, Gravity').attr({x: 0, y: 0, w: 50, h: 50}).color('green').twoway(200).gravity('Floor');

var f1 = Crafty.e('2D, Color, Floor').attr({x: 0, 5000, w: 5000 100}).color('#F5F5DC')





Crafty.viewport.clampToEntities = false;
Crafty.viewport.scale(1.5);
Crafty.one("CameraAnimationDone", function() {
    Crafty.viewport.follow(player, 0, 0);
});
Crafty.viewport.centerOn(player, .00001);
