// Array of beadwork tips or fun facts
const tips = [
    {text: 'Did you know? Beads were one of the earliest forms of currency.',
        image: './images/Bracelets10.jpg'
    },
    {text: 'Tip: Store your beadwork in a cool, dry place to keep it looking new.',
        image: './images/Keyholders2.jpg'
    },
    {text: 'Beadwork is a centuries-old art practised by cultures worldwide!',
        image: './images/Steering cover.jpg'
    },
    {text: 'To make your beadwork shine, use a soft cloth to polish it gently.',
        image: './images/Handbags1.jpg'
    },
    {text: 'Each color of bead has its own symbolism in many cultures!',
        image: './images/Bracelets8.jpg'
    },
];

// Function to display a random tip
function showRandomTip(){
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    document.getElementById('tipText').textContent = randomTip.text;
    document.getElementById('tipImage').src = randomTip.image;
    document.getElementById('tipModal').style.display = 'block';
}

// Close tip modal when close button is clicked
document.querySelector('.close').onclick = function(){
    document.getElementById('tipModal').style.display = 'none';
}

// Display the modal with a random tip when the page loads
window.onload = function(){
    showRandomTip();
}