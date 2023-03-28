function clk():void{
  var text1:HTMLInputElement|any= document.getElementById('ip');
  let value = text1?.value;
  if(!isNaN(value)){
    value=parseInt(value)
  }
  f1(value);
  function f1(var1:(number|string)):void
  {
    if(typeof var1 =="string" )
    {
      alert("string")
    }
     if(typeof var1 =="boolean" )
    {
      alert("boolean")
    }
     if(typeof var1 =="number" )
    {
      alert("number")
    }
   
  }
}
interface if1{
  name:string,
  age:number
}
interface if2{
  name:string,
  age:number
}

type check =if1 & if2
let emp1:check={
    name:"luffy",
    age:19
}
document.getElementById("obj")!.innerHTML=`the value of object is:
name:${emp1.name} and age:${emp1.age}`