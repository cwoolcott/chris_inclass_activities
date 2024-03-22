const employeeContainer = document.querySelector('#employeeContainer');

employeeContainer.addEventListener("click", function(e){
    const employee = e.target;
   
    if(employee.getAttribute("class") === "employeeCard"){
        // alert(employee.getAttribute("data-empId"));
        // alert(employee.getAttribute("data-hiredate"));
        
        console.log(employee.dataset.empId,employee.dataset.hiredate);
        //employee.setAttribute("data-hiredate", "NULL");
        employee.dataset.hiredate = "NULL";
        console.log(employee.dataset.empId, employee.dataset.hiredate);

    }

})
