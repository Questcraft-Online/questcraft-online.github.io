function toggleExplanation(id) {
    const explanation = document.getElementById(id);
    if (explanation.style.display === 'none' || explanation.style.display === '') {
        explanation.style.display = 'block';
    } else {
        explanation.style.display = 'none';
    }
}

function openModal(src) {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var video = document.getElementById("video01");
    var caption = document.getElementById("caption");

    if (src.endsWith(".mp4")) {
        img.style.display = "none"; 
        video.style.display = "block"; 
        video.src = src; 
        video.play(); 
        caption.innerHTML = ""; 
    } else {
        video.style.display = "none"; 
        img.src = src; 
        img.style.display = "block"; 
        caption.innerHTML = "Image: " + src; 
    }

    modal.style.display = "block"; 
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img01");
    var video = document.getElementById("video01");

    modal.style.display = "none"; 
    img.src = ""; 
    video.pause(); 
    video.src = ""; 
    video.style.display = "none"; 
}