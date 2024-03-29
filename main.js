const openshopping = document.querySelector('.shopping')
const closeshopping = document.querySelector('.closeshopping')
const list = document.querySelector('.list')
const listcard = document.querySelector('.listcard')
const total = document.querySelector('.total')
const body = document.querySelector('body')
const quantity = document.querySelector('.quantity')




openshopping.addEventListener('click',()=>{

    body.classList.add('active')
})

closeshopping.addEventListener('click',()=>{

    body.classList.remove('active')
})

let products = [
    {
      id: 1,
      name: 'product 1',
      image: 'one.png',
      price: 2
    },
    {
      id: 2,
      name: 'product 2',
      image: 'samsung.png',
      price: 5
    },
    {
      id: 3,
      name: 'product 3',
      image: 'bz4.png',
      price: 10
    },
    {
      id: 4,
      name: 'product 4',
      image: 'bz1.png',
      price: 15
    },
    {
      id: 5,
      name: 'product 5',
      image: 'bz2.png',
      price: 20
    },
    {
      id: 6,
      name: 'product 6',
      image: 'bz4.png',
      price: 25
    }
  ];
  let listcards=[]
  const initapp =()=>{


    products.forEach((value,key) =>{

         let newdiv = document.createElement('div');
         newdiv.classList.add('item');
         newdiv.innerHTML=`
                         <img src='img/${value.image}'>
                         <div class ='title'>${value.name}</div>
                         <div class ='price'>${value.price}</div>
                         <button onclick='addtocard(${key})'>add to card</button>                         
        `
        list.appendChild(newdiv)
    }
  )
}

initapp();






 const  addtocard =(key)=>{
 

   if(listcards[key]==null){
     listcards[key]= JSON.parse(JSON.stringify(products[key]))
     listcards[key].quantity =1
   }
   else{
    alert('product is already in cart')
   }
   
   reloadcard();
 }



 const reloadcard = () =>{


 listcard.innerHTML ='';
 let count = 0;
 let totalprice = 0;



 listcards.forEach((value,key)=>{
   totalprice = totalprice + value.price;
   count = count + value.quantity;


            if(value != null) {
                let newdiv = document.createElement('li');
                newdiv.innerHTML=`
               
               <div> <img src='img/${value.image}'> </div>
                <div class ='cardtitle'>${value.name}</div>
                <div class ='cardprice'>${value.price.toLocaleString()}</div>
                
                <div>
                    <button style='background-color:#560bad'
                     class='cardbutton'  onclick='changequantity(${key},${value.quantity - 1})'
                     > - </button>
          
                     <div class ='count'>${count} </div>

                     <button style='background-color:#560bad'
                     class='cardbutton'  onclick='changequantity(${key},${value.quantity + 1})'
                     > + </button>
                </div>
               
                `

                listcard.appendChild(newdiv)
            }

            total.innerHTML = totalprice.toLocaleString();
            quantity.innerText = count;
 })

 }


 const changequantity = async (key,quantity) =>{
       if(quantity == 0){
          delete listcards[key]
       }
       else{
        listcards[key].quantity = quantity;
        listcards[key].price = quantity * products[key].price
       }
reloadcard()
 }






 paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: parseFloat(total.innerText) // Replace with your total value
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
      // Call your server to save the transaction
    });
  }
}).render('#paypal-button-container');