//your JS code here. If required.
// Function to create the initial promise
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // Resolves with the input array after 3 seconds
    }, 3000);
  });
}

// Start the chain
getNumbers()
  .then((numbers) => {
    // Filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById('output').textContent = `Even Numbers: ${evenNumbers.join(', ')}`;
        resolve(evenNumbers);
      }, 1000); // Resolve after 1 second
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const transformedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById('output').textContent = `Transformed Numbers: ${transformedNumbers.join(', ')}`;
        resolve(transformedNumbers);
      }, 2000); // Resolve after 2 seconds
    });
  })
  .catch((error) => {
    document.getElementById('output').textContent = `Error: ${error}`;
  });
