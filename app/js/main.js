import "../css/style.css";

const DOMSelectors = {

};

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="box">
            <h2>${name}</h2>
            <p>${position}</p>
            <img class="pictures1" src="${image}" alt="${name}">
            <div>
            <button class="deletebtn">Delete</button>
            </div>
    </div>
    `;
};




async function getData(){
    const api = await fetch(
        "https://api.imgflip.com/get_memes"
    );
    
};

getData(api);









