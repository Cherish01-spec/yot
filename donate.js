// Sample charity data
const charities = [
    { name: "Food for All", location: "New York", contact: "contact@foodforall.org", website: "http://foodforall.org" },
    { name: "Helping Hands", location: "Los Angeles", contact: "info@helpinghands.org", website: "http://helpinghands.org" },
    { name: "Feeding Hearts", location: "Chicago", contact: "support@feedinghearts.org", website: "http://feedinghearts.org" },
    { name: "Good Samaritan Fund", location: "Houston", contact: "donations@goodsamaritanfund.org", website: "http://goodsamaritanfund.org" }
];

// Function to search charities based on location
function searchCharities() {
    const location = document.getElementById("locationSearch").value.toLowerCase();
    const resultsDiv = document.getElementById("charityResults");

    // Filter charities based on location
    const filteredCharities = charities.filter(charity => charity.location.toLowerCase().includes(location));

    // Clear previous results
    resultsDiv.innerHTML = '';

    if (filteredCharities.length === 0) {
        resultsDiv.innerHTML = "<p>No charities found for this location.</p>";
    } else {
        // Display matching charities
        filteredCharities.forEach(charity => {
            const charityDiv = document.createElement('div');
            charityDiv.classList.add('charity-item');
            charityDiv.innerHTML = `
                <h3>${charity.name}</h3>
                <p>Location: ${charity.location}</p>
                <p>Contact: <a href="mailto:${charity.contact}">${charity.contact}</a></p>
                <p>Website: <a href="${charity.website}" target="_blank">${charity.website}</a></p>
            `;
            resultsDiv.appendChild(charityDiv);
        });
    }
}
