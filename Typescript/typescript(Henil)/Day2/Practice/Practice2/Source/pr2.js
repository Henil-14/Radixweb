let nsp1;
(function (nsp1) {
    class Item {
        constructor(num, name) {
            this.i1_name = name;
            this.i1_num = num;
        }
    }
    nsp1.Item = Item;
})(nsp1 || (nsp1 = {}));
let arrayofitems = [];
let it1 = new nsp1.Item(1, "orange");
let it2 = new nsp1.Item(4, "cherry");
let it3 = new nsp1.Item(12, "tomato");
let it4 = new nsp1.Item(6, "mango");
let it5 = new nsp1.Item(5, "banana");
console.log("--------namespace practice----------");
arrayofitems.push(it1, it2, it3, it4, it5);
for (const val of arrayofitems) {
    console.log(`name : ${val["i1_name"]} quantity:${val["i1_num"]}`);
}
