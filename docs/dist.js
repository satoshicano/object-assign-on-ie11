"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sym = Symbol();

var obj1 = {
  "str": 1
};

var obj2 = _defineProperty({
  "str": 2
}, sym, 2);

var obj3 = Object.assign(obj1, obj2);

if (obj1 === obj3) {
  var result = document.getElementById("result");
  result.textContent = "true";
}
