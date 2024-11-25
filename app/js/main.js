import "../css/style.css";

const api = "https://foodish-api.com/"

async function getData(api){
    try {
    const response = fetch(api);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    } catch (error) {
        console.log(error);
    }
};

getData(api);












/* function killDustin(api){
    try {
        const knife = fetch(api);
        const gun = await response.json(trigger);

    }
} */