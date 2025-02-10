const textContainer = document.getElementById("textContainer");
const linkcontainer = document.getElementById("linkcontainer");
const bottomLinks = document.getElementById("bottomLinks");
const texts = [   
  'Ben Levinas is an industrial designer building narratives, sensibilities, and typologies for the future.',   
  '"We become what we behold. We shape our tools and then our tools shape us."\n- Father John Culkin' 
];
let currentIndex = 0;

function fadeInElements() {
  textContainer.style.opacity = 1;
  bottomLinks.style.opacity = 1;
  linkcontainer.style.opacity = 1;
}

function updateText() {
  // Replace \n with actual line breaks for better control
  textContainer.textContent = texts[currentIndex].replace(/\\n/g, '\n');
  textContainer.style.animation = "fadeIn 2s ease-in-out forwards";
  linkcontainer.style.animation = "fadeIn 2s ease-in-out 0.5s forwards";
  bottomLinks.style.animation = "fadeIn 2s ease-in-out 2s forwards";
}

setTimeout(updateText, 1000);
