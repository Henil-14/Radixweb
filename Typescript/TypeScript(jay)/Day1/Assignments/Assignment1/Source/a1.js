let arr = [
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
for (let _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    let value = arr_1[_i];
    document.getElementById("data").innerHTML += "<tr><td>".concat(value.id, "</td> <td>").concat(value.fname, "</td><td> ").concat(value.lname, "</td>  <td>").concat(value.address, "</td>  <td>").concat(value.salary, "</td></tr>");
}
function find(id) {
    console.log(id);
    let bool = 0;
    for (let i = 0; i < arr.length; i++) {
        if (id == i || id == arr[i].id) {
            document.getElementById("show").innerHTML = "the found emloyee is ".concat(arr[i].fname, "  ").concat(arr[i].lname);
            bool = 1;
            break;
        }
    }
    if (bool == 0) {
        document.getElementById("show").innerHTML = "data not found";
    }
}
function f() {
    let input = document.getElementById("semp");
    let id = input.value;
    if (id != "") {
        find(id);
    }
    else {
        alert("enter id");
    }
}
function add() {
    arr.push({
        id: 445,
        fname: "omkar",
        lname: "Tiwari",
        address: "18 Butterfield Trail Road, Ellis,ks, 63633  United States",
        salary: 34000,
    });
    alert("employee added");
    document.getElementById("data").innerHTML = "";
    for (let _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        let value = arr_2[_i];
        document.getElementById("data").innerHTML += "<tr><td>".concat(value.id, "</td> <td>").concat(value.fname, "</td><td> ").concat(value.lname, "</td>  <td>").concat(value.address, "</td>  <td>").concat(value.salary, "</td></tr>");
    }
}
function del() {
    arr.pop();
    alert("1 entry deleted");
    document.getElementById("data").innerHTML = "";
    for (let _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        let value = arr_3[_i];
        document.getElementById("data").innerHTML += "<tr><td>".concat(value.id, "</td> <td>").concat(value.fname, "</td><td> ").concat(value.lname, "</td>  <td>").concat(value.address, "</td>  <td>").concat(value.salary, "</td></tr>");
    }
}
