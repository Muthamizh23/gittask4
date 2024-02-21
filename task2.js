// Print odd numbers in an array
let printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Convert all the strings to title caps in a string array

let convertToTitleCaps = arr => {
    return arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
console.log(convertToTitleCaps(["hello", "world", "javascript"]));

// Sum of all numbers in an array

let sumArray = arr => {
    return arr.reduce((acc, num) => acc + num, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]));

// Return all the prime numbers in an array

let findPrimeNumbers = arr => {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};
console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Return all the palindromes in an array

let findPalindromes = arr => {
    return arr.filter(word => word === word.split('').reverse().join(''));
};
console.log(findPalindromes(["level", "noon", "hello", "racecar", "world"]));