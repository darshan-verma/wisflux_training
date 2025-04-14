document.getElementById('checkGrade').addEventListener('click', function () {
    const marks = parseFloat(document.getElementById('marks').value);
    const examType = document.getElementById('examType').value.trim().toLowerCase();
    const resultElem = document.getElementById('resultGrade');
  
    if (isNaN(marks)) {
      resultElem.textContent = "Please enter valid marks.";
      return;
    }
  
    // Default criteria for non "final-exam": marks in range 89-100 (inclusive) give A+
    // For "final-exam", marks must be >= 90 and <= 100.
    let getsAPlus = false;
    if (examType === "final-exam") {
      getsAPlus = (marks >= 90 && marks <= 100);
    } else {
      getsAPlus = (marks >= 89 && marks <= 100);
    }
    resultElem.textContent = getsAPlus ? "The student gets A+ grade." : "The student does not get A+ grade.";
  });