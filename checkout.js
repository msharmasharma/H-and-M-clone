var total = JSON.parse(localStorage.getItem("total")) || []
var order = JSON.parse(localStorage.getItem("inCart"))
// var disPrice = JSON.parse(localStorage.getItem("disPrice"))
// console.log(disPrice)
var sum = document.querySelector(".order-total")
var back = document.querySelector(".back")
console.log(total)

display()
function display(){
var table = document.createElement("table")
var tbody = document.createElement("tbody")
var row = document.createElement("tr")
var th = document.createElement("th")
th.innerText = 'Order Value'
var td = document.createElement("td")
td.innerText = total
var tr1 = document.createElement("tr")
var thD = document.createElement("th")
thD.innerText = "Delivery"
var td1 = document.createElement("td")
if(total < 999){
    td1.innerText = 149
}else{
    td1.innerText = "free"
}
row.append(th,td)
tr1.append(thD,td1)
tbody.append(row,tr1)
var tfoot = document.createElement("tfoot")
var rowfoot = document.createElement("tr")

var thf = document.createElement("th")
thf.innerText = "Total"
var tdf = document.createElement("td")
tdf.innerText = total
rowfoot.append(thf,tdf)
tfoot.append(rowfoot)
table.append(tbody,tfoot)
sum.append(table)
}

document.getElementById("view-btn").addEventListener("click", function(){
    
    var box1 = document.querySelector(".cart-product")
    box1.innerHTML = ""
    if(box1.style.display =="none"){
        box1.style.display = "block"
        showitems()
    }
    else{
        box1.style.display = "none"
        
    }
})


function showitems(){

order.map(function(item){
    var mainDiv = document.createElement("div")
    mainDiv.setAttribute("class", "mainDiv")
    var imgDiv = document.createElement("div")
    var productImg = document.createElement("img")
    productImg.setAttribute("src", item.img) 
    productImg.setAttribute("id", 'productImg')
    var div2 = document.createElement("div")
    div2.setAttribute("class","div2")
    var proName = document.createElement("h3")
    proName.innerText = item.name;
    proName.style.margin = 0
    var proPrice = document.createElement("h3")
    proPrice.innerText = item.price
    proPrice.style.margin = 0;
    var tablePro = document.createElement("table")
    var rowOne = document.createElement("tr")
    var td_One = document.createElement("td")
    td_One.innerText = "Colour"
    var td_1 = document.createElement("td") 
    td_1.innerText = item.color;
    var rowTwo = document.createElement("tr")
    var td_Two = document.createElement("td")
    var td_2 = document.createElement("td")
    td_Two.innerText = "Total"
    td_2.innerText = item.price
    var rowThree = document.createElement("tr")
    var td_Three = document.createElement("td")
    var td_3 = document.createElement("td")
    td_Three.innerText = "Art.no"
    td_3.innerText = `${Math.floor(100000 + Math.random() * 900000)}`
    rowOne.append(td_One,td_1)
    rowTwo.append(td_Two,td_2)
    rowThree.append(td_Three,td_3)
    tablePro.append(rowOne,rowTwo,rowThree)
    tablePro.style.margin = 0
    imgDiv.append(productImg)
    div2.append(proName,proPrice,tablePro)
    mainDiv.append(imgDiv,div2)
    document.querySelector(".cart-product").append(mainDiv)
    
})
}

back.addEventListener("click", function(){
    window.location.href = "cart.html"
})



document.querySelector(".complete").addEventListener("click",function(){
    console.log("work")
    var pay = document.querySelector(".payment")
    
        pay.style.display = "block"
    
})