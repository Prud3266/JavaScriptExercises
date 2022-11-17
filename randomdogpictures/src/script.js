
const Dog = document.getElementById('dog');

let getDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
  .then(json => {
  Dog.innerHTML =  `<img src = '${json.message}' height = 100 width = 100/>`
  console.log(json.message);
  
})
}