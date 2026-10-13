const fullName = "aline UWASE";
const strimmedName = fullName.trim();
const separateName = strimmedName.split(" ");
const sliced = strimmedName.slice(0,5);
const upperCase = strimmedName.toUpperCase();
const lowerCase = strimmedName.toLowerCase();
// const initials = strimmedName.charAt(0) + strimmedName.charAt(6);
const map = strimmedName.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase()).join(".") + ".";
const userName = strimmedName.trim().split(/\s+/).join(".").toLowerCase();
const length = strimmedName.trim().split(" ").join("").length;

console.log(strimmedName);
console.log(separateName);
console.log(sliced);
console.log(upperCase);
console.log(lowerCase);
console.log(map);
console.log(userName);
console.log(length);
