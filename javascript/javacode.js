document.addEventListener('DOMContentLoaded', () => {
    // 1. Animaciones de Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .card, .servant, .master, .serie, table').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // 2. Buscador de Series
    const searchInput = document.getElementById('serieSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            document.querySelectorAll('.serie').forEach(s => {
                const title = s.querySelector('h2').innerText.toLowerCase();
                s.style.display = title.includes(val) ? "block" : "none";
            });
        });
    }
});

// 3. Filtro de Personajes (Fuera del DOMContentLoaded)
function filterCards(cat) {
    document.querySelectorAll('.servant, .master').forEach(card => {
        if (cat === 'all' || card.classList.contains(cat)) {
            card.style.display = "block";
            setTimeout(() => card.classList.add('show'), 10);
        } else {
            card.style.display = "none";
        }
    });
}