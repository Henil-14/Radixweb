console.log("------simple interface demo------")
interface demo{
    id:number
    name:string;
    userId:string;
}
function printDemo(obj:demo):void{
        console.log(`${obj.id} ${obj.name} ${obj.userId}`)
}
let data1:demo={id:1,name:"luffy",userId:"monkey.D.Luffy"}
printDemo(data1);
console.log("------interface demo with with optional properties------")

interface Shape {
    name:string;
  }
  function getShape():Shape{
    let shape={name:"rectangle"}
    return shape
  }
  
  interface PaintOptions {
    shape: Shape;
    xPos?: number;
   
    yPos?: number;
   
  }
  
  function paintShape(opts: PaintOptions) {
    console.log(`object:${opts.shape.name}`);
    if(!(opts.xPos==null&&opts.yPos==null)){
         console.log(`x position: ${opts.xPos}`);
         console.log(`y position: ${opts.yPos}`);
    }
   
  }
  const shape = getShape();
  paintShape({ shape });
  paintShape({ shape, xPos: 100 });
  paintShape({ shape, yPos: 100 });
  paintShape({ shape, xPos: 100, yPos: 100 });
  console.log("----interface as function type-----");
  interface fun{
    (pid:number,name:string):void
  }
  function f(pid:number,name:string){
    console.log(`the id of ${name} is ${pid}`)
  }
  let item1:fun=f;
  f(1,"Banana");
  console.log("-------interface as array--------")
  interface ar{
    [index:number]:number
  }
  let list:ar=[34,45,65,78];
  console.log(list)