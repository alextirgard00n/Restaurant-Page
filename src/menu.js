function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const grid = document.createElement("div");
    grid.classList.add('grid-menu');

    menu.appendChild(grid);

    grid.appendChild(createMenuItem("Apple Pie", "images/recipes/Apple-Pie-removebg-preview.png"));
    grid.appendChild(createMenuItem("Biting Meaty Rice", "images/recipes/Biting-Meaty-Rice-Balls-removebg-preview.png"));
    grid.appendChild(createMenuItem("Fried Wild Greens", "images/recipes/Enduring-Fried-Wild-Greens-removebg-preview.png"));
    grid.appendChild(createMenuItem("Hylian Tomato Pizza", "images/recipes/Hylian-Tomato-Pizza-removebg-preview.png"));
    grid.appendChild(createMenuItem("Porgy Meuniere", "images/recipes/Porgy-Meuniere-removebg-preview.png"));
    grid.appendChild(createMenuItem("Veggie Porridge", "images/recipes/Sunny-Veggie-Porridge-removebg-preview.png"));
    grid.appendChild(createMenuItem("Vegetable Curry", "images/recipes/Vegetable-Curry-removebg-preview.png"));
    grid.appendChild(createMenuItem("Simmered Fruit", "images/recipes/Warding-Simmered-Fruit-removebg-preview.png"));
    grid.appendChild(createMenuItem("Spicy Pepper Steak", "images/recipes/Spicy-Pepper-Steak-removebg-preview.png"));

    return menu;
}

function createMenuItem(alt, src) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    const foodImage = document.createElement("img");
    foodImage.src = src;
    foodImage.alt = alt;

    div.appendChild(foodImage);

    return div;
}

function loadMenu() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;