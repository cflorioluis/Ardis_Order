$('#dialog_container_custom').off('keyup');
$('#inputErrorBeginX').hide();
$('#inputErrorEndX').hide();
$('#inputErrorHingeCount').hide();
$('#inputErrorAxisDist').hide();
$('#inputErrorDrillDiameter').hide();
$('#inputErrorDrillDepth').hide();
$('#inputErrorHingeDiameter').hide();
$('#inputErrorHingeDepth').hide();
setTimeout(function() {
    $('#newHingeCount').focus();
    $('#newHingeCount').select();
}, 100);

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
    svgCanvas.editHinge('face', $(this).val(), $('input[name="quadrant"]:checked').val());

    $("#faceSelector").val($(this).val());
    $("#faceSelector").trigger('change');
});




$("#newBeginX").change(function() {
    svgCanvas.editHinge("beginX", this.value);
});
//si distancia entre ejes se llena de debe desactivar distancia respecto al fin
$('#newEndX').change(function() {
    if ($(this).val() != "")
        $('#newAxisDist').val("")

    svgCanvas.editHinge("endX", this.value);
});


$("#newHingeCount").change(function() {
    svgCanvas.editHinge("hingeCount", this.value);
});


//si distancia entre ejes se llena de debe desactivar distancia respecto al fin
$('#newAxisDist').change(function() {
    if ($(this).val() != "")
        $('#newEndX').val("")
    svgCanvas.editHinge("axisDist", this.value);
});

$("#newCDistance").change(function() {
    svgCanvas.editHinge("cDistance", this.value);
});

$("#newHingeDiameter").change(function() {
    svgCanvas.editHinge("hingeDiameter", this.value);
});

$("#newDrillDistance").change(function() {
    svgCanvas.editHinge("drillDistance", this.value);
});
$("#newDrillDistanceFromCenter").change(function() {
    svgCanvas.editHinge("drillDistanceFromCenter", this.value);
});
$("#newDrillDiameter").change(function() {
    svgCanvas.editHinge("drillDiameter", this.value);
});
$("#newHingeDepth").change(function() {
    svgCanvas.editHinge("hingeDepth", this.value);
});
$("#newDrillDepth").change(function() {
    svgCanvas.editHinge("drillDepth", this.value);
});

$('#newBeginX').css("background", "#fff")
$('#newBeginX').css("border", "1px solid red")
$('#newBeginX').css("border-width", "revert")
$('#newBeginX').css("border-radius", "4px")

$('#newEndX').css("background", "#FFF")
$('#newEndX').css("border", "1px solid #3284FF")
$('#newEndX').css("border-width", "revert")
$('#newEndX').css("border-radius", "4px")

$('#quadrantHinge2').next().css("outline", "2px solid #3284FF")

