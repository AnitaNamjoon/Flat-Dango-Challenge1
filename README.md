# Flat-Dango-Challenge1
# FlatDango Application
This is an app that enables users to buy moovie tickets from the Flatiron Movie Theater.It helps users to know the details of the movie that they would like to watch and helps them to  uy tickets.

# Installation plus the Setting Up
- Clone the repository to your local machine.
- Install the required dependencies using `npm install`.
- Start the JSON DB server by running `json-server --watch db.json` in the terminal.
- Open the application in your web browser.

# Usage
-As the application is loading one will be able to see information about the new movie ,its poster,the title,duration of the movie and available tickets.
-On the left side of the page there is a Menu which shows all the movies.The user can click on a movie to despaly the details related to the movie.
-For one to buy the ticket, click the "Buy Ticket" button.The amount of tickets available will be displayed.It also show if the tickets are sold out.


# Bonus Feature
-When one clicks on a movie the menu updates the current displayed movie's information without having to refresh the page.
-When a movie i sold out, it is indicated by the changing button to "Sold Out".

## Extra Bonus Features

These features involve using fetch to update data on the server.

1. When a ticket is purchased, the updated number of tickets is shown on the server. The tickets that are only sold are the ones that are only updated on the server.
2. You can delete a film from the server by clicking the delete button next to each film in the ul#films menu. This will remove the film from the list and delete it from the server.

## API Reference

The application uses the following API endpoints:

- GET /films/1: Shows the user the details of the first movie.
- GET /films: Shows the list of all movies.
- PATCH /films/:id: Updates the ticket_sold property of a movie.
- DELETE /films/:id: Removes a movie from the server.

## Credits

This project is part of the Flatiron School curriculum. The project requirements and guidelines were provided by Flatiron School.

## License

This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).
