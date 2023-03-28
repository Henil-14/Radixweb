console.log("------simple interface demo------");
function printDemo(obj) {
    console.log(`${obj.id} ${obj.name} ${obj.userId}`);
}
let data1 = { id: 1, name: "luffy", userId: "monkey.D.Luffy" };
printDemo(data1);
console.log("------interface demo with with optional properties------");
function getShape() {
    let shape = { name: "rectangle" };
    return shape;
}
function paintShape(opts) {
    console.log(`object:${opts.shape.name}`);
    if (!(opts.xPos == null && opts.yPos == null)) {
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
function f(pid, name) {
    console.log(`the id of ${name} is ${pid}`);
}
let item1 = f;
f(1, "Banana");
console.log("-------interface as array--------");
let list = [34, 45, 65, 78];
console.log(list);
