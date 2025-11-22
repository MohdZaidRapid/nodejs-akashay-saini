var arr = [
  { name: "Harsh", gender: "male" },
  { name: "Amit", gender: "male" },
  { name: "Rohan", gender: "male" },
  { name: "Vikram", gender: "male" },
  { name: "Arjun", gender: "male" },
  { name: "Kunal", gender: "male" },
  { name: "Rahul", gender: "male" },
  { name: "Suresh", gender: "male" },
  { name: "Pranav", gender: "male" },
  { name: "Varun", gender: "male" },
  { name: "Sneha", gender: "female" },
  { name: "Pooja", gender: "female" },
  { name: "Neha", gender: "female" },
  { name: "Anjali", gender: "female" },
  { name: "Kavita", gender: "female" },
  { name: "Riya", gender: "female" },
  { name: "Sonia", gender: "female" },
  { name: "Priya", gender: "female" },
  { name: "Divya", gender: "female" },
  { name: "Megha", gender: "female" },
  { name: "Meghanari", gender: "nonspecified" },
];

// var newArray = arr.filter(function (elem) {
//   return elem.gender === "female";
// });

// // console.log(newArray);

// arr=newArray

// sabse pheley total non-male count lo
var count = 0;
arr.forEach(function (elem) {
  if (elem.gender !== "male") count++;
});

for (var i = 1; i <= count; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}

console.log(arr);
