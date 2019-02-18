// zadanie na funkcje 

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  else if (exam > 75 && projects >= 5) return 90;
  else if (exam > 50 && projects >= 2) return 75;
  else if (exam > 49 && projects >= 1) return 0;
  else return 0;
}
