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
            <div class="
            xs:card w-80 rounded-[14px] border-8 font-semibold border-[rgb(187,159,0)] m-4 bg-slate-300 bg-black
            lg:card w-60 rounded-[14px] border-8 font-semibold border-[rgb(187,159,0)] m-4 bg-slate-300 bg-black
            2xl:card w-60 rounded-[14px] border-8 font-semibold border-[rgb(187,159,0)] m-4 bg-slate-300 bg-black
            ">
                <h1 class="text-[rgb(187,159,0)]">${amiibo.gameSeries}</h1>
                <h2 class="text-[rgb(187,159,0)]">${amiibo.name}</h2>
                <img class="
                xs:pictures1 w-3/5 h-3/6 mx-auto my-8
                lg:pictures1 w-3/5 h-3/6 mx-auto my-8
                2xl:pictures1 w-4/5 h-3/6 mx-auto my-8" src="${amiibo.image}" alt="${amiibo.character}">
                <h4 class="text-[rgb(187,159,0)]">${amiibo.character}</h4>
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





