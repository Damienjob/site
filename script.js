const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelectorAll('#dots-container');
  
    // Génère les dots dans chaque slide
    slides.forEach((slide, index) => {
      const dotsDiv = slide.querySelector('.dots');
      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === index) dot.classList.add('active');
        dot.addEventListener('click', () => {
          slides.forEach(s => s.classList.remove('active'));
          slides[i].classList.add('active');
  
          document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
          slides[i].querySelectorAll('.dot')[i].classList.add('active');
        });
        dotsDiv.appendChild(dot);
      }
    });