export const empdata:{id:number,name:string,city:string,doj:Date}[]=[
  {id:2307,name:"Damian",city:"Mumbai",doj:new Date("9,8,2020")},
  {id:2307,name:"Espona",city:"Pune",doj:new Date("12,7,2020")},
  {id:2307,name:"Bhuvan",city:"Mumbai",doj:new Date("5,6,2021")},
  {id:2307,name:"Nick",city:"Ahmedabad",doj:new Date("3,4,2022")},
  {id:2307,name:"Roma",city:"Delhi",doj:new Date("28,7,2023")}
];
console.log("----------person who lives in mumbai and joined after 2020--------")

let return_val=empdata.map((val)=>{
  let d=new Date();
      d.setFullYear(2020)
      if(val.city.toLowerCase()=="mumbai" && val.doj.getFullYear()> d.getFullYear())
      {
        document.getElementById(
          "data"
        )!.innerHTML += `<tr><td>${val.id}</td> <td>${val.name}</td>  <td>${val.city}</td>  <td>${val.doj.getDate()}/${val.doj.getMonth()}/${val.doj.getFullYear()}</td></tr>`;
      }
      return 0;
})
console.log("----------person who joined after 2020--------")
let rval2=empdata.map((emp)=>{
  let d=new Date();
  d.setFullYear(2020)
  if(emp.doj.getFullYear()> d.getFullYear())
  {
    document.getElementById(
      "data1"
    )!.innerHTML += `<tr><td>${emp.id}</td> <td>${emp.name}</td>  <td>${emp.city}</td>  <td>${emp.doj.getDate()}/${emp.doj.getMonth()}/${emp.doj.getFullYear()}</td></tr>`;
     
  }
  return 0;
})
console.log(return_val,rval2)
