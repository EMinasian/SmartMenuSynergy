
// import restaurants from "./datacenter";

// console.log(restaurants);

let restaurants = ["Tashir Pizza", "SAS Foodcourt", "Vostan", "Bear Academy"];


createList(restaurants);


function createList(restaurants) {
    
    let buttons = document.getElementById('buttons');
    for(let i = 0; i < restaurants.length; i ++) {
        console.log(restaurants[i]);
        let newButton = createButton(restaurants[i]);
        buttons.append(newButton);
    }
}

function createButton(restaurant) {
    let newButton = document.createElement('button');
    let name = createName(restaurant);
    newButton.append(name);
    return newButton;
}

function createName(restaurant) {
    let name = document.createElement('span');
    name.textContent = restaurant;
    return name;
}