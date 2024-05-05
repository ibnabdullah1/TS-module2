"use strict";
{
    // Function with Generics
    const createArray = (param) => {
        return [param];
    };
    const result1 = createArray("Kabul");
    //
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result2 = createArrayWithGeneric(12);
    const result3 = createArrayWithGeneric({
        id: 1,
        name: "Habul",
        age: 19,
    });
    //   // Function with Tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const result4 = createArrayWithTuple("Kabul", 11);
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
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
