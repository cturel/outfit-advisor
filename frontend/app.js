const FUNCTION_URL = "https://FUNCTION_APP_ADINIZ.azurewebsites.net/api/outfits";

async function getOutfits(category) {
    // Butonları güncelle
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    // UI sıfırla
    document.getElementById('results').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    try {
        const response = await fetch(`${FUNCTION_URL}?category=${category}`);
        
        if (!response.ok) throw new Error('API error');
        
        const data = await response.json();

        // Sonuçları göster
        document.getElementById('category-title').textContent = data.category + ' looks';
        
        const list = document.getElementById('outfit-list');
        list.innerHTML = '';
        data.suggestions.forEach(outfit => {
            const li = document.createElement('li');
            li.textContent = outfit;
            list.appendChild(li);
        });

        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';

    } catch (err) {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }
}