const marks = [90, 90, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
     let sum = 0;
     for(let mark of marks)
     sum += mark;
     let average = sum / marks.length;
      
     if (average >= 0 && average <= 59){
              console.log("F");
     }
     else if (average >= 60 && average <= 69) {
        console.log("D");
    }
     else if (average >= 70 && average <= 79) {
        console.log("C");
    }
     else if (average >= 80 && average <= 89) {
        console.log("B");
    }
      else {
        console.log("A");
    }
}