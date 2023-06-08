document.addEventListener('DOMContentLoaded', function() {

  // Bouton d'acceptation des cookies
  var acceptButton = document.getElementById('accept-cookies'); 

  // Ajoute un écouteur d'événement pour le clic sur le bouton
  acceptButton.addEventListener('click', function() { 
    // Effectue une requête GET
    fetch('/accept-cookies', { 
      method: 'GET',
    })
    .then(function(res) { // Gère la réponse 
      location.reload(); // Recharge la page pour appliquer les modifications suite à l'acceptation des cookies
    })
    .catch(function(error) { // Gère les erreurs 
      console.log(error);
    });
  });
});
