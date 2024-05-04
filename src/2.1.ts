{
  //
  // Type Assertion

  let anyThing: any;
  anyThing = "Next Level Web Development";
  anyThing as string;
  const KgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const isConvertedValue = parseFloat(value) * 1000;
      return `The converted value is ${isConvertedValue}`;
    }
    if (typeof value === "number") {
      return `The converted value is ${value * 1000}`;
    }
  };
  console.log(KgToGm(201) as number);

  type customError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as customError).message);
  }

  //
}
