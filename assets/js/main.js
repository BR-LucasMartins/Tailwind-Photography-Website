document.addEventListener('DOMContentLoaded', function () {
    
    //function to control menu burguer
    const menu = document.getElementById('menu-burguer');
    const linksMenu = document.getElementById('links-menu');

    menu.addEventListener('click', function () {
        if(menu.classList.contains('ri-menu-3-line')){
            menu.parentNode.classList.add('bg-black');
            menu.classList.remove('ri-menu-3-line');
            menu.classList.add('ri-close-fill');
            linksMenu.classList.toggle('hidden');
        }else{
            menu.parentNode.classList.remove('bg-black');
            menu.classList.remove('ri-close-fill')
            menu.classList.add('ri-menu-3-line');
            linksMenu.classList.toggle('hidden');
        }
    });


 const links = Array.from(document.querySelectorAll('.nav-link'));

links.forEach(function(link) {

  link.addEventListener('click', function(e) {
    e.preventDefault(); 

    const href = link.getAttribute('href');
    const target = document.querySelector(href);

    target.scrollIntoView({
      behavior: 'smooth'
    });

    menu.classList.remove("active");
    menu.classList.remove('ri-close-fill');
    menu.classList.add('ri-menu-3-line');
    linksMenu.classList.toggle('hidden');
    menu.parentNode.classList.remove('bg-black');
  });
});

});


const swiper = new Swiper('.swiper-recent-works', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next.work-next',
    prevEl: '.swiper-button-prev.work-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  }
});

const swiperActivities = new Swiper('.swiper-activities', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next.activities-next',
    prevEl: '.swiper-button-prev.activities-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});

const swiperTestimonials = new Swiper('.swiper-testimonials', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  initialSlide: 1,
  autoplay: {
    delay: 8000,
  },
})

var paginationItems = document.querySelectorAll('.testimonial-pagination');

  paginationItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
      swiperTestimonials.slideTo(index); // Navega para o slide correspondente
      console.log('slide numero' ,index)
    });
  });

  //quando mudar o slide
  swiperTestimonials.on('slideChange', function () {
    // Remove a classe 'active' de todos os paginations
    paginationItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Adiciona a classe 'active' ao pagination correspondente ao slide atual
    paginationItems[swiperTestimonials.realIndex].classList.add('active');

  });


  const swiperInstagram = new Swiper('.swiper-instagram', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next.instagram-next',
      prevEl: '.swiper-button-prev.instagram-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      },
    }
  });