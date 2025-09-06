document.addEventListener('DOMContentLoaded', () => {
  // ✅ Countdown (Safe fallback if commented out)
  function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return; // Exit if countdown is commented out

    const launchDate = new Date("October 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "<p>We're live!</p>";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const el = id => document.getElementById(id);
    if (el("days") && el("hours") && el("minutes") && el("seconds")) {
      el("days").textContent = days;
      el("hours").textContent = hours.toString().padStart(2, "0");
      el("minutes").textContent = minutes.toString().padStart(2, "0");
      el("seconds").textContent = seconds.toString().padStart(2, "0");
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      if (answer) {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
