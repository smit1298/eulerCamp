function sumSquareDifference(n) {
  
    let sumNatural = (n*(n + 1)) / 2;
    let sumSquares = ((( n * (n + 1))*(2 * n + 1))/6)
    console.log(sumSquares);

    let squareSumNatural = Math.pow(sumNatural, 2);
    console.log(squareSumNatural);
     const difference = squareSumNatural - sumSquares 
  console.log(difference);
  return difference;
}

sumSquareDifference(10);