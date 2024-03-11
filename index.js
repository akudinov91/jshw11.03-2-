//Задача 1. Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых все свойства имеют значения.

// function filterObjectsWithValues(arrayOfObjects) {
//   return arrayOfObjects.filter((obj) => {
//     return Object.values(obj).every(
//       (value) => value !== undefined && value !== null
//     );
//   });
// }

// const inputArray = [
//   { name: "Andrew", age: 33, city: "Baku" },
//   { name: "Gurban", age: null, city: "Xirdalan" },
//   { name: "Ian", age: 36, city: "Minsk" },
//   { name: "Anton", age: 22, city: undefined },
// ];

// const filteredArray = filterObjectsWithValues(inputArray);
// console.log(filteredArray);

//Задача 2.

// function isEmptyObject(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }

// let myObject = {};
// let anotherObject = { key: "value" };

// console.log(isEmptyObject(myObject));
// console.log(isEmptyObject(anotherObject));

//Задача 3.

// function checkPropertyExistence(obj, propertyName) {
//   return propertyName in obj;
// }

// const sampleObject = { name: "Andrew", age: 33, city: "Baku" };

// const propertyToCheck = "age";
// if (checkPropertyExistence(sampleObject, propertyToCheck)) {
//   console.log(`Свойство "${propertyToCheck}" существует в объекте.`);
// } else {
//   console.log(`Свойство "${propertyToCheck}" не существует в объекте.`);
// }

//Задача 4.

// function areObjectsEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   keys1.sort();
//   keys2.sort();

//   for (let i = 0; i < keys1.length; i++) {
//     const key1 = keys1[i];
//     const key2 = keys2[i];

//     if (key1 !== key2) {
//       return false;
//     }

//     if (obj1[key1] !== obj2[key2]) {
//       return false;
//     }
//   }

//   return true;
// }

// const objA = { a: 1, b: 2, c: 3 };
// const objB = { b: 2, a: 1, c: 3 };

// if (areObjectsEqual(objA, objB)) {
//   console.log("Объекты содержат одинаковые наборы свойств.");
// } else {
//   console.log("Объекты имеют различные наборы свойств.");
// }

//Задача 5.

// function swapKeysAndValues(obj) {
//   const swappedObj = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       swappedObj[obj[key]] = key;
//     }
//   }

//   return swappedObj;
// }

// const originalObj = { a: 1, b: 2, c: 3 };
// const swappedObj = swapKeysAndValues(originalObj);

// console.log("Исходный объект:", originalObj);
// console.log("Новый объект с поменяными ключами и значениями:", swappedObj);

//Задача 6.

// function groupByProperty(arr, property) {
//   return arr.reduce((result, obj) => {
//     const key = obj[property];

//     if (!result[key]) {
//       result[key] = [];
//     }

//     result[key].push(obj);

//     return result;
//   }, {});
// }
// const inputArray = [
//   { id: 1, name: "Andrew", age: 33 },
//   { id: 2, name: "Gurban", age: 28 },
//   { id: 3, name: "Ian", age: 36 },
//   { id: 4, name: "Ismayil", age: 30 },
// ];

// const groupedByAge = groupByProperty(inputArray, "age");
// console.log(groupedByAge);

//Задача 7.

// function transformObject(obj) {
//   const result = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];

//       if (!result[value]) {
//         result[value] = [];
//       }

//       result[value].push(key);
//     }
//   }

//   return result;
// }
// const inputObject = {
//   prop1: "value1",
//   prop2: "value2",
//   prop3: "value1",
//   prop4: "value3",
// };

// const transformedObject = transformObject(inputObject);

// console.log(transformedObject);

//Задача 8.

// function findDifferences(obj1, obj2) {
//   const result = {};

//   for (const key in obj1) {
//     if (obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
//       result[key] = obj2[key];
//     }
//   }

//   for (const key in obj2) {
//     if (obj2.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
//       result[key] = obj2[key];
//     }
//   }

//   return result;
// }

// const object1 = { a: 1, b: 2, c: 3 };
// const object2 = { a: 1, b: 5, c: 3, d: 4 };

// const differences = findDifferences(object1, object2);
// console.log(differences);

//Задача 9.

// function countProperties(array) {
//   const result = {};
//   array.forEach((obj) => {
//     Object.keys(obj).forEach((key) => {
//       result[key] = (result[key] || 0) + 1;
//     });
//   });

//   return result;
// }
// const arrayOfObjects = [
//   { name: "Andrew", age: 33, city: "Baku" },
//   { name: "Gurban", age: 28, city: "Xirdalan" },
//   { name: "Ian", age: 36, city: "Minsk" },
//   { name: "Ali", age: 28, city: "Tbilisi" },
// ];

// const resultObject = countProperties(arrayOfObjects);
// console.log(resultObject);

//Задача 10.

// function sortByLengthDesc(obj) {
//   const properties = Object.keys(obj);
//   properties.sort((a, b) => {
//     const valueA = obj[a];
//     const valueB = obj[b];

//     const lengthA = Array.isArray(valueA)
//       ? valueA.length
//       : String(valueA).length;
//     const lengthB = Array.isArray(valueB)
//       ? valueB.length
//       : String(valueB).length;

//     return lengthB - lengthA;
//   });

//   return properties;
// }
// const exampleObject = {
//   prop1: "value123",
//   prop2: [1, 2, 3],
//   prop3: "short",
//   prop4: [4, 5, 6, 7],
// };

// const sortedProperties = sortByLengthDesc(exampleObject);
// console.log(sortedProperties);

//Задача 11.

// function filterObjectsByProperty(array, property, value) {
//   return array.filter((obj) => obj[property] === value);
// }
// const arrayOfObjects = [
//   { id: 1, name: "Andrew", age: 33 },
//   { id: 2, name: "Gurban", age: 28 },
//   { id: 3, name: "Ian", age: 36 },
// ];

// const filteredArray = filterObjectsByProperty(arrayOfObjects, "age", 25);
// console.log(filteredArray);

//Задача 12.

// function getFunctionProperties(obj) {
//   const functionProperties = [];

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
//       functionProperties.push(key);
//     }
//   }

//   return functionProperties;
// }
// const exampleObject = {
//   prop1: "value1",
//   prop2: 42,
//   prop3: function () {
//     console.log("This is a function");
//   },
//   prop4: () => {
//     console.log("This is an arrow function");
//   },
// };

// const result = getFunctionProperties(exampleObject);
// console.log(result);

//Задача 13.

// function filterNonFunctions(obj) {
//   const result = {};

//   for (const key in obj) {
//     if (typeof obj[key] !== "function") {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }
// const inputObject = {
//   prop1: "value1",
//   prop2: 42,
//   prop3: function () {
//     console.log("This is a function");
//   },
//   prop4: [1, 2, 3],
// };

// const filteredObject = filterNonFunctions(inputObject);

// console.log(filteredObject);
