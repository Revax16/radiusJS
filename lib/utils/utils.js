/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.get.texture = function (name) {
    var r = RADJS.textures.filter(function (t) {return t.name === name});
    if (r.length === 0) return undefined;
    else return r[0];
}
RADJS.get.entity = function (obj) {
    var r = [];
    if (typeof obj === 'string') r = RADJS.entities.filter(function (e) {return e.name === obj});
    if (typeof obj === 'number') r = RADJS.entities.filter(function (e) {return e.id === obj});
    if (typeof obj === 'object') r = RADJS.entities.filter(function (e) {return e.id === obj.id});
    if (r.length === 0) return undefined;
    else return r[0];
}
RADJS.get.entities = function (objs) {
    if (!Array.isArray(objs)) objs = [objs];
    var es = [];
    for (var i in objs) {
        var o = objs[i];
        if (o.type === 'entity') es.push(o);
        else if (o.type === 'container') es = es.concat(o.entities);
        else if (o.type === 'state') es = es.concat(o.entities);
    }
    return es;
}
RADJS.get.state = function (name) {
    var r = RADJS._states.filter(function (s) {return s.name === name});
    if (r.length === 0) return undefined;
    else return r[0];
}
