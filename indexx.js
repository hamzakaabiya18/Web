// محاكاة بيانات الرحلات (يمكنك استبدالها بـ API حقيقي لاحقًا)
const mockFlights = [
    { airline: "Airline A", price: 150, origin: "New York", destination: "London", date: "2025-03-01" },
    { airline: "Airline B", price: 200, origin: "Los Angeles", destination: "Paris", date: "2025-03-15" },
    { airline: "Airline C", price: 120, origin: "Chicago", destination: "Tokyo", date: "2025-04-01" }
];

// التعامل مع إرسال النموذج
document.getElementById("flightSearchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    searchFlights(origin, destination, date);
});

// محاكاة البحث عن الرحلات
function searchFlights(origin, destination, date) {
    const results = mockFlights.filter(flight =>
        flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
        flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
        flight.date === date
    );

    displayResults(results);
}

// عرض نتائج الرحلات
function displayResults(flights) {
    const resultsContainer = document.getElementById("flightResults");
    resultsContainer.innerHTML = ""; // مسح النتائج القديمة

    if (flights.length > 0) {
        flights.forEach(flight => {
            const flightItem = document.createElement("div");
            flightItem.classList.add("flight-item");
            flightItem.innerHTML = `
                <strong>${flight.airline}</strong><br>
                Price: $${flight.price}<br>
                From: ${flight.origin} to ${flight.destination}<br>
                Date: ${flight.date}
            `;
            resultsContainer.appendChild(flightItem);
        });
    } else {
        resultsContainer.innerHTML = "<p>No flights found for your search.</p>";
    }
}
