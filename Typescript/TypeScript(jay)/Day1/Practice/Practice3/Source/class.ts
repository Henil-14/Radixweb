// class demo
class C1{
    arg1:string;
    constructor(input:string){
        this.arg1=input;
    }
}
let obj1=new C1("this is class one");

document.getElementById("o/p")!.innerHTML=`${obj1.arg1}`

//inheritance 
class Animal{
    moved(steps:number){
        document.getElementById("simple")!.innerHTML=`the Human moved ${steps} steps`
        
    }
}
class Human extends Animal{
    learn(language:string){
        // console.log(`the Human learn ${language} language`)
        document.getElementById("inheritance")!.innerHTML=`the Human learn ${language} language`
    }
}
let h1=new Human();
h1.moved(10);
h1.learn("hindi");
// constuctors
class Con{
    name:string;
    age:number;
    constructor(str:string,num:number){
        this.name=str;
        this.age=num;
    }
}
let p1=new Con("jhon",23)
document.getElementById("constructor")!.innerHTML=`the value initialize by constructor is ${p1.name} and ${p1.age}`

class Mexmple{
    name:string;
    constructor(val:string){
        this.name=val;
    }
    public conc(str2:string){
      this.name=this.name+str2;
    }
}
let v1=new Mexmple("string1")
v1.conc("that is")
console.log("the concated string is: "+v1.name)