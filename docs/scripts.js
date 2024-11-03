// rules

function toggleExplanation(id) {
    const explanation = document.getElementById(id);
    if (explanation.style.display === 'none' || explanation.style.display === '') {
        explanation.style.display = 'block';
    } else {
        explanation.style.display = 'none';
    }
}

// gallery

function openModal(src) {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var video = document.getElementById("video01");
    var caption = document.getElementById("caption");

    // Check if the source is a video
    if (src.endsWith(".mp4")) {
        img.style.display = "none"; // Hide the image
        video.style.display = "block"; // Show the video
        video.src = src; // Set video source
        video.play(); // Automatically play the video
        caption.innerHTML = ""; // Clear caption for video
    } else {
        video.style.display = "none"; // Hide the video
        img.src = src; // Set image source
        img.style.display = "block"; // Show the image
        caption.innerHTML = "Image: " + src; // Set caption for image
    }

    modal.style.display = "block"; // Show the modal
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var video = document.getElementById("video01");

    modal.style.display = "none"; // Hide the modal
    img.src = ""; // Clear image source
    video.pause(); // Pause the video
    video.src = ""; // Clear video source
    video.style.display = "none"; // Hide the video
}