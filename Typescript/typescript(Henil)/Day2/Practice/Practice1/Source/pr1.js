//gengeric array
let keys = [1, 23, 13, 3];
let items = [
    { bname: 'Harry Porter', bid: 1 },
    { bname: 'panch tantra', bid: 23 },
    { bname: 'Atomic Habits', bid: 13 },
    { bname: 'vedas', bid: 3 },
    { bname: 'book3', bid: 6 },
    { bname: 'book4', bid: 7 },
];
function s(lst, key) {
    console.log('--------book list------');
    let val = 0;
    for (const i of lst) {
        if (i['bid'] == key[val]) {
            console.log(i['bname']);
        }
        val++;
    }
}
s(items, keys);
//generic class
class Gen {
    get val() {
        return this.num1;
    }
    set value(v) {
        this.num1 = v;
    }
}
let g1 = new Gen();
g1.value = 2;
console.log(`the value of object is: ${g1.val}`);
