const arr = [5, 1, 2, 3, 4];
const newArr = arr.toSorted((a, b) => a - b);
const reverseArr = newArr.toReversed();
const months = ["Jan", "Mar", "Apirl", "May"];

// Inserting an element at index 1
const newMonths1 = months.toSpliced(1, 0, "Feb");

console.log(newMonths1);

// Deleting two elements starting from index 2
const newMonths2 = newMonths1.toSpliced(2, 2);

console.log(newMonths2);

// Replacing one element at index 1 with two new elements
const newMonths3 = newMonths2.toSpliced(1, 1, "Febuary", "March");

console.log(newMonths3);
