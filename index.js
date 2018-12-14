const getRouteInfo = require('./src/directions');
const requestToll = require('./src/requestToll');

main();

async function main(){
    const origin = '-33.9642466,150.875037';
    const destination = '-33.7930349,150.8363779';

    const routeInfo = await getRouteInfo(origin, destination);    
    const polyline = routeInfo.polyline;    

    const tollResult = await sendPolyLineToTollAPI(polyline);    
    console.log("The total cost for your route is $"+tollResult.totalCost+" and duration is "+Math.round(routeInfo.duration/60)+" minutes");
}

async function sendPolyLineToTollAPI(polyline){
    try {
        return await requestToll(polyline, (new Date()).toJSON(), false);
    } catch(error){
        console.log("Error getting toll data", error);
    }
};