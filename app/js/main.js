import "../css/style.css";
const url = "https://www.amiiboapi.com/api/amiibo/";
const searchbox = document.getElementById("searchbar")
const usersearch = searchbox.value.toLowerCase()

async function getData(url){
    try{
        const response = await fetch(url);
        const data = await response.json(response);

        console.log(data);
        cardBox(data, usersearch);

        
    } catch (error){
        console.log(error);
    }
    
};
getData(url);


function cardBox(data, usersearch){
    const box = document.getElementById("container");
    box.innerHTML = "";

    const filtereddata = data['amiibo'].filter{
        


    }

    const html = `
    <div class="card">
        <h1>${game.gameSeries}</h1>
        <h2>${game.name}</h2>
        <img class="pictures1" src="${game.image}" alt="${game.character}">
        <h4>${game.character}</h4>

    </div>`


    data['amiibo'].forEach((amiibo) => {
    box.insertAdjacentHTML("beforeend", html);
    })
};


/* function filter(){
    box.innerHTML = "";
    const filtereditems = data['amiibo'].filter((game) => game.name === usersearch)
    cardBox(filtereditems);
}; */








