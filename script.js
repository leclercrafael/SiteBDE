document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById('video-container');
    const mainContent = document.getElementById('main-content');

    // Cacher la vidéo et afficher le contenu principal après 3 secondes
    setTimeout(function() {
        videoContainer.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3250);
});