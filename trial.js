//DOM load event


window.addEventListener("DOMContentLoaded", () => {
    
    // Background Img const

    const menuBar = document.querySelector('nav');
    menuBar.classList.add('hidden');
    const shrinkTgt = document.querySelector('#shrinkTgt');
    const body = document.querySelector('body');
    const paraList = document.querySelectorAll('.parallax');
    const spotlight = document.querySelector('.spotlight');
    let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

    
    
    window.addEventListener('scroll', function(){
        if( body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            shrinkTgt.classList.add('shrink');
            menuBar.classList.add('shrinkBg');
        }
        else{
            shrinkTgt.classList.remove('shrink');
            menuBar.classList.remove('shrinkBg');
        }
    });



    window.addEventListener('mousemove', e => updateSpotlight(e));    

    window.addEventListener('mousedown', e => {
        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
        updateSpotlight(e)
        setTimeout(removeComp, 300);
        changeBgImg(e);
        // showLogo(e);
    });


    var bgImgSplite = document.querySelector('.preloader_spotLight');
    
    let bgImgBefore = document.querySelector('.preloader_bgImg_before');
    let bgImgAfter = document.querySelector('.preloader_bgImg_after');
    let scroller = document.querySelector('.scroller');


    const parallax = document.querySelector('.parallax');

    // window.addEventListener("scroll", function)

    // Function Parts

    // track spotling and focus
    function updateSpotlight(e) {
        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }

    // remove spotlight
    function removeComp(e){
        bgImgSplite.innerHTML = "";
        let cnt;
        menuBar.classList.remove('hidden');
        for(cnt = 0; cnt < paraList.length; cnt++){
            paraList[cnt].classList.remove('hidden');
        }
        
    }

    
    // new Img
    function changeBgImg(e){ 
        // bright Img show up
        bgImgAfter.classList.remove('hidden');

        // darker Img gone
        // bgImgBox.removeChild(bgImgBefore);
        bgImgBefore.classList.add('hidden');

        window.addEventListener('click', function(e){
            let logoText = document.querySelector('.logoText');
            logoText.classList.remove('txtHidden');
            blink(e);

        })
    }


    // let logoText = documnet.querySelector('.logoText');
    // doesn't work kill me
    // function showLogo(e){
    //     window.addEventListener('click', e =>{
    //         logoText.classList.remove('hidden');
    //         logoText.classList.remove('txtHidden');
    //         blink(e);
    //     });
    // }

    function blink(){
        let tgt = document.querySelectorAll('.blinkTgt');
        // parallax.classList.remove('hidden');
        for(let i = 0; i < tgt.length; i++){
            tgt[i].classList.add('blink');
        }
    }

    
    ///////////////////////////////////////////////////////

  
    // $('#start').click(function() {
    //     $('#prBar').animate({
    //       width: "+=200px"
    //     });
    //   });
      
    //   $('#reset').click(function() {
    //     $('.progress-bar').css('width','0')
    //   });
    

    
    const stBtn = document.getElementById('start');
    const rsBtn = document.getElementById('reset');
    const prBar = document.getElementById('prBar');
    
    stBtn.addEventListener('click', prMove);
    
    function prMove(){
        let prWidth = prBar.offsetWidth;
        let msg = document.getElementById('msg');
        switch(prWidth){
            case 0:
            prBar.style.width = "100px";
            msg.innerHTML = "in 2 years";
            msg.innerHTML += "<br>";
            msg.innerHTML += "Be an efficient and productive employee";
            msg.innerHTML += "<br>";
            msg.innerHTML += "Get an ambitious employee and promoted";
            
            break;
            
            case 100:
            prBar.style.width = "200px";
            msg.innerHTML = "in another 2 years";
            msg.innerHTML += "<br>";
            msg.innerHTML += "To get a further degree in Statistics or Deep Learning";
            msg.innerHTML += "<br>";
            msg.innerHTML += "To publish papers in ML/DNN and make myself an awesome brand";

            break;
            case 200:
            prBar.style.width = "300px";
            msg.innerHTML = "Love myself"
            msg.innerHTML += "<br>";
            msg.innerHTML += "Respect myself";
            msg.innerHTML += "<br>";
            msg.innerHTML += "then, willing to love somebody";

            break;

            case 300:
            prBar.style.width = "400px";
            msg.innerHTML = "To do my own business "
            msg.innerHTML += "<br>";
            msg.innerHTML += "To publish books";
            msg.innerHTML += "<br>";
            msg.innerHTML += "To publish quality papers";
            msg.innerHTML += "<br>";
            msg.innerHTML += "Successful in financial invesments";
            msg.innerHTML += "<br>";
            msg.innerHTML += "Practively engage in community";

            break;

            case 400:
            prBar.style.width = "500px";
            msg.innerHTML = "Be THE greatest Daughter";
            msg.innerHTML += "<br>";
            msg.innerHTML += "Be THE coolest friend";
            msg.innerHTML += "<br>";
            msg.innerHTML += "Be THE irreplaceable Partner";
            msg.innerHTML += "<br>";
            msg.innerHTML += "BE MYSELF";

            break;
        }

    }

    rsBtn.addEventListener('click', resetPr);
    
    function resetPr(){
        let msg = document.getElementById('msg');
        prBar.style.width = '0px';
        msg.innerHTML = "Pretty Cool, isn't it?";
    }


    const dpTable = document.querySelectorAll('.dpTable.row');
    const imgBtn = document.querySelectorAll('.imgBox.column');
    

    for(let idx = 0; 0 <imgBtn.length; idx++){
        console.log(imgBtn.length);
        imgBtn[idx].addEventListener('click', function(e){
            console.log(imgBtn[idx]);
            if(idx==0){
                dpTable[0].classList.remove('hidden');
                dpTable[1].classList.add('hidden');
                dpTable[2].classList.add('hidden');
                dpTable[3].classList.add('hidden');
                dpTable[4].classList.add('hidden');
            }
            else if(idx == 1){
                dpTable[1].classList.remove('hidden');
                dpTable[0].classList.add('hidden');
                dpTable[2].classList.add('hidden');
                dpTable[3].classList.add('hidden');
                dpTable[4].classList.add('hidden');

            }
            else if(idx == 2){
                dpTable[2].classList.remove('hidden');
                dpTable[1].classList.add('hidden');
                dpTable[0].classList.add('hidden');
                dpTable[3].classList.add('hidden');
                dpTable[4].classList.add('hidden');

            }
            else if(idx == 3){
                dpTable[3].classList.remove('hidden');
                dpTable[1].classList.add('hidden');
                dpTable[2].classList.add('hidden');
                dpTable[0].classList.add('hidden');
                dpTable[4].classList.add('hidden');

            }
            else if(idx == 4){
                dpTable[4].classList.remove('hidden');
                dpTable[1].classList.add('hidden');
                dpTable[2].classList.add('hidden');
                dpTable[3].classList.add('hidden');
                dpTable[0].classList.add('hidden');
            }
        });
    }




});   





