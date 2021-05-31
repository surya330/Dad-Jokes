const jokeEle = document.getElementById("joke");
const btn = document.getElementById("jokebtn");

btn.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke(){
    const config = {
        headers : {
            Accept:"application/json"
        },
    } 

    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeEle.innerHTML = data.joke;
}


/*
function generateJoke(){
    const config = {
        headers : {
            Accept:"application/json"
        },
    } 

    fetch("https://icanhazdadjoke.com/", config)
        .then((res) => res.json())
        .then((data) => {
            jokeEle.innerHTML = data.joke;
        });
}*/