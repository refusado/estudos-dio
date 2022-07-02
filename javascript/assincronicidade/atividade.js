const btn = document.getElementById('change-cat');
const img = document.getElementById('cat');
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    
    return json.webpurl;
  }
  catch (e) {
    console.log(e.message);
  }
}
console.log(getCats());

const loadImg = async () => {
  img.src = await getCats();
}

btn.addEventListener("click", loadImg);

function newCat() {

  console.log('cat');
  img.src = 'test';
  
}