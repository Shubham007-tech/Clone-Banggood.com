let images =["https://imgaz.staticbg.com/banggood/os/202112/20211208001146_517.jpg" , 
"https://imgaz.staticbg.com/banggood/os/202112/20211206020542_324.jpg" ,
 "https://imgaz.staticbg.com/banggood/os/202112/20211201013551_717.jpg" ];


 let  container = document.getElementById("myslide");

 let  flash = document.getElementById("flash");
 let  deals = document.getElementById("deals");

 
 flash.onclick= function (){

  window.location.href='Mens.html';

 }

 deals.onclick= function (){

 window.location.href='soon.html';

 }
 
 
 


let stopp;  // declared globally to use further outside of function
 
function startSlideshow(){


   let cont =0;

    stopp = setInterval(function() {
       container.innerHTML = null;  // to set div as null each time 


        if(cont === images.length){
            cont=0;                     // to reset conter
        }

    let img = document.createElement("img");
    img.src = images[cont];

    container.append(img);

    cont = cont + 1;  // imp step otherwise it will append at bottom each time 
                        // here it will replace div with next images.

    } ,  3000)  // == 3 seconds. 
    

    
   
}

startSlideshow()







let timerId;
let dropdownBox = document.getElementById("dropDown");
let searchInput = document.getElementById("Search_input");
let goods_dropDown = document.getElementById("goods_dropDown");


searchInput.oninput = () => {
deBounce(showData, 1000);
};

function showData(){
let inputValue = document.getElementById("Search_input").value;
fetch("https://shubham007-tech.github.io/Bangood_Api/db.json")
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
    console.log("finalArr",productArr)

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
    referData(x)
}


  
      p.innerText = x.title;
      p.Value = x.title;


     
    

     

     goods_dropDown.append(p);





});




}



if (localStorage.getItem("itemData") == null) {
localStorage.setItem("itemData", JSON.stringify([]));
}


function referData(p) {

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

// export { showData, deBounce }; 




