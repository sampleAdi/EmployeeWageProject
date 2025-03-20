const present = 1;

let isPresent = Math.floor(Math.random() * 10) % 2;

if (isPresent == present) {
  console.log("Employee is Present");
} else {
  console.log("Employee is not Present");
}

//calculating dailywage of an employee with using a function
let workingHours = Math.floor(Math.random() * 10) % 3;

const isPartTime = 1;
const isFullTime = 2;
const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;

function getWorkingHours(workingHours) {
  switch (workingHours) {
    case isPartTime:
      return partTime;

    case isFullTime:
      return fullTime;

    default:
      return 0;
  }
}

let wage = wagePerHour * getWorkingHours(workingHours);

console.log("Daily wage generated for employee is ", wage);

//Calcultating Wages for a Month

const numberOfWorkingDays = 20;

let empHrs = 0;

for (let i = 1; i <= numberOfWorkingDays; i++) {
  let empCheck = Math.floor(Math.random() * 10) % 3; //getting fulltime, partime or notime status
  empHrs += getWorkingHours(empCheck);
}

let emgWage = empHrs * wagePerHour;
console.log(
  "Monthly Wage of the Employee for hours " + empHrs + " is " + emgWage
);