const API = "fI09IrEQ99TvVAZiIhu1QFPotcord8zP8BfeU6xJIwo";
const form = document.querySelector("form");
const input = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const wrapper = document.querySelector(".wrapper");
const img = document.querySelector(".img");

let page = 1;
let inputData = "";

async function fetchingData() {
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${API}`;
    const rawDeta = await fetch(url);
    const deta = await rawDeta.json();
    console.log(deta)

    const results = deta.results
    console.log(results)



    //clearing input deta
    input.value = ""
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    fetchingData();
});
