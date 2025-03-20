async function fetchData() {
    try {
        const response = await fetch('data.json');
        const places = await response.json();
        return places;
    } catch (error) {
        console.error("データを読み込めませんでした:", error);
    }
}

async function search() {
    const query = document.getElementById('search-name').value.toLowerCase();
    const location = document.getElementById('search-location').value;
    const places = await fetchData();

    const results = places.filter(place =>
        (place.name.toLowerCase().includes(query) || 
         place.description.toLowerCase().includes(query)) &&
        (location === "" || place.location === location)
    );

    displayResults(results);
}

function displayResults(results) {
    const container = document.getElementById('results');
    container.innerHTML = ''; 

    if (results.length === 0) {
        container.innerHTML = '<p>該当する施設はありません。</p>';
    } else {
        results.forEach(place => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.innerHTML = `
                <h3>${place.name}</h3>
                <p>住所: ${place.address}</p>
                <p>営業時間: ${place.hours}</p>
                <p>${place.description}</p>
                <p>評価: ${place.rating} ⭐</p>
                <a href="${place.link}" target="_blank" class="site-link">公式サイトを見る</a>
            `;
            container.appendChild(card);
        });
    }
}
