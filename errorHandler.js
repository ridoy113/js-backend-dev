console.log(module);

export function errorHandler(error) {
    const { name, message, stack } = error;

    // logger.error({
    //     name,
    //     message,
    //     stack,
    // });

    console.log("Internal server error!");
}

// module.exports = errorHandler;

function two() {
    console.log("two");
}

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;

// module.exports = {
//     errorHandler: errorHandler,
//     two: two,
// }

// module.exports = {
//     errorHandler,
//     two,
// }

console.log(module);


export errorHandler;

export default two;
