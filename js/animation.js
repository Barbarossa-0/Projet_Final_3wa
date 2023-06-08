document.addEventListener('DOMContentLoaded', function() {
  // Sélectionne la liste des réseaux sociaux
  let socialList = document.getElementById('reseaux-social');

  // Sélectionne tous les éléments li de la liste des réseaux sociaux
  let socialItems = socialList.getElementsByTagName('li'); 

  // Sélectionne le lien du menu
  let linkMenu = document.getElementById('linkMenu');

  // Connaitre l'élément actuel dans la liste
  let currentItem = 0; 

  // Le timer
  let timer; 

  // Ajoute le premier élément de la liste à la fin de la liste
  socialList.appendChild(socialItems[currentItem]); 

  // Incrémente l'indice de l'élément actuel pour le suivant dans la liste en boucle
  currentItem = (currentItem + 1) % socialItems.length; 

  function startLoop() {
    // Ajoute l'élément suivant à la fin de la liste
    socialList.appendChild(socialItems[currentItem]); 
    // Incrémente l'indice de l'élément actuel pour le suivant dans la liste en boucle
    currentItem = (currentItem + 1) % socialItems.length; 
    // Ajoute la classe à l'élément actuel pour appliquer un l'effet
    socialItems[currentItem].classList.add('transition-effect'); 
  }

  function stopLoop() {
    // Arrête la boucle
    clearInterval(timer); 
  }

  // Démarre la boucle en appelant la fonction startLoop toutes les 500 millisecondes
  timer = setInterval(startLoop, 500); 

  socialList.addEventListener('mouseenter', () => {
    // Arrête la boucle lorsque la souris entre dans la liste des réseaux sociaux
    stopLoop(); 
    // Supprime la classe 'transition-effect' de tous les éléments de la liste
    socialItems.classList.remove('transition-effect'); 
  });

  // Redémarre la boucle lorsque la souris quitte la liste des réseaux sociaux
  socialList.addEventListener('mouseleave', () => {
    timer = setInterval(startLoop, 500); 
  });

});
