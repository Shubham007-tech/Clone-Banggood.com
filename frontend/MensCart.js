
let data = JSON.parse(localStorage.getItem('BangoodCart'));
console.log(data);

let parent = document.getElementById('left_view_cart');
console.log(parent);


let total_Div= document.getElementById('total_amount'); 

pay_btn = document.getElementById('pay_btn');        ///



function showProduct(data){
   
    let total=0;

    parent.innerHTML = null;
    data.forEach(({product_name,price,product_image, title},index) => {


      total = total + Number(price);
     // console.log("kk", total)
      total_Div.innerText="Total ₹ " +total;






        let div = document.createElement('div');
        div.id = 'cart_view';

        let subdiv = document.createElement('div');
        subdiv.id = 'top_view';

        let sub_sub_div = document.createElement('div');
        sub_sub_div.id = 'left_top_view';

    let img = document.createElement('img');
    img.src = product_image;
    img.setAttribute("class" , "cart_prod_pic")

    let name = document.createElement('h4');
    name.textContent = title;

   let del = document.createElement('div');
   del.id = 'icon';
   del.innerHTML = `<i class="material-icons">delete</i>`

   

    let bottom = document.createElement('div');
     bottom.id = 'bottom_view';
    let amount = document.createElement('p');
    amount.textContent = `  Amount   `;

    let dis = document.createElement('span');
     dis.innerHTML = `<span>&#8377;</span>${price}`;

    bottom.append(amount,dis);
    
    sub_sub_div.append(img,name);
    subdiv.append(sub_sub_div,del);
    div.append(subdiv,bottom);
    parent.append(div);

    del.addEventListener('click',() => {
        remove(index);
    });

})

}
showProduct(data);




function remove(index){
        if ( index == 0){
            data.shift();
        }
        else {
        data.splice(index,index);  
       }  
     console.log(data);
     showProduct(data); 
     localStorage.setItem('BangoodCart',JSON.stringify(data));
       
}