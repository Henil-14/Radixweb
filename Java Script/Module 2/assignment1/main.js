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
data += '<tr><th>Empolyee_id</th><th>Name</th><th>Age</th><th>Designation</th><th>Salary</th><th>Location</th><th>Email</th><th>Date of Joining</th><th>Contact Number</th></tr>';

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
  if (array[0] > y) document.getElementById('display').innerHTML = data;
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
    stateSel.options[stateSel.options.length] = new Option(x, x);
  }

  stateSel.onchange = function () {
    citySel.length = 1;
    var z = stateObject[stateSel.value];
    for (var i = 0; i < z.length; i++) {
      citySel.options[citySel.options.length] = new Option(z[i], z[i]);
    }
  };
};
