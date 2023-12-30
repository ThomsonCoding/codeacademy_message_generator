 // Updated JavaScript using document.querySelector to select the button
 const jokeButton = document.querySelector('button#randomJokeButton');

 // Add a click event listener to the button
 jokeButton.addEventListener('click', getRandomJoke);

 function getRandomJoke() {
     // Make an API request to JokeAPI
     fetch('https://v2.jokeapi.dev/joke/Any')
         .then(response => response.json())
         .then(data => {
             // Check if the response is a two-part joke or a single-part joke
             const joke = data.type === 'twopart'
                 ? `${data.setup}<br>${data.delivery}`
                 : data.joke;

             // Display the joke in the HTML element with id 'jokeDisplay'
             document.getElementById('jokeDisplay').innerHTML = joke;
         })
         .catch(error => {
             console.error('Error fetching joke:', error);
         });
 }