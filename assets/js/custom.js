// Create the button
var button = document.createElement('button');
button.id = 'addIndicators';
button.title = 'Download Additional Indicators';
button.className = 'btn btn-primary btn-download';
button.textContent = 'Download Additional Indicators';

// Add click event listener
button.addEventListener('click', function() {
    // Get the current URL
    var currentUrl = window.location.href;
    
    // Extract the digits at the end of the URL (assuming they are after the last '/')
    var regex = /\/(\d+-\d+-\d+)\/?$/;
    var match = currentUrl.match(regex);
    
    if (match && match[1]) {
        // Create the new URL for the CSV file
        var csvUrl = 'https://statinjm.github.io/sdg-jm-data/es/data/' + match[1] + '.csv';
        
        // Redirect the user to the CSV file (or you can trigger a download directly)
        window.location.href = csvUrl;
    } else {
        console.error('No valid digits found in the URL');
    }
});

// Append the button to the desired location
document.getElementById("chartSelectionDownload").appendChild(button);