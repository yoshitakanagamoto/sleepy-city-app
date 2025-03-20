const places = [
    {
        name: "24hカフェ",
        address: "東京都千代田区...",
        hours: "24時間営業",
        amenities: ["Wi-Fi", "電源"],
        rating: 4.5
    },
    {
        name: "深夜図書館",
        address: "東京都渋谷区...",
        hours: "24時間営業",
        amenities: ["静か", "電源"],
        rating: 4.2
    }
];

function search() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const results = places.filter(place => place.name.toLowerCase().includes(searchQuery));
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';  // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>該当する施設はありません。</p>';
    } else {
        results.forEach(place => {
            const placeElement = document.createElement('div');
            placeElement.innerHTML = `
                <h3>${place.name}</h3>
                <p>住所: ${place.address}</p>
                <p>営業時間: ${place.hours}</p>
                <p>設備: ${place.amenities.join(", ")}</p>
                <p>評価: ${place.rating}</p>
            `;
            resultsContainer.appendChild(placeElement);
        });
    }
}
