function multiply(param1, param2, param3){
    return param1 * param2 * param3;
};
console.log(multiply(2, 5, 4));

var first_name = "Petra";
var last_name = "Koor";
var full_name = first_name + last_name;
console.log(full_name);

var age = "25";
var personName = "Petra";
function logUserData(personName, age){
    console.log(`${personName} is ${age} years old.`);
  };
console.log(logUserData(personName, age));

var school = "Dublin Coding School";
console.log(school.replace("Coding", "CODING"));

function reverseWordOrder(string){
    let reverseString = string.split(' ').reverse().join(' ');
    return reverseString
};
console.log(reverseWordOrder("Dublin Coding School"));

var eventName = "user log in";
var occured = "Sat, 12 Feb 2022 12:04:35 GMT";
function logEvent(eventName, occured){
    console.log(`Event: ${eventName} occured on ${occured}`);
  };
console.log(logEvent(eventName, occured));