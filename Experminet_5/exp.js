let employees = [];

function addEmployee(){

let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let salary = Number(document.getElementById("salary").value);
let dept = document.getElementById("dept").value;

let emp = {
name:name,
id:id,
salary:salary,
department:dept
};

employees.push(emp);

document.getElementById("output").innerHTML = "Employee Added";
}

function displayAll(){

let result="";

employees.forEach(e=>{
result += e.name+" | "+e.id+" | "+e.salary+" | "+e.department+"<br>";
});

document.getElementById("output").innerHTML = result;
}

function salaryAbove(){

let result="";

employees
.filter(e => e.salary > 50000)
.forEach(e=>{
result += e.name+" | "+e.salary+"<br>";
});

document.getElementById("output").innerHTML = result;
}

function totalSalary(){

let total = employees.reduce((sum,e)=>sum+e.salary,0);

document.getElementById("output").innerHTML =
"Total Salary = "+ total;
}

function averageSalary(){

let total = employees.reduce((sum,e)=>sum+e.salary,0);

let avg = total / employees.length;

document.getElementById("output").innerHTML =
"Average Salary = "+ avg;
}

function countDepartment(){

let count = {};

employees.forEach(e=>{
count[e.department] = (count[e.department] || 0) + 1;
});

let result="";

for(let dept in count){
result += dept+" : "+count[dept]+"<br>";
}

document.getElementById("output").innerHTML = result;
}