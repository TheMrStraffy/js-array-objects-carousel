const imgsArray = [
  {
    img: "argentina.jpg",
    title: "Argentinta",
    description: "Argentina, officially the Argentine Republic, is a country in the southern half of South America."
  },
  {
    img: "chile.jpg",
    title: "Chile",
    description: "Chile is a long, narrow country stretching along South America's western edge."
  },
  {
    img: "colombia.jpg",
    title: "Colombia",
    description: "Colombia, officially the Republic of Colombia, is a country in South America with an insular region in North America."
  },
  {
    img: "peru.jpg",
    title: "Peru",
    description: "Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains."
  },
  {
    img: "sweden.jpg",
    title: "Sweden",
    description: "Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains."
  }
]

//componenti html
const mainWrapper = document.querySelector('.main-wrapper');
let counter = 0;





carousel();

function carousel(){
  let content = mainWrapper.innerHTML ='';
  content += `
  <div class="col-12 p-0 img-wrapper h-100 w-100">
        <div class="text-area">
          <h3>${imgsArray[0].title}</h3>
          <p>${imgsArray[0].description}</p>
        </div>
        <img class="img-contain" src="img/${imgsArray[0].img}" alt="">
       
      </div>
  `;

  mainWrapper.innerHTML += content;

}

console.log(imgsArray);
