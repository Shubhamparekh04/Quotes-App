import { Data } from "./data.js";

let rec = document.querySelector('.marketing');

Data.forEach((element, index) => {
    rec.innerHTML += `
        <hr class="featurette-divider">
        <div class="row featurette">
            <div class="col-md-7 ${(index % 2 == 0) ? "order-md-2 test" : "test"}">
                <h2 class="featurette-heading fw-normal lh-1">${element.quote}
                    <h3 class="text-body-secondary">-${element.author}</h3>
                </h2>
                <p class="lead">${element.birthPlace}</p>
            </div>
            <div class="col-md-5 ${(index % 2 == 0) ? "order-md-1 d-flex justify-content-center" : "d-flex justify-content-center"}">
                <img src="${element.imgurl}" class="rounded-image" alt="${element.author}">
            </div>
        </div>
        <hr class="featurette-divider">
        `;
});






