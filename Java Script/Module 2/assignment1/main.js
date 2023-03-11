var array = [];
var data = [];

function formdata() {
  var id = document.getElementById('id').value;
  var name = document.getElementById('name').value;
  var age = parseInt(document.getElementById('age').value);
  var designation = document.getElementById('designation').value;
  var salary = parseInt(document.getElementById('salary').value);
  var email = document.getElementById('email').value;
  var date = document.getElementById('doj').value;
  var location = document.getElementById('state').value;
  location += ',' + document.getElementById('city').value;
  var contact = parseInt(document.getElementById('cn').value);

  console.log(
    id,
    name,
    age,
    designation,
    salary,
    location,
    email,
    date,
    contact
  );
  array.push({
    id: id,
    name: name,
    age: age,
    designation: designation,
    salary: salary,
    location: location,
    email: email,
    date: date,
    contact: contact,
  });
}
data +=
  '<tr><th>Empolyee_id</th><th>Name</th><th>Age</th><th>Designation</th><th>Salary</th><th>Location</th><th>Email</th><th>Date of Joining</th><th>Contact Number</th></tr>';

let y = 0;
function show() {
  for (i = y; i < array.length; i++) {
    data +=
      '<tr><td>' +
      array[i].id +
      '</td>' +
      '<td>' +
      array[i].name +
      '</td>' +
      '<td>' +
      array[i].age +
      '</td>' +
      '<td>' +
      array[i].designation +
      '</td>' +
      '<td>' +
      array[i].salary +
      '</td>' +
      '<td>' +
      array[i].location +
      '</td>' +
      '<td>' +
      array[i].email +
      '</td>' +
      '<td>' +
      array[i].date +
      '</td>' +
      '<td>' +
      array[i].contact +
      '</td></tr>';
  }
  alert(data);
  document.getElementById('display').innerHTML = data;
  y++;
}
var stateObject = {
  Gujrat: ['AHamadabad', 'surat', 'gandinagr', 'mahisana'],
  Maharashtra: ['beed', 'Latur', 'pune', 'solapur'],
};
window.onload = function () {
  var stateSel = document.getElementById('state');
  var citySel = document.getElementById('city');
  for (var x in stateObject) {
    stateSel.options[stateSel.options.length] = new Option(x);
  }

  stateSel.onchange = function () {
    citySel.length = 1;
    var z = stateObject[stateSel.value];
    for (var i = 0; i < z.length; i++) {
      citySel.options[citySel.options.length] = new Option(z[i]);
    }
  };
};

// function idCheck() {
//   var id = document.getElementById('id').value;
//   if (id.length == "") {
//     document.getElementById('ids').innerHTML = 'id no is not vaild';
//   } else {
//     document.getElementById('ids').innerHTML = '';
//   }
// }
function nameCheck() {
  var name = document.getElementById('name').value;
  if (name.length < 1) {
    document.getElementById('names').innerHTML = 'required';
  } else {
    document.getElementById('names').innerHTML = '';
  }
}
function ageCheck() {
  var age = document.getElementById('age').value;
  if (age < 18) {
    document.getElementById('ages').innerHTML = 'Must have legal age';
  } else {
    document.getElementById('ages').innerHTML = '';
  }
}

function designationCheck() {
  var designation = document.getElementById('designation').value;
  if (designation.length < 2) {
    document.getElementById('designations').innerHTML = 'required';
  } else {
    document.getElementById('designations').innerHTML = '';
  }
}
function salaryCheck() {
  var salary = document.getElementById('salary').value;
  if (salary < 1000) {
    document.getElementById('salarys').innerHTML = 'enter correct Amount';
  } else {
    document.getElementById('salarys').innerHTML = '';
  }
}
function emailCheck() {
  var mailformat =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = document.getElementById('email').value;
  if (!mailformat.test(email)) {
    document.getElementById('emails').innerHTML = 'enter vaild email address';
  } else {
    document.getElementById('emails').innerHTML = '';
  }
}
function mobileCheck() {
  var mobile = document.getElementById('mobile').value;
  if (mobile.length != 10) {
    document.getElementById('mobiles').innerHTML = 'Mobile no is not vaild';
  } else {
    document.getElementById('mobiles').innerHTML = '';
  }
}
