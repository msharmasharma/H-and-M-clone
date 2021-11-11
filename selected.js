var cartItem = JSON.parse(localStorage.getItem("cartItems"))

displayItem()
var collect = JSON.parse(localStorage.getItem("inCart")) || []
function displayItem(){
    cartItem.map(function(item){
        var img1Div = document.createElement("div")
        var img1 = document.createElement("img")
        img1.setAttribute("src", item.image_url)
        img1.setAttribute("class","show")
        var img2Div = document.createElement("div")
        var img2 = document.createElement("img")
        img2.setAttribute("src",item.image_url2)
        img2.setAttribute("class","show")
        img1Div.append(img1)
        img2Div.append(img2)
        
        document.querySelector(".img-div").append(img1Div,img2Div)
        var cont = document.createElement("div")
        var h1 = document.createElement("h1")
        h1.innerText = item.type
        var h2 = document.createElement("h2")
        h2.innerText = `Rs. ${item.MRP}`
        var small = document.createElement("img")
        small.setAttribute("src", item.image_url)
        small.setAttribute("class","smallImg")
        var select = document.createElement("select")
        select.setAttribute("type", select)
        select.setAttribute("class","select")
        var option1 = document.createElement("option")
        option1.innerText = "Select Size"
        var option2 = document.createElement("option")
        option2.innerText = "3Y-5Y"
        var option3 = document.createElement("option")
        option3.innerText = "7Y - 9Y"
        var option4 = document.createElement("option")
        option4.innerText = "11Y - 13Y"
        select.append(option1,option2,option3,option4)
        var btn = document.createElement("button")
        btn.setAttribute("class","addToCart")
        btn.innerText = "Add to Cart"
        cont.append(h1,h2,small,select,btn)
        document.querySelector(".product-detail").append(cont)
        btn.addEventListener("click",addCart)

        function addCart(){
            var cartItems = {
                img: cartItem[0].image_url,
                name: cartItem[0].type,
                price: cartItem[0].MRP,
                color:"blue"
            }
            collect.push(cartItems)
            localStorage.setItem("inCart", JSON.stringify(collect))
            console.log(collect)
            window.location.href = "cart.html"
        }
    })
}