document.addEventListener('DOMContentLoaded', function() {

    var timer = 1050

    var icone_carre_vrd = document.getElementById('icone_carre_vrd');

    icone_carre_vrd.addEventListener('mouseenter', () => { 
        icone_carre_vrd.classList.add('icone_animation');
        //setInterval(icone_carre_vrd.classList.remove('icone_animation'), 1500);
    });
    icone_carre_vrd.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_vrd.classList.remove('icone_animation');
        }, timer);
    });

    var icone_carre_assainissement = document.getElementById('icone_carre_assainissement');

    icone_carre_assainissement.addEventListener('mouseenter', () => { 
        icone_carre_assainissement.classList.add('icone_animation');
    });
    icone_carre_assainissement.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_assainissement.classList.remove('icone_animation');
        }, timer);
    });

    var icone_carre_demolition_terrassement = document.getElementById('icone_carre_demolition_terrassement');

    icone_carre_demolition_terrassement.addEventListener('mouseenter', () => { 
        icone_carre_demolition_terrassement.classList.add('icone_animation');
    });
    icone_carre_demolition_terrassement.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_demolition_terrassement.classList.remove('icone_animation');
        }, timer);
    });

    var icone_carre_amenagement_ext = document.getElementById('icone_carre_amenagement_ext');

    icone_carre_amenagement_ext.addEventListener('mouseenter', () => { 
        icone_carre_amenagement_ext.classList.add('icone_animation');
    });
    icone_carre_amenagement_ext.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_amenagement_ext.classList.remove('icone_animation');
        }, timer);
    });

    var icone_carre_location_chauffeur = document.getElementById('icone_carre_location_chauffeur');

    icone_carre_location_chauffeur.addEventListener('mouseenter', () => { 
        icone_carre_location_chauffeur.classList.add('icone_animation');
    });
    icone_carre_location_chauffeur.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_location_chauffeur.classList.remove('icone_animation');
        }, timer);
    });

    var icone_carre_canon_brumisateur = document.getElementById('icone_carre_canon_brumisateur');

    icone_carre_canon_brumisateur.addEventListener('mouseenter', () => { 
        icone_carre_canon_brumisateur.classList.add('icone_animation');
    });
    icone_carre_canon_brumisateur.addEventListener('mouseleave', () => {
        setTimeout(() => {
            icone_carre_canon_brumisateur.classList.remove('icone_animation');
        }, timer);
    });

});


