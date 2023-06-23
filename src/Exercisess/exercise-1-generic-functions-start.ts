/**
 * START: Follow the instructions below.
 */

// Make this identity function generic.
// Hint: The type for the `value` function parameter should use a type variable.

function identity<T>(value: T): T {
    return value;
}

let value1 = identity("France");

let value2 = identity(67_413_000);

console.log('Value 1:', value1);
console.log('Value 2:', value2);

// ----

async function fetchData<Type>(url: string): Promise<Type> {
    const response = await fetch(url);
    const responseBody = await response.json();

    return responseBody as Type;
}

interface User {
    name: string;
}

// Pass the `User` type as a type argument to the generic `fetchData()` function.
// This should fix the type error on Line 35.

(async () => {
    let user = await fetchData<User>("http://api.com/user/1");
    
    console.log(user.name);
    
})(); 

// ----

export {};

