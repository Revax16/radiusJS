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

        this.objects = [];

        RADJS._states.push(this);
    }
    add (objs) {
        if (!Array.isArray(objs)) objs = [objs];
        this.objects = this.objects.concat(objs.filter(function (o) {return o.type === 'entity';}));
    }
    remove (objs) {
        if (!Array.isArray(objs)) objs = [objs];
        for (var i in objs) {
            var o = RADJS.get.entity(objs[i]);
            this.objects = this.objects.filter(function (e) {return o.id !== e.id});
        }
    }
}
