const ImageDiv = document.getElementById('image');
const Button = document.getElementById('gethero');
const InputName = document.getElementById('inputname');
const InputId = document.getElementById('inputid');
const NameSearchBtn = document.getElementById('searchName')
const IdSearchBtn = document.getElementById('searchId')
const name = document.getElementById('name')

const x = 'https://www.superheroapi.com/api.php/816675489473685/';

const getSV = () => {
  let x = `https://www.superheroapi.com/api.php/816675489473685/search/${InputName.value}`;
  fetch(`${x}`)
    .then(response => response.json())
    .then(json => json => {
    
    ImageDiv.innerHTML = `<img src = ${json.image.url} height = 300 width = 300>`
   // console.log(json)
    name.innerText = json.name
    
  }) 
    .catch(e)
    console.log(e);  
  }

const getSH = (x,y) => {
  fetch(`${x}${y}`)
    .then(response => response.json())
    .then(json => {    
    ImageDiv.innerHTML = `<img src = ${json.image.url} height = 300 width = 300>`
   // console.log(json)
   //  let stat = json.powerstats.intelligence
   //  console.log(stat)
    name.innerText = json.name
    
  })
}

const rand = () => {
  let u = Number(Math.floor(Math.random() * 731))
  getSH(x,u)
}

const checkid = () => {
  let id = InputId.value;
  getSH(x,id)
}