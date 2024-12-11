# JavaScript Null or Undefined Value Addition Bug

This repository demonstrates a common error in JavaScript when adding null or undefined values. The code attempts to add two numbers, but it does not handle the case where one or both numbers might be null or undefined.  This can lead to unexpected behavior or runtime errors.

## Bug Description
The `foo` function adds two numbers. If either number is null or undefined, the addition might lead to unexpected results, such as `NaN` (Not a Number).  This is because JavaScript's loose typing can lead to implicit type coercion, which might not behave as intended when null or undefined values are involved. 

## Solution
The solution addresses the potential error by explicitly checking for null or undefined values before performing the addition.

## How to Run
1. Clone the repository
2. Open the `bug.js` and `bugSolution.js` files to see the buggy and fixed code respectively.
3. Run the code using a JavaScript environment (browser's console, Node.js, etc.)