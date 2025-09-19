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

window.onload = function () {
    loadHTML('header-container', 'header.html');   // Make sure to replace with your actual path
    loadHTML('footer-container', 'footer.html');   // Make sure to replace with your actual path
    loadHTML('navigation-container', 'navigation.html');  // Make sure to replace with your actual path
};
