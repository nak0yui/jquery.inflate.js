/*! jQuery plugin jquery.inflate.js - v0.1.0 - 2012-08-03
* https://github.com/nak0yui/jquery.inflate.js
* Copyright (c) 2012 nak0yui; Licensed MIT, GPL */

(function($) {
  'use strict';
  
  var copyInherit = function(args) {
    var target = args[0] || {},
        length = args.length,
        options = args,
        i, src, name, copy, clone;
    if (typeof target !== 'object') {
      target = {};
    }
    for (i = 1; i < length; i++) {
      for (name in options[i]) {
        src = target[name];
        copy = options[i][name];
        target[name] = copy;
      }
    }
    return target;
  };
  
  // Static method.
  $.inflate = function() {
    return copyInherit(arguments);
  };
  
}(window.jQuery));
