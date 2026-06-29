let main = document.querySelector("main");

if(document.title=="Product Listing"){
(async function datafetching(){
    let url = "https://dummyjson.com/products?limit=194"
    let apiRes = await fetch(url)
    let resData = await apiRes.json()
    let products = resData.products;
    products.forEach((el)=>{
        let anchor=document.createElement("a")
        let outerDiv=document.createElement("div")
        let heading=document.createElement("h2")
        let image=document.createElement("img")
        let description=document.createElement("p")
        let price_cart=document.createElement("div")
        let price=document.createElement("p")
        let cart=document.createElement("button")

        heading.innerText=el.title
        image.src=el.thumbnail
        description.innerText=el.description
        price.innerText=`₹${Math.ceil(el.price*95)}/-`
        cart.innerText="Add to Cart"

        outerDiv.classList.add("outerDiv")
        price_cart.classList.add("price-cart")
        description.classList.add("description")
        anchor.href=`product.html?id=${el.id}`
        cart.addEventListener("click",(e)=>{
            e.preventDefault();
            let cartItems=JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push(el.id);
            localStorage.setItem("cart",JSON.stringify(cartItems));
            alert("Product Added Successfully");
        })

        price_cart.append(price,cart)
        outerDiv.append(heading,image,description,price_cart)
        anchor.append(outerDiv)
        main.append(anchor)

    })

})()

}