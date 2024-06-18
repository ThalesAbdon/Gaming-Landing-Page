document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const gameInput = document.getElementById('gameInput');
  const searchIcon = document.getElementById('searchIcon');

 
  gameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const searchGame = gameInput.value.trim().toUpperCase();
      
      switch (searchGame) {
        case 'MARIO':
          swiper.slideTo(0); 
          break;
        case 'POKEMON':
          swiper.slideTo(1); 
          break;
        case 'ZELDA':
          swiper.slideTo(2); 
          break;
        default:
          alert('Jogo não encontrado.');
          break;
      }

      gameInput.value = '';
    }
  });

  
    searchIcon.addEventListener('click', function () {
    const searchGame = gameInput.value.trim().toUpperCase();

    switch (searchGame) {
      case 'MARIO':
        swiper.slideTo(0); 
        break;
      case 'POKEMON':
        swiper.slideTo(1); 
        break;
      case 'ZELDA':
        swiper.slideTo(2); 
        break;
      default:
        alert('Jogo não encontrado.');
        break;
    }

    gameInput.value = '';
  });
});
