const textContainer = document.getElementById("textContainer");
const linkcontainer = document.getElementById("linkcontainer");
const bottomLinks = document.getElementById("bottomLinks");
const texts = [
    'Ben Levinas is an industrial designer building \nnarratives, sensibilities, and typologies for the future.',
    '"We become what we behold. We shape \nour tools and then our tools shape us."\n- Father John Culkin'
];

let currentIndex = 0;

function updateText() {
    textContainer.innerHTML = texts[currentIndex];
    textContainer.style.animation = "fadeIn 1s ease-in-out forwards";
    
    // Stagger the animations for each link
    linkcontainer.style.opacity = "1"; // Make container visible
    const links = linkcontainer.getElementsByTagName('a');
    
    // Set initial opacity for all links
    for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = "0";
    }
    
    // Add staggered animations for all links
    for (let i = 0; i < links.length; i++) {
        // Increase delay by 0.5s for each link
        const delay = 0.25 + (i * 0.25);
        links[i].style.animation = `fadeIn 2s ease-in-out ${delay}s forwards`;
    }
    
    // Bottom links fade in last
    const finalDelay = 0.25 + (links.length * 0.25) + 0.25;
    bottomLinks.style.animation = `fadeIn 2s ease-in-out ${finalDelay}s forwards`;
}

setTimeout(updateText, 1000);
