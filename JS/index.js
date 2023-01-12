

function moreInfo(elementId) {

    if (elementId === idBtnIfts) {
        document.getElementById('p_ifts').innerHTML = infoIfts;
    } else if (elementId === idBtnArgPrograma) {
        document.getElementById('p_arg_programa').innerHTML = infoArgPrograma;
    } else if (elementId === idBtnPlatzi) {
        document.getElementById('p_platzi').innerHTML = infoPlatzi;
    } else if (elementId === idBtnAlkemy) {
        document.getElementById('p_alkemy').innerHTML = infoAlkemy;
    } else if (elementId === idBtnCodo) {
        document.getElementById('p_codo').innerHTML = infoCodo;
    } else if (elementId === idBtnSololearn) {
        document.getElementById('p_sololearn').innerHTML = infoSololearn;
    } else if (elementId === idBtnUnla) {
        document.getElementById('p_unla').innerHTML = infoUnla;
    } else if (elementId === idBtnEscuela) {
        document.getElementById('p_escuela').innerHTML = infoEscuela;
    } else {
        alert('No hay info para mostrar.');
    }

};