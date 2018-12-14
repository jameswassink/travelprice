const {describe, it} = require('mocha');
const {expect} = require('chai');
const requestToll = require('../src/requestToll');

describe('requestToll', function(){
    it('should give an object with totalCost parameter and breakdown array', async () => {
        const data = await requestToll(
            'pshnEixzw[_Hy@eD]oBYgCUaGu@yHw@oGu@KBA?g@GuEa@eGk@yCSqEI}FFiAFuBFaBJoCHqBCoAI_BSoAUaAUoDw@c@KqDs@uJmBqB_@gBUsBUeBCoBFsBXuAXm@RsBz@{@d@q@d@sAnAcAjAu@`AgAlBk@zAw@fCe@nB_AzEq@fDkAdGk@xBg@tAe@bAq@pA_AtA[b@mAjAq@n@cAr@iBdAsCvAo@^yBdA_Br@mCpAmBhAkBrAuAlAqAtAiB|BoBxCyArCqA|Ce@tAu@nCgBzHi@pBq@rBw@pB{@fBq@nAg@x@{AtBiArAcC`CwB`Bk@^{BnAqVrMkHzDiFfCwB|@eBj@kEhAoJnBiTnE{AXsCt@aBj@kAh@oAl@iAp@kAx@wBfBqApA}@dAuBxCoAxB_JbQoB|CwAhBuBzBqAfA}AjA}@j@gBbAq@Z{Aj@_Cx@}A^iDj@}BRiCH}BA_CIgCW}B_@}A_@cAYqBu@o@WsBcAyAy@iImFyLeImEsCgAo@_BeAeD{B_N}IkEqCmBkAuBcAsCmA_Bk@gBi@qCu@yDu@}B[}BWsMqAwHu@_Fm@_Fy@iFgAyPcE{KoCwFuAoE_AcDk@uHkAmDs@cCq@{Ai@gMkFyB{@wBs@cHyBuDaAcJkBwHoAgJgAqKiA}D[uCKeKc@sMe@oFQaE?uCN_BPoBVuB`@kDdAiCbAuBdAsGpD{JtF}Az@cAf@cA`@uA^}@RqAR}@HoBFmE@eOE{MCeKEyFK{G]wFc@yPoBODoAGgKi@qEYUDeAA_A@i@D}@NWH}@\iAt@cAfAaAzAo@tAi@pAYbAM`@E@GRoClKeA`FaBdI_AxDeBrGIRORs@hDa@vByBrKcClMm@lD',
            (new Date()).toJSON(),
            'false'
        );
        expect(data).to.be.an('object').with.ownProperty('totalCost');
        expect(data).to.have.ownProperty('breakdown').which.is.an('array');
    });
});