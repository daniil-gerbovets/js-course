let first_arr = [];
let second_arr = [];

let getRandomNumberInteger = (min, max) => Math.floor(Math.random() * (max-min+1))+min;

// const arrSum = arr => arr.reduce((a,b) => a + b, 0)

function arrSum (arr){
let sum = 0;

for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
}
return sum;
}

function logWinner (arrNumber){
    if (arrNumber==1) console.log('First array is the winner')
    else console.log('Second array is the winner');
}

let endCondition = true;

let arrSum_first=0, arrSum_second=0;

while (endCondition){

    arrSum_first = arrSum(first_arr);
    arrSum_second = arrSum(second_arr);

    console.log("First: ", arrSum_first);
    console.log("Second: ", arrSum_second);

    //In case if the winner is exist
    if (arrSum_first>100 && arrSum_first<105 && arrSum_second>100 && arrSum_second<105) {
        if (arrSum_first>arrSum_second) {
            logWinner(1);
            endCondition = false;
        }
        else {
            logWinner(2);
            endCondition = false;
        }
    }
    
    //In case if the winner doesn't exist
    if (arrSum_first>=105 || arrSum_second>=105) {
        first_arr.splice(0, first_arr.length);
        second_arr.splice(0, second_arr.length);
        console.log('The game starting over ...');
        continue;
    }

    first_arr.push(getRandomNumberInteger(2,10));
    second_arr.push(getRandomNumberInteger(2,10));
}
