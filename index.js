document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('emailInput');
  const joinBtn = document.getElementById('joinBtn');
  const message = document.getElementById('message');

  const savedEmail = localStorage.getItem('savedEmail');
  if (savedEmail) {
    emailInput.value = savedEmail;
  }

  joinBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      message.textContent = "Please enter your email.";
      message.style.color = "#FFCCB0";
    } else if (!emailPattern.test(email)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "#FF83D5";
    } else {

      localStorage.setItem('savedEmail', email);
      message.textContent = "Thanks for joining!";
      message.style.color = "#00F8FF";
    }
  });
});
