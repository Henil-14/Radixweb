const employee: any = [
  { 
    ID: 101,
    Name: 'Henil', 
    City: 'Ankleshwar', 
    DOJ: '01-02-2023' 
  },
  { 
    ID: 102, 
    Name: 'Harshit', 
    City: 'Bhopali', 
    DOJ: '01-03-2019' 
  },
  { 
    ID: 103, 
    Name: 'Bhavik', 
    City: 'Mumbai', 
    DOJ: '01-2-2022' 
  },
  { 
    ID: 104, 
    Name: 'Jay', 
    City: 'Ahmedabad', 
    DOJ: '01-01-2020' 
  },
  { 
    ID: 105, 
    Name: 'Pradhyuman', 
    City: 'Latur', 
    DOJ: '01-02-2023' 
  },
];
var dta = `<table><tr><th>ID</th>
                      <th>Name</th>
                      <th>City</th>
                      <th>Date OF Joining</th></tr></table>`;
var dta1 = `<table><tr><th>ID</th>
                   <th>Name</th>
                   <th>City</th>
                   <th>Date OF Joining</th></tr></table>`;
var dta2 = `<table><tr><th>ID</th>
                      <th>Name</th>
                      <th>City</th>
                      <th>Date OF Joining</th></tr></table>`;

for (let x of employee) {
  var newemp = new Map();

  newemp.set(1, x);

  var doj1 = newemp.get(1).DOJ;
  var years = doj1.split('-');
  var newjoinee = new Date();

  dta += `<tr><td>${newemp.get(1).ID}</td>
              <td>${newemp.get(1).Name}</td>
              <td>${newemp.get(1).City}</td>
              <td>${newemp.get(1).DOJ}</td></tr>`;

  if (years[2] > 2020 && x.City == 'Mumbai') {
    dta1 += `<tr><td>${x.ID}</td>
             <td>${x.Name}</td>
             <td>${x.City}</td>
             <td>${x.DOJ}</td></tr>`;
    document.getElementById('card')!.innerHTML = dta1;
  }

  if (years[2] > 2020) {
    dta2 += `<tr><td>${x.ID}</td>
             <td>${x.Name}</td>
             <td>${x.City}</td>
             <td>${x.DOJ}</td></tr>`;
  }
  document.getElementById('card1')!.innerHTML = dta2;
}
document.getElementById('list')!.innerHTML = dta;
