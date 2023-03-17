
var rIndex,table = document.getElementById("table");
            // check the empty input
function checkEmptyInput()
{
    var isEmpty = false,
        name = document.getElementById("name").value,
        dob = document.getElementById("dob").value,
        age = document.getElementById("age").value,
        city=document.getElementById("city").value,
        salary=document.getElementById("salary").value;

    if(name === ""){
        alert("Name Connot Be Empty");
        isEmpty = true;
    }
    else if(dob === ""){
        alert("DOB Connot Be Empty");
        isEmpty = true;
    }
    else if(age === ""){
        alert("Age Connot Be Empty");
        isEmpty = true;
    }
    else if(city === ""){
        alert("City Connot Be Empty");
        isEmpty = true;
    }
    else if(salary === ""){
        alert("Salary Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        name = document.getElementById("name").value,
        dob = document.getElementById("dob").value,
        age = document.getElementById("age").value,
        city = document.getElementById("city").value,
        salary = document.getElementById("salary").value;

    cell1.innerHTML = name;
    cell2.innerHTML = dob;
    cell3.innerHTML = age;
    cell4.innerHTML=city;
    cell5.innerHTML=salary;
    // call the function to set the event to the new row
    selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{
    
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("dob").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
            document.getElementById("city").value = this.cells[3].innerHTML;
            document.getElementById("salary").value = this.cells[4].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
    var name = document.getElementById("name").value,
        dob = document.getElementById("dob").value,
        age = document.getElementById("age").value;
        city = document.getElementById("city").value;
        salary = document.getElementById("salary").value;
    if(!checkEmptyInput()){
    table.rows[rIndex].cells[0].innerHTML = name;
    table.rows[rIndex].cells[1].innerHTML = dob;
    table.rows[rIndex].cells[2].innerHTML = age;
    table.rows[rIndex].cells[3].innerHTML = city;
    table.rows[rIndex].cells[4].innerHTML = salary;
    }
}
        
function removeSelectedRow()
{
            table.deleteRow(rIndex);
            // clear input text
            document.getElementById("name").value = "";
            document.getElementById("dob").value = "";
            document.getElementById("age").value = "";
            document.getElementById("city").value = "";
            document.getElementById("salary").value = "";
}



var nam=document.getElementById("name");
var dob=document.getElementById("dob");
var age=document.getElementById("age");
var city=document.getElementById("city");
var salary=document.getElementById("salary");
const alldata=[];
function addData(){
    var obj={
        'NAME':nam.value,
        'DOB':dob.value,
        'AGE':age.value,
        'CITY':city.value,
        'SALARY':salary.value
    };
    //console.log( obj);
    alldata.push(obj);
    localStorage.setItem('Data', JSON.stringify(alldata));
}
//console.log(alldata)

function clearData(){
    localStorage.removeItem("Data");
}
function readData()  
{    
    for (i = 0; i < localStorage.length; i++)    
    {     
        key = localStorage.key(i);    
        val = localStorage.getItem(key);     
    }   
    console.log("key:",key);
    console.log("Value:",val);
}  
var tbody=document.getElementById("tbody");
if(tbody.rows.length==0){
var val = JSON.parse(localStorage.getItem("Data"));
for (let i = 0; i <10; i++)    
{     
var newRow = table.insertRow(table.rows.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4);
    cell1.innerHTML =val[i].NAME;
    cell2.innerHTML =val[i].DOB;
    cell3.innerHTML =val[i].AGE;
    cell4.innerHTML=val[i].CITY;
    cell5.innerHTML=val[i].SALARY;
}
}