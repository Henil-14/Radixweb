"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = require("./export");
console.log("-----------export demo----------");
let obj1 = new export_1.Product(1, "Trousers", 23);
let obj2 = new export_1.Product(2, "Tshirts", 6);
let obj3 = new export_1.Product(1, "Sneakers", 4);
let obj4 = new export_1.Product(1, "Glasses", 7);
let prdArr = [obj1, obj2, obj3, obj4];
function purchase(plist, prd) {
    for (const iterator of plist) {
        if (iterator["name"] == prd) {
            if (iterator["quantity"] < 5) {
                console.log("the produc is not in the stock");
            }
            else {
                iterator["quantity"]--;
                console.log(`reamining products ${iterator["quantity"]}`);
            }
        }
    }
}
purchase(prdArr, "Sneakers");
purchase(prdArr, "Glasses");
