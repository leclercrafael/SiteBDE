document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById('video-container');
    const mainContent = document.getElementById('main-content');

    setTimeout(function() {
        videoContainer.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3250);
});