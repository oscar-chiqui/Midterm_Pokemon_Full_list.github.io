// Javacript program: pokemon.js | Oscar Chiqui | Midterm Project - Fall 2020 .// 

// We get the elements of "list"
const list = document.getElementById('list');

// The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. // 

// <i>  represents a range of text that is set off from the normal text . The API link ( https://pokeapi.co/api/v2/pokemon/ )

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
// Wait for all promises to be resolved, or for any to be rejected.
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
// In this section the li elements of the card class are modified to be represented on the web page; img class, h2 class; and the p class. (inside <li> / li>)
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    list.innerHTML = pokemonHTMLString;
};
// The innerHTML property sets or returns the HTML content. 
fetchPokemon();
