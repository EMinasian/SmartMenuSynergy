
// import restaurants from "./datacenter";

// console.log(restaurants);

let restaurants = ["Tashir Pizza", "SAS Foodcourt", "Vostan", "Bear Academy", "AUA FoodCourt", "Lahmajo Tun", "Mirzoyan Library", "name1"];


createList(restaurants);


function createList(restaurants) {
    
    let buttons = document.getElementById('buttons');
    for(let i = 0; i < restaurants.length; i ++) {
        let newButton = createButton(restaurants[i]);
        buttons.append(newButton);
    }
}

function createButton(restaurant) {
    let newButton = document.createElement('button');
    let link = document.createElement('a');
    let name = createName(restaurant);
    newButton.append(name);
    link.append(newButton);
    newButton.setAttribute("onclick", `goToMenu(${restaurant})`);
    link.setAttribute("href", "./menu.html");
    return link;
}

function createName(restaurant) {
    let name = document.createElement('span');
    name.textContent = restaurant;
    return name;
}

function goToMenu(name) {
    console.log(name);
    localStorage.setItem("restaurant", name)
}