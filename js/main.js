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
  
  //MEJORES JUEGOS DE LA ACTUALIDAD 
  const juegos = [
    { titulo: "Portal 2", descripcion: "Ver mas", imagen: "Juego1.jpg" },
    { titulo: "Forza Horizon 5", descripcion: "Ver mas", imagen: "Juego2.jpg" },
    { titulo: "Starcraft", descripcion: "Ver mas", imagen: "Juego3.jpg" },
    { titulo: "Alla Wake 2", descripcion: "Ver mas", imagen: "Juego4.jpg" },
    { titulo: "Alone in the Dark", descripcion: "Ver mas", imagen: "Juego5.jpg" },
    { titulo: "Armored Core VI: Fires of Rubicon", descripcion: "Ver mas", imagen: "Juego6.jpg" },
    { titulo: "Assassin's Creed Mirage", descripcion: "Ver mas", imagen: "Juego7.jpg" },
    { titulo: "Avatar: Frontiers of Pandora", descripcion: "Ver mas", imagen: "Juego8.jpg" },
    { titulo: "Baldur's Gate III    ", descripcion: "Ver mas", imagen: "Juego9.jpg" },
    { titulo: "Hogwarts Legacy", descripcion: "Ver mas", imagen: "Juego10.jpg" },
    // Agrega más juegos aquí
];

const juegosLista = document.getElementById("juegos-lista");

juegos.forEach(juego => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <img src="./img/videojuegos/${juego.imagen}" alt="${juego.titulo}" class="juego-imagen">
        <div class="juego-info">
            <h2 class="juego-titulo">${juego.titulo}</h2>
        </div>
        <div class="div_botton">    
            <p class="juego-descripcion">${juego.descripcion}</p>
        </div>
    `;
    juegosLista.appendChild(listItem);
});
  
  
  
  