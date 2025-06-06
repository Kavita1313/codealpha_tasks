window.onload = function () {
  // Set max date to today
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dob").setAttribute("max", today);
};

document.getElementById("calculateBtn").addEventListener("click", function () {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("ageResult");

  if (!dobInput) {
    result.innerText = "Please enter your date of birth.";
    return;
  }

  const birthDate = new Date(dobInput);
  const today = new Date();

  if (birthDate > today) {
    result.innerText = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  result.innerHTML = `
    You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.<br />
    That's a total of <strong>${totalDays}</strong> days.
  `;
});