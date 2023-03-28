console.log("-------simple typeing of the  function--------")
function sum(num1:number,num2:number):number{
    return num1+num2;
}
let addition:number=sum(34,45);
console.log(addition)
console.log("-------unknown function type-------")
let fun:(a:number,b:string)=>string=function(a:number,b:string):string{
            return `the age of  ${b} is ${a}`;
}
let str=fun(40,"employee1")
console.log(`${str}`)
console.log(`------function with optional parameters----------`);
function option(param1:number,param2:string,param3?:number):void {
    console.log(`the parameter1 is:${param1}`)
    console.log(`the parameter2 is:${param2}`)
    console.log(`the optional parameter is:${param3}`)
}
option(12,'string');
option(13,"this",23);