const widerScreen = window.matchMedia("(max-width: 87.5rem)");

const shareButton = document.getElementById("share-button");
const shareLinksButton = document.getElementById("share-links-button");
const showDiv = document.getElementById("show");
const hideDiv = document.getElementById("hide");
const textBubble = document.getElementById("text-bubble");

shareLinksButton.addEventListener('click', function() {
    if (widerScreen.matches) {
        if (hideDiv.style.display === 'none' || hideDiv.style.display === '') {
            showDiv.style.display = 'none';
            hideDiv.style.display = 'flex';
        } else {
            showDiv.style.display = 'flex';
            hideDiv.style.display = 'none';
        }
    } else {
        if (textBubble.style.display === 'none' || textBubble.style.display === '') {
            textBubble.style.display = 'block';
        } else {
            textBubble.style.display = 'none';
        }
    }
});

shareButton.addEventListener('click', function() {
    if(widerScreen.matches) {
        if (showDiv.style.display === 'none' || hideDiv.style.display === '') {
            hideDiv.style.display = 'none';
            showDiv.style.display = 'flex';
        }
    }
})

// Ensure initial state
if (widerScreen.matches) {
    showDiv.style.display = 'flex';
    hideDiv.style.display = 'none';
}
