import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';

const engineering = ['John Doe', 'Guillaume Salva'];
const design = ['Kanye East', 'Jay Li'];

test('iterateThroughObject returns the correct string', () => {
  const employees = {
    ...createEmployeesObject('engineering', engineering),
    ...createEmployeesObject('design', design),
  };

  const report = createReportObject(employees);
  const reportWithIterator = createIteratorObject(report);
  expect(iterateThroughObject(reportWithIterator)).toEqual('John Doe | Guillaume Salva | Kanye East | Jay Li');
});
