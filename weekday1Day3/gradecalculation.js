//grade calcculation
function calculateGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
    }
    return grade;
}
calculateGrade(95);
console.log(calculateGrade(95));
