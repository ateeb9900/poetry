const urduPoems = [
    "ہزاروں خواہشیں ایسی کہ ہر خواہش پر دم نکلے",
    "محبت میں نہیں ہے فرق جینے اور مرنے کا"
];

const englishPoems = [
    "I wandered lonely as a cloud",
    "Shall I compare thee to a summer's day?"
];

document.getElementById("btn-urdu").addEventListener("click", function() {
    displayPoem(urduPoems);
});

document.getElementById("btn-english").addEventListener("click", function() {
    displayPoem(englishPoems);
});

function displayPoem(poems) {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    document.getElementById("poetry-display").innerHTML = `<p>${randomPoem}</p>`;
}

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('ServiceWorker registered with scope:', registration.scope);
        }, function(error) {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}
