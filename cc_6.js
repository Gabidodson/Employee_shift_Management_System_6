//Create an Employees Array of Employee Objects
const employees = [
    {
        name: "Peter Griffin",
        shifts:[
            {day: "Monday", hours: 8},
            {day: "Tuesday", hours: 7},
            {day: "Wednesday", hours:7.5},
            {day: "Thursday", hours:8},
            {day: "Friday", hours:6}
        ]
    },
    {
        name: "Lois Griffin",
        shifts:[
            {day: "Tuesday", hours:6},
            {day:"Thursday", hours:8},
            {day: "Friday", hours:10}
        ]
    },
    {
        name: "Glen Quagmire",
        shifts:[
            {day: "Monday", hours:9},
            {day:"Tuesday", hours:10},
            {day: "Wednesday", hours: 9.5},
            {day: "Thursday", hours:8}
        ]
    },
    {
        name:"Cleveland Brown",
        shifts:[
            {day:"Thursday", hours:8},
            {day:"Friday", hours:7.5},
            {day:"Saturday", hours:8},
            {day:"Sunday", hours:9}
        ]
    }
];
//arranged this way for better readability

//Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee){
    console.log(`Employee: ${employee.name}`);
    console.log("Shifts:");

    employee.shifts.forEach(shift => {
        console.log(`  ${shift.day}:${shift.hours}hours`);
    });
}

//Create a Function to Assign a New Shift
function assignShift(employeeName, day, hours, employeesArray){
    const employee = employeesArray.find(emp => emp.name === employeeName);
    if (!employee){
        console.log (`Error: Employee "${employeeName}" not found`);
        return;
    }
    const existingShift = employee.shifts.find(shift => shift.day === day);
    if (existingShift){
        console.log (`Error: ${employeeName} is scheduled already on ${day}`);
        return;
    }
        employee.shifts.push({day, hours});
        console.log (`Successfully scheduled ${employeeName} a ${hours}-hour shift on ${day}`);

}

//Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName, employeesArray){
    const employee = employeesArray.find(emp => emp.name === employeeName);
    if (!employee){
        console.log(`Error: Employee "${employeeName}" not found`);
        return null;
    }

const totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
console.log(`${employeeName}'s totalHours: ${totalHours}`);
    return totalHours;

}

//Create a Function to List Employees with Free Days
function listAvailableEmployees (day, employeesArray) {
    console.log (`Employees available on ${day}:`);
    const availableEmployees = employeesArray.filter(employee =>
        !employee.shifts.some(shift => shift.day === day)
    );
    if (availableEmployees.length === 0) {
        console.log("No employees are available on this day");
    } else {
        availableEmployees.forEach(employee => {
            console.log (`- ${employee.name}`);
        });
    }
    return availableEmployees;
    }


//Examples

//Display employee shifts
console.log("Displaying Peter Griffin's shifts");
displayEmployeeShifts(employees[0]);
//Assign a new shift
console.log("\nAssigning a new shift to Lois Griffin");
assignShift("Lois Griffin", "Monday",6, employees);
//Calculate hours worked
console.log("\nCaluculating total hours for Glen Quagmire:");
calculateTotalHours("Glen Quagmire", employees);
// List employees with free days
console.log("\nListing employees available on Wednesday:");
listAvailableEmployees("Wednesday", employees);

