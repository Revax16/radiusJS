/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.objectsManager = function () {
    var objs = RADJS._entities.concat(RADJS._texts);
    for (var i in objs) {
        var o = objs[i];
        o.update();
    }
}
