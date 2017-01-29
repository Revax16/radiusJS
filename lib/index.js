// Only For Developpement
require('raduisJS/lib/core/Core.js');
require('raduisJS/lib/core/vector.js');

require('raduisJS/lib/state/State.js');
require('raduisJS/lib/state/states.js');

require('raduisJS/lib/input/key.js');

require('raduisJS/lib/render/render.js');
require('raduisJS/lib/render/debug.js');

require('raduisJS/lib/collision/collision.js');

require('raduisJS/lib/shape/Circle.js');
require('raduisJS/lib/shape/Draw.js');
require('raduisJS/lib/shape/Line.js');
require('raduisJS/lib/shape/Rect.js');

require('raduisJS/lib/texture/Texture.js');

require('raduisJS/lib/utils/utils.js');

require('raduisJS/lib/entity/Entity.js');

require('test.js');

function require (path) {
    var s = document.createElement('SCRIPT');
    s.src = path;
    document.body.appendChild(s);
}
