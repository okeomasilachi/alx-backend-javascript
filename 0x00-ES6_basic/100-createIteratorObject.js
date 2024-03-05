export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[currentDepartmentIndex];
      const employee = department[currentEmployeeIndex += 1];

      if (currentEmployeeIndex >= department.length) {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
      }

      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
