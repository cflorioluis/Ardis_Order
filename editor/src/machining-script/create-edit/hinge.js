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



//si distancia entre ejes se llena de debe desactivar distancia respecto al fin
$('#newAxisDist').change(function() {
    if ($(this).val() != "")
        $('#newEndX').val("")
        //$('#newEndX').prop("disabled", true)
});

$('#newEndX').change(function() {
    if ($(this).val() != "")
        $('#newAxisDist').val("")
});

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

$('#newBeginX').css("background", "#fff")
$('#newBeginX').css("border", "1px solid red")
$('#newBeginX').css("border-width", "revert")
$('#newBeginX').css("border-radius", "4px")

$('#newEndX').css("background", "#FFF")
$('#newEndX').css("border", "1px solid #3284FF")
$('#newEndX').css("border-width", "revert")
$('#newEndX').css("border-radius", "4px")

$('#cuadrantHinge2').next().css("outline", "2px solid #3284FF")

$('input[name="sideHinge"]').click(function() {

    $('#cuadrantHinge1, #cuadrantHinge2, #cuadrantHinge3, #cuadrantHinge4').next().css("outline", "none");

    $('input[name="cuadrant"]').prop("checked", true);
    $('input[name="cuadrant"]:checked').prop("checked", false);
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
                $('#cuadrantHinge4').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "0");
                $('input[name="cuadrant"][value="3"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_sup_down_right.png")
            } else { //pasar a la der
                $('#cuadrantHinge3').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "1");
                $('input[name="cuadrant"][value="4"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_sup_down_left.png")
            }
            break;
        case "2":
            if ($(this).attr("origin") == "1") { //pasar a la izq
                $('#cuadrantHinge3').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "0");
                $('input[name="cuadrant"][value="2"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_right_down.png")
            } else { //pasar a la der
                $('#cuadrantHinge2').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "1");
                $('input[name="cuadrant"][value="3"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_right_up.png")
            }
            break;
        case "3":
            if ($(this).attr("origin") == "1") { //pasar a la izq
                $('#cuadrantHinge2').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "0");
                $('input[name="cuadrant"][value="1"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_sup_down_left.png")
            } else { //pasar a la der
                $('#cuadrantHinge1').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "1");
                $('input[name="cuadrant"][value="2"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_sup_down_right.png")
            }
            break;
        case "4":
            if ($(this).attr("origin") == "1") { //pasar a la izq
                $('#cuadrantHinge1').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "0");
                $('input[name="cuadrant"][value="4"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_left_up.png")
            } else { //pasar a la der
                $('#cuadrantHinge4').next().css("outline", "2px solid #3284FF");
                $(this).attr("origin", "1");
                $('input[name="cuadrant"][value="1"]').prop("checked", true);
                $(this).next().attr("src", "images/machining/hinge/edge_left_down.png")
            }
            break;
    }

    console.log($('input[name="cuadrant"]:checked').val());

});




//$('#cuadrantHinge2').next().css("outline", "2px solid #3284FF !important")
/*$('#cuadrantHinge2').next().css("overflow", "hidden")*/




/*<!--<div class="columnFromHinge FaceSelection" style="height: 69px;width: 121px;">

                    <div class="gridDrill">
                        <div class="columnHinge">
                            <label>
                                <input type="radio" name="origin" hiddenRadio machiningOption="hinge" value="-1" disabled>
                                <img src="images/machining/cuadrant.png" >
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
                                <img src="images/machining/cuadrant.png" >
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