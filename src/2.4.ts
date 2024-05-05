{
  //  Generic Interface

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
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
  const richDeveloper: Developer<{
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }> = {
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
  };
  //
}
