"use strict";
{
    // Constrains
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const Student1 = addCourseToStudent({
        name: "Mr X",
        id: 1,
        age: 24,
        email: "x@gmail.com",
        devType: "Next Level Web Developer",
    });
    const Student2 = addCourseToStudent({
        name: "Mir Z",
        id: 1,
        email: "z@gmail.com",
    });
    const Student3 = addCourseToStudent({
        name: "Mr Y",
        id: 2,
        age: 24,
        email: "y@gmail.com",
        hasWatch: true,
    });
    //
}
