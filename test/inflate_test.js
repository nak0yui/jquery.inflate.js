/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery.inflate');

  test('is inflate', 7, function() {
    var 
    function1 = function() {
      var moge = 'function1';
    },
    function2 = function() {
      var hoge = 'function2';
    },
    settings = {
      number1: 1,
      number2: 1.5,
      string1: 'a',
      string2: 'bc',
      func: function1,
      func2: function1,
      arr: [1, 2, 3],
      arr2: [1, 2, 3],
      foo: {
        bar: true,
        moge: 'hoge'
      }
    },
    options = {
      number2: 2,
      string2: 'abc',
      func2: function2,
      arr2: [2, 3, 4],
      foo: {
        bar: false
      }
    },
    optionsCopy = {
      number2: 2,
      string2: 'abc',
      func2: function2,
      arr2: [2, 3, 4],
      foo: {
        bar: false
      }
    },
    merged = {
      number1: 1,
      number2: 2,
      string1: 'a',
      string2: 'abc',
      func: function1,
      func2: function2,
      arr: [1, 2, 3],
      arr2: [2, 3, 4],
      foo: {
        bar: false
      }
    },
    arr = [1, 2, 3],
    target = {
      init: 'first'
    },
    src1 = {
      foo: 'bar'
    },
    src2 = {
      moge: 'hoge'
    },
    src1Copy = {
      foo: 'bar'
    },
    src2Copy = {
      moge: 'hoge'
    },
    mergedThree = {
      init: 'first',
      foo: 'bar',
      moge: 'hoge'
    };
    
    
    deepEqual($.inflate({}, {}), {}, 'should be return empty object');
    $.inflate(arr, options);
    deepEqual(arr, [1, 2, 3], 'should be return target array');
    $.inflate(settings, options);
    deepEqual(settings, merged, 'should be extend');
    deepEqual(options, optionsCopy, 'options must not be modified');
    
    $.inflate(target, src1, src2);
    deepEqual(target, mergedThree, 'should be extend');
    deepEqual(src1, src1Copy, 'src1 must not be modified');
    deepEqual(src1, src1Copy, 'src1 must not be modified');
  });

}(jQuery));
