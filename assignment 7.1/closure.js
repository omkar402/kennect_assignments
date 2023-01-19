const add = (function () {
    counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
  add();
  console.log(counter);