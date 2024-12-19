// Array of riddles
const riddles = [
    {
        question: "What has keys but can't open locks?",
        answer: "A piano"
    },
    {
        question: "What comes down but never goes up?",
        answer: "Rain"
    },
    {
        question: "What can travel around the world while staying in the corner?",
        answer: "A stamp"
    },
    {
        question: "What has a head, a tail, but no body?",
        answer: "A coin"
    },
    {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        answer: "An echo"
    }
];

// Function to generate a random riddle
function generateRiddle() {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const riddle = riddles[randomIndex];
    document.getElementById('riddle').innerHTML = `<strong>Riddle:</strong> ${riddle.question}<br><br><em>Click the button again for a new riddle!</em>`;
}
