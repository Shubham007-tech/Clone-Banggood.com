var data;
  
     //To GET data from server
     fetch("http://localhost:4000/api/products")
     .then((res) => {
         return res.json();
     })
     .then((res) => {
         console.log("res: ", res);
         
         viewP(res)
        data = res;
      //  console.log("mydata" , res)
        
         
     })
     .catch((err) => {
         console.log(err);
     })
 
let box = document.getElementById("right")
let parent = document.getElementById("right");



var listArray = []

var amcData=[] ;
var CategoryData=[] ;
var RiskData=[];
var FundData=[];




var checkboxes = document.querySelectorAll('.amctick');
var amc_tick=0;

for( let checkbox of checkboxes){

    checkbox.addEventListener('click' , function(){
        if(this.checked == true){
            ++amc_tick;
            amc(this.value);
           // console.log(this.value)
        }else{
            console.log("you unchecked" , this.value)
           // No_amc(this.value)
           --amc_tick;
           N_amc(this.value);
        }

    })
}




function N_amc(x){
    let arr = amcData.filter(function(a) {
       // console.log("filte", x)
        var name = x;
    return  a.brand != name ;

    } );
   // amcData = arr;
    amcData=[];
    amcData.push(...arr);
  // console.log("arrdata" , amcData)
  if(amc_tick==0)
  viewP(data)
  else
  viewP(arr)
}


                                                                        //////  Work
function amc(x){
    let arr = data.filter(function(a) {
        //console.log("filte", x)
        var name = x;
    return  a.brand == name ;

    } );
   // amcData = arr;
    amcData .push(...arr);
  // console.log("arrdata" , amcData)
  if(amc_tick<= 1)
    viewP(arr)
  else
    viewPP(arr);
}






var c_boxes = document.querySelectorAll('.c_tick');
var catagory_tick=0;


for( let checkbox of c_boxes){

    checkbox.addEventListener('click' , function(){
        
        if(this.checked == true && amc_tick<=0){
            ++catagory_tick;
            console.log("first C invoke" , this.value)
            first_C_filter(this.value);   
                                  
        }
        else if(this.checked == true && amc_tick>=1){
            ++catagory_tick;
           C_filter(this.value);
            // console.log("Cfilter" ,this.value)
        }else{
            console.log("you unchecked" , this.value)
            // N_C_filter(this.value)
          
           // No_amc(this.value)
        }

    })
}


function first_C_filter(x){
    let arr = data.filter(function(a) {
                       
        var name = x;
    return  a.fit_type == name ;

    } );
   // amcData = arr;
   CategoryData.push(...arr);
  
  viewP(arr)                                       //////////////////////////////////////
}


function C_filter(x){
    let arr = amcData.filter(function(a) {
                       
        var name = x;
    return  a.fit_type == name ;

    } );
   // amcData = arr;
   CategoryData.push(...arr);
  // console.log("afteCfilte" , CategoryData)
  viewP(arr)                                   
}



function  N_C_filter(x){
    let arr = CategoryData.filter(function(a) {
       
        var name = x;
    return  a.fit_type != name ;

    } );
   // amcData = arr;
   CategoryData.push(...arr);
  // console.log("afteCfilte" , CategoryData)
  viewP(arr)                                
}





var R_boxes = document.querySelectorAll('.R_tick');
var risk_tick=0

for( let checkbox of R_boxes){

    checkbox.addEventListener('click' , function(){
        if(this.checked == true && (amc_tick<=0 && catagory_tick<=0) )
        {   
            ++risk_tick;
            first_R_filter(this.value);
        }
        else if(this.checked == true){
            ++risk_tick;
            R_filter(this.value);
            // console.log("Catadataaa" ,this.value)
        }else{
            console.log("you unchecked" , this.value)
            N_R_filter(this.value)
           // No_amc(this.value)
        }

    })
}


function first_R_filter(x){
    let arr = data.filter(function(a) {
                    
        var name = x;
    return  a.style == name ;

    } );
   // amcData = arr;
   RiskData.push(...arr)
  
   viewP(arr)
}



function R_filter(x){
    let arr = CategoryData.filter(function(a) {
                    
        var name = x;
    return  a.style == name ;

    } );
   // amcData = arr;
   RiskData.push(...arr)
  
   viewP(arr)
}

