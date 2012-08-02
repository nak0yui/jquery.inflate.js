/*! jQuery plugin jquery.inflate.js - v0.1.0 - 2012-08-02
* https://github.com/nak0yui/jquery.inflate.js
* Copyright (c) 2012 nak0yui; Licensed MIT, GPL */

(function($) {
  'use strict';
  
  var copyInherit = function(target, options) {
    var src, name, copy, clone;
    if (typeof target !== 'object') {
      target = {};
    }
    for (name in options) {
      src = target[name];
      copy = options[name];
      target[name] = copy;
    }
    return target;
  };
  
  // Static method.
  $.inflate = function(target, options) {
    return copyInherit(target, options);
  };
  
}(window.jQuery));
