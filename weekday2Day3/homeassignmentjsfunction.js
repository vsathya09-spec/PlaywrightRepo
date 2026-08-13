//Function declaration
function userprofile(name) {
    console.log("Hello" + ","+ name + "!");
}

userprofile("Sathya");

//Arrow function
let double = (num) => {
    return num * 2;
};

console.log(double(5));

//Anonymous function
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Callback function
function getUserData(callback) {

    setTimeout(function() {

        let user = {
            name: "Sathya",
            age: 34
        };

        callback(user);

    }, 3000);
}

getUserData(function(user) {
    console.log("Name: " + user.name);
    console.log("Age: " + user.age);
});