const {describe, it} = require('mocha');
const {expect} = require('chai');
const travelprice = require('../src/controller');

describe ('overall', function(){
    it('should take origin and destination and return toll price, toll duration and toll-free duration', async () => {
        const res = await travelprice.calculate('10 Gwinganna Avenue, Kiama NSW 2533, Australia', '51 Emu Rd, Glenbrook NSW');
        expect(res).to.be.an('object').with.ownProperty('tollPrice');
        expect(res).to.have.ownProperty('tollDuration');
        expect(res).to.have.ownProperty('noTollDuration');
    });
});