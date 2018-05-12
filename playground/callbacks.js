let getUser = (id, callback) => {
    let user = {
        id : id,
        name: 'Harry'
    }
    callback(user);
};

setTimeout(() =>{
    callback(user);
}, 3000);

getUser(12, (userObj) => {
    console.log(userObj);
});