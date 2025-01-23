function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // Resolves with the input array after 3 seconds
    }, 3000);
  });
}

getNumbers()
  .then((numbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = `Even Numbers: ${evenNumbers.join(",")}`;
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const transformedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent = `Transformed Numbers: ${transformedNumbers.join(",")}`;
        resolve(transformedNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    document.getElementById("output").textContent = `Error: ${error}`;
  });
