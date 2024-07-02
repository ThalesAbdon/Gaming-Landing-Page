document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  const slides = document.querySelectorAll('.slide-box');
  const radios = document.querySelectorAll('input[name="btn-radio"]');
  const gameInput = document.getElementById('gameInput');
  const searchIcon = document.getElementById('searchIcon');
  let currentSlide = 0;
  let slideInterval;

  const showSlide = () => {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });

    radios.forEach((radio, index) => {
      radio.checked = (index === currentSlide);
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  };

  slideInterval = setInterval(nextSlide, 1000); 
  
  prevButton.addEventListener('click', function() {
    clearInterval(slideInterval); 
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
  });

  nextButton.addEventListener('click', function() {
    clearInterval(slideInterval); 
    nextSlide();
  });


  document.addEventListener('keydown', function(event) {
    clearInterval(slideInterval);
    if (event.key === 'ArrowLeft') {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  });

  const navigateToSlide = () => {
    const searchTerm = gameInput.value.toLowerCase().trim();
    let foundIndex = -1;

    slides.forEach((slide, index) => {
      const title = slide.querySelector('h1').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        foundIndex = index;
      }
    });

    if (foundIndex !== -1) {
      currentSlide = foundIndex;
      showSlide();
    } else {
      alert('Slide não encontrado!');
    }

    gameInput.value = '';
  };

  searchIcon.addEventListener('click', navigateToSlide);

  gameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      navigateToSlide();
    }
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const openEmailModalBtn = document.getElementById('openEmailModal');
  const emailModal = document.getElementById('emailModal');
  const closeEmailModalBtn = emailModal.querySelector('.close');
  const emailForm = document.getElementById('emailForm');

  
  openEmailModalBtn.addEventListener('click', function () {
    emailModal.style.display = 'block';
  });

  
  closeEmailModalBtn.addEventListener('click', function () {
    emailModal.style.display = 'none';
  });

  
  window.addEventListener('click', function (event) {
    if (event.target === emailModal) {
      emailModal.style.display = 'none';
    }
  });

  
  emailForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    alert('Email enviado com sucesso!');
    emailModal.style.display = 'none'; 
    emailForm.reset(); 
  });
});

