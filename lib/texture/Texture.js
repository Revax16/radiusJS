/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.Texture = class {
    constructor (name, src, arg) {
        if (typeof name !== 'string' || typeof src !== 'string') throw 'Texture error';
        if (typeof arg !== 'object') arg = {};
        this.name = name;
        this.id = RADJS.sys.nextUID();

        this.img = new Image();
        this.img.src = src;

        this.sprites = arg.sprites || [];

        RADJS._textures.push(this);
    }
}
