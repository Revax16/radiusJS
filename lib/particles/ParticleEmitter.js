/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.ParticleEmitter = class {
    constructor (name, args) {
        if (typeof name !== 'string') throw 'Particle Emitter error';
        if (typeof args !== 'object') args = {particles:{}};
        if (!args.hasOwnProperty('particles')) args.particles = {};
        this.name = name;
        this.id = RADJS.sys.nextUID();
        this.type = 'particleemitter';

        this.pos = args.pos || RADJS.vector(0,0);
        // this.texture = RADJS.get.texture(args.texture) || null;
        this.height = args.height || 0;
        this.width = args.width || 100;
        this.vel = args.vel || RADJS.vector(0,0);
        this.angle = args.angle || 0;
        this.anchor = args.anchor || RADJS.vector(0, 0);

        var p = args.particles;
        this.p = {
            UID:0,
            max:p.max || 300,
            total:0,
            perTick:p.perTick || 5,

            angle: p.angle || 'auto',
            color: p.color || ['000', 'BBB', 'CCC', 'DDD', 'EEE'],
            //texture:,
            duration:p.duration || 200,
            width:p.width || 10,
            height:p.height || 10,
            vel: p.vel || RADJS.vector([-.5, .5],[-.5, -2]),
            gra: p.gra || false,
        }

        this.particles = [];

        RADJS._particleEmitters.push(this);

    }
    nextUID () {
        return this.p.UID++;
    }
    create () {
        var p = this.p,
            amount = p.max - p.total >= p.perTick ? p.perTick : p.max - p.total;
        for (var i = 0; i < amount; i++) {
            p.total++;
            this.particles.push(new RADJS.Particle({
                p:this,
                width:p.width,
                height:p.height,
                duration:p.duration,
                color:p.color[0],
                vel:p.vel,
                angle:p.angle,
                gra:p.gra,
            }));
        }
    }
    remove (id) {
        this.p.total--;
        this.particles = this.particles.filter(function (o) {return o.id !== id});
    }
}
