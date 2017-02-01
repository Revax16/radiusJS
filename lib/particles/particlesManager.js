/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.particlesManager = function () {
    for (var i in RADJS._particleEmitters) {
        var pe = RADJS._particleEmitters[i],
            ps = pe.particles;
        pe.create();
        for (var i in ps) {
            var p = ps[i];
            p.update();
        }
    }
}
