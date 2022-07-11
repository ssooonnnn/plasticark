$(document).ready(function(){
  // aos
  AOS.init();
  // 배너스와이퍼
    var swiper = new Swiper(".mySwiper", {
        effect:"fade",
        loop:true,
        autoplay: {
          delay:3000
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      });
      
  //모바일 슬라이드메뉴
  $('#hamburger').click(function(){
    $(this).children().toggleClass('active');
    $('.menu-slide').toggleClass('active');
  });
  // sec-1 헤더 스크롤    
  $(window).scroll(function(){
      const sct =$(window).scrollTop();
      console.log(sct); 
      if(sct >= 803){
        $('.gnb').addClass('active');
      
      }else if(sct < 803){
        $('.gnb').removeClass('active');
      }
  });
  // sec-2 페럴렉스
  $(window).width(function(){
    const ww = $(window).width();
    console.log(ww);
    if(ww >= 1296){
      let controller = new ScrollMagic.Controller();
      let timeline = new TimelineMax();
      
      timeline
      .to(".img3", 200, { y: -1000})
      .fromTo(".img3", { opacity: 1 }, { opacity: 0, duration: 50 })

      .to(".img4", 100, { y: -1500})
      .fromTo(".img4", { opacity: 1 }, { opacity: 0, duration: 50 })

      .to(".img5", 100, { y: -1500})
      .fromTo(".img5", { opacity: 1 }, { opacity: 0, duration: 20 })

      .to(".img6", 100, { y: -1500})
      .fromTo(".img6", { opacity: 1 }, { opacity: 0, duration: 20 })

      .to(".img1", 100, { y: -1500 })
      .fromTo(".img1", { opacity: 1 }, { opacity: 0, duration: 50 })

      .to(".img2", 100, { y: -1500 })
      .fromTo(".img2", { opacity: 1 }, { opacity: 0, duration: 50})

      .fromTo(".bg1", { y: -30 }, { y: 0, duration: 50 }, "-=10")
      .to(".pop", 100, { top: "0%" }, "-=10")
      
      let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration: "300%",
        triggerHook: 0,
      })
        .setTween(timeline)
        .setPin("section")
        // 아이템들이 움직이는 고정점(섹션)
      
        .addTo(controller)

    }
  });
  
});