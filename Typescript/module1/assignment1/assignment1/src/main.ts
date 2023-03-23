const arr:any=[
  {
  id:100,
  firstName :'Henil',
  LastName: "Pithadiya",
  address: " india",
  salary: 12345
},
{
  id:101,
  firstName :'Harshit',
  LastName: "Goyal",
  address: " canada",
  salary: 124453
},
{
  id:102,
  firstName :'Pradhyuman',
  LastName: "Salega",
  address: " USA",
  salary: 2232312
},
{
  id:103,
  firstName :'Bhavik',
  LastName: "Patel",
  address: " india",
  salary: 11223445
},
{
  id:104,
  firstName :'Jay',
  LastName: "Prajapati",
  address: " China",
  salary: 22345
}
];
  
$(document).ready(function(){
  $("#get").click(function(){
    getData()
    
  })
  function getData(){

    $("#tab").html("")
    var th = $(`<tr/>`).append(`<th>ID</th>`).appendTo("#tab")
.append(`<th>First Name</th>`).appendTo("#tab")
.append(`<th>Last Name</th>`).appendTo("#tab")
.append(`<th>Address</th>`).appendTo("#tab")
.append(`<th>Salary</th>`).appendTo("#tab")

for ( var i of arr){
  $(`<tr/>`).append(`<td>${i.id}</td>`).appendTo("#tab")
.append(`<td>${i. firstName}</td>`).appendTo("#tab")
.append(`<td>${i.LastName}</td>`).appendTo("#tab")
.append(`<td>${i.address}</td>`).appendTo("#tab")
.append(`<td>${i.salary}</td>`).appendTo("#tab")
  
}
  }
  

$("#sear").click(function(){
  $("#tab").html("")
var id =$("#search")
var check: HTMLElement|any=parseInt(id.val())

var i=0
for(i = 0; i<arr.length; i++){


  if (check == null || check == arr[i].id || check == i)
  {
 ;
 $(`<tr/>`).append(`<th>ID</th>`).appendTo("#tab")
.append(`<th>First Name</th>`).appendTo("#tab")
.append(`<th>Last Name</th>`).appendTo("#tab")
.append(`<th>Address</th>`).appendTo("#tab")
.append(`<th>Salary</th>`).appendTo("#tab")
$("#tab").append($(`<tr><td>${arr[i].id}</td><td>${arr[i]. firstName}</td><td>${arr[i].LastName}</td><td>${arr[i].address}</td><td>${arr[i].salary}</td>`))
break;
}
}
if (i==arr.length)
{
  $(`<tr/>`).append(`<td>Data not found</td>`).appendTo("#tab")
}

})

$("#del").click(function(){
  arr.pop()
  getData()
})

$("#postData").click(function(){
postData()
})
function postData(){
  var id : number = $("#eid").val()
  var firstname : string = $("#fname").val()
  var lastname : string = $("#lname").val()
  var address : string = $("#address").val()
  var salary : number = $("#salary").val()
 
  arr.push({id:id,firstName:firstname,lastName:lastname,address:address,salary:salary})
  getData()
}


})

