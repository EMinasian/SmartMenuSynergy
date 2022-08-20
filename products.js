//call
const call  = document.getElementById("call");

call.addEventListener("click", (e)=>{
    document.getElementById("callOkContainer").style.display = "flex";
    setTimeout(()=>{
        document.getElementById("callOkContainer").style.display = "none"
    }, 1000);
});


//search
const searchButton = document.getElementById("searchButton");

//searchButton.addEventListener()


//products
class Product{
    constructor(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}

function createProductDOM(product){
    let productContainer = document.createElement("div");
    productContainer.className = "product";
    productContainer.style.backgroundImage  = "url(" +  product.image + ")";

    let productInfoContainer = document.createElement("div");
    productInfoContainer.className = "product-info";
    productContainer.append(productInfoContainer);

    let productName = document.createElement("h2");
    productName.innerText = product.name;

    let productDescription= document.createElement("span");
    productDescription.innerText = product.description;
    productDescription.className = "product-description";


    let buyContainer = document.createElement("div");
    buyContainer.className = "buy-container";

    let productPrice= document.createElement("span");
    productPrice.innerText = product.price;
    productPrice.className = "price";

    let productBuy = document.createElement("button");
    productBuy.innerText = "Buy";

    productBuy.addEventListener("click", ()=>{
        document.getElementById("basket-count").innerText = +document.getElementById("basket-count").innerText + 1;

    })

    buyContainer.append(productPrice, productBuy);
    productInfoContainer.append(productName);
    productInfoContainer.append(productDescription);
    productInfoContainer.append(buyContainer);

    document.getElementById("content").append(productContainer);
}


let pizza = new Product("pizza", "desc descx desc c", 400, "https://wallpaper.dog/large/20483603.jpg");

createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);
createProductDOM(pizza);




