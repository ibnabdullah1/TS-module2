{
  //Generic type

  type GenericArray<T> = Array<T>;

  //   const RollNumber: number[] = [1, 2, 3, 4, 5];
  const RollNumber: Array<number> = [1, 2, 3, 4, 5];

  //   const MentorsName: string[] = ["a", "b", "c", "d", "e", "f"];
  const MentorsName: GenericArray<string> = ["a", "b", "c", "d", "e", "f"];

  //   const booleanArray: boolean[] = [true, false];
  const booleanArray: Array<boolean> = [true, false];
  const add = (a: number, b: number) => a + b;
  add(12, 33);

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "Arafat", age: 21 },
    { name: "Abdullah", age: 21 },
  ];

  // Generic Tuple

  type GenericTuple<X, Y> = [X, Y];
  const human: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  type GenericTupleWithId<A, B, C> = [A, B, C];

  //   const userWithId: GenericTupleWithId<number, object, boolean> = [
  //     11,
  //     { name: "Arafat", role: "Developer" },
  //  true,true,
  //   ];

  const userWithId: GenericTupleWithId<
    number,
    { name: string; role: string; salary: number },
    boolean
  > = [11, { name: "Arafat", role: "Developer", salary: 10000 }, true];

  // Enum Types
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  console.log(Direction.Left); // 2

  //
}
