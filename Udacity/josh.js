/***************************************************
 * INTRODUCTION
 * 
 * Wrote out the same funciton a few ways here.  Everything I use, even the [condition] ? [if true] : [if false]
 * notation is covered in the Udacity course, so if you see any gaps, I suggest checking out the Udacity course
 * after you finish the Codecademy course.  If any of this looks foreign, send questions if eager, or we can go
 * through together on Tuesday.
 * 
 */

/*****
 * First, declaring functions with a sztandard object-oriented, a little more lengthy solution
 */

function evenOrOdd(num) {  // going overboard on this one, but it's a vanilla function declaration, common, the usual way in most languages.
    let returnValue = '';  // creating a variable to store the value to be returned (in this case a string, but JavaScript doesn't make you tell it that); initializing to an empty string out of habit and intentionality
    if (num % 2 == 0) {  // if condition - must use a double (==) or triple (===) equals here. Covered in Udacity course
        returnValue = 'Even';  // the string I want returned if the number is even
    } else {  // else, it's odd - or not a number, but not going to overcomplicate this function
        returnValue = 'Odd';  // set return value to odd
    }

    return returnValue; // return the return value that was used purely for readability and verbosity
}

/*****
 * Still a vanilla function, but wrote this to be fast as fuck, and short as fuck, so named SAF
 * This function uses the '[condition] ? [if true] : [if false]' shorthand you should know, as it's common
 * in many software languages going all the way back to C++.  It's important.  And it's in the Udacity course.
 * 
 */

function evenOrOddSAF(num) {
    return (num % 2 == 0) ? 'Even' : 'Odd';
}

function even_or_odd(num) {
    
}

/*****
 * These are the executions of the functions above for the value 'numberToTest'; try different values to see result
 */

let numberToTest = 5;

let testIsItEvenOrOdd = evenOrOdd(numberToTest);
console.log("Lengthy named function 'evenOrOdd': ");
console.log(testIsItEvenOrOdd);

testIsItEvenOrOdd = evenOrOddSAF(numberToTest);
console.log("Short as Fuck (SAF) function evenOrOddSAF: ");
console.log(testIsItEvenOrOdd);

/*****
 * Now for the anonymous functions, starting with the one you started
 */

const evenOrOddAnonFunction = (num) => { return (num % 2 == 0) ? 'Even' : 'Odd'; }
console.log("Storing an anonymous function in the evenOrAddAnonFunction constant variable: ");
console.log(evenOrOddAnonFunction(numberToTest));

/*****
 * And the obligatory one-liner where, if the goal is simply to print to the screen, and you never want to apply this code elsewhere,
 * you can do it in one line
 */

console.log("If the purpose was to write whether or not the value 'numberToTest' is even or odd, this is how you'd do it in one line, the epitome of brevity, the haiku if you will: ");
console.log( (numberToTest % 2 == 0) ? 'Even' : 'Odd' );