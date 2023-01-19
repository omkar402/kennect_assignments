let num=0;
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    num += "The number is " + i+ " "+"<br>"+" "+" ";
  }
  console.log(num)