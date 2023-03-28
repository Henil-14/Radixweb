interface book {
  bname: string;
  bid: number;
}
//gengeric array
let keys: Array<number> = [1, 23, 13, 3];
let items: Array<book> = [
  { bname: 'Harry Porter', bid: 1 },
  { bname: 'panch tantra', bid: 23 },
  { bname: 'Atomic Habits', bid: 13 },
  { bname: 'vedas', bid: 3 },
  { bname: 'book3', bid: 6 },
  { bname: 'book4', bid: 7 },
];
function s<Type, k>(lst: Type[], key: k[]): void {
  console.log('--------book list------');
  let val = 0;
  for (const i of lst) {
    if (i['bid'] == key[val]) {
      console.log(i['bname']);
    }
    val++;
  }
}
s<book, number>(items, keys);
//generic class
class Gen<newtype> {
  private num1: newtype;
  public get val(): newtype {
    return this.num1;
  }
  public set value(v: newtype) {
    this.num1 = v;
  }
}
let g1 = new Gen<number>();
g1.value = 2;
console.log(`the value of object is: ${g1.val}`);
