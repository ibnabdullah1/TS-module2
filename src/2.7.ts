{
  // Generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; // Manually
  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "Mr Smith",
    age: 18,
    address: "ctg",
  };
  const result = getPropertyValue(user, "age");

  // user["name"]
  //Output: "Mr Smith";
  //
}
