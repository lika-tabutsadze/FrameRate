
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
BurgerMenu()

// ==== FETCH ===== MOVIEDB API-დან ინფორმაციის წამოღება
const API_KEY = 'cad9d3e7aa609a79c1c2aae538f3fd5e'; 
const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ka-GE&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';


async function fetchMovies() {
    const container = document.getElementById('movies__container');
    if (!container) return;

    try {
        const response = await fetch(TMDB_URL);
        const data = await response.json();
        
        container.innerHTML = ''; 

        const movies = data.results.slice(0, 4);

        movies.forEach(movie => {
            const card = document.createElement('section');
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

fetchMovies()

// ================ SCROLL TO TOP ============


const scrollTopBtn = document.getElementById("scroll__btn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// ============= COOKIE POLICY ============

document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie__banner");
    const acceptBtn = document.getElementById("accept");
    const declineBtn = document.getElementById("decline");


    if (localStorage.getItem("cookieDecision")) {
        cookieBanner.style.display = "none"; 
    }

 
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieDecision", "accepted"); 
        cookieBanner.style.display = "none"; 
    });

   
    declineBtn.addEventListener("click", () => {
        localStorage.setItem("cookieDecision", "declined"); 
        cookieBanner.style.display = "none"; 
    });
});

