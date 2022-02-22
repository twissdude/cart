


function placedOrder(params){
    multipleItemsCheck()
    cartDetails = []
    cart()
    let tempParams = {
        from_name: "Customer",
        order_id: orderId,
        order_detail: document.getElementById("show-invoice").innerText,
        invoce_detail: document.getElementById("show-up").innerText,
        total: document.getElementById("final_invoice_price").innerText
       
        


    };

    emailjs.send('gmail', 'template_nt75m9d', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })

    let inputElts = document.getElementsByTagName('input');
    let error = 0;
    for (let i = 0; i < inputElts.length; i++) {
        if(inputElts[i].value.trim() === '') {
                error == error + 1;
                alert(inputElts[i].name + ' and other fields are empty. Please refresh your browser and enter neccessary information');
            
                
                
                 
   
        }
        
       

        if(inputElts[i].value.trim()) {
            error == error + 1;
            alert('Success');
        }else{
         
        }

        return;
            
       
      

        
         
    
    }

    
    

    
    
   
} 



