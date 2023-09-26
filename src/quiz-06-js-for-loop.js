/**
 * This quiz is to test your knowledge of For-Loop.
 *
 * 1. When you finish the quiz, create a branch on you repository
 * 2. Submit to your lead
 */

// Quiz on For-loops and Biblical Trivia

// Question 1: Count the number of occurrences of the letter 'a' in the name "Abraham".
let name1 = "Abraham";
let count1 = 0;
for (let i = 0; i < name1.length; i++) {
    count1 += name1[i].toLowerCase() === "a" ? 1 : 0;
}
console.log(`the number of occurrences of the letter 'a' is ${count1} in the name ${name1}`); 

// Question 2: Reverse the string "Moses".
let name2 = "Moses";
let reversedName2 = "";
for (let j = name2.length - 1; j >= 0; j--) {
    reversedName2 += name2[j];
}
console.log(`the word reverse is : ${reversedName2}`);

// Question 3: Sum the integers from 1 to 12 (the number of sons of Jacob).
let sum3 = 0;
for (let i = 1; i <= 12; i++) {
    sum3 += i;
}
console.log(`The number of sons of Jacob is : ${sum3}`);

// Question 4: Create a string that contains the first 5 books of the Old Testament separated by a comma.
let books4 = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];
let bookString4 = "";
for (let i = 0; i < books4.length; i++) {
    bookString4 += books4[i];
    if (i < books4.length - 1) {
        bookString4 += ", ";
    }
}
console.log(bookString4);

// Question 5: Count the number of vowels in the name "Jerusalem".
let name5 = "Jerusalem";
let count5 = 0;
for (let j = 0; j < name5.length; j++) {
    if ("aeiou".includes(name5[j].toLowerCase())) {
        count5++;
    }
}
console.log(`The number of vowels in the name ${name5} is : ${count5}`);

// Question 6: Find the product of the numbers 1 to 5.
let product6 = 1;
for (let j = 1; j <= 5; j++) {
  product6 *= j;
}
console.log(`The product of the numbers 1 to 5 is : ${product6}`);

// Question 7: Create a string from an array that tells the story of David and Goliath.
let story7 = ["David", "fought", "Goliath", "and", "won."];
let storyString7 = "";
for (let j = 0; j < story7.length; j++) {
    storyString7 += story7[j];
    if (j < story7.length) {
        storyString7 += " ";
    }
}
console.log(storyString7);

// Question 8: Create an acronym from the phrase "In The Beginning".
let phrase8 = "in the beginning";
let acronym8 = "";
for (let j = 0; j < phrase8.length; j++) {
    if (j === 0) {
        acronym8 = phrase8[0].toUpperCase();
    }
    if (phrase8[j] === " ") {
        acronym8 += phrase8[j + 1].toUpperCase();
    }
}
console.log(acronym8);

// Question 9: Convert the string "Noah" to uppercase.
let name9 = "Noah";
let upperName9 = "";
for (let j = 0; j < name9.length; j++) {
    upperName9 += name9[j].toUpperCase();
}
console.log(upperName9);

// Question 10: Find the length of the string "Revelation" without using the `.length` property.
let name10 = "Revelation";
let length10 = 0;
for (let j = 0; name10[j] !== undefined; j++) {
    length10++;
}
console.log(`The length of the string ${name10} is : ${length10}`);


// Additional 10 Questions on For-loops and Biblical Trivia

// Question 11: Count the number of occurrences of the letter 'e' in the word "Jericho".
let city11 = "Jericho";
let count11 = 0;
for (let j = 0; j < city11.length; j++) {
    count11 += city11[j].toLowerCase() === "e" ? 1 : 0;
}
console.log(
    `the number of occurrences of the letter 'e' is ${count11} in the name ${city11}`
);

// Question 12: Reverse the string "Bethlehem".
let town12 = "Bethlehem";
let reversedTown12 = "";
for (let j = town12.length - 1; j >= 0; j--) {
    reversedTown12 += town12[j];
}
console.log(`the word reverse is : ${reversedTown12}`);

// Question 13: Sum the integers from 1 to 40 (the number of days of Jesus' temptation).
let sum13 = 0;
for (let j = 1; j <= 40; j++) {
    sum13 += j;
}
console.log(`the number of days of Jesus temptation is : ${sum13}`);

// Question 14: Concatenate the list of the Twelve Apostles into a single string separated by a comma.
let apostles14 = ["Peter","James","John", "Andrew","Philip","Bartholomew","Matthew","Thomas","James","Thaddeus","Simon","Judas"];
let apostlesString14 = "";
for (let j = 0; j < apostles14.length; j++) {
    apostlesString14 += apostles14[j];
    if (j < apostles14.length - 1) {
        apostlesString14 += ", ";
    }
}
console.log(apostlesString14);

// Question 15: Count the number of consonants in the name "Isaiah".
let name15 = "Isaiah";
let count15 = 0;
for (let j = 0; j < name15.length; j++) {
    if (!"aeiou".includes(name15[j].toLowerCase())) {
        count15++;
    }
}
console.log(`The number of consonants in the name ${name15} is : ${count15}`);

// Question 16: Find the product of the numbers from 3 to 7.
let product16 = 1;
for (let j = 3; j <= 7; j++) {
  product16 *= j;
}
console.log(`The product of the numbers from 3 to 7 is : ${product16}`);

// Question 17: Create a string from an array that tells the story of Jonah and the Whale.
let story17 = ["Jonah", "was", "swallowed", "by", "a", "whale."];
let storyString17 = "";
for (let j = 0; j < story17.length; j++) {
    storyString17 += story17[j];
    if (j < story17.length) {
        storyString17 += " ";
    }
}
console.log(storyString17);

// Question 18: Create an acronym from the phrase "Garden Of Eden".
let phrase18 = "Garden Of Eden";
let acronym18 = "";
for (let j = 0; j < phrase18.length; j++) {
    if (j === 0) {
        acronym18 += phrase18[0].toUpperCase();
    }
    if (phrase18[j] === " ") {
        acronym18 += phrase18[j + 1].toUpperCase();
    }
}
console.log(acronym18);

// Question 19: Convert the string "Canaan" to lowercase.
let name19 = "Canaan";
let lowerName19 = "";
for (let j = 0; j < name19.length; j++) {
    lowerName19 += name19[j].toLowerCase();
}
console.log(lowerName19);

// Question 20: Find the length of the string "Exodus" without using the `.length` property.
let name20 = "Exodus";
let length20 = 0;
for (let j = 0; name20[j] !== undefined; j++) {
    length20 += name20[j] !== undefined ? 1 : 0;
}
console.log(`The length of the string ${name20} is : ${length20}`);