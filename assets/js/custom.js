// Add any custom javascript here.
var button = document.createElement('button');

button.id = 'addIndicators';
button.title = 'Download Additional Indicators';
button.className = 'btn btn-primary btn-download';

button.textContent = 'Download Additional Indicators';

button.addEventListener('click', () => console.log("Button Works"));

document.getElementById("chartSelectionDownload").appendChild(button);
