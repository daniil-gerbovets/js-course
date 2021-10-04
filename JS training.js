//Callback's
/* 
function ArrayGen(callback){
    let arr = [1,2,3,4,5];
    callback(arr);
    console.log(arr);
}

function ArrCut(arr_input){
    arr_input.splice(3,2);
}

ArrayGen(ArrCut); */


/* //Closure

function variable(){
    let m = 255;
    return function() {
        m++;
        console.log(m);
    }
}

let test = variable();

test();
test(); */


/* 
//Promises
let a = 98;
console.log(a);

let b = new Promise (function(resolve, reject){
    setTimeout(()=>{
        resolve(a=99);
    }, 2000);
});

b.then(function() {
    console.log(a);
}) */