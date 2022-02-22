const productDetails = [  
    {  
        name:"Sweat Shirt",  
        price:800,  
        img:"sweat shirt",  
        qty:10  
    },  
    {  
        name:"2pcs Suit",  
        price:2000,  
        img:"2pcs suit",  
        qty:15  
    },  
    {  
        name:"Jacket Blazer",  
        price:1200,  
        img:"jacket blazer",  
        qty:20  
    },  
    {  
        name:"Skirt Suit",  
        price:1500,  
        img:"skirt suit 2",  
        qty:35  
    },  
    {  
        name:"Tie",  
        price:500,  
        img:"tie",  
        qty:25  
    },  
    {  
        name:"Buba & Sokoto Kaftan",  
        price:1200,  
        img:"BUBA-SOKOTO",  
        qty:25  
    },  
    {  
        name:"Agbada Buba & Sokoto<br> Kaftan <br>(Kaftan)",  
        price:1200,  
        img:"agbada",  
        qty:25  
    },  
    {  
        name:"Wedding Dress <br>(From)", 
        price:8000,  
        img: "wedding dress",  
        qty:25  
    },  
    {  
        name:"Bride Maid Dress",  
        price:3000,
        img:"bride maid dress", 
        qty:25  
    },
    {  
        name:"Evening Dress Normal",  
        price:1500,
        img:"evening dress normal",
        qty:25  
    },  
    {  
        name: "Evening Dress Special", 
        price:2500,  
        img:"evening special",  
        qty:25  
    },
    {  
        name:"Waist Coat", 
        price:1000,  
        img:"waist coat", 
        qty:25  
    }, 
    {  
        name:"Aso Oke Complete <br>From",
        price:1500,  
        img:"aso oke", 
        qty:25  
    },    
    {  
        name: "Shoes <br>(From)",
        price:1500, 
        img:"shoes", 
        qty:25  
    },    
    {  
        name:"Hand Bag <br>(Small)", 
        price:1000,  
        img:"hand bag",  
        qty:25  
    },    
    {  
        name:"Duvet <br>(King Size)",
        price:2000,  
        img:"duvet",  
        qty:25  
    },    
    {  
        name:"Bed Sheet <br>(Small)",
        price: 800,  
        img:"small bed sheet",  
        qty:25  
    },    
    {  
        name:"Bed Sheet <br>(Big)", 
        price:1500,  
        img:"big bed sheet",  
        qty:25  
    },  
    {  
        name:"Pillow Cases <br>(Each)", 
        price:200,  
        img:"pillow cases",  
        qty:25  
    },      
    {  
        name:"Throw Pillow <br>(Each)", 
        price:300, 
        img:"throw pillow", 
        qty:25  
    },    
    {  
        name:"Hat", 
        price:800,  
        img:"hat",  
        qty:25  
    },    
    {  
        name:"Face Cap",
        price:500,  
        img:"face cap",
        qty:25  
    },    
    {  
        name:"Buba Only",
        price:500,  
        img: "BUBA-SOKOTO",  
        qty:25  
    },
    {  
        name:"Short",
        price:500,  
        img: "short", 
        qty:25  
    },       
    {  
        name:"Leather Jacket<br>(From)",
        price:2500,  
        img: "leather jacket",
        qty:25  
    },       
    {  
        name:"Suede Jackets<br>(From)",
        price:2000,  
        img: "suede jacket", 
        qty:25  
    },       
    {  
        name:"Silk Shirt",
        price:600,  
        img: "silk dress",
        qty:25  
    },       
    {  
        name:"Indian Dress Silk",
        price:2500,  
        img: "indian silk", 
        qty:25  
    },       
    {  
        name:"Long Grown Kaftan",
        price:1000,  
        img: "long grown kaftan", 
        qty:25  
    },       
    {  
        name:"Buba/Sokoto Lace",
        price:1000,  
        img: "buba sokoto lace", 
        qty:25  
    },       
]  

//variables declaration
var cartDetails = [];
var orderqty=1;

//getting stock value
var stock = []

function cart()
{
    var modalId= document.getElementById('modal-body');    
    modalCount=modalId.childElementCount;
   
    if(modalCount>=0)
    {
        var modalId= document.getElementById('modal-body');
        modalId.innerHTML="";       
    }
    if(cartDetails.length==0)
    {   
        document.getElementById('cart-counter').style.visibility="hidden";
        emptyCartAlert()
    }
    var modalCartString = "";
       if(cartDetails.length>0)
       {
        for (i=0;i<cartDetails.length;i++)
        {       
            
            modalCartString=modalCartString.concat(` 
            <div class="modal-item" id="modal-item-id${i}">
                <p class="modal-product-name">${cartDetails[i].name}</p>
                <button class="modal-sub" onclick="quantityChange(${i},'sub')">-</button>
                <input id="qty-view${i}" type="number" onchange="quantityChange(${i},'changePrice')" value="${cartDetails[i].orderqty}" class="modal-qty">
                <button onclick="quantityChange(${i},'add')" class="modal-plus">+</button>
                <p class="modal-product-rupee">₦</p>
                <p id="model-product-price${i}" class="modal-product-price">${cartDetails[i].orderqty*cartDetails[i].price}</p>
                <button onclick="removeElement(${i})" class="btn btn-danger modal-remove">Remove Item</button>
            </div>`)

        };
        modalId.innerHTML = modalCartString;
       }
    
}

