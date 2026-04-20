function openPage(page) {
  window.location.href = page;
}

/* 🔍 search */
function searchStudent() {
  let input = document.getElementById("search").value.toLowerCase();
  let students = document.getElementsByClassName("student");

  for (let i = 0; i < students.length; i++) {
    let name = students[i].innerText.toLowerCase();
    students[i].style.display = name.includes(input) ? "" : "none";
  }
}

/* ✨ floating particles */
const particles = document.querySelector(".particles");

for (let i = 0; i < 50; i++) {
  let span = document.createElement("span");

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 5 + Math.random() * 10 + "s";
  span.style.width = span.style.height = Math.random() * 6 + 3 + "px";

  const colors = ["#ff69b4", "#ffb6c1", "#ff85c0"];
  span.style.background = colors[Math.floor(Math.random() * colors.length)];

  particles.appendChild(span);
}