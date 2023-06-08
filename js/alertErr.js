document.addEventListener('DOMContentLoaded', function() {

    // Sélectionne l'élément avec l'ID 'error-data'
    const errorData = document.querySelector('#error-data'); 
    if (errorData) {
        // Récupère la valeur de l'attribut 'data-error'
        const error = errorData.getAttribute('data-error'); 
        // Appelle la fonction alertErr avec l'erreur en paramètre
        alertErr(error); 
    }

    function alertErr(err) {
        alert('Erreur ! : ' + err); // Affiche une boîte de dialogue avec le message d'erreur
    }
});


  