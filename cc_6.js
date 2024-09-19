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

