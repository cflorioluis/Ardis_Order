$('#dialog_container_custom').off('keyup');
$('#inputErrorWDrill').hide();
$('#inputErrorHDrill').hide();
$('#inputErrorDiameterDrill').hide();
$('#inputErrorDepthDrill').hide();
setTimeout(function() { $('#newWidthDrill').focus(); }, 100);


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
    svgCanvas.editDrill('face', $(this).val(), $('input[name="quadrant"]:checked').val());

    $("#faceSelector").val($(this).val());
    $("#faceSelector").trigger('change');
});

$('input[name="quadrant"]').click(function() {
    svgCanvas.editDrill("quadrant", $(this).val());
});

$("#newWidthDrill").change(function() {
    svgCanvas.editDrill('newWidthDrill', this.value, $('input[name="quadrant"]:checked').val());
});
$("#newHeightDrill").change(function() {
    svgCanvas.editDrill('newHeightDrill', this.value, $('input[name="quadrant"]:checked').val());
});
$("#newDiameterDrill").change(function() {
    svgCanvas.editDrill('newDiameterDrill', this.value, $('input[name="quadrant"]:checked').val());
});
$("#newDepthDrill").change(function() {
    svgCanvas.editDrill('newDepthDrill', this.value, $('input[name="quadrant"]:checked').val());
});

$('#cboxPasante').click(function() {
    svgCanvas.editDrill('cboxPasante', $(this).val());
    if ($(this).is(':checked')) {
        $('.hidden').slideToggle("fast");
        $('#dialog_container_custom').height("-=50");
        $('#newDepthDrill').val("");
    } else {
        $('.hidden').fadeIn("slow", );
        $('#dialog_container_custom').height("+=50");
    }

    svgCanvas.editDrill('cross', $(this).is(':checked'));
});

$('#cboxPasante').keyup(function(e) {
    switch (e.keyCode) {
        case 32: // If spacebar fired the event
            this.checked = !this.checked;
            if ($(this).is(':checked')) {
                $('.hidden').slideToggle("fast");
                $('#dialog_container_custom').height("-=50");
                $('#newDepthDrill').val("");
            } else {
                $('.hidden').fadeIn("slow", );
                $('#dialog_container_custom').height("+=50");
            }
            break;
        case 9:
            if ($(this).is(':checked'))
                $('#dialog_buttons_custom:nth-child(2)').focus();
            break;
    }
});

$('#dialog_container_custom').keyup(function(e) {
    if (e.ctrlKey && e.keyCode == 49) //press 1 for select quadrant 1
        $('input[name="quadrant"]:nth(1)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 50) //press 2 for select quadrant 2
        $('input[name="quadrant"]:nth(3)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 51) //press 3 for select quadrant 3
        $('input[name="quadrant"]:nth(2)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 52) //press 4 for select quadrant 4
        $('input[name="quadrant"]:nth(0)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 53) //press 5 for select face
        $('input[name="face"]').trigger('click');

    if (e.keyCode == 27) //press escape to close
        $('#buttonDialogCancel').trigger('click');

    if (e.keyCode == 13) //press enter in any side to submit
        $('#buttonDialogOK').trigger('click');

    $('#buttonDialogOK').one('keyup', function(e) {
        if (e.keyCode == 32) //press spacebar to submit form
            $('#buttonDialogOK').trigger('click');
    });
});


/*
<!--<div class="columnFormMachining FaceSelection" style="height: 69px;width: 105px;">
                    <div class="zIndex0" style="padding-top: 15px;">
                      <img src="images/drill/main_face.png" style="outline: 1px solid #000;">
                    </div>
                    <div class="gridDrill zIndex1" style="padding-top: 10px;">
                        <div class="columnDrill quadrantColumn">
                            <label style="padding-top: 5px;">
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="4" ` + quadrant4 + `>
                                <img src="images/machining/quadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="5" ` + quadrant5 + `>
                                <img src="images/machining/quadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="1" ` + quadrant1 + `>
                                <img src="images/machining/quadrant.png">
                            </label>
                        </div>
                        <div class="columnDrill quadrantColumn">
                            <label style="padding-top: 5px;">
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="8" ` + quadrant8 + `>
                                <img src="images/machining/quadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="9" ` + quadrant9 + `>
                                <img src="images/machining/quadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="6" ` + quadrant6 + `>
                                <img src="images/machining/quadrant.png" >
                            </label>
                        </div>
                        <div class="columnDrill quadrantColumn">
                            <label style="padding-top: 5px;">
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="3" ` + quadrant3 + `>
                                <img src="images/machining/quadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="7" ` + quadrant7 + `>
                                <img src="images/machining/quadrant.png">
                            </label>
                            <label>
                                <input type="radio" name="quadrant" hiddenRadio machiningOption="drill" value="2" ` + quadrant2 + `>
                                <img src="images/machining/quadrant.png">
                            </label>
                        </div>
                    </div>
                </div>-->
                */