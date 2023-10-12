function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const chefImage = document.createElement("img");
    chefImage.src = "images/link-chef-2.png";
    chefImage.alt = "Chef";
    chefImage.classList.add("link-chef");

    home.appendChild(createParagraph("Link Cooks For You !"));
    home.appendChild(createParagraph("9 dishes personally handpicked from his hylian ass"));
    home.appendChild(chefImage);

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;