import "../css/style.css";
const url = "https://www.amiiboapi.com/api/amiibo/";
const searchbox = document.getElementById("searchbar")




async function getData(url){
    try{
        const response = await fetch(url);
        const data = await response.json(response);

        console.log(data);
        filter();
        
    } catch (error){
        console.log(error);
    }
    
};
getData(url);













function cardBox(data){
    const box = document.getElementById("container");
    box.innerHTML = "";
    data['amiibo'].forEach((game) => {
        const html = `
        <div class="card">
            <h1>${game.gameSeries}</h1>
            <h2>${game.name}</h2>
            <img class="pictures1" src="${game.image}" alt="${game.character}">
            <h4>${game.character}</h4>

        </div>
    `
    box.insertAdjacentHTML("beforeend", html);
    })
};


function filter(){
    searchbox.addEventListener("input", function(event){
        event.preventDefault();
        box.innerHTML = "";
        const userinput = searchbox.value.toLowercase()
        const filtereditems = data.filter((game) => game.name === userinput)
        cardBox(filtereditems);
    });
};








