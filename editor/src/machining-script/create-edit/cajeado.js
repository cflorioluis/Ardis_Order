$('#inputErrorWCajeado').hide();
$('#inputErrorHCajeado').hide();
$('#inputErrorRCajeado').hide();
setTimeout(function() { $('#newWidthCajeado').focus(); }, 100);


function getSyncScriptParams() {
    var scripts = document.getElementById('scriptCajeado');
    return {
        side: scripts.getAttribute('side'),
        face: scripts.getAttribute('face')
    };
}
var side = getSyncScriptParams().side;
var face = getSyncScriptParams().face;

if (side != "") {
    $(':input[value="' + side + '"][face="' + face + '"]').trigger('click');

} else {
    //buscar el cuadrante de manera ordenada que queda disponible para seleccionar, si no consigue por defecto selecciona el primero
    var notUsed = $('img[src$="cajeado_not_use.png"]').prev();
    var notUsedValue = 5;
    var facenotUsed;
    for (let ii = 0; ii < notUsed.length; ii++) {
        const element = notUsed[ii];
        if (parseInt(element.getAttribute("value")) < notUsedValue) {
            notUsedValue = parseInt(element.getAttribute("value"));
            facenotUsed = element.getAttribute("face");
        }
    }

    $(':input[value="' + notUsedValue + '"][face="' + facenotUsed + '"]').trigger('click');
}

$('#dialog_container_custom').keyup(function(e) {
    if (e.ctrlKey && e.keyCode == 49) //press 1 for select cuadrant 1
        $('input[name="corner"]:nth(1)').trigger('click');

    if (e.ctrlKey && e.keyCode == 50) //press 2 for select cuadrant 2
        $('input[name="corner"]:nth(3)').trigger('click');

    if (e.ctrlKey && e.keyCode == 51) //press 3 for select cuadrant 3
        $('input[name="corner"]:nth(2)').trigger('click');

    if (e.ctrlKey && e.keyCode == 52) //press 4 for select cuadrant 4
        $('input[name="corner"]:nth(0)').trigger('click');

    if (e.keyCode == 27) //press escape to close
        $('#buttonDialogCancel').trigger('click');

    $('#buttonDialogOK').one('keyup', function(e) {
        if (e.keyCode == 32) //press spacebar to submit form
            $('#buttonDialogOK').trigger('click');
    });
});
