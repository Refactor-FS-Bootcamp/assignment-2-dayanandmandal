// Hello, Object
let user = {};
user.name = "John";
user["surname"] = "Smith";
user.name = "Pete";
delete user.name;


// Check for emptiness
function isEmpty(obj) {
    for(let key in obj) {
        return true;
    }
    return false;
}

let schedule = {};
console.log( `\nIs schedule empty? ${isEmpty(schedule)}` );

schedule["8:30"] = "get up";
console.log( `Is schedule empty? ${isEmpty(schedule)}\n` );



// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sum(obj) {
    let s = 0;
    for(let key in obj) {
        s += obj[key];
    }
    return s;
};
console.log("Sum of Salaries is " + sum(salaries) + "\n");


// Multiply Numeric Value by 2
let menu = {
    width: 200,
    height: 300,
    title: "My Menu",
};

function multiplyNumeric(obj) {

    for(let key in obj) {
        if( typeof obj[key] === "number") {
            obj[key] = obj[key] * 2;
        }       
    }

}

console.log("Before multiplying with 2 ");
console.log(menu);

multiplyNumeric(menu);

console.log("After multiplying by 2 ");
console.log(menu);
console.log("\n");

// console.log("After multiplying by 2 " + menu);
// console.log(`After multiplying by 2 ${menu}`); // ----> Doubt
// is it doing the same thing under the hood

