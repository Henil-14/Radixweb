var array = [
  {
    id: 101,
    fname: 'Henil',
    lname: 'Pithadiya',
    address: '22 Beef Branch Road, Joplin,mo, 64804  United States',
    salary: 29000,
  },
  {
    id: 102,
    fname: 'Jay',
    lname: 'Prajapati',
    address: '31 Tkemp Road, Louisburg,nc, 23549  United States',
    salary: 12000,
  },
  {
    id: 103,
    fname: 'Bhavik',
    lname: 'Patel',
    address: '14 S Apple, Searcy,ar, 32143  United States',
    salary: 19000,
  },
  {
    id: 104,
    fname: 'Pradhyuman',
    lname: 'Salega',
    address: '4 Becky Lane, Darlington,sc, 29540  United States',
    salary: 19000,
  },
  {
    id: 105,
    fname: 'James',
    lname: 'Nielson',
    address: '15 Dana Drive, Pocahontas,ar, 32455  United States',
    salary: 19000,
  },
];


let array2 = [
  {
    id: 106,
    fname: 'Natasha',
    lname: 'Romanof',
    address: '16 Almira Lane, Lincoln,ne, 68516  United States',
    salary: 67000,
  },
  {
    id: 107,
    fname: 'Tony',
    lname: 'Stark',
    address: '11 Grimm Road, Shreveport,la, 31103  United States',
    salary: 90000,
  },
];

let arr = array.concat(array2);
console.log(arr)

let i:number = 0;
let full: string = '';
let fletNo : string[] = [];
let city : string[] = [];
let state: string[] = [];
let pf: number[] = [];

for( let emp of arr){
  let add = emp.address.split(',');
  pf[i] = (emp.salary * 12)/100;
city[i] = add[1];
state[i] = add[2];
fletNo[i] =add[0].split(' ')[0];

full +=`<tr> <td>${emp.id}</td><td>${emp.fname} ${emp.lname} </td><td>${fletNo[i]} </td><td>${city[i]} </td><td> ${state[i]}</td> <td> ${emp.salary}</td><td> ${pf[i]}</td> <tr>`;


}
$('#full').html(full);
