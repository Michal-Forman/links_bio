function calculateMyAge() {
  const birthdate = "6.3.2007";
  const [day, month, year] = birthdate
    .split(".")
    .map((num) => parseInt(num, 10));
  const birthDateObj = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const m = today.getMonth() - birthDateObj.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }

  return age;
}

let ageTxt = document.getElementById("ageTxt");
ageTxt.textContent = calculateMyAge();
