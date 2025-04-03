document.getElementById("generateBtn").addEventListener("click", function () {
    const imageElement = document.getElementById("aiImage");

    // Simulating AI image generation (Replace with actual API call)
    const randomImages = [
        "https://source.unsplash.com/400x300/?art",
        "https://source.unsplash.com/400x300/?fantasy",
        "https://source.unsplash.com/400x300/?abstract",
        "https://source.unsplash.com/400x300/?nature",
    ];

    const randomIndex = Math.floor(Math.random() * randomImages.length);
    imageElement.src = randomImages[randomIndex];
});
