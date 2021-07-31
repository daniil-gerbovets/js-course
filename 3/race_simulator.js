let first_arr = [];
let second_arr = [];

let getRandomNumberInteger = (min, max) => Math.floor(Math.random() * (max-min+1))+min;

 arrSum = arr => arr.reduce((a,b) => a + b, 0);

function logWinner (arrNumber){
    if (arrNumber==1) console.log('First array is the winner')
    else console.log('Second array is the winner');
}

let endCondition =true;

while (endCondition){
    first_arr.push(getRandomNumberInteger(2,10));
    console.log('First: ', arrSum(first_arr));
    if (arrSum(first_arr)>100 && arrSum(first_arr<105)) {
        logWinner(1);
        endCondition == false;
    }
    if (arrSum(first_arr)>=105) {
        first_arr.splice(0, arr.length);
        console.log('The game starting over ...');
        continue;
    }

    second_arr.push(getRandomNumberInteger(2,10));
    console.log('Second: ', arrSum(second_arr));
    if (arrSum(second_arr)>100 && arrSum(second_arr<105)) {
        logWinner(2);
        endCondition == false;
    }
    if (arrSum(second_arr)>=105) {
        second_arr.splice(0, arr.length);
        console.log('The game starting over ...');
        continue;
    }

}
