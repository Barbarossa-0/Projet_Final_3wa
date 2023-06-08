document.addEventListener('DOMContentLoaded', function() {
    // Fonction qui demande une confirmation avant d'exécuter une action
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

    // Gestionnaire d'événement pour le bouton 'addAdmin'
    const addAdmin = document.getElementById('addAdmin');
    addAdmin.addEventListener("click", function(event) {
        const type = "ins"; // Type d'action : insertion
        const objet = "l'administrateur";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault(); // Empêche l'action par défaut si la confirmation est refusée
        }
    });

    // Gestionnaire d'événement pour le bouton 'suppAdminButt'
    const suppAdminButt = document.getElementById('suppAdminButt');
    suppAdminButt.addEventListener("click", function(event) {
        const type = "del"; // Type d'action : suppression
        const objet = "l'administrateur";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault();
        }
    });

    // Gestionnaire d'événement pour le bouton 'updQualities'
    const updQualities = document.getElementById('updQualities')
    updQualities.addEventListener("click", function(event) {
        const type = "upd"; // Type d'action : mise à jour
        const objet = "la qualité";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault();
        }
    });

    // Gestionnaire d'événement pour le bouton 'delQualities'
    const delQualities = document.getElementById('delQualities')
    delQualities.addEventListener("click", function(event) {
        const type = "del"; // Type d'action : suppression
        const objet = "la qualité";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault();
        }
    });

    // Gestionnaire d'événement pour le bouton 'addQualities'
    const addQualities = document.getElementById('addQualities')
    addQualities.addEventListener("click", function(event) {
        const type = "ins"; // Type d'action : insertion
        const objet = "la qualité";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault();
        }
    });

    // Gestionnaire d'événement pour le bouton 'updInfo'
    const updInfo = document.getElementById('updInfo')
    updInfo.addEventListener("click", function(event) {
        const type = "upd"; // Type d'action : mise à jour
        const objet = "l'information";
        const confirmed = confirmAct(type, objet);
        if (!confirmed) {
            event.preventDefault();
        }
    });

});
