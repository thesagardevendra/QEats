const addCart=document.querySelectorAll("#add-cart");
const allCartCount=document.querySelector("#cartCount");

for(let i=0;i<addCart.length;i++){
    addCart[i].addEventListener("click",(e)=>{
        cartCount();
    })
};

function cartCount(){
    let productNumbers=localStorage.getItem("cartsCount");
    productNumbers=parseInt(productNumbers)
   localStorage.setItem("cartsCount",1);
   if(productNumbers){
       localStorage.setItem("cartsCount",productNumbers+1);
       allCartCount.textContent=productNumbers+1;
   }else{
       localStorage.setItem("cartsCount",1);
       allCartCount.textContent=productNumbers=1;
   }
}

function displayCart(){
    let productNumbers=localStorage.getItem("cartsCount")
    if(productNumbers){
        allCartCount.textContent=productNumbers;
    }
}

displayCart();
