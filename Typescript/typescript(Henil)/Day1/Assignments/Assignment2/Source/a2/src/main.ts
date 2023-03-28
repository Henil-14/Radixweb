let array = [
  {
    id: 1023,
    fname: 'jhon',
    lname: 'doe',
    address: '22 Beef Branch Road, Joplin,mo, 64804  United States',
    salary: 19000,
  },
  {
    id: 223,
    fname: 'Mark',
    lname: 'Json',
    address: '31 Tkemp Road, Louisburg,nc, 23549  United States',
    salary: 19000,
  },
  {
    id: 334,
    fname: 'Mega',
    lname: 'Patel',
    address: '14 S Apple, Searcy,ar, 32143  United States',
    salary: 19000,
  },
  {
    id: 4075,
    fname: 'David',
    lname: 'Warner',
    address: '4 Becky Lane, Darlington,sc, 29540  United States',
    salary: 19000,
  },
  {
    id: 2304,
    fname: 'James',
    lname: 'Nielson',
    address: '15 Dana Drive, Pocahontas,ar, 32455  United States',
    salary: 19000,
  },
];
let array2 = [
  {
    id: 277,
    fname: 'Natasha',
    lname: 'Romanof',
    address: '16 Almira Lane, Lincoln,ne, 68516  United States',
    salary: 67000,
  },
  {
    id: 278,
    fname: 'Tony',
    lname: 'Stark',
    address: '11 Grimm Road, Shreveport,la, 31103  United States',
    salary: 90000,
  },
];
let ar3 = array.concat(array2);

let state: string[] = [];
let city: string[] = [];
let fno: string[] = [];
let pf: number[] = [];
let full: string = '';
let i: number = 0;
for (let emp of ar3) {
  let temp = emp.address.split(',');
  pf[i] = (emp.salary * 12) / 100;
  city[i] = temp[1];
  state[i] = temp[2] 
  fno[i] = temp[0].split(' ')[0];
  full += ` <tr><td>${i}</td><td>${emp.fname} ${emp.lname}</td><td>${fno[i]}</td><td>${city[i]} </td><td>${state[i]}</td><td>${pf[i]}</td></tr>`;
  i++;
}
$('#full').html(full);
