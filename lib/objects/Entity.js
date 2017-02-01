/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.Entity = class extends RADJS.Object {
    constructor (name, args) {
        if (typeof args !== 'object') args = {};
        super(name, args);
        this.type = 'entity';

        /* Native from Object class :
         * pos, color, height, width, vel, angle, anchor and pined
         */
        this.texture = RADJS.get.texture(args.texture) || null;
        this.col = args.col === undefined ? false : args.col;

        this.collisions = [];

        RADJS._entities.push(this);
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
