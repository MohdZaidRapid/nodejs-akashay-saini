// const callMe = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("hello");
//   } else {
//     reject("fail");
//   }
// });

// callMe
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const callMe = async () => {
  if (true) {
    return "hello";
  } else {
    throw new Error("fail");
  }
};

const fetchData = async () => {
  try {
    const result = await callMe();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

fetchData();
