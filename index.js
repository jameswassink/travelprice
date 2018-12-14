const controller = require('./src/controller');

main();

async function main(){
    if (process.argv.length < 4){
        console.log("Wrong Arguments Given");
    }
    else {
        const result = await controller.calculate(process.argv[2], process.argv[3]);
        console.log(result);
    }
}