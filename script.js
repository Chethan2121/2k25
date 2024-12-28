// Countdown Timer
const countdown = () => {
    const targetDate = new Date("January 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};
setInterval(countdown, 1000);

// Built-in Wishes Array
const wishes = [
    "May this New Year bring you great achievements in your career!",
    "Here’s to a year of self-discovery and personal growth!",
    "Cheers to a year of good health and well-being!",
    "May your relationships flourish and bring you joy!",
    "Wishing you financial success and freedom this year!",
    "May your year be filled with exciting adventures and new experiences!",
    "Happy New Year! May it be your best one yet!",
    "Wishing you endless opportunities and happiness in 2025!",
    "May this year bring you closer to your dreams!",
    "Here’s to a year of success, happiness, and prosperity!",
    "May your New Year be filled with love, laughter, and cherished moments!",
    "Wishing you strength and courage to achieve all your goals this year!",
    "May this year bring peace and harmony to your life!",
    "Here’s to creating unforgettable memories in 2025!",
    "Wishing you countless reasons to smile this New Year!",
    "May this year bring a fresh start and new beginnings!",
    "Here’s to embracing all the wonderful changes 2025 has in store for you!",
    "May you find joy and contentment in the simple pleasures of life!",
    "Wishing you boundless creativity and inspiration this year!",
    "May 2025 be a year of growth, resilience, and happiness!",
    "May every moment of this year be filled with positivity and hope!",
    "Here’s to achieving new milestones and celebrating your successes!",
    "Wishing you meaningful connections and cherished friendships in 2025!",
    "May your heart be filled with gratitude and joy all year long!",
    "Here’s to new opportunities and incredible adventures in 2025!",
    "Wishing you the courage to overcome challenges and the wisdom to grow!",
    "May this year bring you clarity, focus, and fulfillment!",
    "Here’s to a year of celebrating your unique strengths and talents!",
    "May 2025 be a year of exciting breakthroughs and happy surprises!"
];


// Wish Submission
const nameInput = document.getElementById("wish-input");
const submitWish = document.getElementById("submit-wish");
const wishesList = document.getElementById("wishes");

submitWish.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        const personalizedWish = `Hi ${name}, ${randomWish}`;
        const li = document.createElement("li");
        li.textContent = personalizedWish;
        wishesList.appendChild(li);
        nameInput.value = "";
    }
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

// Check if dark theme is already set in local storage and apply
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
} else {
    document.body.classList.add('light');
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    // Save theme choice to localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
