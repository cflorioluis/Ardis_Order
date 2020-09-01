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
    svgCanvas.editDrill('face', $(this).val(), $('input[name="cuadrant"]:checked').val());
});

$('input[name="cuadrant"]').click(function() {
    svgCanvas.editDrill('cuadrant', $(this).val());
});

$("#newWidthDrill").change(function() {
    svgCanvas.editDrill('newWidthDrill', this.value, $('input[name="cuadrant"]:checked').val());
});
$("#newHeightDrill").change(function() {
    svgCanvas.editDrill('newHeightDrill', this.value, $('input[name="cuadrant"]:checked').val());
});
$("#newDiameterDrill").change(function() {
    svgCanvas.editDrill('newDiameterDrill', this.value, $('input[name="cuadrant"]:checked').val());
});
$("#newDepthDrill").change(function() {
    svgCanvas.editDrill('newDepthDrill', this.value, $('input[name="cuadrant"]:checked').val());
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
    if (e.ctrlKey && e.keyCode == 49) //press 1 for select cuadrant 1
        $('input[name="cuadrant"]:nth(1)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 50) //press 2 for select cuadrant 2
        $('input[name="cuadrant"]:nth(3)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 51) //press 3 for select cuadrant 3
        $('input[name="cuadrant"]:nth(2)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 52) //press 4 for select cuadrant 4
        $('input[name="cuadrant"]:nth(0)').prop("checked", true);

    if (e.ctrlKey && e.keyCode == 53) //press 5 for select face
        $('input[name="face"]').trigger('click');

    if (e.keyCode == 27) //press escape to close
        $('#buttonDialogCancel').trigger('click');

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
                        <div class="columnDrill cuadrantColumn">
                            <label style="padding-top: 5px;">
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="4" ` + cuadrant4 + `>
                                <img src="images/machining/cuadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="5" ` + cuadrant5 + `>
                                <img src="images/machining/cuadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="1" ` + cuadrant1 + `>
                                <img src="images/machining/cuadrant.png">
                            </label>
                        </div>
                        <div class="columnDrill cuadrantColumn">
                            <label style="padding-top: 5px;">
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="8" ` + cuadrant8 + `>
                                <img src="images/machining/cuadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="9" ` + cuadrant9 + `>
                                <img src="images/machining/cuadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="6" ` + cuadrant6 + `>
                                <img src="images/machining/cuadrant.png" >
                            </label>
                        </div>
                        <div class="columnDrill cuadrantColumn">
                            <label style="padding-top: 5px;">
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="3" ` + cuadrant3 + `>
                                <img src="images/machining/cuadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="7" ` + cuadrant7 + `>
                                <img src="images/machining/cuadrant.png">
                            </label>
                            <label>
                                <input type="radio" name="cuadrant" hiddenRadio machiningOption="drill" value="2" ` + cuadrant2 + `>
                                <img src="images/machining/cuadrant.png">
                            </label>
                        </div>
                    </div>
                </div>-->
                */