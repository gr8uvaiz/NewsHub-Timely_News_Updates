const API_KEY = '47c5986c4799426a93040cb908ddbc36';
const  url = 'https://newsapi.org/v2/everything?q=';


window.addEventListener('load', () => fetchData('news'));

const fetchData = async (query) => {
    /*const myurl = await `${url}${query}&apiKey=${API_KEY}`;*/
    const myurl = await `https://newsapi.org/v2/everything?q=news&apiKey=47c5986c4799426a93040cb908ddbc36`;
    const response = await fetch(myurl);
    const data = await response.json();
    // fillData(data.articles);
    addCards(data.articles);
}

const addCards = (articles)=>{
    const template = document.getElementById('templateContainer');
    const cardContainer = document.getElementById('cardContent');
    cardContainer.innerHTML = "";
    articles.forEach((article) => {
        if(!article.urlToImage) return;
        const cloneNode = template.content.cloneNode(true);
        fillData(cloneNode,article);
        cardContainer.appendChild(cloneNode);
    });

}

const fillData = (clone,article) =>{
    const myImg = clone.querySelector('#img');
    const title = clone.querySelector('#myTitle'); 
    const desc = clone.querySelector('#myDesc'); 
    const button = clone.querySelector('#myButton');
    const date = clone.querySelector('#date');
    myImg.src = article.urlToImage;
    title.innerHTML = article.title;
    desc.innerHTML = article.description.slice(0,80)+"....";
    button.href = article.url;
    const d = new Date(article.publishedAt);
    const dt =  d.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
   date.innerHTML = dt;
}

const handlelink =(query)=>{
    fetchData(query);
}

const handleInput = (id)=>{
    console.log(id)
   const val =  document.getElementById(id).value;
   fetchData(val);
}

const enableDark = () =>{
    if(document.getElementById('enableDark').innerHTML == 'DarkMode'){
        document.getElementById('enableDark').innerHTML = 'LightMode'
    }
    else{
        document.getElementById('enableDark').innerHTML = 'DarkMode'
    }
    const element = document.body;
    const element2 = document.getElementById('nav');
    const element3 = document.getElementById('footer');
    element.classList.toggle('darkMode');
    element2.classList.toggle('darkModeNav');
    element3.classList.toggle('darkModeNav');
}
