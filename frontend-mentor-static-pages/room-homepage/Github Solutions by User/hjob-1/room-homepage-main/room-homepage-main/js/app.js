const images=document.querySelector(".image-holder");
const heading=document.querySelector(".heading");
const paragraph=document.querySelector(".paragraph");
const btns=document.querySelectorAll(".btn");
const toggle=document.querySelector(".toggle-btn");
const slider=document.querySelector(".slider-menu");
const close1=document.querySelector(".close-btn");
let counter=0;
const roomInfoM=[

    {
        image: "images/mobile-image-hero-1.jpg",
        header:"Discover innovative ways to decorate",
        para:`We provide unmatched quality, comfort, and style for property owners across the country Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love`,
        },
        {
        image:"images/mobile-image-hero-2.jpg",
        header:" We are available all across the globe",
        para:"With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        
        },
        {
        
            image:"images/mobile-image-hero-3.jpg",
            header:"Manufactured with the best materials",
            para:" Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        },

]
const roomInfoD=[
{
image: "images/desktop-image-hero-1.jpg",
header:"Discover innovative ways to decorate",
para:`We provide unmatched quality, comfort, and style for property owners across the country Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love`,
},
{
image:"images/desktop-image-hero-2.jpg",
header:" We are available all across the globe",
para:"With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",

},
{

    image:"images/desktop-image-hero-3.jpg",
    header:"Manufactured with the best materials",
    para:" Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
},

];

       close1.addEventListener('click',function(){
            slider.classList.remove("showMenu");
                                     })
       toggle.addEventListener('click' ,function(){
           slider.classList.toggle("showMenu");
                                     })


function show4Desktop(count)
                          {
     images.src=roomInfoD[count].image;
     heading.textContent=roomInfoD[count].header;
     paragraph.textContent=roomInfoD[count].para;
                          }

 function show4Mobile(count)
                        {
    images.src=roomInfoM[count].image;
    heading.textContent=roomInfoM[count].header;
    paragraph.textContent=roomInfoM[count].para;
                        }

   btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const hasA=e.currentTarget.classList;
      
       console.log(hasA[1]);

       switch(hasA[1])
       
       {
         case "nextbtn":
         {
            counter++;
            if(counter>=roomInfoD.length){
                counter=0;
            }
            show4Desktop(counter);
            break;
        }
        case "prevbtn":
            {
                counter--;
                if(counter<0){
                    counter=roomInfoD.length-1;
                }
                show4Desktop(counter); 
                break;
            }
        case "nextbtn1":
            {
                counter++;
                if(counter>=roomInfoM.length){
                    counter=0;
                }
               show4Mobile(counter);
               break;
            } 
        case "prevbtn1":
            {

                counter--;
                if(counter<0){
                    counter=roomInfoM.length-1;
                }
                show4Mobile(counter);
                break;

        } 

        }

        
    })
});