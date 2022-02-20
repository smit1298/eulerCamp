showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let determine = i % 2 === 0;
    if (determine === "true") console.log(i, "EVEN");
    else console.log(i, "ODD");
  }
}
