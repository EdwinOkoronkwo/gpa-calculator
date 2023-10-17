const calculateGrade = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "A":
        sum += 4.0;
        break;
      case "B":
        sum += 3.0;
        break;
      case "C":
        sum += 2.0;
        break;
      case "D":
        sum += 1.0;
        break;
      default:
        "Please provide valid GPA";
    }
  }
  return sum / arr.length;
};

document.getElementById(
  "p1"
).innerHTML = `The average GPA of the array ["A", "B", "C", "A", "B", "B", "C", "D"] is <strong>${calculateGrade(
  ["A", "B", "C", "A", "B", "B", "C"]
)}</strong>`;
