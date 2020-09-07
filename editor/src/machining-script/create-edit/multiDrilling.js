(function($) {

    $.fn.alterClass = function(removals, additions) {

        var self = this;

        if (removals.indexOf('*') === -1) {
            // Use native jQuery methods if there is no wildcard matching
            self.removeClass(removals);
            return !additions ? self : self.addClass(additions);
        }

        var patt = new RegExp('\\s' +
            removals.replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') +
            '\\s', 'g');

        self.each(function(i, it) {
            var cn = ' ' + it.className + ' ';
            while (patt.test(cn)) {
                cn = cn.replace(patt, ' ');
            }
            it.className = $.trim(cn);
        });

        return !additions ? self : self.addClass(additions);
    };

})(jQuery);


setTimeout(function() { $('#mdCount').focus(); }, 100);


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

    svgCanvas.editMultiDrilling("face", $(this).val(), $('input[name="quadrant"]:checked').val());

    $("#faceSelector").val($(this).val());
    $("#faceSelector").trigger('change');
});

$('#dialog_container_custom').keyup(function(e) {
    if (e.ctrlKey && e.keyCode == 49) //press 1 for select quadrant 1
        $('input[name="quadrant"][value="1"]').trigger('click');

    if (e.ctrlKey && e.keyCode == 50) //press 2 for select quadrant 2
        $('input[name="quadrant"][value="2"]').trigger('click');

    if (e.ctrlKey && e.keyCode == 51) //press 3 for select quadrant 3
        $('input[name="quadrant"][value="3"]').trigger('click');

    if (e.ctrlKey && e.keyCode == 52) //press 4 for select quadrant 4
        $('input[name="quadrant"][value="4"]').trigger('click');

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




$("#mdBeginX").change(function() {
    svgCanvas.editMultiDrilling("beginX", this.value /*, $('#mdEndX').val(), $('#mdBeginY').val(), $('#mdEndY').val()*/ );
});

$("#mdBeginY").change(function() {
    svgCanvas.editMultiDrilling("beginY", /* $('#mdBeginX').val(), $('#mdEndX').val(), */ this.value /*, $('#mdEndY').val()*/ );
});

//si distancia entre ejes se llena de debe desactivar distancia respecto al fin
$('#mdEndY').change(function() {
    if ($(this).val() != "")
        $('#mdAxisDist').val("")
    svgCanvas.editMultiDrilling("endY", /*$('#mdBeginX').val(), $('#mdEndX').val(), $('#mdBeginY').val(), */ this.value);
});
//si distancia entre ejes se llena de debe desactivar distancia respecto al fin
$('#mdAxisDist').change(function() {
    if ($(this).val() != "")
        $('#mdEndY').val("")
    svgCanvas.editMultiDrilling("axisDist", this.value);
});

//si la cantidad de los taladros la fija el uaurio el final se elimina
$('#mdDrillCount').change(function() {
    if ($(this).val() != "")
        $('#mdEndX').val("")
    svgCanvas.editMultiDrilling("drillCount", this.value);

});
//viceversa
$('#mdEndX').change(function() {
    if ($(this).val() != "")
        $('#mdDrillCount').val("")
    svgCanvas.editMultiDrilling("endY", /*$('#mdBeginX').val(), */ this.value /*, $('#mdBeginY').val(), $('#mdEndY').val()*/ );

});
$("#mdCount").change(function() {
    svgCanvas.editMultiDrilling("count", this.value);
});
$("#mdDrillDiameter").change(function() {
    svgCanvas.editMultiDrilling("drillDiameter", this.value);
});
$("#mdDepth").change(function() {
    svgCanvas.editMultiDrilling("drillDepth", this.value);
});
$("#mdStep").change(function() {
    svgCanvas.editMultiDrilling("step", this.value);
});


$('input[name="quadrant"]').on('click', function() {
    $('object[id*="mutidrilling-svg-object-Q"]').hide()

    quadrant = $(this).val();

    var newClass = $(this).val() + $('input[name="direction"]:checked').val()

    $('input[class*="mdBeginX_Q"]').alterClass('mdBeginX_Q*', 'mdBeginX_Q' + newClass)
    $('input[class*="mdEndX_Q"]').alterClass('mdEndX_Q*', 'mdEndX_Q' + newClass)
    $('input[class*="mdBeginY_Q"]').alterClass('mdBeginY_Q*', 'mdBeginY_Q' + newClass)
    $('input[class*="mdEndY_Q"]').alterClass('mdEndY_Q*', 'mdEndY_Q' + newClass)
    $('input[class*="mdAxisDist_Q"]').alterClass('mdAxisDist_Q*', 'mdAxisDist_Q' + newClass)
    $('input[class*="mdStep_Q"]').alterClass('mdStep_Q*', 'mdStep_Q' + newClass)
    $('label[class*="md_Q"]').alterClass('md_Q*', 'md_Q' + newClass)

    $('#mutidrilling-svg-object-Q' + newClass).show()
});


function getSyncScriptParamsMD() {
    var scripts = document.getElementById('scriptMultiDrilling');
    return {
        quadrant: scripts.getAttribute('quadrant'),
        direction: scripts.getAttribute('direction')
    };
}
var quadrant = getSyncScriptParamsMD().quadrant;
var direction = getSyncScriptParamsMD().direction;
$('input[name="direction"][value="' + direction + '"]').prop("checked", true);
$('input[name="quadrant"][value="' + quadrant + '"]').trigger('click');

$('input[name="direction"]').css('cursor', 'pointer')
$('input[name="direction"]').change(function() {
    $('input[name="quadrant"]:checked').trigger('click');

    svgCanvas.editMultiDrilling("direction", this.value);
});
/*

/*
$(":radio").on("mousedown", function() {
  $("p").text( $('input[type=radio]:checked').val() );
}).on("mouseup", function() {
  $('input[type=radio]').prop('checked', false);
  $(this).prop('checked', true);
});
  */