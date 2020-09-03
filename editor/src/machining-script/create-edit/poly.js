$('#inputErrorWPoly').hide();
$('#inputErrorHPoly').hide();
setTimeout(function() { $('#newWidthPoly').focus(); }, 100);

//buscar el cuadrante de manera ordenada que queda disponible para seleccionar, si no consigue por defecto selecciona el primero
/*var notUsed = $('img[src$="pocket_not_use.png"]').prev();
var notUsedValue = 5;
for (let ii = 0; ii < notUsed.length; ii++) {
    const element = notUsed[ii];
    if (parseInt(element.getAttribute("value")) < notUsedValue) {
        notUsedValue = parseInt(element.getAttribute("value"));
    }
}

$(':input[value="' + notUsedValue + '"]').trigger('click');*/


$('#dialog_container_custom').keyup(function(e) {
    if (e.ctrlKey && e.keyCode == 49) //press 1 for select quadrant 1
        $('input[name="cornerPoly"]:nth(1)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 50) //press 2 for select quadrant 2
        $('input[name="cornerPoly"]:nth(3)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 51) //press 3 for select quadrant 3
        $('input[name="cornerPoly"]:nth(2)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 52) //press 4 for select quadrant 4
        $('input[name="cornerPoly"]:nth(0)').prop("checked", true);

    if (e.keyCode == 27) //press escape to close
        $('#buttonDialogCancel').trigger('click');

    $('#buttonDialogOK').one('keyup', function(e) {
        if (e.keyCode == 32) //press spacebar to submit form
            $('#buttonDialogOK').trigger('click');
    });
});
