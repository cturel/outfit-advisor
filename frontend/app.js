const outfits = {
    casual: ["White t-shirt + jeans", "Hoodie + joggers", "Polo + chinos"],
    formal: ["Black suit + white shirt", "Blazer + dress pants", "Classic tuxedo"],
    sport: ["Running shorts + tank top", "Leggings + sports bra", "Track suit"]
};

function getOutfits(category, btn) {
    document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.getElementById('results').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        const suggestions = outfits[category] || outfits['casual'];

        document.getElementById('category-title').textContent = category + ' looks';

        const list = document.getElementById('outfit-list');
        list.innerHTML = '';
        suggestions.forEach(outfit => {
            const li = document.createElement('li');
            li.textContent = outfit;
            list.appendChild(li);
        });

        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }, 600);
}
