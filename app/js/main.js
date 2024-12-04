import "../css/style.css";

const url = "https://www.amiiboapi.com/api/amiibo/"; 
const searchbox = document.getElementById("searchbar");


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
    const box = document.getElementById("container");
    box.innerHTML = "";
    
    if (!data || !data.amiibo || data.amiibo.length === 0) {
        box.innerHTML = "<p>No Amiibo found matching your search.</p>";
        return;
    }

    data['amiibo'].forEach((amiibo) => {
        const html = `
            <div class="card">
                <h1>${amiibo.gameSeries}</h1>
                <h2>${amiibo.name}</h2>
                <img class="pictures1" src="${amiibo.image}" alt="${amiibo.character}">
                <h4>${amiibo.character}</h4>
            </div>
        `;
        box.insertAdjacentHTML("beforeend", html);
    });
}

searchbox.addEventListener("input", () => {
    const usersearch = searchbox.value.toLowerCase().trim();
    getData(usersearch); 
});

getData();