//function to change quantity in modal
function quantityChange(index,op)
{
    // cart();
    if(cartDetails[index].orderqty>0)
    {
        var val = parseInt(document.getElementById("qty-view"+index).value,10);
       if(val>0)
       {
        if(op=='add')
        {
            
            cartDetails[index].orderqty= val+1;
            // console.log("value"+ val)
            // console.log(cartDetails[index].orderqty)
            // console.log("index  "+index)


            // cartDetails[check].orderqty = cartDetails[check].orderqty+1
        }
        //if op is 'sub'
        else if(op=='sub')
        {   
            if(cartDetails[index].orderqty==1) {                               
                removeElement(index); 
                return 0;               
            }
            else{                
                
                cartDetails[index].orderqty= val-1;
            }
        }
        else{
            cartDetails[index].orderqty= val;
        }
       }
        // cart();
    }
    document.getElementById("qty-view"+index).value=cartDetails[index].orderqty;
    document.getElementById("model-product-price"+index).innerText=cartDetails[index].orderqty*cartDetails[index].price
    
        // document.getElementById('cart-counter').style.visibility="hidden";
        // cart()  
}
function emptyCartAlert()
{
    var modalId= document.getElementById('modal-body');
        var cartEmpty = document.createElement('p');
        var cartEmptyText = document.createTextNode('Your Cart is empty...');
        cartEmpty.classList.add('alert-danger','alert')
        cartEmpty.setAttribute("id","empty-id")
        cartEmpty.appendChild(cartEmptyText);
        modalId.appendChild(cartEmpty)
}
function removeElement(index)
{   
    cartDetails.splice(index,1)
    cart();//refresh cart
    if(cartDetails.length==0)
    {
        badgeUp(false)    
        // emptyCartAlert()    

    }
    else{
        badgeUp(true);
    }
        // document.getElementById("modal-item-id"+index).remove();
}

function addToCart(index)
{
    
    tilt();//for tilting cart icon
   
    //if productDetails[index].name find in cartdetails.name
    //then only quantity increment
    // oterwise add product in cart

    // to check whether product is in cart
    var check = cartDetails.findIndex(x=>x.name==productDetails[index].name)

    if( check!=-1)
    {
        // cartDetails[check].orderqty = cartDetails[check].orderqty+1
        // var val = parseInt(document.getElementById("qty-view"+check).value,10);
        // console.log(val)
        quantityChange(check,'add')
        // console.log(cartDetails);//check to view cart
    }

    else{
        cartDetails.push({name:productDetails[index].name,price:productDetails[index].price,orderqty:orderqty})
        // console.log(cartDetails);//check to view cart
        badgeUp(true);
    }
    
    
    cart();
    
    
}
function badgeUp(badgeFlag)
{   

    // if true then ++ up
    if(badgeFlag==true)
    {
    document.getElementById('cart-counter').innerText=cartDetails.length; 
    document.getElementById('cart-counter').style.visibility="visible"
    }
    else{
        document.getElementById('cart-counter').style.visibility="hidden";
    }
    // console.log(cartDetails.length);    
}

function tilt()
{
    var id=document.getElementById('cart-image');
    id.classList.add('run-cart-animation');
    setTimeout(()=>{
        id.classList.remove('run-cart-animation')
    },500)
}

///creating items element
window.onload=addElement;
// document.body.onload=addElement;
function addElement () { 
    storageCreate()
    var eles = document.getElementById("items");

    var itemString = "";
    for(i=0;i<productDetails.length;i++)
  { 

    itemString= itemString.concat(`
    <div class="productItem">
    <div class="item">
    <img src="./images/${productDetails[i].img}.jpg">
            <p class="product-name">${productDetails[i].name}</p>
            <p class="product-price">₦${productDetails[i].price}</p>
            <button id="add${i}" onclick="addToCart(${i})" class="btn btn-primary">ADD TO QUOTE</button>
            <div class="alert alert-warning out-of-stock" id="out-of-stock${i}" style="visibility: hidden;">Not Available</div>
    </div>
    </div>`)
    // var currentDiv = document.getElementById("div1"); 
    // eles.insertBefore(cart, currentDiv);
      //console.log(productDetails[i].name)
  }
  //inserting html elements   
  eles.innerHTML=itemString;
  outOfStockDisplayChange()
  
}
// addElement()

//logic to buy button
function buy(index)
{
    // console.log(index)
    cartDetails = [];
    cartDetails.push({name:productDetails[index].name,name:productDetails[index].name,price:productDetails[index].price,orderqty:orderqty});
    // console.log(cartDetails)
    badgeUp(true);
    makeInvoice();

}

