// ===== Navigation Active Highlight =====
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function() {
    document.querySelectorAll("nav ul li a").forEach(el => el.classList.remove("active"));
    this.classList.add("active");
  });
});

// ===== Countdown Timer =====
function startCountdown(days, hours, minutes, seconds) {
  const timer = document.querySelector(".time");
  let totalSeconds = (days * 24 * 60 * 60) + (hours * 3600) + (minutes * 60) + seconds;

  setInterval(() => {
    if (totalSeconds <= 0) return;
    totalSeconds--;

    const d = Math.floor(totalSeconds / (24 * 3600));
    const h = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    timer.innerHTML = `
      <div class="date">${d} <br> Days</div>
      <div class="date">${h} <br> Hours</div>
      <div class="date">${m} <br> Minutes</div>
      <div class="date">${s} <br> Sec</div>
    `;
  }, 1000);
}
startCountdown(18, 23, 6, 58); // initial values

// ===== Form Validation =====
document.querySelector(".form .blue").addEventListener("click", function(e) {
  e.preventDefault();
  const name = document.querySelector("input[placeholder='Name']").value.trim();
  const email = document.querySelector("input[type='email']").value.trim();
  const phone = document.querySelector("input[type='tel']").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill in all fields!");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Enter a valid email address!");
    return;
  }
  if (!/^\d{10}$/.test(phone)) {
    alert("Enter a valid 10-digit phone number!");
    return;
  }
  alert("Form submitted successfully!");
});

// ===== Course Search =====
const searchBox = document.createElement("input");
searchBox.setAttribute("placeholder", "Search Courses...");
searchBox.style.margin = "20px";
document.querySelector("#course").prepend(searchBox);

searchBox.addEventListener("keyup", function() {
  const keyword = this.value.toLowerCase();
  document.querySelectorAll(".courses").forEach(course => {
    const title = course.querySelector("h3").textContent.toLowerCase();
    course.style.display = title.includes(keyword) ? "block" : "none";
  });
});
