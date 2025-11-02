/*Displays a new quote in the footer every time the page refreshes*/

document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Life is better with a slice of pizza",
        "Creativity takes courage",
        "Seashells are whispers of the ocean",
        "A day without laughter is a day wasted",
        "Small steps lead to big adventures",
        "Share your ideas, inspire the world",
        "If we had not been born, there would be no problems, then we would not have been born, we would not exist (c) Evelina"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("footer-quote").textContent = quotes[randomIndex];
});