function N_R_filter(x){
    let arr = RiskData.filter(function(a) {
                    
        var name = x;
    return  a.risk != name ;

    } );
   // amcData = arr;
   RiskData.push(...arr)
  
   viewP(arr)
}


let risk_cont=0;






var F_boxes = document.querySelectorAll('.F_tick');

for( let checkbox of F_boxes){

    checkbox.addEventListener('click' , function(){
        if(this.checked == true && (amc_tick<=0 && catagory_tick<=0 && risk_tick<=0) )
        {
            first_Fund_filter(this.value)

        }
       else if(this.checked == true){
            Fund_filter(this.value);
            // console.log("Catadataaa" ,this.value)
        }else{
            console.log("you unchecked" , this.value)
            N_Fund_filter(this.value);
           // No_amc(this.value)
        }

    })
}


function first_Fund_filter(x){
    let arr = data.filter(function(a) {
    
        var name = x;
    return  a.material == name ;

    } );
   // amcData = arr;
   FundData.push(...arr)
  // console.log("afteCfilte" , CategoryData)
  parent.innerHTML = null;
  viewP(arr)
}



function N_Fund_filter(x){
    let arr = FundData.filter(function(a) {
                      
        var name = x;
    return  a.material == name ;

    } );
   
   fund_cont=0;
   FundData.push(...arr)
   
  // console.log("afteCfilte" , CategoryData)
  viewP(arr)
}





function Fund_filter(x){
    let arr = RiskData.filter(function(a) {
    
        var name = x;
    return  a.material == name ;

    } );
   // amcData = arr;
   FundData.push(...arr)
  // console.log("afteCfilte" , CategoryData)
 // parent.innerHTML = null;
  viewP(arr)
}

let fund_cont=0;





function viewPP(d)                          
{
   // console.log("bbb", d)                                // AMC on load
 

   d.forEach( function ( el)
{
  // console.log("im in" , el)
let div = document.createElement('div');
div.setAttribute("class" , "product_card")

let card_text= document.createElement('div');
card_text.setAttribute("class" , "card_text")

let price = document.createElement('p');
price.textContent= "₹"+el.price;
price.setAttribute("class" , "card_price")

let title = document.createElement('h3');
title.textContent= el.title ;
title.setAttribute("class" , "card_title")

let discount= document.createElement('p');
discount.textContent= el.discount+ " Off";
discount.setAttribute("class" , "card_discount")

card_text.append(price , discount, title)



let img = document.createElement('img');
img.src= el.product_image;
img.setAttribute("class" , "card_img")

div.onclick = function () {
  referData(el)
}


div.append(img , card_text)
box.append(div)
} );






}  // VieWPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP ends







function Sorting(){
    let temp = document.getElementById("Sort")
     let name= temp.value;

     if(name=="Rat")
     sortHL();
     else if(name=="Ret")
     Ret_sortHL()
         
}


  function sortHL() {
    
  let arr = data.sort(function(a,b){
   
   return b.price - a.price;

  });

  viewP(arr)

  }
 

  function Ret_sortHL() {
    
  let arr = data.sort(function(a,b){
   
   return a.price - b.price;

  });

  viewP(arr)

  }




    
     function viewP(d)                          
      {
         // console.log("bbb", d)                                // first on load
        parent.innerHTML = null;
 
         d.forEach( function ( el)
     {
        // console.log("im in" , el)
     let div = document.createElement('div');
     div.setAttribute("class" , "product_card")

     let card_text= document.createElement('div');
     card_text.setAttribute("class" , "card_text")

     let price = document.createElement('p');
     price.textContent= "₹"+el.price;
     price.setAttribute("class" , "card_price")
 
     let title = document.createElement('h3');
     title.textContent= el.title ;
     title.setAttribute("class" , "card_title")

     let discount= document.createElement('p');
     discount.textContent= el.discount+ " Off";
     discount.setAttribute("class" , "card_discount")

     card_text.append(price , discount, title)

     
     
     let img = document.createElement('img');
     img.src= el.product_image;
     img.setAttribute("class" , "card_img")

     div.onclick = function () {
        referData(el)
    }
    
 
     div.append(img , card_text)
     box.append(div)
     } );
 
 
 
 
 
 
   }  // VieWP ends



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
