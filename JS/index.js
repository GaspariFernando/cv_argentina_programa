
let active = false;

function moreInfo(elementId) {

    if (elementId === idBtnIfts) {
        document.getElementById('p_ifts').innerHTML = infoIfts;
        document.getElementById('p_ifts').style.display = 'block';
        document.getElementById(idBtnIfts).innerHTML = 'Menos Info';
        active = !active;
        lessInfo(elementId, active);
    } else if (elementId === idBtnArgPrograma) {
        document.getElementById('p_arg_programa').innerHTML = infoArgPrograma;
        document.getElementById('p_arg_programa').style.display = 'block';
        document.getElementById(idBtnArgPrograma).innerHTML = 'Menos Info';
        active = !active;
        lessInfo(elementId, active);
    } else if (elementId === idBtnPlatzi) {
        document.getElementById('p_platzi').innerHTML = infoPlatzi;
        document.getElementById('p_platzi').style.display = 'block';
        document.getElementById(idBtnPlatzi).innerHTML = 'Menos Info';
        active = !active;
        lessInfo(elementId, active);
    } else if (elementId === idBtnAlkemy) {
        document.getElementById('p_alkemy').innerHTML = infoAlkemy;
        document.getElementById('p_alkemy').style.display = 'block';
        document.getElementById(idBtnAlkemy).innerHTML = 'Menos Info';
        active = !active;
        lessInfo(elementId, active);
    } else if (elementId === idBtnCodo) {
        document.getElementById('p_codo').innerHTML = infoCodo;
        document.getElementById('p_codo').style.display = 'block';
        document.getElementById(idBtnCodo).innerHTML = 'Menos Info';
        active = !active;
        lessInfo(elementId, active);
    } else if (elementId === idBtnSololearn) {
        document.getElementById('p_sololearn').innerHTML = infoSololearn;
        document.getElementById('p_sololearn').style.display = 'block';
        document.getElementById(idBtnSololearn).innerHTML = 'Menos Info';
        active = !active;
        lessInfo(elementId, active);
    } else if (elementId === idBtnUnla) {
        document.getElementById('p_unla').innerHTML = infoUnla;
        document.getElementById('p_unla').style.display = 'block';
        document.getElementById(idBtnUnla).innerHTML = 'Menos Info';
        active = !active;
        lessInfo(elementId, active);
    } else if (elementId === idBtnEscuela) {
        document.getElementById('p_escuela').innerHTML = infoEscuela;
        document.getElementById('p_escuela').style.display = 'block';
        document.getElementById(idBtnEscuela).innerHTML = 'Menos Info';
        active = !active;
        lessInfo(elementId, active);
    } else {
        alert('No hay info para mostrar.');
    }

};

function lessInfo(elementId, active) {
    if (elementId === idBtnIfts && active === false) {
        document.getElementById('p_ifts').style.display = 'none';
        document.getElementById(idBtnIfts).innerHTML = 'Más Info';
        active = !active;
    } else if (elementId === idBtnArgPrograma && active === false) {
        document.getElementById('p_arg_programa').style.display = 'none';
        document.getElementById(idBtnArgPrograma).innerHTML = 'Más Info';
        active = !active;
    } else if (elementId === idBtnPlatzi && active === false) {
        document.getElementById('p_platzi').style.display = 'none';
        document.getElementById(idBtnPlatzi).innerHTML = 'Más Info';
        active = !active;
    } else if (elementId === idBtnAlkemy && active === false) {
        document.getElementById('p_alkemy').style.display = 'none';
        document.getElementById(idBtnAlkemy).innerHTML = 'Más Info';
        active = !active;
    } else if (elementId === idBtnCodo && active === false) {
        document.getElementById('p_codo').style.display = 'none';
        document.getElementById(idBtnCodo).innerHTML = 'Más Info';
        active = !active;
    } else if (elementId === idBtnSololearn && active === false) {
        document.getElementById('p_sololearn').style.display = 'none';
        document.getElementById(idBtnSololearn).innerHTML = 'Más Info';
        active = !active;
    } else if (elementId === idBtnUnla && active === false) {
        document.getElementById('p_unla').style.display = 'none';
        document.getElementById(idBtnUnla).innerHTML = 'Más Info';
        active = !active;
    } else if (elementId === idBtnEscuela && active === false) {
        document.getElementById('p_escuela').style.display = 'none';
        document.getElementById(idBtnEscuela).innerHTML = 'Más Info';
        active = !active;
    }
}