function clk() {
    let  text1 = document.getElementById('ip');
    let  value = text1 === null || text1 === void 0 ? void 0 : text1.value;
    if (!isNaN(value)) {
        value = parseInt(value);
    }
    f1(value);
    function f1(var1) {
        if (typeof var1 == "string") {
            alert("string");
        }
        if (typeof var1 == "boolean") {
            alert("boolean");
        }
        if (typeof var1 == "number") {
            alert("number");
        }
    }
}
let  emp1 = {
    name: "luffy",
    age: 19
};
document.getElementById("obj").innerHTML = "the value of object is:\nname:".concat(emp1.name, " and age:").concat(emp1.age);
