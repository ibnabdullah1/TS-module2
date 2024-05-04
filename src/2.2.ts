{
  //
  // Interface

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole1 = {
    name: "John",
    age: 36,
    role: "Developer",
  };

  const user2: UserWithRole2 = {
    name: "John",
    age: 36,
    role: "Developer",
  };

  type RollNumber = number;

  interface User2 {
    name: string;
    age: number;
  }

  // JS --> object , array --> object function -> object

  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rollNumber2: Roll2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add1 = (num1, num2) => num1 + num2;

  //
}
