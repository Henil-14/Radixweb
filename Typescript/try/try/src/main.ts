//  let a:number[] = [1,3,4,5,6,7]
//  alert(a)

// create object
//normal object create

let users ={
  name:"henil",
  age: 22,
  address:'india'
}

console.log(users)


// above is the javascript method 

//below is typescript method

//create interface for that first in typescript

interface userType{
  name:string,
  age:number,
  address:string,
  getName:()=>string
}

//aftrt creating above interface assign that interface to the user data
// interface is a structure it act as our application

//interface: class and object ne define krb=va mate je template banava ma ab=ve ene interface khrva ma ave che

//syntax:
        // interface interfacename{
        //   property_type:data_type,
        //   property_type:data_type,
        // }

let user:userType={
  name : 'henil',
  age : 22,
  address : 'usa',
  getName:function()
  {
    return "henil"
  }

}

console.log(user.getName())

//we can use any to add anything in object value

// union is use to store one or more values at a time
//group of types is define for object is called union type

let data:string|number|boolean="anil";
data=14;
data = true;

console.log(user)

        

// function in typescript

function calc(a:number,b:number):number
{
  return  a+b;
}
console.log(calc(10,10))

//define class

class App{
  name ="henil"
  getName(){
    console.log(this.name)
  }
}
  let a = new App()
  a.getName()

  // inheritance

  class Parent{

    name="henil";

  }
  class child extends Parent{
        getName(){
     return this.name
    }
  }


  let c = new child()
  console.log(c.getName())