"use strict";
{
    //
    // Type Assertion
    let anyThing;
    anyThing = "Next Level Web Development";
    anyThing;
    const KgToGm = (value) => {
        if (typeof value === "string") {
            const isConvertedValue = parseFloat(value) * 1000;
            return `The converted value is ${isConvertedValue}`;
        }
        if (typeof value === "number") {
            return `The converted value is ${value * 1000}`;
        }
    };
    console.log(KgToGm(201));
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
