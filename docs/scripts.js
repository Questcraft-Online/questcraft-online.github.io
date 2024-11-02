// rules

function toggleExplanation(id) {
    const explanation = document.getElementById(id);
    if (explanation.style.display === 'none' || explanation.style.display === '') {
        explanation.style.display = 'block';
    } else {
        explanation.style.display = 'none';
    }
}

// maps

let currentMap = 'blue'; // Default map

function showMap(mapType) {
    const blueMapIframe = document.getElementById('blueMap');
    const dynMapIframe = document.getElementById('dynMap');
    const blueMapButton = document.getElementById('blueMapButton');
    const dynMapButton = document.getElementById('dynMapButton');

    if (mapType === 'blue') {
        blueMapIframe.style.display = 'block';
        dynMapIframe.style.display = 'none';
        currentMap = 'blue';
        blueMapButton.classList.add('active');
        dynMapButton.classList.remove('active');
    } else if (mapType === 'dyn') {
        dynMapIframe.style.display = 'block';
        blueMapIframe.style.display = 'none';
        currentMap = 'dyn';
        dynMapButton.classList.add('active');
        blueMapButton.classList.remove('active');
    }
}

function openCurrentMapInNewTab() {
    let mapUrl = currentMap === 'blue' 
        ? 'http://questcraft.online:8100/#spawn:-14:102:-2:100:0:0:0:1:flat' 
        : 'http://questcraft.online:8123';
    window.open(mapUrl, '_blank');
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