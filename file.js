
// sript for profile drop down
 const button = document.getElementById("btn");
 const list = document.getElementById("list");

   list.style.display="none";

   button.addEventListener("click", (event) =>
   {
     if(list.style.display=="none"){
       list.style.display="block"
     }else{
       list.style.display="none";
     }
    })
    // end 




    
$('.add-to-cart').on('click', function () {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent('.item').find("img").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        })
            .css({
            'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
        })
            .appendTo($('body'))
            .animate({
            'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
        }, 1000, 'easeInOutExpo');
        
        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
                'height': 0
        }, function () {
            $(this).detach()
        });
    }
});    



    



  
    window.onscroll = function() {myFunction()};
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    
    var slideIndex,slides,dots,captionText;
    function initGallery(){
        slideIndex = 0;
        slides=document.getElementsByClassName("imageHolder");
        slides[slideIndex].style.opacity=1;
    
        captionText=document.querySelector(".captionTextHolder .captionText");
        captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;
    
        //disable nextPrevBtn if slide count is one
        if(slides.length<2){
            var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
            nextPrevBtns.style.display="none";
            for (i = 0; i < nextPrevBtn.length; i++) {
                nextPrevBtn[i].style.display="none";
            }
        }
    
        //add dots
        dots=[];
        var dotsContainer=document.getElementById("dotsContainer"),i;
        for (i = 0; i < slides.length; i++) {
            var dot=document.createElement("span");
            dot.classList.add("dots");
            dotsContainer.append(dot);
            dot.setAttribute("onclick","moveSlide("+i+")");
            dots.push(dot);
        }
        dots[slideIndex].classList.add("active");
    }
    initGallery();
    function plusSlides(n) {
        moveSlide(slideIndex+n);
    }
    function moveSlide(n){
        var i;
        var current,next;
        var moveSlideAnimClass={
              forCurrent:"",
              forNext:""
        };
        var slideTextAnimClass;
        if(n>slideIndex) {
            if(n >= slides.length){n=0;}
            moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
            moveSlideAnimClass.forNext="moveLeftNextSlide";
            slideTextAnimClass="slideTextFromTop";
        }else if(n<slideIndex){
            if(n<0){n=slides.length-1;}
            moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
            moveSlideAnimClass.forNext="moveRightPrevSlide";
            slideTextAnimClass="slideTextFromBottom";
        }
    
        if(n!=slideIndex){
            next = slides[n];
            current=slides[slideIndex];
            for (i = 0; i < slides.length; i++) {
                slides[i].className = "imageHolder";
                slides[i].style.opacity=0;
                dots[i].classList.remove("active");
            }
            current.classList.add(moveSlideAnimClass.forCurrent);
            next.classList.add(moveSlideAnimClass.forNext);
            dots[n].classList.add("active");
            slideIndex=n;
            captionText.style.display="none";
            captionText.className="captionText "+slideTextAnimClass;
            captionText.innerText=slides[n].querySelector(".captionText").innerText;
            captionText.style.display="block";
        }
    
    }
    var timer=null;
    function setTimer(){
        timer=setInterval(function () {
            plusSlides(1) ;
        },3000);
    }
    setTimer();
    function playPauseSlides() {
        var playPauseBtn=document.getElementById("playPause");
        if(timer==null){
            setTimer();
            playPauseBtn.style.backgroundPositionY="0px"
        }else{
            clearInterval(timer);
            timer=null;
            playPauseBtn.style.backgroundPositionY="-33px"
        }
    }


//box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.10), 0 10px 20px 0 rgba(0, 0, 0, 0.10);



