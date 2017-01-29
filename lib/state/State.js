/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.State = class {
    constructor (name) {
        if (typeof name !== 'string') throw 'State error';
        this.name = name;
        this.id = RADJS.sys.nextUID();
        this.type = 'state';

        this.entities = [];

        RADJS._states.push(this);
    }
    add (objs) {
        if (!Array.isArray(objs)) objs = [objs];
        this.entities = this.entities.concat(objs.filter(function (o) {return o.type === 'entity';}));
    }
    remove (objs) {
        if (!Array.isArray(objs)) objs = [objs];
        for (var i in objs) {
            var o = RADJS.get.entity(objs[i]);
            this.entities = this.entities.filter(function (e) {return o.id !== e.id});
        }
    }
}
