/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.Particle = class {
    constructor (args) {
        this.p = args.p;
        this.type = 'particle';
        this.id = 'p' + this.p.nextUID();

        this.pos = RADJS.vector(RADJS.random(this.p.pos.x, this.p.pos.x + this.p.width), RADJS.random(this.p.pos.y, this.p.pos.y + this.p.height)),
        this.v = args.vel;
        this.vel = RADJS.vector(0,0);
        this.width = args.width;
        this.height = args.height;
        this.color = args.color;
        this.anchor = RADJS.vector(0, 0);
        this.texture = null;
        this._angle = args.angle;
        this.gra = args.gra;

        this.duration = {
            current:args.duration,
            initial:args.duration
        }

        if (Array.isArray(this.v.x)) this.vel.x = RADJS.random(this.v.x[0], this.v.x[1]);
        else this.vel.x = this.v.x;
        if (Array.isArray(this.v.y)) this.vel.y = RADJS.random(this.v.y[0], this.v.y[1]);
        else this.vel.y = this.v.y;

        if (this._angle === 'auto') this.angle = Math.atan2(this.vel.x, this.vel.y);
        else this.angle = this._angle;
    }
    update () {
        if (this.gra) this.vel.y += 0.2;
        this.pos.add(this.vel.x, this.vel.y);
        if (this._angle === 'auto') this.angle = Math.atan(this.vel.y / this.vel.x) //- (Math.PI / 4);
        this.height = this.height * (this.duration.current / this.duration.initial);
        this.width = this.width * (this.duration.current / this.duration.initial);

        if (this.duration.current === 0 || this.width < 1 || this.width < 1) {
            this.p.remove(this.id);
        }
        this.duration.current--;
    }
}
