var employees = [];
  var id = 1;

  function addEmployee() {
    var name = document.getElementById("name").value;
    var profession = document.getElementById("profession").value;
    var age = document.getElementById("age").value;

    if (name === "" || profession === "" || age === "") {
      document.getElementById("error").innerHTML = "Please fill in all required fields.";
      document.getElementById("success").innerHTML = "";
      return;
    }

    var employee = {
      id: id,
      name: name,
      profession: profession,
      age: age
    };

    employees.push(employee);
    id++;

    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = "Employee added successfully.";
    document.getElementById("employeeForm").reset();
    renderEmployeeList();
  }

  function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployeeList();
  }

  function renderEmployeeList() {
    var employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";

    for (var i = 0; i < employees.length; i++) {
      var employee = employees[i];
      var row = document.createElement("tr");

      var idCell = document.createElement("td");
      idCell.innerHTML = employee.id;
      row.appendChild(idCell);

      var nameCell = document.createElement("td");
      nameCell.innerHTML = employee.name;
      row.appendChild(nameCell);

      var professionCell = document.createElement("td");
      professionCell.innerHTML = employee.profession;
      row.appendChild(professionCell);

      var ageCell = document.createElement("td");
      ageCell.innerHTML = employee.age;
      row.appendChild(ageCell);

      var actionCell = document.createElement("td");
      actionCell.innerHTML = '<button onclick="deleteEmployee(' + i + ')">Delete</button>';
      row.appendChild(actionCell);

      employeeList.appendChild(row);
    }
  }