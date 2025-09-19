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
    loadHTML('header-container', 'header.html');   // Make sure to replace with your actual path
    loadHTML('footer-container', 'footer.html');   // Make sure to replace with your actual path
    loadHTML('navigation-container', 'navigation.html');  // Make sure to replace with your actual path
};

// Function to dynamically load a script and remove the script tag after it loads
function loadAndRemoveScript(scriptSrc) {
    // Check if the script is already loaded
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
        console.log(scriptSrc + ' is already loaded.');
        return;
    }

    // Create a new script element
    var script = document.createElement('script');
    script.src = scriptSrc;

    // When the script has finished loading, remove the script tag
    script.onload = function() {
        console.log(scriptSrc + ' has been loaded.');
        script.parentNode.removeChild(script);  // Remove the script tag from the DOM
        console.log(scriptSrc + ' tag removed from the DOM.');
    };

    // Handle any errors in case the script fails to load
    script.onerror = function() {
        console.error(scriptSrc + ' failed to load.');
    };

    // Append the script tag to the body or head
    document.body.appendChild(script);
}

// Load main.js dynamically and remove it after execution
loadAndRemoveScript('js/main.js');
