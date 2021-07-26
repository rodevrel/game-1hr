Crafty.init(500,350, document.getElementById('game'));

var player = Crafty.e('2D, Canvas, Color, Twoway, Gravity').attr({x: 0, y: 0, w: 50, h: 50}).color('green').twoway(200).gravity('Floor');

var f1 = Crafty.e('2D, Color, Floor').attr({x: -100, y: 5000, w: 1000, h: 100}).color('#F5F5DC')
