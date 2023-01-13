function moreInfo(elementId) {

    if (!info.get(elementId)) {
        alert('No hay info para mostrar.');
        return;
    }

    let paragraph = document.getElementById(getParagraph(elementId));
    let button = document.getElementById(elementId);

    paragraph.innerHTML = info.get(elementId);

    let isActive = paragraphIsActive(paragraph);

    paragraph.classList.toggle('active', isActive);
    button.innerHTML = (isActive) ? 'Menos Info' : 'Más Info';
}

function getParagraph(elementId) {
    elementId = elementId.substring(3);
    return 'p' + elementId;
}

function paragraphIsActive(paragraph) {
    return !paragraph.classList.contains('active');
}