import "../css/style.css";



async function getData(){
    const api = await fetch(
        "https://api.imgflip.com/get_memes"
    );
    
};

getData(api);












/* function killDustin(api){
    try {
        const knife = fetch(api);
        const gun = await response.json(trigger);

    }
} */