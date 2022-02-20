showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let determine = (i % 2 === 0);
    const message = (determine) ? 'EVEN' : 'ODD';
    console.log(i, message);   
  }
}
