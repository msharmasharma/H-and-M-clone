var final = JSON.parse(localStorage.getItem("inCart")) || []
var sumTotal = 0 
itemCart(final)
function itemCart(final){

    document.getElementById("table2").innerHTML = ""
    var total = 0
    
    final.map(function(item,index){
        total += Number(item.price)
        sumTotal += Number(item.price)
        var img = document.createElement("img")
        img.setAttribute("src", item.img)
        img.setAttribute("id", "proImg")
        var name = document.createElement("p")
        name.innerText = item.name
        name.style.margin = 0
        var price = document.createElement("p")
        price.innerText = `Rs ${item.price}`
        price.style.margin = 0
        var div1 = document.createElement("div")
        div1.append(img)
        var row1 = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.innerText = "Art.no"
        var td2 = document.createElement("td")
        td2.innerText = `${Math.floor(100000 + Math.random() * 900000)}`
        var td3 = document.createElement("td")
        td3.innerText = "size"
        var td4 = document.createElement("td")
        td4.innerText = "2-3Y"
        var row2 = document.createElement("tr")
        var td11 = document.createElement("td")
        td11.innerText = "Color"
        var td12 = document.createElement("td")
        td12.innerText = "blue"
        var td13 = document.createElement("td")
        td13.innerText = "Total"
        var td14 = document.createElement("td")
        td14.innerText = item.price        
        var div2 = document.createElement("div")
        row1.append(td1,td2,td3,td4)
        row2.append(td11,td12,td13,td14)
        var table = document.createElement("table")
        table.setAttribute("id","first-table")
        table.append(row1,row2)
        var div3 = document.createElement("div")
        div3.innerHTML = `<i class="far fa-heart fa-sm" id="heart"></i>`  
        div2.setAttribute("id", "pos3")
        var select = document.createElement("select")
      
        var opt1 = document.createElement("option")
        var opt2 = document.createElement("option")
        var opt3 = document.createElement("option")
        opt1.innerText = 1 
        opt2.innerText = 2
        opt3.innerText = 3 
        select.append(opt1,opt2,opt3)
        var div4 = document.createElement("div")
        div4.innerHTML = `<i class="far fa-trash-alt fa-sm"></i>`
        div4.addEventListener("click", function(){
            cartItem.remove()
            final.splice(index,1)
            localStorage.setItem("inCart", JSON.stringify(final))
            itemCart(final)
            location.reload();
        })
        div4.setAttribute("id", "pos4")
        div3.append(select)
        div2.append(name,price,table,div3,div4)
    var cartItem = document.createElement("div")
    cartItem.setAttribute("class","cart-item")
    cartItem.append(div1,div2)
    document.querySelector(".cart-product").append(cartItem)
    select.addEventListener("change", function(){
        if(select.value == 1){
            td14.innerText = `Rs ${item.price} `
            sumTotal = Number(item.price)
            tdThree.innerText = sumTotal
            tdOne.innerText = `${item.price}`
            console.log(tdThree)
            console.log(sumTotal)
        }
        if(select.value == 2){
            td14.innerText = `Rs ${item.price * 2} `
           var change = item.price 
        //    sumTotal = total
           sumTotal += change
            tdThree.innerText = sumTotal 
            tdOne.innerText = `${sumTotal}`
            console.log(sumTotal)
            console.log(change)
        }
        if(select.value == 3){
            td14.innerText = `Rs ${item.price * 3} `
            var change = item.price 
            // sumTotal = total
            sumTotal += change
            tdThree.innerText = sumTotal 
            tdOne.innerText = `${sumTotal}`
            console.log(sumTotal)
            console.log(change)
        }
        localStorage.setItem("total", JSON.stringify(sumTotal))
    })
    
})

document.querySelector(".add").addEventListener("click", function(e){
    e.preventDefault()
    var discount = document.getElementById("discount").value
    if(discount == "masai10"){
        sumTotal = `${Math.floor(sumTotal * (90/100))}`
        tdThree.innerText = `${sumTotal}`
        // localStorage.setItem("disPrice", JSON.stringify(tdThree.innerText))
        console.log(sumTotal)
    }
    localStorage.setItem("total", JSON.stringify(sumTotal))
})

var tbody = document.createElement("tbody")
var trow1 = document.createElement("tr")
var th1 = document.createElement("th")
var tdOne = document.createElement("td")
th1.innerText= "Order Value"

tdOne.innerText = total
console.log(total)
trow1.append(th1,tdOne)
var th2 = document.createElement("th")
th2.innerText = "Delivery"
var tdTwo = document.createElement("td")
if(total > 999){
    tdTwo.innerText = "Free"
}else{
    tdTwo.innerText = 149
}

tbody.append(trow1,th2,tdTwo)

var trow2 = document.createElement("tr")
var th3 = document.createElement("th")
var tdThree = document.createElement("td")
th3.innerText = "Total"
tdThree.innerText = `${sumTotal}`
trow2.append(th3,tdThree)
document.getElementById("table2").append(tbody,trow2)


    
}




document.querySelector(".checkout").addEventListener("click", function(){
    window.location.href = "checkout.html"
    
})
