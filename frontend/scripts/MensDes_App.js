let productArr = JSON.parse(localStorage.getItem("itemData"));
console.log(productArr);

let Upper_left_des = document.getElementById("Upper_left_des")
let Upper_right_des = document.getElementById("Upper_right_des")


function showProduct_Description(d)
 {
  

    parent.innerHTML = null;
   
   d.forEach( function ( el)
   {
      // console.log("im in" , el)
   let div = document.createElement('div');
   div.setAttribute("class" , "MFdiv")

 
    let img = document.createElement('img');
    img.src= el.product_image;
    img.setAttribute("class" , "des_image")
    
    let title_div = document.createElement('div');
    title_div.setAttribute("class" , "title_div");

    let title = document.createElement('h2');
    title.innerHTML=el.title
    title.setAttribute("class" , "title_Text")

   
    let rating = document.createElement('h2');
    rating.innerHTML=el.rating
    rating.setAttribute("class" , "rating_Text")

    let price = document.createElement('h2');
    price.innerHTML= "₹ " +el.price;
    price.setAttribute("class" , "des_price_Text")

    let discount= document.createElement('p');
     discount.textContent= " -"+el.discount;
     discount.setAttribute("class" , "card_discount")


     let color= document.createElement('p');
     color.textContent= "Color: "+el.color;
     color.setAttribute("class" , "des_size")

     let size= document.createElement('p');
     size.textContent= "Size: "+el.size;
     size.setAttribute("class" , "des_size")
   
     let ship= document.createElement('p');
     ship.textContent= "Ship from: "+el.ship_from;
     ship.setAttribute("class" , "des_size")



     let buy_div  = document.createElement('div');
     buy_div.setAttribute("class" , "buy_div");


     let buy_Now  = document.createElement('button');
      buy_Now.textContent="Buy Now";
      buy_Now.setAttribute("class","buyNow")

      buy_Now.onclick = function(){
                    addtocart(el);
                  //alert("clicked");
                  window.location.href = "MensCart.html";
                  
                }


      let add_Cart  = document.createElement('button');
      add_Cart.textContent="Add to Cart";
      add_Cart.setAttribute("class","buyNow_Orange")

      add_Cart.onclick = function(){
                    addtocart(el);
                 //  alert("clicked");
                 window.location.href = "MensCart.html";

                }

                 //add to cart 
        if(localStorage.getItem("BangoodCart") === null){
            localStorage.setItem("BangoodCart", JSON.stringify([]));
        }

        
        function addtocart(d){

           let  arr = JSON.parse(localStorage.getItem("BangoodCart"));
                arr.push(d);
                localStorage.setItem("BangoodCart", JSON.stringify(arr));
        
        }


     buy_div.append(buy_Now , add_Cart )

     
    title_div.append(title , rating , price, discount , color , size, ship , buy_div)


    div.append(img)
   

    Upper_right_des.append(title_div)
   
    Upper_left_des.append(div);
     
    } );


 }



 showProduct_Description(productArr)




/////////////////////////////////////////////////////////////// Debouncing ////////////////////////////////


let timerId;
let dropdownBox = document.getElementById("dropDown");
let searchInput = document.getElementById("Search_input");
let goods_dropDown = document.getElementById("goods_dropDown");


searchInput.oninput = () => {
    deBounce(showData, 1000);
};

function showData(){
    let inputValue = document.getElementById("Search_input").value;
    fetch("http://localhost:4000/api/products")
    .then((res) => {
       // console.log("Debounce" , res);
        return res.json();
       
    })
    .then((res) => {
        console.log("For Search: ", res);
        let productArr = [];
        res.forEach(function(data){
            
          let helpArr= data.title.split(" ")

         //console.log("myhelp",helpArr)

         for(let i=0 ; i<helpArr.length; i++)
          {
           
            if(inputValue== helpArr[i]|| inputValue== helpArr[i].toLowerCase() || inputValue== helpArr[i].toUpperCase() )
               productArr.push(data)

          }

        
        });

        My_dropDown(productArr);
       // console.log("finalArr",productArr)

    })
    .catch((err) => {
        console.log(err);
    })
}




function  My_dropDown(mov)
 {
   console.log("dorp_Fire")
  goods_dropDown.innerHTML=null;
    
   mov.forEach(function(x){
    
    let p = document.createElement('button')
    p.setAttribute("class" , "dropDown_Data")
   
    p.onclick = function () {
        referData_deb(x)
    }

          p.innerText = x.title;
          p.Value = x.title;

         goods_dropDown.append(p);

   });

 }



 if (localStorage.getItem("itemData") == null) {
    localStorage.setItem("itemData", JSON.stringify([]));
}


function referData_deb(p) {

    var ProductDes = JSON.parse(localStorage.getItem("itemData"));

    ProductDes = [];

    ProductDes.push(p);
    console.log("pushed" , p)

    localStorage.setItem("itemData", JSON.stringify(ProductDes));

    window.location.href = "MensDescription.html";
}



function deBounce(func, delay){
    if(timerId){
        clearTimeout(timerId);
    }
    timerId = setTimeout(function(){
        func();
    }, delay);
}





