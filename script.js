function updateCountdown() {
    const launchDate = new Date("September 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;
  
    if (timeLeft <= 0) {
      document.getElementById("countdown").innerHTML = "<p>We're live!</p>";
      return;
    }
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();

  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  });
  
// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });
  