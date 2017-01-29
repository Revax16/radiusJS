/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.vector = function (x, y) {
    x = x === undefined ? 0 : x;
    y = y === undefined ? 0 : y;
    return {
        x:x,
        y:y,
        add:function (x, y) {
            this.x = x === undefined ? this.x : x + this.x;
            this.y = y === undefined ? this.y : y + this.y;
        },
        sub:function (x, y) {
            this.x = x === undefined ? 0 - this.x : x - this.x;
            this.y = y === undefined ? 0 - this.y : y - this.y;
        },
        mult:function (x, y) {
            this.x = x === undefined ? this.x : x * this.x;
            this.y = y === undefined ? this.y : y * this.y;
        },
        div:function (x, y) {
            this.x = x === undefined ? this.x : x / this.x;
            this.y = y === undefined ? this.y : y / this.y;
        }
    }
}
