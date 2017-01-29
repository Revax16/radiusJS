/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.render = function (objs) {
    objs = RADJS.get.entities(objs);
    RADJS.sys.objects = objs;
    var view = RADJS.view,
        ctx = view.ctx,
        debug = RADJS.debug.render;
    debug.ctx = ctx;

    ctx.clearRect(0, 0, view.width, view.height);

    for (var i in objs) {
        var o = objs[i];
        ctx.save();
        ctx.translate(o.pos.x, o.pos.y);
        ctx.rotate(o.angle);
        ctx.translate(-(o.anchor.x * o.width), -(o.anchor.y * o.height));
        if (o.texture !== null) {

        } else {
            ctx.fillStyle = o.color;
            ctx.fillRect(0, 0, o.width, o.height);
        }
        if (RADJS.debug.collision) {
            if (o.collide('top')) debug.collideTop(o);
            if (o.collide('right')) debug.collideRight(o);
            if (o.collide('bottom')) debug.collideBottom(o);
            if (o.collide('left')) debug.collideLeft(o);
        }
        ctx.restore();
    }
}
