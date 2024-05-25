const myArray = [1, 2, 3, 4, 5];
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log("\nUsing forEach method:");
myArray.forEach(item => {
  console.log(item);
});
console.log("\nUsing for...of loop:");
for (const item of myArray) {
  console.log(item);
}
