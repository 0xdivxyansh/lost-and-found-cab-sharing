const items = [];

// Report Lost Item
document.getElementById('reportLostBtn').addEventListener('click', () => {
    const itemName = document.getElementById('itemName').value;
    const description = document.getElementById('description').value;
    const dateTimeLost = document.getElementById('dateTimeLost').value;
    const locationLost = document.getElementById('locationLost').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactPhone = document.getElementById('contactPhone').value;

    if (itemName && description && dateTimeLost && locationLost && contactEmail && contactPhone) {
        items.push({ type: 'Lost', itemName, description, dateTime: dateTimeLost, location: locationLost });
        alert('Lost item reported successfully!');
    } else {
        alert('Please fill all fields.');
    }
});

// Report Found Item
document.getElementById('reportFoundBtn').addEventListener('click', () => {
    const itemName = document.getElementById('foundItemName').value;
    const description = document.getElementById('foundDescription').value;
    const dateTimeFound = document.getElementById('dateTimeFound').value;
    const locationFound = document.getElementById('locationFound').value;
    const contactEmail = document.getElementById('foundContactEmail').value;
    const contactPhone = document.getElementById('foundContactPhone').value;

    if (itemName && description && dateTimeFound && locationFound && contactEmail && contactPhone) {
        items.push({ type: 'Found', itemName, description, dateTime: dateTimeFound, location: locationFound });
        alert('Found item reported successfully!');
    } else {
        alert('Please fill all fields.');
    }
});

// Search Items
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchName = document.getElementById('searchItemName').value.toLowerCase();
    const searchResults = items.filter(item => item.itemName.toLowerCase().includes(searchName));
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = searchResults.map(item => `<p>${item.type}: ${item.itemName}</p>`).join('');
});