$('input[name="sideHinge"]').click(function() {

    $('#quadrantHinge1, #quadrantHinge2, #quadrantHinge3, #quadrantHinge4').next().css("outline", "none");

    $('input[name="quadrant"]').prop("checked", true);
    $('input[name="quadrant"]:checked').prop("checked", false);
    $('input[name="sideHinge"][value="1"], input[name="sideHinge"][value="3"]').next().attr("src", "images/machining/hinge/edge_sup_down.png")
    $('input[name="sideHinge"][value="2"], input[name="sideHinge"][value="4"]').next().attr("src", "images/machining/hinge/edge_left_right.png")

    for (let ii = 0; ii < $('input[name="sideHinge"]').length; ii++) {
        const element = $('input[name="sideHinge"]')[ii];

        if ($(this).val() != $(element).val())
            $(element).attr("origin", "1");
    }

    switch ($(this).val()) {
        case "1":
            if ($(this).attr("origin") == "1") { //pasar a la izq
                $('#quadrantHinge4').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "0");
                $('input[name="quadrant"][value="3"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_sup_down_right.png")
            } else { //pasar a la der
                $('#quadrantHinge3').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "1");
                $('input[name="quadrant"][value="4"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_sup_down_left.png")
            }
            break;
        case "2":
            if ($(this).attr("origin") == "1") { //pasar a la izq
                $('#quadrantHinge3').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "0");
                $('input[name="quadrant"][value="2"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_right_down.png")
            } else { //pasar a la der
                $('#quadrantHinge2').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "1");
                $('input[name="quadrant"][value="3"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_right_up.png")
            }
            break;
        case "3":
            if ($(this).attr("origin") == "1") { //pasar a la izq
                $('#quadrantHinge2').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "0");
                $('input[name="quadrant"][value="1"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_sup_down_left.png")
            } else { //pasar a la der
                $('#quadrantHinge1').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "1");
                $('input[name="quadrant"][value="2"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_sup_down_right.png")
            }
            break;
        case "4":
            if ($(this).attr("origin") == "1") { //pasar a la izq
                $('#quadrantHinge1').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "0");
                $('input[name="quadrant"][value="4"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_left_up.png")
            } else { //pasar a la der
                $('#quadrantHinge4').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "1");
                $('input[name="quadrant"][value="1"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_left_down.png")
            }
            break;
    }

    /*$('input[name="sideHinge"]').change(function() {*/
    svgCanvas.editHinge("originSide", this.value, $('input[name="sideHinge"]:checked').attr("origin"), $('input[name="quadrant"]:checked').val());
    /*});*/
});


$('#dialog_container_custom').keyup(function(e) {
    if (e.ctrlKey && e.keyCode == 49) //press 1 for select side 1
        $('input[name="sideHinge"]:nth(1)').trigger('click');

    if (e.ctrlKey && e.keyCode == 50) //press 2 for select side 2
        $('input[name="sideHinge"]:nth(2)').trigger('click');

    if (e.ctrlKey && e.keyCode == 51) //press 3 for select side 3
        $('input[name="sideHinge"]:nth(0)').trigger('click');

    if (e.ctrlKey && e.keyCode == 52) //press 4 for select side 4
        $('input[name="sideHinge"]:nth(3)').trigger('click');

    if (e.ctrlKey && e.keyCode == 53) //press 5 for select face
        $('input[name="faceSelect"]').trigger('click');

    if (e.keyCode == 27) //press escape to close
        $('#buttonDialogCancel').trigger('click');

    if (e.keyCode == 13) //press enter in any side to submit
        $('#buttonDialogOK').trigger('click');

    $('#buttonDialogOK').one('keyup', function(e) {
        if (e.keyCode == 32) //press spacebar to submit form
            $('#buttonDialogOK').trigger('click');
    });
});







//$('#quadrantHinge2').next().css("outline", "2px solid #3284FF !important")
/*$('#quadrantHinge2').next().css("overflow", "hidden")*/




/*<!--<div class="columnFromHinge FaceSelection" style="height: 69px;width: 121px;">

                    <div class="gridDrill">
                        <div class="columnHinge">
                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="-1" disabled>
                                <img src="images/machining/quadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="-1"disabled>
                                <img src="images/drill/edge_left_right_white.png">
                            </label>

                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="0" ` +
        origin0 +
        `>
                                <img src="images/drill/corner_left.svg">
                            </label>
                        </div>
                        <div class="columnHinge wide">
                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="-1" disabled>
                                <img src="images/drill/edge_sup_down_white.png" >
                            </label>
                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="-1" disabled>
                                <img src="images/drill/main_face.png" style="outline: 1px solid #000;">
                            </label>

                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="-1" disabled>
                                <img src="images/drill/edge_sup_down_white.png">
                            </label>
                        </div>
                        <div class="columnHinge">
                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="-1" disabled>
                                <img src="images/machining/quadrant.png" >
                            </label>
                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="-1" disabled>
                                <img src="images/drill/edge_left_right_white.png">
                            </label>

                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="1" ` +
        origin1 +
        `>
                                <img src="images/drill/corner_right.svg">
                            </label>
                        </div>
                    </div>
                </div>
            </div>-->*/