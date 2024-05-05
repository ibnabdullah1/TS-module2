{
  //  Generic Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bikes?: X;
  }
  const poorDeveloper: Developer<{ brand: string; model: string }> = {
    name: "Arafat Hosen",
    computer: {
      brand: "HP",
      model: "Core i5 8th gen",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
    },
  };
  type bikeDetails = {
    model: string;
    brand: string;
  };

  const richDeveloper: Developer<
    {
      brand: string;
      model: string;
      heartTrack: boolean;
      sleepTrack: boolean;
    },
    bikeDetails
  > = {
    name: "Abdullah",
    computer: {
      brand: "Mac Book",
      model: "Something",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
    bikes: {
      model: "Version 4.0",
      brand: "Yamaha v4",
    },
  };
  //
}
