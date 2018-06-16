let asyncAdd = (a, b) => {
 return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Arguements must be numbers!');
        }
    }, 1500)
 });
};

asyncAdd(2, 6).then((res)=>{
    console.log('Results is: ', res);
    return asyncAdd(res, 78);
}).then((resSecondPromise) => {
    console.log('Should be 86 :', resSecondPromise);
}).catch((err) =>{
    console.log('err :', err);
});

// let somePromise = new Promise((resolve, reject) =>{
//     // resolve('Hey! my promise works!');
// setTimeout(() => {
//     reject('unable to resolve promise');
//     }, 2500);
// });

// // will only be called when the promise fullfiled
// // you can only resolve / reject a promise once
// somePromise.then((message) => {
//     console.log('Success:', message);
// }, (err) =>{
//     console.log('Error: ', err);
// })
