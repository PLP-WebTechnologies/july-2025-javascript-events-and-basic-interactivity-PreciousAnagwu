// PART 1: EVENT HANDLING

const messageBtn = document.getElementById("messageBtn");
const messageText = document.getElementById("messageText");
messageBtn.addEventListener("click", function () {
  messageText.textContent = "🎉 You clicked the button!";
});


// PART 2: INTERACTIVE FEATURES

// --- Light/Dark Mode ---
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode"); 
});

// --- Counter Game ---
let counter = 0;
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterValue = document.getElementById("counterValue");

increaseBtn.addEventListener("click", function () {
  counter++;
  counterValue.textContent = counter;
});
decreaseBtn.addEventListener("click", function () {
  counter--;
  counterValue.textContent = counter;
});

// --- FAQ Section ---
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// --- Dropdown Menu ---
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");
dropdownBtn.addEventListener("click", function () {
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});

// --- Tabbed Interface ---
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", function () {
    // Remove active class from all
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.style.display = "none");

    // Add active to clicked
    this.classList.add("active");
    const tabId = this.getAttribute("data-tab");
    document.getElementById(tabId).style.display = "block";
  });
});


// PART 3: FORM VALIDATION

const form = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "") {
    formMessage.textContent = "❌ Name cannot be empty";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "❌ Enter a valid email";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "❌ Password must be at least 6 characters";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "✅ Form submitted successfully!";
  formMessage.style.color = "green";
});
