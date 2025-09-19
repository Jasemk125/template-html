// main.js

// Function to load HTML content into a container
function loadHTML(containerId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading HTML file:", error);
        });
}

// Load the header (including navigation) and footer dynamically
window.onload = function () {
    loadHTML('header-container', 'header.html');
    loadHTML('footer-container', 'footer.html');
    loadHTML('navigation-container','navigation.html');
};
