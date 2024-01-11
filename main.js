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
      image: 'bz1.png',
      price: 2
    },
    {
      id: 2,
      name: 'product 2',
      image: 'bz2.png',
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
      image: 'one.png',
      price: 15
    },
    {
      id: 5,
      name: 'product 5',
      image: 'samsung.png',
      price: 20
    },
    {
      id: 6,
      name: 'product 6',
      image: 'so.png',
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
                         <button onclick='addtocard(${key}'>add to card</button>                         
        `
        list.appendChild(newdiv)
    }
  )
}

initapp();