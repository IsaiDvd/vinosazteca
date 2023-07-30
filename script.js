const productImages = document.querySelectorAll('#vinos img');

// Agregar el evento de mouseover a cada imagen
productImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
  });

  // Agregar el evento de mouseout para volver al tamaño original
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});
