{
  // Function with Generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const result1 = createArray("Habul");
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

  //
}
