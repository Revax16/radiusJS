/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.collision = function (objs) {
    objs = RADJS.get.objects(objs).filter(function (o) {return o.collisions !== undefined});
    for (var i in objs) {
        var o = objs[i];
        o.collisions = [];
        for (var j in objs) {
            var no = objs[j];
            if (o.id !== no.id) {
                var b = o.getBounds(),
                    nb = no.getBounds();
                if (b.left <= nb.right && nb.left <= b.right && b.top <= nb.bottom && nb.top <= b.bottom) {
                    if (b.bottom - b.vel.y <= nb.top && (b.left !== nb.right && b.right !== nb.left)) {
                        o.collisions.push(['bottom', no]);
                        if (o.col && no.col && o.vel.y > 0) {
                            o.vel.y = 0;
                            o.pos.y = nb.top - o.height + b.anchor.top;
                        }
                    } else if (b.top - b.vel.y >= nb.bottom && (b.left !== nb.right && b.right !== nb.left)) {
                        o.collisions.push(['top', no]);
                        if (o.col && no.col && o.vel.y < 0) {
                            o.vel.y = 0;
                            o.pos.y = nb.top + no.height + b.anchor.top;
                        }
                    }
                    if (b.right - b.vel.x <= nb.left && (b.top !== nb.bottom && b.bottom !== nb.top)) {
                        o.collisions.push(['right', no]);
                        if (o.col && no.col && o.vel.x > 0) {
                            o.vel.x = 0;
                            o.pos.x = nb.left - o.width + b.anchor.left;
                        }
                    } else if (b.left - b.vel.x >= nb.right && (b.top !== nb.bottom && b.bottom !== nb.top)) {
                        o.collisions.push(['left', no]);
                        if (o.col && no.col && o.vel.x < 0) {
                            o.vel.x = 0;
                            o.pos.x = nb.left + no.width + b.anchor.left;
                        }
                    }
                }
            }
        }
    }
}
