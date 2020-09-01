$('#dialog_container_custom').off('keyup');

$('#inputErrorRealXRect').hide();
$('#inputErrorRealYRect').hide();
$('#inputErrorWRect').hide();
$('#inputErrorHRect').hide();
setTimeout(function() { $('#newXRect').focus(); }, 100);

//cambiar cara al hacer click en el radio button de la cara
$('#mainFace').click(function() {

    var rotation = (parseInt($(this).attr("rotation")) + 180) % 360

    $('#mainFace').next().css("transition", "0.6s")
    $('#mainFace').next().css("transform-style", "preserve-3d")
    $('#mainFace').next().css("position", "relative")

    switch ($('#mainFace').next().attr("src")) {
        case "images/drill/main_face.png":
            $('#mainFace').next().css("transform", "rotateX(" + rotation + "deg)")
            $('#mainFace').next().attr("src", "images/drill/back_face180.png")
            break;
        case "images/drill/back_face.png":
            $('#mainFace').next().css("transform", "rotateX(" + rotation + "deg)")
            $('#mainFace').next().attr("src", "images/drill/main_face180.png")
            break;
        case "images/drill/main_face180.png":

            $('#mainFace').next().css("transform", "rotateX(" + rotation + "deg)")
            $('#mainFace').next().attr("src", "images/drill/back_face.png")
            break;
        case "images/drill/back_face180.png":

            $('#mainFace').next().css("transform", "rotateX(" + rotation + "deg)")
            $('#mainFace').next().attr("src", "images/drill/main_face.png")
            break;
    }
    $(this).attr("rotation", rotation)
    $(this).val((parseInt($(this).val()) + 5) % 10)
    svgCanvas.editDrill('face', $(this).val(), $('input[name="cuadrant"]:checked').val());
});

$('#rectPositionCenter').click(function() {
    svgCanvas.editRect('isCenter', $(this).is(':checked'));
});

$("#newXRect").change(function() {
    svgCanvas.editRect('newXRect', this.value, $('input[name="cuadrant"]:checked').val());
});
$("#newYRect").change(function() {
    svgCanvas.editRect('newYRect', this.value, $('input[name="cuadrant"]:checked').val());
});
$("#newWidthRect").change(function() {
    svgCanvas.editRect('newWidthRect', this.value, $('input[name="cuadrant"]:checked').val());
});
$("#newHeightRect").change(function() {
    svgCanvas.editRect('newHeightRect', this.value, $('input[name="cuadrant"]:checked').val());
});

$('input[name="cuadrant"]').click(function() {
    svgCanvas.editRect('cuadrant', $(this).val());
});

$('#rectPositionCenter').keyup(function(e) {
    switch (e.keyCode) {
        case 32: // If spacebar fired the event
            svgCanvas.editRect('isCenter', !$(this).is(':checked'));
            this.checked = !this.checked;
            break;
        case 9:
            if ($(this).is(':checked'))
                $('#dialog_buttons_custom:nth-child(2)').focus();
            break;
    }
});

$('#dialog_container_custom').keyup(function(e) {
    if (e.ctrlKey && e.keyCode == 49) //press 1 for select cuadrant 1
        $('input[name="cuadrant"]:nth(1)').trigger('click');

    if (e.ctrlKey && e.keyCode == 50) //press 2 for select cuadrant 2
        $('input[name="cuadrant"]:nth(3)').trigger('click');

    if (e.ctrlKey && e.keyCode == 51) //press 3 for select cuadrant 3
        $('input[name="cuadrant"]:nth(2)').trigger('click');

    if (e.ctrlKey && e.keyCode == 52) //press 4 for select cuadrant 4
        $('input[name="cuadrant"]:nth(0)').trigger('click');

    if (e.ctrlKey && e.keyCode == 53) //press 5 for select face
        $('input[name="face"]').trigger('click');


    if (e.keyCode == 27) //press escape to close
        $('#buttonDialogCancel').trigger('click');

    $('#buttonDialogOK').one('keyup', function(e) {
        if (e.keyCode == 32) //press spacebar to submit form
            $('#buttonDialogOK').trigger('click');
    });
});