/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.debug.render = {
    ctx:null,
    /* --- FPS --- */
    fps:function () {
        this.fpsObjects[1].text = RADJS.sys.fps + ' FPS';
        return this.fpsObjects;
    },
    fpsObjects:[new RADJS.Entity('fps-container', {pos:RADJS.vector(0, 0), width:70, height:23,color:'26401B'}),
            new RADJS.Text(RADJS.sys.fps, {color:'79F024', pos:RADJS.vector(5, 16), font:{size:'14px'}})],
    /* --- MS --- */
    ms:function () {
        this.msObjects[1].text = RADJS.sys.ms + ' MS';
        return this.msObjects;
    },
    msObjects:[new RADJS.Entity('ms-container', {pos:RADJS.vector(0, 23), width:70, height:23,color:'19203A'}),
            new RADJS.Text(RADJS.sys.ms, {color:'6BF1F5', pos:RADJS.vector(5, 39), font:{size:'14px'}})],
    /* --- Collisions --- */
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
