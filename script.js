const textContainer = document.getElementById("textContainer");
const bottomLinks = document.getElementById("bottomLinks");
const texts = [
  'Ben Levinas is an industrial designer \nbuilding narratives, sensibilities, \nand typologies for a new future.',
  '"We become what we behold. We shape \nour tools and then our tools shape us."\n- Father John Culkin'
];
let currentIndex = 0;

function fadeInElements() {
  textContainer.style.opacity = 1;
  bottomLinks.style.opacity = 1;
}

function updateText() {
  textContainer.innerHTML = texts[currentIndex]; // Use innerHTML to interpret HTML tags
  textContainer.style.animation = "fadeIn 2s ease-in-out forwards";
  bottomLinks.style.animation = "fadeIn 2s ease-in-out 2s forwards";
  setTimeout(function () {
    textContainer.style.animation = "fadeOut 2s ease-in-out forwards";
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(() => {
      updateText();
      fadeInElements();
    }, 2000);
  }, 8000);
}

setTimeout(updateText, 1000);

// Check if the user prefers dark mode
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const body = document.body;

function updateTheme() {
    if (darkModeMediaQuery.matches) {
        // User prefers dark mode
        body.classList.add('dark-mode');
        updateDarkModeLinks(true);
    } else {
        // User prefers light mode
        body.classList.remove('dark-mode');
        updateDarkModeLinks(false);
    }
}

function updateDarkModeLinks(isDarkMode) {
    const links = document.querySelectorAll('.bottom-links a');

    links.forEach(link => {
        if (isDarkMode) {
            link.classList.add('dark-mode');
        } else {
            link.classList.remove('dark-mode');
        }
    });
}

// Initial theme update
updateTheme();

// Listen for changes in the color scheme preference
darkModeMediaQuery.addEventListener('change', updateTheme);

