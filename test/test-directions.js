const {describe, it} = require('mocha');
const {expect} = require('chai');
const directions = require('../src/directions');

describe('directions', function(){
    it('should give an object with polyline and duration', async () => {
        const p = await directions('-33.9642466,150.875037', '-33.7930349,150.8363779');
        expect(p).to.be.an('object').that.has.ownProperty('polyline');
        expect(p).to.have.ownProperty('duration');
    });
});