document.addEventListener('DOMContentLoaded', function() {
    var acceptButton = document.getElementById('accept-cookies');
    acceptButton.addEventListener('click', function() {
      // Effectuer une requête AJAX pour envoyer la demande d'acceptation des cookies au serveur
      fetch('/accept-cookies', {
        method: 'GET',
      })
      .then(function(res) {
        // Recharger la page une fois la demande traitée côté serveur
        location.reload();
      })
      .catch(function(error) {
        console.log(error);
      });
    });
  });