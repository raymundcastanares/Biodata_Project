function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById('datetime');
    datetimeElement.innerHTML = 'Current Date and Time:' + now.toLocaleString();
    
}
updateDateTime();
setInterval(updateDateTime, 1000);