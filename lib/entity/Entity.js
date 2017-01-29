/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.Entity = class {
    constructor (name, args) {
        if (typeof name !== 'string') throw 'Entity error';
        if (typeof args !== 'object') args = {};
        this.name = name;
        this.id = RADJS.sys.nextUID();
        this.type = 'entity';

        this.pos = args.pos || RADJS.vector(0,0);
        this.texture = RADJS.get.texture(args.texture) || null;
        this.color = args.color || 'CCC';
        this.height = args.height || 40;
        this.width = args.width || 40;
        this.vel = args.vel || RADJS.vector(0,0);
        this.angle = args.angle || 0;
        this.anchor = args.anchor || RADJS.vector(0, 0);
        this.col = args.col === undefined ? false : args.col;


        this.pined = args.pined || null;
        this.collisions = [];

        RADJS.entities.push(this);
    }
    update () {
        if (this.pined === null) {
            this.pos.add(this.vel.x, this.vel.y);
        } else {
            this.pos.x = RADJS.get.entity(this.pined).pos.x;
            this.pos.y = RADJS.get.entity(this.pined).pos.y;
        }
    }
    getBounds () {
        return {
            top:this.pos.y - (this.height * this.anchor.y),
            right:this.pos.x + this.width - (this.width * this.anchor.x),
            bottom:this.pos.y + this.height - (this.height * this.anchor.y),
            left:this.pos.x - (this.width * this.anchor.x),
            vel:this.vel,
            anchor:{top:this.height * this.anchor.y,left:this.width * this.anchor.x},
            overlaps:function (o) {
                return (this.left < o.right &&
                        o.left < this.right &&
                        this.top < o.bottom &&
                        o.top < this.bottom);
            }
        }
    }
    collide (a) {
        if (typeof a === 'string') {
            if (this.collisions.filter(function (c) {return c[0] === a}).length > 0) return true;
        } else if (typeof a === 'object') {
            if (this.collisions.filter(function (c) {return c[1].id === a.id}).length > 0) return true;
        }
    }
}
