class Restaurant {
    constructor(name, logo, color, categories) {
        this.name = name;
        let arr = [];
        if (categories) {
            for (let i of categories) {
                arr.push(i);
            }
            this.categories = arr;
        }
        this.logo = logo;
        this.color = color;
    }
}

class Category {
    constructor(name, image, products) {
        this.name = name;
        let arr = [];
        if (products) {
            for (let i of products) {
                arr.push(i);
            }
            this.products = arr;
        }
        this.image = image;
    }
}

function creatCategoryDOM(dish) {
    let dishContainer = document.createElement("div");
    dishContainer.className = "dish";
    dishContainer.style.backgroundImage = "url(" + dish.image + ")";

    let dishBackgroundContainer = document.createElement("div");
    dishBackgroundContainer.className = "dish-background";
    dishBackgroundContainer.innerText = dish.name;

    dishContainer.append(dishBackgroundContainer);
    document.getElementById("content").append(dishContainer);
}
function getRestaurant(res) {
    document.getElementById("logo").setAttribute("src", res.logo);
    document.getElementById("restaurant-title").innerText = res.name;

}
let mainDish = new Category("main dish", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BfOEdDrdlZH55Ou-7jp-thB5nT6z9ylC_g&usqp=CAU",);
let salads = new Category("salads", "https://cdn.britannica.com/12/129512-050-4FF50DA9/Lettuce-salad.jpg");
let pizza = new Category("pizza", "\"data:image/jpeg;base64,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\"");
let pasta = new Category("pasta", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysoz5enjkzojpSHJt8-3L8xZ1VM3wl2uZFw&usqp=CAU");
let dessert = new Category("dessert", "https://images-gmi-pmc.edge-generalmills.com/6935db52-d355-4cb7-8b2e-b3cb770c66b6.jpg");
let drinks = new Category("soft drink", "data:image/jpeg;base64,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");
creatCategoryDOM(mainDish);
creatCategoryDOM(salads);
creatCategoryDOM(pizza);
creatCategoryDOM(pasta);
creatCategoryDOM(dessert);
creatCategoryDOM(drinks);


let tashir = new Restaurant("Tashir", "https://www.tashirpizza.am/assets/images/logos/tashir_pizza.svg");
getRestaurant(tashir);

function addToBasket(prod) {
    if (localStorage.getItem("num") === null) {
        localStorage.setItem("num", "0");
    }
    let i = localStorage.getItem("num");
    localStorage.setItem("num", +i + 1 + "");
    localStorage.setItem(i, JSON.stringify(prod));
}
function drawTable() {
    let n = +localStorage.getItem("num");
    for (let i = 0; i < n; i++) {
        let prod = JSON.parse(localStorage.getItem(i+""));
        createRow(prod);
    }
}
function createCell(data) {
    const cell = document.createElement('td');
    cell.textContent = data;
    return cell;
}
function createRow(prod) {
    const row = document.createElement('tr');
    row.append(createCell(prod.name));
    row.append(createCell(prod.price));
    row.append(createCell(product.price));
    return row;
}