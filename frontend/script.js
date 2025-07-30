var productList = [];

function loadProducts(){
    setTimeout( () => {
        productList = productListFromServer
        renderProductList();
    }, 2000) // simulate a delay 
}

function renderProductList(){

    if(productList.length === 0){
        document.getElementById("data").innerHTML = `
            <h3 style="color: red">
                Loading data...
            </h3>
        `
        return;
    }

    let tableHTML = 
    `
    <table>
        <thead>
            <tr>
                <th>Ser No.</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody> 
            ${productList.map((it, idx) => {
                return `
                    <tr>
                        <td>${idx + 1}</td>
                        <td>${it.name}</td>
                        <td>${it.price}</td>
                        <td>${it.desc}</td>                            
                    </tr>
                `
            })}
        </tbody>
    </table>
    `

    document.getElementById("data").innerHTML = tableHTML
}

function renderProducts(){
    
    // 1. Fetch data from sever
    // setTimeout(loadProducts, 2000); 
    loadProducts(renderProductList);

    // 2. Convert into html and render on UI
    // setInterval(renderProductList, 100);
    renderProductList() // these two methods are handled by react with the 'useEffect' -> 1. Show loading, 2. Re render on data load

}

renderProducts()
