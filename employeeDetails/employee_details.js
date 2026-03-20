const employees = [
    {id:1, name:'Pema Lhamo', age:30, department:'IT', salary:50000, specialization:'Javascript'},
    {id:2, name:'Karma',age:28, department:'HR', salary:45000,specialization:'Python'},
    {id:3, name:'Dorji',age:35, department:'Finance',salary:60000,specialization:'Java'},
];

function displayEmployees(){
    const totalEmployees = employees.map(employee=> `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join(' ');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc+employee.salary,0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department == 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} -${employee.specialization} </p>`).join('');
    document.getElementById('employeesDetails').innerHTML=hrEmployeesDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id==employeeId);
    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML=`<p>${foundEmployee.id}: ${foundEmployee.name}: -${foundEmployee.department} - $${foundEmployee.salary} -${foundEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML='no employee has been found with this ID';
    }
}

function findEmployeeBySpecialization(empSpecialization){
    const presentEmployee = employees.find(employee => employee.specialization==empSpecialization);
    if (presentEmployee){
        document.getElementById('employeesDetails').innerHTML=`<p>${presentEmployee.id}: ${presentEmployee.name} -${presentEmployee.department} - $${presentEmployee.salary} -${presentEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML='no employee  has been found with this specialization';
    }
}
