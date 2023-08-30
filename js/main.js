document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById('div-ir-arriba');
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'flex';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  
  
  
  
  