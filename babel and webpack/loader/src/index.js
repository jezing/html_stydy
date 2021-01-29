import "core-js/stable";

let name = "Alex";
const age = 19;
console.log(name, age);

const add = (x, y) => x + y;
console.log(add(1, 2));

new Promise((resolve, reject) => {
    resolve("success");
}).then(value => {
    console.log(value);
});

console.log(Array.from([1, 2]));
class Person {
    constructor(name, age) {
        Object.assign(this, {
            name,
            age
        })
    }
};

new Person("alex", 18)