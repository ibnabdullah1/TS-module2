"use strict";
{
    const getPropertyValue = (obj, key) => {
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
