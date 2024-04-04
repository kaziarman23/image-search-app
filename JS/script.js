const API = "fI09IrEQ99TvVAZiIhu1QFPotcord8zP8BfeU6xJIwo";
const form = document.querySelector("form");
const input = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const wrapper = document.querySelector(".wrapper");
const moreBtnEl = document.querySelector(".moreBtn");

let page = 1;
let inputData = "";

async function fetchingData() {
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${API}`;
    const rawDeta = await fetch(url);
    const deta = await rawDeta.json();
    if (page === 1) {
        wrapper.textContent = "";
    }

    const results = deta.results;
    results.map(function (result) {
        const imageWrapper = document.createElement("div");
        const image = document.createElement("img");
        image.src = result.urls.small_s3;
        image.alt = result.alt_description;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";
        imgLink.textContent = result.alt_description;

        imageWrapper.setAttribute("class", "imgs");
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imgLink);
        wrapper.appendChild(imageWrapper);
    });

    page++;
    console.log(page);
    if (page > 1) {
        moreBtnEl.style.display = "block";
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    page = 1;
    fetchingData();
});

moreBtnEl.addEventListener("click", function () {
    fetchingData();
});
