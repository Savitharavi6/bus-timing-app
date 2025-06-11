 // Sample bus timings data for demonstration
 const busTimings = [
    { source: 'Arni', destination: 'Devikapuram', times: ['06:00 AM', '12:00 PM', '06:00 PM'] },
    { source: 'Arni', destination: 'Chennai', times: ['3.00 AM-UD', '3.45 AM-DLX', '4.30 AM-UD', '5.00 AM-UD', '5.15 AM-UD', '5.30 AM-AC', '6.00 AM-UD', '6.15 AM-DLX', '6.30 AM-UD', '7.00 AM-UD'] },

    { source: 'Arni', destination: 'Vandasavi', times: ['07:30 AM', '01:30 PM', '07:45 PM'] },
    { source: 'Devikapuram', destination: 'Villipuram', times: ['05:45 AM', '11:15 AM', '03:45 PM', '08:30 PM'] },
    { source: 'Villipuram', destination: 'Vellore', times: ['06:15 AM', '10:45 AM', '02:15 PM', '06:00 PM'] },
    { source: 'Vellore', destination: 'Kanchipuram', times: ['07:00 AM', '01:00 PM', '05:30 PM', '09:00 PM'] },
    { source: 'Kanchipuram', destination: 'Cheyyar', times: ['08:00 AM', '12:30 PM', '04:30 PM', '08:00 PM'] },
    { source: 'Cheyyar', destination: 'Chennai', times: ['06:30 AM', '11:00 AM', '03:30 PM', '07:30 PM'] },
    { source: 'Chennai', destination: 'Arni', times: ['05:00 AM', '09:30 AM', '02:00 PM', '06:30 PM'] },
    { source: 'Devikapuram', destination: 'Arni', times: ['06:15 AM', '12:30 PM', '06:15 PM'] },
    { source: 'Vandasavi', destination: 'Arni', times: ['08:00 AM', '02:00 PM', '07:00 PM'] }
];

const form = document.getElementById('busForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const source = form.source.value;
    const destination = form.destination.value;

    if (!source || !destination) {
        alert('Please select both source and destination.');
        return;
    }
    if (source === destination) {
        alert('Source and destination cannot be the same.');
        return;
    }

    // Find matching route from sample data
    const route = busTimings.find(bus => bus.source === source && bus.destination === destination);

    if (route) {
        // Store the bus timings in localStorage
        localStorage.setItem('busTimings', JSON.stringify(route));

        // Redirect to the results page
        window.location.href = 'result.html';
    } else {
        alert(`Sorry, no bus timings found for route from "${source}" to "${destination}".`);
    }
});
