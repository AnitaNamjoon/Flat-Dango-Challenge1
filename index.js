// Write your code here 
document.addEventListener('DOMContentLoaded', () => {
  var filmsMenu = document.getElementById('films');
  var Titlefilm = document.getElementById('title-film');
  var filmPoster = document.getElementById('film-poster');
  var filmRuntime = document.getElementById('film-runtime');
  var filmShowtime = document.getElementById('film-showtime');
  var AccessibleTickets= document.getElementById('accessible-tickets');
  var Descriptionoffilm = document.getElementById('descriptionof-film');
  var buyTicketBtn = document.getElementById('buy-ticket-btn');

  fetch('http://localhost:3000/films')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch films: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(films => {
      // Show the films on the menu
      films.forEach(film => {
        let li = document.createElement('li');
        li.textContent = film.title;
        li.classList.add('film-item');
        li.addEventListener('click', () => displaytheFilmDetails(film));
        filmsMenu.appendChild(li);
      });

      // Display the details of the film 
      displaytheFilmDetails(films[0]);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  function displaytheFilmDetails(film) {
    Titlefilm.textContent = Title.film;
    filmPoster.src = film.poster;
    filmRuntime.textContent = `Runtime: ${film.runtime} minutes`;
    filmShowtime.textContent = `Showtime: ${film.showtime}`;
    const availableTickets = film.capacity - film.tickets_sold;
    AccessibleTickets.textContent = `Tickets Available: ${availableTickets}`;
    Descriptionoffilm.textContent = Descriptionof.film;
    buyTicketBtn.disabled = availableTickets === 0;
  }

  // Buy a ticket
  buyTicketBtn.addEventListener('click', () => {
    var Titlefilm = Titlefilm.textContent;
    var filmItem = document.querySelector(`li.film-item:contains(${Titlefilm})`);
    var ticketsAvailable = parseInt(Tickets.textContent.split(' ')[2]);
    let ticketsSold = film.capacity - ticketsAvailable;

    if (ticketsAvailable > 0) {
      // Update the UI
      AccessibleTickets.textContent = `Tickets Available: ${ticketsAvailable - 1}`;
      buyTicketBtn.disabled = ticketsAvailable === 1;

      // Update the server
      fetch(`http://localhost:3000/films/${filmItem.dataset.filmId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tickets_sold: ticketsSold + 1 })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to update film: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(updatedFilm => {
          console.log('Film updated:', updatedFilm);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });
});
