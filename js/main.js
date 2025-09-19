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
    loadHTML('navigation-container', 'navigation.html');
};

// Function to dynamically load a script and remove the script tag
function loadAndRemoveScript(scriptSrc) {
    // Create a new script element
    var script = document.createElement('script');
    script.src = scriptSrc;  // Set the source of the script to load

    // Set the type attribute for the script (optional, defaults to "text/javascript")
    script.type = "text/javascript";
    
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

// Dynamically load another script (or the same script) and remove the tag after loading
loadAndRemoveScript('js/main.js');  // Replace 'js/main.js' with your actual script path
