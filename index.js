function loadProducts(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(function(response){
     return response.json();
    })
    .then(function(product){
        document.getElementById("product").innerHTML=product.title;
        document.getElementById("productimage").src=product.image;
    })
}

var productId =1;
function nextProduct(){
productId++;
loadProducts(productId);
}
function preProduct(){
    if(productId>1){
        productId--;
        loadProducts(productId);
    }
   
}
function loadProductsAuto(){
    productId++
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(function(response){
        return response.json();
    })
    .then(function(product){
        document.getElementById("product").innerHTML=product.title;
        document.getElementById("productimage").src=product.image;
    })
}
var timer ;
function playProducts(){
 timer = setInterval(loadProductsAuto,3000)
}

function pauseProducts(){
    clearInterval(timer);
}