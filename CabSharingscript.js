const rides = [];

// Post Ride Functionality
document.getElementById('postRideBtn').addEventListener('click', function () {
    const pickup = document.getElementById('pickup').value.trim();
    const dropoff = document.getElementById('dropoff').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();
    const seats = document.getElementById('seats').value.trim();
    const price = document.getElementById('price').value.trim();

    if (pickup && dropoff && date && time && seats && price) {
        // Add the ride to the rides array
        const ride = { pickup, dropoff, date, time, seats, price };
        rides.push(ride);

        // Show success message
        document.getElementById('ridePostedMessage').style.display = 'block';

        // Display the posted ride details
        const postedRideDetailsContainer = document.getElementById('postedRideDetailsContainer');
        postedRideDetailsContainer.innerHTML = `
            <p class="text-gray-700"><strong>Pickup:</strong> ${ride.pickup}</p>
            <p class="text-gray-700"><strong>Drop-off:</strong> ${ride.dropoff}</p>
            <p class="text-gray-700"><strong>Date:</strong> ${ride.date}</p>
            <p class="text-gray-700"><strong>Time:</strong> ${ride.time}</p>
            <p class="text-gray-700"><strong>Seats:</strong> ${ride.seats}</p>
            <p class="text-gray-700"><strong>Price:</strong> $${ride.price}/seat</p>
        `;
        document.getElementById('postedRideDetails').classList.remove('hidden');

        // Clear form fields
        document.getElementById('postRideForm').reset();
    } else {
        alert('Please fill in all fields before posting the ride.');
    }
});

// Search Ride Functionality
document.getElementById('searchRideBtn').addEventListener('click', function () {
    const searchPickup = document.getElementById('searchPickup').value.trim().toLowerCase();
    const searchDropoff = document.getElementById('searchDropoff').value.trim().toLowerCase();
    const searchDate = document.getElementById('searchDate').value.trim();

    const searchResults = rides.filter(ride =>
        (!searchPickup || ride.pickup.toLowerCase().includes(searchPickup)) &&
        (!searchDropoff || ride.dropoff.toLowerCase().includes(searchDropoff)) &&
        (!searchDate || ride.date === searchDate)
    );

    const resultsContainer = document.getElementById('searchResultsContainer');
    resultsContainer.innerHTML = '';

    if (searchResults.length > 0) {
        searchResults.forEach(ride => {
            const rideElement = `
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-2xl font-bold mb-2">Ride Details</h3>
                    <p class="text-gray-700"><strong>Pickup:</strong> ${ride.pickup}</p>
                    <p class="text-gray-700"><strong>Drop-off:</strong> ${ride.dropoff}</p>
                    <p class="text-gray-700"><strong>Date:</strong> ${ride.date}</p>
                    <p class="text-gray-700"><strong>Time:</strong> ${ride.time}</p>
                    <p class="text-gray-700"><strong>Seats:</strong> ${ride.seats}</p>
                    <p class="text-gray-700"><strong>Price:</strong> $${ride.price}/seat</p>
                </div>
            `;
            resultsContainer.innerHTML += rideElement;
        });

        document.getElementById('searchResults').classList.remove('hidden');
        document.getElementById('noResultsMessage').classList.add('hidden');
    } else {
        document.getElementById('searchResults').classList.add('hidden');
        document.getElement
        .getElementById('noResultsMessage').classList.remove('hidden');
    }
});