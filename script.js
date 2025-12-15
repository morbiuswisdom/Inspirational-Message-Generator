// Inspirational Message Generator


// Store message components in array
const motivations = [
    "Believe in your potentials",
    "Your journey starts now",
    "Every step forward counts",
    "Progress is better than perfection",
    "Great things take time",
    "You are stronger than you think",
    "Your future self is watching"
];

// Store action advice
const actions = [
    "Take one bold step today",
    "Start with a small habit",
    "Do the things you are avoiding",
    "Focus on what you can control",
    "Celebrate your small wins",
    "Commit to 10 minutes of progress",
    "Choose discipline over doubt",
    "Show up even if it's not perfect"
];

// Store encouragements
const encouragements = [
    "You are capable of amazing things",
    "Your effort will pay off",
    "Keep going — you're closer than you think",
    "Stay patient and trust yourself",
    "You deserve success",
    "Your hard work matters",
    "You've survived 100% of your challenges so far"
];


// Function to pick a random item from an array
const getRandItem = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
};


// Function to generate and display the inspirational message
const generateMessage = () => {
    const part1 = getRandItem(motivations);
    const part2 = getRandItem(actions);
    const part3 = getRandItem(encouragements);

    return `${part1}, ${part2}, ${part3}`;
}

console.log(generateMessage());