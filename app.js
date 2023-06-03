var product =[
  {
     id:1,
     images:"images/handfree.jpg",
     title:"handfree",
     price:"$19",
     button: "add to cart",

  },
  {
    id:2,
     images:"images/CAMARA.jpeg",
     title:"DSLR",
     price:"$40",
     button: "add to cart",
  },
  {
    id: 3,
     images:"images/botal.jpeg",
     title:"Botal",
     price:"$12",
     button: "add to cart",
  },
  {
    id: 4,
     images:"images/hanphoones.jpeg",
     title:"handphone",
     price:"$30",
     button: "add to cart",
  },
  {
    id: 5,
     images:"images/yello.jpg",
     title:"Iphone",
     price:"$60",
     button: "add to cart",
  },
{
  id: 6,
     images:"images/charger.jpeg",
     title:"Charger",
     price:"$23",
     button: "add to cart",
  },
  {
    id: 7,
       images:"images/air.jpg",
       title:"AirPods",
       price:"$15",
       button: "add to cart",
    },
    {
      id: 8,
         images:"images/vivo.png",
         title:"Vivo Y20",
         price:"$30",
         button: "add to cart",
      },
      {
         id:9,
         images:"images/selfi.jpg",
         title:"Selfie Ring Light",
         price:"$25",
         button: "add to cart",
    
      },
      {
        id:10,
         images:"images/gamingPc.jpg",
         title:" Gaming Computer PC",
         price:"$599",
         button: "add to cart",
      },
      {
        id: 11,
         images:"images/watch.jpg",
         title:"Diamond Dial Bracelet Watch",
         price:"$31.5",
         button: "add to cart",
      },
      {
        id: 12,
         images:"images/dellbag.webp",
         title:"Dell Pro Briefcase",
         price:"$30",
         button: "add to cart",
      },
      {
        id: 13,
         images:"images/comp.jpeg",
         title:"Computer",
         price:"$50",
         button: "add to cart",
      },
    {
      id: 14,
         images:"images/webcame.jpg",
         title:"Dual Microphone PC Webcam",
         price:"$33.61",
         button: "add to cart",
      },
      {
        id: 15,
           images:"images/power1.jpg",
           title:"XIAOMI 22 5W POWER BANK",
           price:"$7",
           button: "add to cart",
        },
        {
          id: 16,
             images:"images/lapcharg.jpg",
             title:"Adapter",
             price:"$30",
             button: "add to cart",
          },
          {
            id: 16,
               images:"images/mouse.webp",
               title:"Mouse",
               price:"$10",
               button: "add to cart",
            },
            {
               id: 16,
                  images:"images/laptop.webp",
                  title:"HP Laptop",
                  price:"$80",
                  button: "add to cart",
               },
            {
               id: 17,
               images:"images/imported.jpeg" ,
               title:"Mpow X4.0- Wireless",
               price:"$60",
               button:"add to cart",
            },
            {
               id: 17,
               images:"images/ipm.webp" ,
               title:"Mpow X4.0- Wireless",
               price:"$58",
               button:"add to cart",
            },
]

var categories = [...new Set (product.map((item)=>
  {return item}))]

  var cart = document.getElementById("root")
  cart.innerHTML =categories.map((item)=>
  {
    var {images, title,price,button}= item;
    return`<div class="box">
    <div class="box-image ">
    <img src=${images}></iamge>
     </div> 
     <div class="left"
     <h1>${title}</h1>
     <p>${price}</p>
     <button class="cart1">${button}</button>
      </div>
     </div>`
  })