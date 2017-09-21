'use strict';

const greet = require('../lib/greet.js');

var assert = require('assert');

describe('Greet', () => {

  it('should return null if user does not enter string', () => {
        
    assert.equal(null, greet(42));
        
  });

  it('should return Hello World', () => {
        
    assert.equal('Hello World', greet('World'));
        
  });
});
