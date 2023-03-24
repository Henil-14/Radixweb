// creating interface

interface IEmparray1{
  ID : number;
  fname : string;
  address: string;
}


// creating class
class Employee implements IEmparray1{
  ID : number;
  fname : string;
  lname : string;
  address: string;
  salary: number;
  pf: number;

  constructor(id: number, firstname: string , lastname:string, address:string, salary:number , pf:number ){
    this.ID = id;
    this.fname =firstname;
    this.lname = lastname;
    this.address = address;
    this.salary = salary;
    this.pf = pf
  }

  getid():number
  {
    return this.ID;
  }
  getname(): string{
    var a = this.fname +" "+this.lname;
    return a;
  }
  getadd():string{
    var b : any = this.address.split(",");
    return b;
  }
  getsalary():number{
    return this.salary;
  }
  // getpf(): number{
  //   var c : number =  (this.salary*12)/100 ;
  // return c;
  // }
}


var array1 = [
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







for(var i = 0;i<array1.length;i++)
{
  // var pf = [array1[i].salary*12/100]
  var pf = (array1[i].salary)*12/100

 var emp = new Employee(array1[i].id, array1[i].fname, array1[i].lname, array1[i].address, array1[i].salary , pf);
 $("#tbody").append(` <tr> <td>${emp.ID}</td> <td>${emp.fname} ${emp.lname}</td> <td>${emp.address}</td><td>${emp.salary}</td> <td>${pf}</td> </tr> `);

 console.log(emp)

}

