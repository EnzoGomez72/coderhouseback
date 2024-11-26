const productsList = document.getElementById("products-list");
const btnRefreshProductsList = document.getElementById("btn-refresh-products-list");
const loadProductsList = async () => {
    const response = await fetch("/api/products", { method: "GET" });
    const data = await response.json();
    const products = data.payload;

    productsList.innerText = "";

    products.forEach((product) => {
        productsList.innerHTML +=  `<li> ID: ${product.id} Nombre: ${product.title} -- Código: ${product.code}<br>
        Descripción: ${product.description} <br>
        Categoría: ${product.category} -- Stock: ${product.stock} -- Estado: ${product.status} <br>
        </li>`;
    });
};

loadProductsList();

btnRefreshProductsList.addEventListener("click", () => {
    loadProductsList();
    console.log("¡Lista recargada!");
});
