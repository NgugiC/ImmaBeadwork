// Array of beadwork tips or fun facts
const tips = [
    'Did you know? Beads were one of the earliest forms of currency.',
    'Tip: Store your beadwork in a cool, dry place to keep it looking new.',
    'Beadwork is a centuries-old art practised by cultures worldwide!',
    'To make your beadwork shine, use a soft cloth to polish it gently.',
    'Each color of bead has its own symbolism in many cultures!'
];

// Function to display a random tip
function showRandomTip(){
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    document.getElementById('tipText').textContent = randomTip;
    document.getElementById('tipModal').style.display = 'block';
}

// Close modal when close button is clicked
document.querySelector('.close').onclick = function(){
    document.getElementById('tipModal').style.display = 'none';
}

// Display the modal with a random tip when the page loads
window.onload = function(){
    showRandomTip();
}