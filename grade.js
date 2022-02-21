const marks = [70, 50, 80];


function calculateGrade(marks) {
     const average = calculateAverage(marks)
      
     if (average < 60){
              console.log("F");
     }
     else if (average < 70) {
        console.log("D");
    }
     else if (average < 80) {
        console.log("C");
    }
     else if (average < 90) {
        console.log("B");
    }
      else {
        console.log("A");
    }
}

console.log(calculateGrade(marks));

function calculateAverage(array){
    let sum = 0;
    for (let value of array)
    sum += value;
    return sum / array.length;
}


