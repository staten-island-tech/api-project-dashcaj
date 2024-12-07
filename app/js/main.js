import "../css/style.css";

const url = "https://www.amiiboapi.com/api/amiibo/"; 
const searchbox = document.getElementById("searchbar");
const butt = document.getElementById("butt");


async function getData(searchTerm = '') {
    try {
        const searchUrl = searchTerm ? `${url}?name=${searchTerm}` : url; 
        const response = await fetch(searchUrl);
        const data = await response.json();
        console.log(data);
        cardBox(data);
    } catch (error) {
        console.log(error);
    }
}


function cardBox(data) {
    const box = document.querySelector(".container");
    box.innerHTML = "";
    
    if (!data || !data.amiibo || data.amiibo.length === 0) {
        box.innerHTML = "<p>there are no amiibo</p>";
        return;
    }

    data['amiibo'].forEach((amiibo) => {
        const html = `
            <div class="card w-60 rounded-[14px] border-8 font-semibold border-white m-4 bg-slate-300">
                <h1>${amiibo.gameSeries}</h1>
                <h2>${amiibo.name}</h2>
                <img class="pictures1 w-3/5 h-3/6 my-8" src="${amiibo.image}" alt="${amiibo.character}">
                <h4>${amiibo.character}</h4>
            </div>
        `;
        box.insertAdjacentHTML("beforeend", html);
    });
}

butt.addEventListener("click", (event) => {
    event.preventDefault()
    const usersearch = searchbox.value.toLowerCase().trim();
    getData(usersearch); 
});

getData();





