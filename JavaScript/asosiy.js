const search = document.getElementById('input-search');
const searchButton = document.getElementById('serach-button');
const home = document.getElementById('home');
const cabinet = document.getElementById('cabinet');
const singIn = document.getElementById('sing-in');
const cards = document.getElementById('cards');

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  home.addEventListener('click',function(){
	window.location.href = '../HTML/asosiy.html'
  })
  cabinet.addEventListener('click',function(){
	window.location.href = '../HTML/cabinet.html'
  })
  singIn.addEventListener('click',function(){
	window.location.href = '../HTML/sing-in.html'
  })
document.addEventListener("DOMContentLoaded", async function () {
    let data = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
    let movieArr = data.results;
    let fakedom = '';

    function createMovieItem(el) {
        return `
            <div class="header__head-item">
                <section class="item-img">
                    <img src="${IMG_PATH}${el.backdrop_path}" alt="${el.title}">
                </section>
                <section class="item-inform">
                    <span>${el.title}</span>
                </section>
            </div>
        `;
    }

    if (movieArr.length) {
        fakedom = movieArr.map(createMovieItem).join('');
        cards.innerHTML = fakedom;
    } else {
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
            );
            const data = await response.json();
            localStorage.setItem("movies", JSON.stringify(data));

            
            fakedom = data.results.map(createMovieItem).join('');
            cards.innerHTML = fakedom;
        } catch (error) {
            console.log(error);
        }
    }
});

searchButton.addEventListener('click', function () {
    try {
        if (search.value) {
            cards.innerHTML = '';
            let data = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
            let movieArr = data.results;
            let movieFilter = movieArr.filter(el => {
                return el.title.toLowerCase() == search.value.toLowerCase();
            });
             let fakefilterdom = '';
            if (movieFilter.length) {
                movieFilter.forEach(el => {
                   let dom = `
                   <div class="header__head-item">
                   <section class="item-img">
                       <img src="${IMG_PATH}${el.backdrop_path}" alt="${el.title}">
                   </section>
                   <section class="item-inform">
                       <span>${el.title}</span>
                   </section>
               </div>
                   `
                   fakefilterdom +=dom
                });
                cards.innerHTML +=fakefilterdom;
            }
        }
    } catch (error) {
        console.log(error);
    }
});
