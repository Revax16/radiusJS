/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

function Radius (opt_cb, cb) { //558
    if (typeof opt_cb === 'function') {
        cb = opt_cb;
        opt_cb = {debug:{}};
    }
    if (!opt_cb.hasOwnProperty('debug')) opt_cb.debug = {};
    RADJS.debug.collision = opt_cb.debug.collision || false;
    RADJS.debug.show = opt_cb.debug.show || [];
    RADJS.debug.stats = opt_cb.debug.stats || false;

    if (opt_cb.width === 'auto') {
        RADJS.view._auto.w = true;
        opt_cb.width = window.innerWidth;
    }
    if (opt_cb.height === 'auto') {
        RADJS.view._auto.h = true;
        opt_cb.height = window.innerHeight;
    }

    RADJS.view.width = opt_cb.width || 600;
    RADJS.view.height = opt_cb.height || 400;
    RADJS.view.parent = opt_cb.parent || document.body;

    var c = document.createElement('CANVAS');
    c.width = RADJS.view.width;
    c.height = RADJS.view.height;
    RADJS.view.parent.appendChild(c);

    RADJS.view.canvas = c;
    RADJS.view.ctx = c.getContext('2d');

    RADJS.input.initializeKeyEvents();

    var refresh = function () {
        RADJS.objectsManager();
        RADJS.collision(RADJS.sys.objects);
        RADJS.particlesManager();
        if (RADJS.view._auto.w) RADJS.view.canvas.width = window.innerWidth;
        if (RADJS.view._auto.h) RADJS.view.canvas.height = window.innerHeight;
        RADJS.update();
        var now = Date.now(),
            ms = now - RADJS.sys.now,
            fps = 1000 / ms;
        RADJS.sys.now = now;
        RADJS.sys.fps = Math.round(fps);
        RADJS.sys.ms = ms;
        RADJS.sys.tick++;
        window.requestAnimationFrame(refresh);
    }
    refresh();
    cb(RADJS);
    RADJS.setup();
}
var RADJS = {
    sys:{
        uid:0,
        time:0,
        nextUID:function () {return this.uid++},
        objects:[],
        now:Date.now(),
        fps:0,
        ms:0,
        tick:0,
    },
    view:{
        width:null,
        height:null,
        parent:null,
        canvas:null,
        ctx:null,
        _auto:{w:false, h:false}
    },
    debug:{
        render:{},
        collision:null,
        show:[],
        stats:false,
    },
    input:null,

    /* --- Class --- */
    Object:null,
    Text:null,
    Entity:null,
    Texture:null,
    State:null,

    Rect:null,
    Circle:null,
    Line:null,
    Draw:null,

    /* --- Objects --- */
    _textures:[],
    _entities:[],
    _states:[],
    _particleEmitters:[],
    _texts:[],

    /* --- Method --- */
    render:null,
    vector:null,
    states:null,

    setup:function () {},
    update:function () {},

    get:{
        texture:null,
        objects:null,
        entity:null
    },
}
