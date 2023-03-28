const arr = [
  {
    id: 1023,
    fname: "jhon",
    lname: "doe",
    address: "22 Beef Branch Road, Joplin,mo, 64804  United States",
    salary: 19000,
  },
  {
    id: 223,
    fname: "Mark",
    lname: "Json",
    address: "31 Tkemp Road, Louisburg,nc, 23549  United States",
    salary: 19000,
  },
  {
    id: 334,
    fname: "Mega",
    lname: "Patel",
    address: "14 S Apple, Searcy,ar, 32143  United States",
    salary: 19000,
  },
  {
    id: 4075,
    fname: "David",
    lname: "Warner",
    address: "4 Becky Lane, Darlington,sc, 29540  United States",
    salary: 19000,
  },
  {
    id: 2304,
    fname: "James",
    lname: "Nielson",
    address: "15 Dana Drive, Pocahontas,ar, 32455  United States",
    salary: 19000,
  },
];
for (let value of arr) {
  document.getElementById(
    "data"
  )!.innerHTML += `<tr><td>${value.id}</td> <td>${value.fname}</td><td> ${value.lname}</td>  <td>${value.address}</td>  <td>${value.salary}</td></tr>`;
}
function find(id: number) {
  console.log(id);
  var bool:number=0;
  for (let i = 0; i < arr.length; i++) {
    if (id == i || id == arr[i].id ) {
      document.getElementById(
        "show"
      )!.innerHTML = `the found emloyee is ${arr[i].fname}  ${arr[i].lname}`;
        bool=1;
        break;
    }
  }
  if(bool==0)
  {
    document.getElementById(
        "show"
      )!.innerHTML = `data not found`;
  }
}
function f(): void {
  var input: HTMLInputElement | any = document.getElementById("semp");
  const id = input!.value;
  if(id!="")
  {
   find(id);
   
  }
  else
  {
    alert("enter id")
  }
 
}
function add(): void {
  arr.push({
    id: 445,
    fname: "omkar",
    lname: "Tiwari",
    address: "18 Butterfield Trail Road, Ellis,ks, 63633  United States",
    salary: 34000,
  });
  alert("employee added");
  document.getElementById("data")!.innerHTML = ``;
  for (let value of arr) {
    document.getElementById(
      "data"
    )!.innerHTML += `<tr><td>${value.id}</td> <td>${value.fname}</td><td> ${value.lname}</td>  <td>${value.address}</td>  <td>${value.salary}</td></tr>`;
  }
}
function del(): void {
  arr.pop();
  alert("1 entry deleted");
  document.getElementById("data")!.innerHTML = ``;
  for (let value of arr) {
    document.getElementById(
      "data"
    )!.innerHTML += `<tr><td>${value.id}</td> <td>${value.fname}</td><td> ${value.lname}</td>  <td>${value.address}</td>  <td>${value.salary}</td></tr>`;
  }
}
