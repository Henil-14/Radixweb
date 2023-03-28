enum basics {
  prop = 5,
  prop1 = 5 + 1,
  prop2 = 100 / 25,
}
console.log(
  `prop:${basics['prop']}  prop1:${basics['prop1']}  prop2:${basics['prop2']}`
);
enum string_ {
  product1 = 'macbook',
  product2 = 'play station',
  product3 = 'xbox',
  product4 = 'intel',
}
console.log(
  `the value of string enum is ${string_.product1}  ${string_.product2}  ${string_.product3}  ${string_.product4}`
);
enum bool__ {
  false = 0,
  true = 'yes',
}
console.log(`value of bool enum is ${bool__['false']} and ${bool__['true']}`);
enum cnst {
  a_let,
  b_let,
  c_let,
}
function init(obj:any): number {
  return obj.a_let;
}
let i = init(cnst);
console.log(`the value of const enum is ${i}`);
