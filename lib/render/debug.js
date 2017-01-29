/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.debug.render = {
    ctx:null,
    collideDefault:function () {
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'red';
        this.ctx.stroke();
    },
    collideTop:function (o) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(o.width, 0);
        this.collideDefault();
    },
    collideRight:function (o) {
        this.ctx.beginPath();
        this.ctx.moveTo(o.width, 0);
        this.ctx.lineTo(o.width, o.height);
        this.collideDefault();
    },
    collideBottom:function (o) {
        this.ctx.beginPath();
        this.ctx.moveTo(o.width, o.height);
        this.ctx.lineTo(0, o.height);
        this.collideDefault();
    },
    collideLeft:function (o) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, o.height);
        this.collideDefault();
    }
}
