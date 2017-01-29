/**
 * RaduisJS - Game Engine
 * Copyright (C) 2017, Xavier "Revax16"
 */

RADJS.states = {
    _current:'L1',
    use:function (s) {
        this._current = RADJS.get.state(s).name;
    },
    getCurrent:function () {
        return RADJS.get.state(this._current);
    }
}
