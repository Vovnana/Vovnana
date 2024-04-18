const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const reverseString = str => str.split("").reverse().join("");

83 * true
const variableName = getRandomNumber();

orange - true
let array = getRandomArray(); array.forEach(item => console.log(item));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

grape

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
orange

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
65,37,1,11,67,41,50,15,19,10,89,62,35,83,80,59,20,20,64,35,39,27,47,19,63,19,26,13,42,56,17,35,69,92,72,23,94,39,37,81,3,83,55,92,10,32,16,20,54,88,5,87,4,11,77,54,32,6,29,75,65,10,59,35,15,53,79,31,4,19,40,86,57,60,63,56,90,52,52,86,17,60,18,81,33,30,60,49,74,57,27,42,45,12,54 / 49,52,2,7,99,30,37,63,83,78,26,34,95,75,39,93,21,63,56,27,94,36,69,58,0,9,75,8,74,46,19,32,16,95,26,30,68,69,88,48,2,15,75,65,75,60,48,2,94,91,64,99,94,13,86,82,23,89,60,18,45,27,9,86
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
kiwi

const variableName = getRandomNumber();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
65 - 73

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const capitalizeString = str => str.toUpperCase();
33,45,82,96,96,81,3,87,97,57,52,42,73,89,59,66,90,29,18,99,93,79,13,62,1,34,57,82,59,90,18,66,32,74,18,68,23,48,59,17,54,98,18,42,75,0,58,5,54,70,63,57,36,76,87,93,18,91,77,89,95,32,51,29,93,20,50,76,73,31,11,52,62,76,69,56,73,69,7,36 / true
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

36 + apple
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

94,88,28,79,66,86,26,1,54,95,21,82,25,73,59,18,22,52,24 - orange
const randomNumber = getRandomNumber();
48,71,2,57,83,73,55,41,45,66,30,97,29,25,65,92,0,93,39,15,43,55,96,76,2,40,17,67,9,89,25,37,19,12,75,92,70,53,70,18,47,89,93,14,33,58,23 * false
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
82 + kiwi
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

58 + 35
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
