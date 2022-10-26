const imgsArray = [
  {
    img: "argentina.jpg",
    title: "Argentina",
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
const thumbnails = document.querySelector('.thumbnails');
const invertBtn = document.getElementById('invert');
const stopBtn = document.getElementById('stop');
let clock;
let counter = 0;
let isClicked = false;




carousel();
thumbnail();

function carousel(){

  let content = `
    <div class="col-12 p-0 img-wrapper h-100 w-100">
        <div class="text-area">
          <h3>${imgsArray[counter].title}</h3>
          <p>${imgsArray[counter].description}</p>
        </div>
        <img class="img-contain" src="img/${imgsArray[counter].img}" alt="">
       
      </div>
  `;
  mainWrapper.innerHTML = content;
  
  
  
  stopBtn.addEventListener('click', function(){
    isClicked = null;
  })
  invertBtn.addEventListener('click', function(){
    if(!isClicked){
      isClicked = true;
      autoPlayBackward();
      console.log("Backward is active");
      console.log("Forward is inactive");
      console.log(isClicked);
    } else {
      isClicked = false;
      autoPlayForward();
      console.log("Forward is active");
      console.log("Backward is inactive");
      console.log(isClicked);
    }
  })
  
  autoPlayForward();
}

function thumbnail() {
  thumbnails.innerHTML = '';
  imgsArray.forEach(function (img){
    let content = `
    <div class="col p-0 h-100 w-100">
        <img class="img-contain img-thumbnails" src="img/${img.img}" alt="">
      </div>
    `;

    thumbnails.innerHTML += content;
  });
}

function autoPlayForward(clock) {
  
  clock = setInterval(function(){
    if(isClicked){
      clearInterval(clock);
    }
    content = mainWrapper.innerHTML ='';
    counter++;
    if(counter == imgsArray.length) counter = 0;
    content = `
    <div class="col-12 p-0 img-wrapper h-100 w-100">
        <div class="text-area">
          <h3>${imgsArray[counter].title}</h3>
          <p>${imgsArray[counter].description}</p>
        </div>
        <img class="img-contain" src="img/${imgsArray[counter].img}" alt="">
       
      </div>
  `;
  mainWrapper.innerHTML = content;
  console.log(counter);
  }, 1500)
  
  
}

function autoPlayBackward(clock) {
  clock = setInterval(function(){
    if(!isClicked){
      clearInterval(clock);
    }
    counter--;
    if(counter == -1) counter = imgsArray.length -1;
      content = mainWrapper.innerHTML ='';
      content = `
      <div class="col-12 p-0 img-wrapper h-100 w-100">
      <div class="text-area">
      <h3>${imgsArray[counter].title}</h3>
      <p>${imgsArray[counter].description}</p>
      </div>
      <img class="img-contain" src="img/${imgsArray[counter].img}" alt="">
      
      </div>
      `;
      mainWrapper.innerHTML = content;
      console.log(counter);
    }, 1500)
    
  }
  