/// invoice creation
function makeInvoice()
{
   var invoiceid=document.getElementById('modal-invoice');

    //    generate orderid
    orderId = Math.floor(Math.random() * Math.pow(10, 8)) + 1;

    document.getElementById('order-id').innerText="Order Id : "+orderId;



   var totalPrice=0;
    invoiceid.innerHTML=""
//    console.log('check1');
   var orderItemString = ""
   for (i=0;i<cartDetails.length;i++)
   {     
    var itempricevalue=cartDetails[i].orderqty*cartDetails[i].price     
       orderItemString = orderItemString.concat(`
    <div class="order-item" id="order-item-id${i}">
        <p class="order-product-name">${cartDetails[i].name}</p>
        <div class="orderpricecontainer">
            <p class="order-product-rupee"></p>
            <p id="order-product-price${i}" class="order-product-price">₦${cartDetails[i].price} X ${cartDetails[i].orderqty} = ₦${itempricevalue}</p>
        </div>
       
    </div>`)

       
//    calculating total price
   totalPrice=totalPrice+itempricevalue;
   
   

};
invoiceid.innerHTML = orderItemString;
document.getElementById('final_invoice_price').innerHTML=totalPrice
// console.log(totalPrice);

}




//place your order
/*function placedOrder(){
    
    // storageUpdate()
    multipleItemsCheck()
    // console.log(cartDetails);    
    cartDetails = []
    cart()
}*/
// sessionStorage.setItem('value', 1);

function storageCreate()
{
    if(sessionStorage.getItem('stock'))
    {
        stock = JSON.parse(sessionStorage.getItem('stock'));
        }
    else
    {
        let stockDetails = []
        for(i=0;i<productDetails.length;i++)
        {
          stockDetails.push({name:productDetails[i].name,stockQty:productDetails[i].qty})          
        }
        // console.log(stockDetails)

        sessionStorage.setItem('stock',JSON.stringify(stockDetails));
        stock = JSON.parse(sessionStorage.getItem('stock'));
        // console.log("else "+ sessionStorage.getItem('stock'));
        
    }
    // sessionStorage.clear()
      
}

function outOfStockDisplayChange()
{
    for(i=0;i<productDetails.length;i++)
    {
      if(stock[i].stockQty==0)
      {    
       // document.getElementById("buy"+i).style.display="block"
        document.getElementById("add"+i).style.display="block"
        document.getElementById('out-of-stock'+i).style.visibility="hidden"
      }
    }




}

function multipleItemsCheck()
{   
    var multipleItemsFlag=0;
    for(i=0;i<cartDetails.length;i++)
    {
        check=stock.findIndex(x=>x.name==cartDetails[i].name)
        if(stock[check].stockQty-cartDetails[i].orderqty>=0)
        {
            multipleItemsFlag=multipleItemsFlag+1
            console.log(cartDetails[i].name + multipleItemsFlag);            
        }
        else{
            multipleItemsFlag=multipleItemsFlag - 1
            console.log(cartDetails[i].name + multipleItemsFlag);
        }
    }
    console.log(multipleItemsFlag);
    
    if(multipleItemsFlag==cartDetails.length)
    {
        storageUpdate()
    }
    else
    {
        document.getElementById('check-body').style.display="block";
        document.getElementById('exceed').style.display="block"
    }
}

function storageUpdate()
{
    for (i=0;i<cartDetails.length;i++)
        {
            check=stock.findIndex(x=>x.name==cartDetails[i].name)
            if(check>=0)
            {                
                if(stock[check].stockQty-cartDetails[i].orderqty<=0)
                {                    
                    if(stock[check].stockQty-cartDetails[i].orderqty==0)
                    {                        
                        document.getElementById('check-body').style.display="block";
                        document.getElementById('exceed').style.display="block"
                        //buy button remove
                        
                        //product cannot be added it exceeds the stock value
                        //the stock gooes in -ve                    

                        stock[check].stockQty=stock[check].stockQty-cartDetails[i].orderqty;
                        outOfStockDisplayChange()
                    }
                        
                    else{
                        document.getElementById('check-body').style.display="block";
                       
                        document.getElementById('exceed').style.display="block";
                       
                    }

                }
                
                else{
                    // console.log('else');
                    
                    stock[check].stockQty=stock[check].stockQty-cartDetails[i].orderqty;
                    document.getElementById('exceed').style.display="block";
                    document.getElementById('check-body').style.display="block";
                    // console.log('after');
                    
                }
                
                   
            }
        }
        sessionStorage.setItem('stock',JSON.stringify(stock));
}

function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    let ele = document.querySelectorAll('input[type="radio"]:checked');
    for(i = 0; i < ele.length; i++) {

        if(ele[i].type="radio"){
            if(ele[i].checked)
            document.getElementById("result").innerHTML += ele[i].name.bold() + ": ".bold() + ele[i].value + "<br>" + "<br>";
        }

        
    }

    
};

function getInputValue(){
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("fname").value + " " + " ";
   let inputVal2 = document.getElementById("lname").value;
  inputVal += inputVal2;
    
    // Displaying the value
    document.getElementById("myName").innerHTML = inputVal;
}







