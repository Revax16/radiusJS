/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.Text = class extends RADJS.Object {
    constructor (text, args) {
        if (typeof args !== 'object') args = {font:{}};
        if (!args.hasOwnProperty('font')) args.font = {};

        super(String(text), args);
        this.type = 'text';

        /* Native from Object class :
         * pos, color, height, width, vel, angle, anchor and pined
         */
        this.texture = RADJS.get.texture(args.texture) || null;
        this.text = text || 'New Text';
        this.font = {
            family:args.font.family || 'Arial',
            size:args.font.size || '16px',
        }

        RADJS._texts.push(this);
    }
}
