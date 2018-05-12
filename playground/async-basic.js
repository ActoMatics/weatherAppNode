console.log('Starting app')

setTimeout(() => {
    console.log('Inside callback')
}, 1500);

setTimeout(() => {
    console.log('Second inside callback')
}, 0);

console.log('Finishing sync log app')
