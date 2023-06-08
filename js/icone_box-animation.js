document.addEventListener('DOMContentLoaded', function() {

    // Déclaration du délai en millisecondes
    var timer = 1050; 

    // Éléments icone vrd
    var icone_carre_vrd = document.getElementById('icone_carre_vrd');

    icone_carre_vrd.addEventListener('mouseenter', () => { 
        icone_carre_vrd.classList.add('icone_animation'); // Ajoute la classe 'icone_animation' à l'élément lorsqu'il est survolé
    });
    icone_carre_vrd.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_vrd.classList.remove('icone_animation'); // Supprime la classe 'icone_animation' après le délai spécifié
        }, timer);
    });

    // Éléments icone assainissement
    var icone_carre_assainissement = document.getElementById('icone_carre_assainissement');

    icone_carre_assainissement.addEventListener('mouseenter', () => { 
        icone_carre_assainissement.classList.add('icone_animation'); // Ajoute la classe 'icone_animation' à l'élément lorsqu'il est survolé
    });
    icone_carre_assainissement.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_assainissement.classList.remove('icone_animation'); // Supprime la classe 'icone_animation' après le délai spécifié
        }, timer);
    });

    // Éléments icone demolition_terrassement
    var icone_carre_demolition_terrassement = document.getElementById('icone_carre_demolition_terrassement');

    icone_carre_demolition_terrassement.addEventListener('mouseenter', () => { 
        icone_carre_demolition_terrassement.classList.add('icone_animation'); // Ajoute la classe 'icone_animation' à l'élément lorsqu'il est survolé
    });
    icone_carre_demolition_terrassement.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_demolition_terrassement.classList.remove('icone_animation'); // Supprime la classe 'icone_animation' après le délai spécifié
        }, timer);
    });

    // Éléments icone amenagement_ext
    var icone_carre_amenagement_ext = document.getElementById('icone_carre_amenagement_ext');

    icone_carre_amenagement_ext.addEventListener('mouseenter', () => { 
        icone_carre_amenagement_ext.classList.add('icone_animation'); // Ajoute la classe 'icone_animation' à l'élément lorsqu'il est survolé
    });
    icone_carre_amenagement_ext.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_amenagement_ext.classList.remove('icone_animation'); // Supprime la classe 'icone_animation' après le délai spécifié
        }, timer);
    });

    // Éléments icone location_chauffeur
    var icone_carre_location_chauffeur = document.getElementById('icone_carre_location_chauffeur');

    icone_carre_location_chauffeur.addEventListener('mouseenter', () => { 
        icone_carre_location_chauffeur.classList.add('icone_animation'); // Ajoute la classe 'icone_animation' à l'élément lorsqu'il est survolé
    });
    icone_carre_location_chauffeur.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_location_chauffeur.classList.remove('icone_animation'); // Supprime la classe 'icone_animation' après le délai spécifié
        }, timer);
    });

    // Éléments icone canon_brumisateur
    var icone_carre_canon_brumisateur = document.getElementById('icone_carre_canon_brumisateur');

    icone_carre_canon_brumisateur.addEventListener('mouseenter', () => { 
        icone_carre_canon_brumisateur.classList.add('icone_animation'); // Ajoute la classe 'icone_animation' à l'élément lorsqu'il est survolé
    });
    icone_carre_canon_brumisateur.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_canon_brumisateur.classList.remove('icone_animation'); // Supprime la classe 'icone_animation' après le délai spécifié
        }, timer);
    });

});
