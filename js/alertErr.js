document.addEventListener('DOMContentLoaded', function() {
    
    const errorData = document.querySelector('#error-data');
    if (errorData) {
        const error = errorData.getAttribute('data-error');
        alertErr(error);
    }
    function alertErr(err) {
        alert('Erreur ! :' + err );
    }
});
  