"use strict";
{
    // Function with Generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result1 = createArray("Habul");
    const result2 = createArrayWithGeneric(12);
    const result3 = createArrayWithGeneric({
        id: 1,
        name: "Habul",
        age: 19,
    });
    //
}
