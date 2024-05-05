{
  // Function with Generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const result1 = createArray("Kabul");
  //
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const result2 = createArrayWithGeneric<number>(12);
  const result3 = createArrayWithGeneric<{
    id: number;
    name: string;
    age: number;
  }>({
    id: 1,
    name: "Habul",
    age: 19,
  });

  //   // Function with Tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const result4 = createArrayWithTuple<string, number>("Kabul", 11);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };
  const Student1 = addCourseToStudent({
    name: "Mr Mir",
    age: 24,
    email: "mir@gmail.com",
    devType: "Next Level Web Developer",
  });
  const Student2 = addCourseToStudent({
    name: "Mr Hossain",
    age: 24,
    email: "mir@gmail.com",
    hasWatch: true,
  });
  //
}
