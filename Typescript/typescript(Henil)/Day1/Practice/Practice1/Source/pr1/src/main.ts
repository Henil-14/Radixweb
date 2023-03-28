// numbers
let num: number = 3;
let hex: number = 0xf00d;
let oct: number = 0o744;
let binary: number = 0b010;
// strings
let w: string = 'this is string';
let empname: string = 'jhon doe';
let empdept: string = 'sales';

document.getElementById(
  'val'
)!.innerHTML = `${empname}  is  working in ${empdept} department`;
// array
let ar: number[] = [1, 3, 4, 6, 7];
// tuple
let t1: [string, number] = ['employee1', 2073];
document.getElementById('val')!.innerHTML +=
  `<br> substring: ` + t1[0].substring(2);
// enum example
enum department {
  DOTnet,
  OPS,
  PHP,
  TESTING,
}
let dept: string = department[0];
document.getElementById('val')!.innerHTML += '<br>' + dept;
//unknown
let anonymous: unknown = 2;
document.getElementById(
  'val'
)!.innerHTML += `<br>the value of unknown type var is ${anonymous}`;
//any
function example(a: any, b: any): any {
  return a + b;
}
let c: any = example(1, 'course');
document.getElementById('val')!.innerHTML += '<br>' + c;
//void
function voidExample(): void {
  document.getElementById('val')!.innerHTML +=
    '<br>this function will not return anything coz it is void';
}
voidExample();
