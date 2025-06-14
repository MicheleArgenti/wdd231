const POKEMON_PER_PAGE = 15;
let currentPage = 1;
let allPokemon = [];

const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
};

async function displayData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/MicheleArgenti/pokedex/refs/heads/main/assets/json/pokedex.json');
        const data = await response.json();
        allPokemon = data.pokemon;
        displayPokemonPage();
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

async function displayPokemonPage() {
    const startIndex = (currentPage - 1) * POKEMON_PER_PAGE;
    const endIndex = startIndex + POKEMON_PER_PAGE;
    const pokemonToDisplay = allPokemon.slice(startIndex, endIndex);

    let div = document.getElementById('pokemonContainer');
    div.innerHTML = "";
    pokemonToDisplay.forEach(pokemon => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('pokemon');
        newDiv.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.img}" alt="${pokemon.name}" loading="lazy">
        <h3>${pokemon.region}</h3>
        <p>${pokemon.description}</p>
        `;
        newDiv.addEventListener('click', () => {
            modalBody.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.img}" alt="${pokemon.name}" loading="lazy">
            <h4>Pokédex Data</h4>
            <ul>
                <li><strong>Type:</strong> ${formatTypes(pokemon.types)}</li>
                <li><strong>Height:</strong> ${pokemon.height}</li>
                <li><strong>Weight:</strong> ${pokemon.weight}</li>
                <li><strong>HP:</strong> ${pokemon.base_stats.hp}</li>
                <li><strong>Attack:</strong> ${pokemon.base_stats.attack}</li>
                <li><strong>Defense:</strong> ${pokemon.base_stats.defense}</li>
                <li><strong>Special Attack:</strong> ${pokemon.base_stats.special_attack}</li>
                <li><strong>Special Defence:</strong> ${pokemon.base_stats.special_defense}</li>
                <li><strong>Speed:</strong> ${pokemon.base_stats.speed}</li>
            </ul>
            `;
            modalOverlay.classList.add('active');
        });
        div.appendChild(newDiv);
    });

    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');

    closeModal.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayPokemonPage();
        }
    });
    nextButton.addEventListener('click', () => {
        const nextPageStart = currentPage * POKEMON_PER_PAGE;
        if (nextPageStart < allPokemon.length) {
            currentPage++;
            displayPokemonPage();
        }
    });
});

function formatTypes(typesArray) {
    if (!typesArray || typesArray.length === 0) return 'Unknown';

    return typesArray.map(type => {
        const bgColor = typeColors[type.toLowerCase()] || '#777';
        const textColor = getContrastColor(bgColor);

        return `
            <span class="type-badge" 
                  style="background-color: ${bgColor}; color: ${textColor}">
                ${type}
            </span>
        `;
    }).join(' ');
}

function getContrastColor(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

displayData();