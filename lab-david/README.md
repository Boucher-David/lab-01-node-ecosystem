In Greet.js, I have setup a simple function that takes in one arguement. This arguement should be a string. I return the value of a ternary statement, which evaluates whether the type of the arguement is a string. If it isn't, return null. If it is, return the "Hello" + the string passed in. 

In arithmetic.js, I return a {} which contains two functions: add and subtract.

Add takes in two arguements; a and b. We first check whether the type of a, and the type of b, does not equal a number. If either is not === number, then return null. I've been very careful to check both values separately, as doing them both can lead to big issues:

    typeof a || b !== "number" -> will cause problems.

If both values are numbers, we return the combined total of both.

Subtract does the exact same thing as add: two arguements taken in and type checked to make sure they are numbers. If not, return null. If they are, return a - b.

I could write another check to make sure both a and b are entered by the user, but this seems out of the scope of the lab so I won't. 