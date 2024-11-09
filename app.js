// const api_url = 'https://api.sampleapis.com/movies/'
const coffee_url = 'https://api.sampleapis.com/coffee/'
// DOM
const movies = document.querySelector('.coffee')
const buttons = document.querySelectorAll('#btns button')


// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log(btn.innerText);
//         movies.innerHTML = `<div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>`
//         fetchMovies(btn.innerText)
//     })
// })


// function fetchMovies(genre = 'animation') {
//     fetch(api_url + genre)
//     .then( (response) => {
//         console.log(response, '----re----');
//         return response.json()
//     })
//     .then( (movieData) => {
//         console.log(movieData, '----data----');
//         renderCard(movieData)
//     })
// }

// fetchMovies();


// function renderCard(arr = []) {
//     movies.innerHTML = arr.map( (film) => {
//         return `
//   <div class="card" style="width: 18rem;">
//        <img src="${film.posterURL}" class="card-img-top" alt="...">
//        <div class="card-body">
//             <h5 class="card-title">${film.title}</h5>
//        </div>
//   </div>`
//     })
// }
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerText);
        coffee.innerHTML = `
        <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
        </div>`
        fetchCoffee(btn.innerText)
    })
})


function fetchCoffee( genre = 'iced') {
    fetch(coffee_url + genre)
    .then((response) => {   
        console.log(response, '----er--');
        return response.json()
    })
    .then((coffeeData) => {
        console.log(coffeeData, '---ter---');
        renderCard(coffeeData)
    })
}

fetchCoffee()

function renderCard(arr = []) {
    movies.innerHTML = arr.map ( (coffee) => {
        return `
         <div class="card" style="width: 18rem;">
                <img src="${coffee.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${coffee.title}</h5>
                <h6 class="card-title">${coffee.description}</h6>
               
                  <ul>
                       <li> <p class="card-title">${coffee.ingredients}</p></li>
                  </ul>
                </div>
         </div>`
    })
}