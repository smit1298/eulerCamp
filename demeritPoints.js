// speed = 70
// 5 -> 1 point
// Math.floor(1.3)

checkSpeed(1000);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmperPoint = 5;

  if (speed < speedLimit + kmperPoint){ console.log("Ok");
  return;}

  const points = Math.floor((speed - speedLimit) / kmperPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}
