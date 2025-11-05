/* ==============================
   1️⃣ Fade-in on scroll
   ============================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll(".card, .hero h1, .typing-text").forEach(el => observer.observe(el));

/* ==============================
   2️⃣ Page fade-in transition
   ============================== */
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

/* ==============================
   3️⃣ Smooth scroll-to-top button
   ============================== */
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.className = "scroll-top-btn";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
// ===== Project Tabs Switching with Smooth Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Find and show the correct content
      const target = document.getElementById(tab.dataset.target);

      // Use a small delay for smooth fade-in
      setTimeout(() => {
        target.classList.add("active");
      }, 100);
    });
  });
});

