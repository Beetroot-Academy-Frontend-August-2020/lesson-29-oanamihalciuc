/* 2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

A function for adding two fraction objects.
A function for subtracting two fraction objects.
A function for multiplying two fraction objects.
A function for dividing two fraction objects.
A function for simplifying a fraction object.  */

/* 1. an object that contains 1 numerator and 1 denominator = a fraction
2. write 4 different functions  
*/


let fraction1 = {
    numerator: 4,
    denominator: 2,
}

let fraction2 = {
    numerator: 3,
    denominator: 2,
}

function sum (fraction1, fraction2) {
    result = (fraction1.numerator + fraction2.numerator) / fraction1.denominator;
    return result;
}

sum(fraction1, fraction2);

function subtraction (fraction1, fraction2) {
    result = (fraction1.numerator - fraction2.numerator) / fraction1.denominator;
    return result;
}

subtraction(fraction1, fraction2);

function multiplication (fraction1, fraction2) {
    result = (fraction1.numerator * fraction2.numerator) / (fraction1.denominator * fraction2.denominator);
    return result;
}

multiplication(fraction1, fraction2);

function division (fraction1, fraction2) {
    result = (fraction1.numerator * fraction2.denominator) / (fraction1.denominator * fraction2.numerator);
    return result;
}

division(fraction1, fraction2);

/* how to write the simplification with JS? */