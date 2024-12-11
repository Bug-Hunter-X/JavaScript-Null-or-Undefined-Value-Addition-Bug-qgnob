function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values
  }

  return a + b; // Perform addition
}