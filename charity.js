const donationList = document.getElementById("donationList");

function displayDonations() {
    // Check if donationList exists in the HTML
    if (!donationList) {
        console.error("Error: No element with ID 'donationList' found in the HTML.");
        return;
    }

    // Retrieve donations from localStorage
    const donations = JSON.parse(localStorage.getItem("donations")) || [];

    // Clear previous list items
    donationList.innerHTML = "";

    // Check if there are any donations to display
    if (donations.length === 0) {
        donationList.innerHTML = "<p>No donations found.</p>";
        console.log("No donations found in localStorage.");
        return;
    }

    // Display each donation
    donations.forEach(donation => {
        const donationItem = document.createElement("div");
        donationItem.classList.add("donation-item");

        donationItem.innerHTML = `
            <h3>${donation.contactName}</h3>
            <p><strong>Phone:</strong> ${donation.phone}</p>
            <p><strong>Email:</strong> ${donation.email}</p>
            <p><strong>Address:</strong> ${donation.address}</p>
            <p><strong>Quantity:</strong> ${donation.quantity} people</p>
            <p><strong>Date of Donation:</strong> ${new Date(donation.donationDate).toLocaleDateString()}</p>
        `;

        donationList.appendChild(donationItem);
    });

    console.log("Donations displayed successfully.");
}

window.onload = displayDonations;
