'use strict';

const arithmetic = require('../lib/arithmetic.js');


var assert = require('assert');

describe('Arithmetic', () =>{
    it('should add values correctly', () => {
        assert.equal(5, arithmetic.add(4,1));
    });

    it('should subtract values correctly', () => {
        assert.equal(10, arithmetic.subtract(14, 4));
    });

    it('should return null when adding non-numbers', () => {
        assert.equal(null, arithmetic.add(15, "wizards"));
    });

    it('should return null when subtracting non-numbers', () => {
        assert.equal(null, arithmetic.subtract(15, "Gandalf"));
    });
});

