import { Employee } from './employee/employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
