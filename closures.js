function closur() {
  let count = 1;
  return function () {
    console.log(count);
    count++;
  };
}

let inc = closur();

inc();
inc();
inc();
inc();
