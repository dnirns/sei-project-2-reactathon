# General Assembly SEI Project 2 - ‘Director Dictator’ 🎬
#General-Assembly/read-me’s

## Technical Brief:
* Group hacakthon in 48hours.
* Create a front-end React app that consumes a public API.

## Technologies:
* HTM5.
* ReactJS.
* JavaScript.
* CSS/SASS.
* Insomnia.
* OMDB API (The Online Movie Database).

## Overview:
Working in a group of three, we came up with the concept of an app that attempted to deal with the indecision that can accompany an excess of choice when picking a film to watch online. The idea was to try and randomly generate a finite selection of films for the user to choose from, they would be presented with them one at a time and have 5 chances to accept a movie before they ran out of options and were doomed to watch the final selection they were presented with.

Once we found a suitiable API with the [Open Movie Database](https://www.omdbapi.com/), we were able to access all the infomation we needed, like movie name, genre, rating, poster art and more, all linked to individual title ID’s from [IMDB](https://imdb.com/) (the Internet Movie Database) to pull in and use in our app.

## Challenges:

The first challege that we had to try and overcome was that the API’s URL for requests wasn’t a single address for an object containing data for a large selection of films, instead it was a URL that needed to be appended with a specific IMDB ID number for a *specific* title for each request. This presented a problem, as we intended to grab a totally random film from the entire database each time yet we didn’t have immediate access to all of the databases films.

Luckily we were able to source a list of **all** of the titles from the IMDB database, sorted by their ID number, which gave us something to work with, as we then knew the first and last ID numbers, all we then had to do was generate a random number within that range and insert it into our URL each time we made a GET request to the API.

The next issue we had, was that there were over 7,000,0000 titles, and they an unsorted list of films, TV shows, shorts and more. Nor did all of them have info that we wanted, like poster art for example. To get around this we had to include a series of conditional statements to ensure that responses we were getting back from our requests matched the criteria that we needed.

## Resources:
* [The Open Movie Database](https://www.omdbapi.com/)
* [IMDB](https://www.imdb.com/)

## The team:

The project was a team effort along with [tams2429 · GitHub](https://github.com/tams2429) and [Zarathustrah · GitHub](https://github.com/Zarathustrah)

## Deployed Site:

[Director Dictator](https://director-dictator.netlify.app/)


