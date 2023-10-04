import printHome from "./home";
import printMenu from "./menu";

console.log("hello world");

//current year for footer
let currYear = document.querySelector('.currYear');
currYear.textContent = new Date().getFullYear();

printMenu();
printHome();