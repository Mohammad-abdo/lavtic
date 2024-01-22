var menuItems = document.querySelectorAll(".menu-items");
var messegeNotic = document.querySelector(`#messeges-notic`);
var messages = document.querySelector(".messages");
var message = document.querySelectorAll(".message");
var Search = document.getElementById(`messag-search`);
var theme = document.querySelector(`#themes`);
var themeModell = document.querySelector(`.customize-theme`);
var fontSize = document.querySelectorAll(`.choose-size span`);
var root = document.querySelector(`:root`);
var changeColor = document.querySelectorAll(`.choose-color span`);
var Bg1=document.querySelector(`.bg-1`);
var Bg2 =document.querySelector(`.bg-2`);
var Bg3=document.querySelector(`.bg-3`);


var  changActiveTiem =() =>{
    menuItems.forEach(item =>{
        item.classList.remove(`active`);
    })
}

menuItems.forEach(item =>{
    item.addEventListener(`click`,() =>{
        changActiveTiem();
        item.classList.toggle(`active`);
        if(item.id != `notic`){
            document.querySelector(`.notic-popup`).
            style.display= `none`;
        }else{
           document.querySelector(`.notic-popup`).
            style.display= `block`;
            document.querySelector(`#notic .notic-count`).style.display=`none`;
        }
        
    })
})

// let name = chat.querySelectorAll(`h5`).textContent.toLowerCase();


/*================Messases============== */
var searchMesage = ()=>{
    var vall = Search.value?.toLowerCase();
    message.forEach(chat =>{
        let name = chat.textContent?.toLowerCase();
        if(name.indexOf(vall) != -1){
            chat.style.display=`flex`;
        }else{
            chat.style.display=`none`;
        }
    })
}

Search.addEventListener("keyup",searchMesage);
/*================Messases============== */

    messegeNotic.addEventListener(`click`,()=>{
        messegeNotic.querySelector(`.notic-count`).style.display=`none`;
        messages.style.boxShadow = `0 0 1rem #6c63ff`;
        setTimeout(()=>{
            messages.style.boxShadow = `none`;
        },2000)
    })
    /*============== THEMES==========*/

var openThemes= ()=>{
    themeModell.style.display=`grid`;
}
var closeThemes= (e)=>{
    if(e.target.classList.contains(`customize-theme`))
    themeModell.style.display=`none`;
}
    themeModell.addEventListener(`click`,closeThemes)
    theme.addEventListener(`click`,openThemes)

    /*============== Fonts==========*/
    var removeSizeSlectors = () =>{

        fontSize.forEach(size =>{
            size.classList.remove("active");
        })
    }
    fontSize.forEach(size =>{
      size.addEventListener(`click`,() =>{

        removeSizeSlectors();
        let fontSize;
        size.classList.toggle(`active`);

        if(size.classList.contains(`font-size-1`)){
            fontSize=`10px`
            root.style.setProperty(`--sticky-top-left`,`5.4rem`);
            root.style.setProperty(`--sticky-top-right`,`5.4rem`);
        }else if(size.classList.contains(`font-size-2`)){
            
            fontSize=`13px`
            root.style.setProperty(`----sticky-top-left`,`5.4rem`);
            root.style.setProperty(`----sticky-top-right`,`-7rem`);
        }else if(size.classList.contains(`font-size-3`)){

            fontSize=`16px`
            root.style.setProperty(`----sticky-top-left`,`-2rem`);
            root.style.setProperty(`----sticky-top-right`,`-17rem`);
        }else if(size.classList.contains(`font-size-4`)){

            fontSize=`19px`
            root.style.setProperty(`----sticky-top-left`,`-5rem`);
            root.style.setProperty(`----sticky-top-right`,`-25rem`);
        }else if(size.classList.contains(`font-size-5`)){
            fontSize=`22px`
            root.style.setProperty(`----sticky-top-left`,`-12rem`);
            root.style.setProperty(`----sticky-top-right`,`-35rem`);
        }
        document.querySelector(`html`).style.fontSize = fontSize;
      })
    })

  var changeActiveColor = () =>{
    changeColor.forEach(colorPick =>{
        colorPick.classList.remove(`active`);
    })
  }


    changeColor.forEach(color =>{
        color.addEventListener(`click`,() =>{
            let primary;
            changeActiveColor();
            if(color.classList.contains(`color-1`)){
                primaryHue=252;
            }else if(color.classList.contains(`color-2`)){
                primaryHue=52;
            }else if(color.classList.contains(`color-3`)){
                primaryHue=352;
            }else if(color.classList.contains(`color-4`)){
                primaryHue=152;
            }else if(color.classList.contains(`color-5`)){
                primaryHue=202;
            }
            color.classList.add(`active`);
            root.style.setProperty(`--primery-color-hue`, primaryHue)
        })
    })



let lightcolorlightness;
let witecolorlightness;
let darkcolorlightness;

const changeBG =()=>{
    root.style.setProperty(`--light-color-lightness`, lightcolorlightness)
    root.style.setProperty(`--wite-color-lightness`, witecolorlightness)
    root.style.setProperty(`--dark-color-lightenss`, darkcolorlightness)
}

Bg1.addEventListener(`click`,() =>{
    darkcolorlightness= `90%`;
    witecolorlightness = `90%`;
  lightcolorlightness= `17%`;

    Bg1.classList.add(`active`);
    Bg2 .classList.remove(`active`);
    Bg3.classList.remove(`active`);
    changeBG();
//    window.location.reload();
})
Bg2.addEventListener(`click`,() =>{
    darkcolorlightness= `95%`;
    witecolorlightness = `20%`;
  lightcolorlightness= `15%`;

    Bg2.classList.add(`active`);
    Bg1.classList.remove(`active`);
    Bg3.classList.remove(`active`);
    changeBG();
})
Bg3.addEventListener(`click`,() =>{
    darkcolorlightness = `95%`;
    witecolorlightness = `10%`;
   lightcolorlightness = `0%`;

    Bg3.classList.add(`active`);
    Bg1.classList.remove(`active`);
    Bg2.classList.remove(`active`);
    changeBG();
})
