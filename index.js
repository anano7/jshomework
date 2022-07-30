//task1

let person = {
    firstname: "ანა",
    age: 28,
}
let person2 = {
    firstname: "ლევანი",
    age: 21,
}
console.log(person);
console.log(person2);
let asaki = person.age - person2.age;
console.log("ანა ლევანიზე", + asaki + " წლით უფროსია");
let typetext = typeof person;
console.log(typeof typetext)
//task2;

let namesArr = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];
console.log(namesArr[4]);

//task3

let studenttype = {
    firstname: "James",
    lastname: "Jones",
    fullname: "James Jones",
    age: 20,
    subjects: ["english", "sport", "music", "math", "biology"],
    roommate: {
        fullname2: "Nicole Starry",
        age: 21,
    },
}
console.log(studenttype);
for (let i = 0; i < 5; i++){
    console.log(studenttype.subjects[i]);
}; 
let fullname ="James Jones";
console.log(fullname);
//მესამე ბოლომდე ვეღარ გავაკეთე: - დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            //(სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

//task4

let fruitsArr = ["Banana", "Orange", "Apple", "Mango",2,12]
let i = 0;
while (i < 4) {
    console.log(fruitsArr[i]);
    i++;
}

//task5

let numArr = [12,23,43,11,9,2,121,90];
if (numArr>31, numArr%2 == 0); {
    console.log('Element is greater than provided value and is EVEN');
} 
if (numArr<31, numArr%2 == 1); { 
    console.log('Element is less than provided value and is ODD');
};