// Portfolio page script

document.addEventListener('DOMContentLoaded', function() {
    // Check if PDF embed loaded correctly
    const pdfEmbed = document.querySelector('embed[type="application/pdf"]');
    const fallbackMessage = document.querySelector('.pdf-fallback');
    
    if (pdfEmbed) {
        pdfEmbed.addEventListener('error', function() {
            // Show fallback message if PDF fails to load
            fallbackMessage.style.display = 'block';
        });
    }
    
    // Any additional portfolio-specific functionality can be added here
});
