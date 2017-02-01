/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.Object = class {
    constructor (name, args) {
        if (typeof name !== 'string') throw 'Object error';
        if (typeof args !== 'object') args = {};
        this.name = name;
        this.id = RADJS.sys.nextUID();
        this.type = 'object';

        this.pos = args.pos || RADJS.vector(0,0);
        this.color = args.color || 'CCC';
        this.height = args.height || 40;
        this.width = args.width || 40;
        this.vel = args.vel || RADJS.vector(0,0);
        this.angle = args.angle || 0;
        this.anchor = args.anchor || RADJS.vector(0, 0);

        this.pined = args.pined || null;
    }
    update () {
        if (this.pined === null) {
            this.pos.add(this.vel.x, this.vel.y);
        } else {
            this.pos.x = RADJS.get.entity(this.pined).pos.x;
            this.pos.y = RADJS.get.entity(this.pined).pos.y;
        }
    }
}
