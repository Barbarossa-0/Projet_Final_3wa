document.addEventListener('DOMContentLoaded', function() {

    

    function confirmAct(type, objet) {
        if (type === "ins" || type === "upd" || type === "del") {
            if (type === "ins") {
                return confirm("Êtes-vous sûr de vouloir insérer " + objet + " ?");
            } else if (type === "upd") {
                return confirm("Êtes-vous sûr de vouloir mettre à jour " + objet + " ?");
            } else if (type === "del") {
                return confirm("Êtes-vous sûr de vouloir supprimer " + objet + " ?");
            }
        }
        return false;
    }

    const addAdmin = document.getElementById('addAdmin');
    addAdmin.addEventListener("click", function(event) {
        const type = "ins";
        const objet = "l'administrateur";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault(); // Arrête l'envoi de la requête du formulaire
        }
    });

    const suppAdminButt = document.getElementById('suppAdminButt');
    suppAdminButt.addEventListener("click", function(event) {
        const type = "del";
        const objet = "l'administrateur";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault(); // Arrête l'envoi de la requête du formulaire
        }
    });
    const updQualities = document.getElementById('updQualities')
    updQualities.addEventListener("click", function(event) {
        const type = "upd";
        const objet = "la qualité";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault(); // Arrête l'envoi de la requête du formulaire
        }
    });

    const delQualities = document.getElementById('delQualities')
    delQualities.addEventListener("click", function(event) {
        const type = "del";
        const objet = "la qualité";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault(); // Arrête l'envoi de la requête du formulaire
        }
    });

    const addQualities = document.getElementById('addQualities')
    addQualities.addEventListener("click", function(event) {
        const type = "ins";
        const objet = "la qualité";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault(); // Arrête l'envoi de la requête du formulaire
        }
    });

    const updInfo = document.getElementById('updInfo')
    updInfo.addEventListener("click", function(event) {
        const type = "upd";
        const objet = "l'information";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault(); // Arrête l'envoi de la requête du formulaire
        }
    });

});