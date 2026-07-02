document.addEventListener('DOMContentLoaded', () => {
    BurgerMenu();
    fetchMoviesFromAPI()
});

// ============= BURGER ფუნქციონალი ========== 

function BurgerMenu() {
    const toggle = document.getElementById('burger--toggle');
    const navbar = document.getElementById('navbar');
    
    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
}


// ==== FETCH ===== MOVIEDB API-დან ინფორმაციის წამოღება
const API_KEY = 'cad9d3e7aa609a79c1c2aae538f3fd5e'; 
const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ka-GE&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';


async function fetchMoviesFromAPI() {
    const container = document.getElementById('movies__container');
    if (!container) return;

    try {
        const response = await fetch(TMDB_URL);
        const data = await response.json();
        
        container.innerHTML = ''; 

        const movies = data.results.slice(0, 4);

        movies.forEach(movie => {
            const card = document.createElement('article');
            card.classList.add('movie__card');
            
            card.innerHTML = `
                <div class="movie__img__box">
                    <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
                </div>
                <div class="movie__info">
                    <h3>${movie.title}</h3>
                    <div class="movie__rating">
                        <i class="fas fa-star"></i> <span>${movie.vote_average}/10</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error("შეცდომა:", error);
    }
}