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
    textContainer.style.animation = "fadeIn 2s ease-in-out forwards";
    
    // Stagger the animations for each link
    linkcontainer.style.opacity = "1"; // Make container visible
    const links = linkcontainer.getElementsByTagName('a');
    
    links[0].style.opacity = "0";
    links[1].style.opacity = "0";
    
    links[0].style.animation = "fadeIn 2s ease-in-out 0.5s forwards";
    links[1].style.animation = "fadeIn 2s ease-in-out 1.5s forwards";
    
    bottomLinks.style.animation = "fadeIn 2s ease-in-out 2.5s forwards";
}

setTimeout(updateText, 1000);