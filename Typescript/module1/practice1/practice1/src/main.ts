// boolean

let val: boolean = false;
document.getElementsByTagName('h1')[0].append(`${val}`);

// number

let decimal : number = 6;
let hex : number = 0xf00d;
let binary : number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//add two numbers

function addNumbers( a: number , b: number){
return a+b;
}

var sum : number = addNumbers(10,20)


console.log(sum)
document.getElementsByTagName('h1')[0].append(`${sum}`);






