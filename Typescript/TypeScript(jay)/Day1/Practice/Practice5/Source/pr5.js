console.log("-------simple typeing of the  function--------");
function sum(num1, num2) {
    return num1 + num2;
}
let addition = sum(34, 45);
console.log(addition);
console.log("-------unknown function type-------");
let fun = function (a, b) {
    return `the age of  ${b} is ${a}`;
};
let str = fun(40, "employee1");
console.log(`${str}`);
console.log(`------function with optional parameters----------`);
function option(param1, param2, param3) {
    console.log(`the parameter1 is:${param1}`);
    console.log(`the parameter2 is:${param2}`);
    console.log(`the optional parameter is:${param3}`);
}
option(12, 'string');
option(13, "this", 23);
