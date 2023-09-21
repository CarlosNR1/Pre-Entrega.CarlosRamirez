const socketClient = io();

const productsList = document.getElementById("productsList");
const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const formData = new FormData(createProductForm);
    const jsonData = {};
    for (const [key, value] of formData.entries()){
        jsonData[key] = value
    };
    jsonData.price = parseInt(jsonData.price);
    jsonData.stock = parseInt(jsonData.stock);
    socketClient.emit("addProduct", jsonData);
    createProductForm.reset();
});


socketClient.on("productsArray", (dataProducts)=>{
    let productsElements = "";
    dataProducts.forEach(product => {
        productsElements +=
        `<li>
            <p>Nombre: ${product.title}</p> <button onclick="deleteProduct(${product.id})"> Eliminar producto </button>
        </li> `
    });
    productsList.innerHTML = productsElements;
});


let deleteProduct = (productId) =>{
    socketClient.emit("deleteProduct", productId)
}
