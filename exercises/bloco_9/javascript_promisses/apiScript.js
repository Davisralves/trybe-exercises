// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke);
};

const jokeObject = fetchJoke();
//{ joke } = jokeObject;
console.log(jokeObject);
const paragraph = document.createElement('p');
const jokeContainer = document.getElementById('jokeContainer');
paragraph.innerText = `${jokes}`;
jokeContainer.appendChild(paragraph);
window.onload = () => fetchJoke(); 