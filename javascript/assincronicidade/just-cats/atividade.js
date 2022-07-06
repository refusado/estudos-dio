const btn = document.getElementById('change-cat');
const img = document.getElementById('cat');
const loading = document.getElementById('loading');
const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';

// const pegaGato = async () => {
//   try {

//     const data = await fetch(BASE_URL);
//     const json = await data.json();
    
//     return json[0].url;
//   }
//   catch (e) {
//     console.log(e.message);
//   }
// }

// outra sitanxe 
const pegaGato = async () => {
  const data = await fetch(BASE_URL)
    .then((result) => result.json())
    .catch((erro) => console.log(erro));
    
    return data[0].url;
}

const loadImg = async () => {
  loading.style.display = 'block';

  img.src = await pegaGato();
  
  img.addEventListener('load', function() {
    loading.style.display = 'none';
  })
}

btn.addEventListener("click", loadImg);

loadImg();