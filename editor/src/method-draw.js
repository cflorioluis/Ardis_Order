/*
 * svg-editor.js
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Pavol Rusnak
 * Copyright(c) 2010 Jeff Schiller
 * Copyright(c) 2010 Narendra Sisodiya
 * Copyright(c)  2012 Mark MacKay
 *
 */

// Dependencies:
// 1) units.js
// 2) browser.js
// 3) svgcanvas.js

(function() {
    //var row = JSON.parse(localStorage.getItem("row"));
    var newOrder, currentRowSelected, row

    if (localStorage.newOrder && localStorage.currentRowSelected) {
        newOrder = JSON.parse(localStorage.newOrder);
        currentRowSelected = JSON.parse(localStorage.currentRowSelected);
        row = newOrder[currentRowSelected];
    } else
        row = [null, null, 1500, 800, null, null, null, null, null, null, null, null, null, null, null]



    //import * as mathjs from "../lib/math/math.min.js";

    /*import { create, all } from 'mathjs'

    const config = { }
    const math = create(all, config)*/

    //console.log(math.sqrt(-4).toString()) // 2i

    /*console.log(math.chain(3)
        .add(4)
        .multiply(2)
        .done());*/

    /*let scope = {
            lpx: row[2],
            lpy: row[3]
        }*/
    //console.log(math.evaluate('lpx', scope));



    if (!window.methodDraw)
        window.methodDraw = (function($) {
            var partW = row[2];
            var partL = row[3];
            var svgCanvas;
            var Editor = {};
            var is_ready = false;
            var curConfig = {
                scope: {
                    lpx: row[2],
                    lpy: row[3]
                },
                autoSave: {},
                currentRowSelected: currentRowSelected,
                row: row,
                partW: partW,
                partL: partL,
                veta: row[1],
                quadrant: 1,
                canvas_expansion: 1,
                realDimensions: [partW, partL],
                //cflorioluis aqui esta el tamaño de la pieza
                dimensions: [partW + 200, partL + 200], //cflorioluis aumentar 200 en ambos lados para representar los espacion en blanco
                myEdges: JSON.parse(localStorage.getItem("myEdges")),
                corners: [100, partW + 100, partL + 100],
                edges: [row[6], row[7], row[8], row[9]],
                lowDimension: 0,
                initFill: { color: "fff", opacity: 1 },
                initStroke: { width: 1.5, color: "000", opacity: 1 },
                initOpacity: 1,
                imgPath: "images/",
                extPath: "extensions/",
                jGraduatePath: "lib/jgraduate/images/",
                extensions: [],
                initTool: "select",
                wireframe: false,
                colorPickerCSS: false,
                gridSnapping: false,
                gridColor: "#000",
                baseUnit: "px",
                snappingStep: 10,
                showRulers: svgedit.browser.isTouch() ? false : true,
                viewAllMachining: true,
                show_outside_canvas: false,
                no_save_warning: true,
                initFont: "Helvetica, Arial, sans-serif",
            };

            var curPrefs = {}; //$.extend({}, defaultPrefs);
            var customHandlers = {};
            Editor.curConfig = curConfig;
            Editor.tool_scale = 1;

            Editor.setConfig = function(opts) {
                $.extend(true, curConfig, opts);
                if (opts.extensions) {
                    curConfig.extensions = opts.extensions;
                }
            };

            // Extension mechanisms must call setCustomHandlers with two functions: opts.open and opts.save
            // opts.open's responsibilities are:
            //  - invoke a file chooser dialog in 'open' mode
            //  - let user pick a SVG file
            //  - calls setCanvas.setSvgString() with the string contents of that file
            // opts.save's responsibilities are:
            //  - accept the string contents of the current document
            //  - invoke a file chooser dialog in 'save' mode
            //  - save the file to location chosen by the user
            Editor.setCustomHandlers = function(opts) {
                Editor.ready(function() {
                    if (opts.open) {
                        $('#tool_open > input[type="file"]').remove();
                        $("#tool_open").show();
                        svgCanvas.open = opts.open;
                    }
                    if (opts.save) {
                        Editor.show_save_warning = false;
                        svgCanvas.bind("saved", opts.save);
                    }
                    if (opts.pngsave) {
                        svgCanvas.bind("exported", opts.pngsave);
                    }
                    customHandlers = opts;
                });
            };

            Editor.randomizeIds = function() {
                svgCanvas.randomizeIds(arguments);
            };

            Editor.init = function() {
                // For external openers
                (function() {
                    // let the opener know SVG Edit is ready
                    var w = window.opener;
                    if (w) {
                        try {
                            var methodDrawReadyEvent = w.document.createEvent("Event");
                            methodDrawReadyEvent.initEvent("methodDrawReady", true, true);
                            w.document.documentElement.dispatchEvent(methodDrawReadyEvent);
                        } catch (e) {}
                    }
                })();

                //cflorioluis - evento al seleccionar guardar los cambios, definicion de la funcion
                var clickAutoSaveChanges = (this.clickAutoSaveChanges = function() {
                    svgCanvas.removeDivsExport();

                    var newOrder = JSON.parse(localStorage.newOrder);
                    var currentRowSelected = JSON.parse(localStorage.currentRowSelected);

                    if (curConfig.currentRowSelected == currentRowSelected) {
                        newOrder[currentRowSelected][14] = svgCanvas.svgCanvasToString();
                    }

                    localStorage.setItem("newOrder", JSON.stringify(newOrder));

                    svgCanvas.createDivs(curConfig.edges);
                    generatePartDraw();
                });

                if (localStorage.autoSave) {
                    $("#tool_autosave").addClass("push_button_pressed");
                    curConfig.autoSave = setInterval(clickAutoSaveChanges, 300);
                } else {
                    clearInterval(curConfig.autoSave);
                    $("#tool_autosave").removeClass("push_button_pressed");
                }

                //evento si cambia el currentRowSelect se actualiza el mecanizado
                window.addEventListener(
                    "storage",
                    (evt) => {
                        if (evt.key == "currentRowSelected" && evt.newValue) {
                            location.reload();
                        }
                        if (evt.key == "reload" && evt.newValue) {
                            location.reload();
                        }
                        if (evt.key == "newOrder" && evt.newValue) {
                            var newOrder = JSON.parse(localStorage.newOrder);
                            var currentRowSelected = JSON.parse(localStorage.currentRowSelected);
                            var row = newOrder[currentRowSelected];
                            curConfig.edges[0] = (row[6] == null) ? "" : row[6]
                            curConfig.edges[1] = (row[7] == null) ? "" : row[7]
                            curConfig.edges[2] = (row[8] == null) ? "" : row[8]
                            curConfig.edges[3] = (row[9] == null) ? "" : row[9]

                            svgCanvas.updateEdges(curConfig.edges)
                        }
                    },
                    false
                );




                //cflorioluis - al cambiar el tamaño de la ventava hacer un update del canvas
                $(window).resize(function() {
                    console.log("window was resized");

                    changeZoomPiece();
                });

                $("body").toggleClass("touch", svgedit.browser.isTouch());
                $("#canvas_width").val(curConfig.realDimensions[0]); //cflorioluis ajustar que las opciones de la pieza den la medida real
                $("#canvas_height").val(curConfig.realDimensions[1]);

                //cflorioluis - calcular la cordenada menor de la pieza
                lowDimension = curConfig.dimensions[1];
                if (curConfig.dimensions[0] < curConfig.dimensions[1]) {
                    lowDimension = curConfig.dimensions[0];
                }

                /*var flash = function($menu) {
                    var menu_title = $menu.prev();
                    menu_title.css({
                        background: "white",
                        color: "black",
                    });
                    setTimeout(function() {
                        menu_title.removeAttr("style");
                    }, 200);
                };*/

                var extFunc = function() {
                    $.each(curConfig.extensions, function() {
                        var extname = this;
                        $.getScript(curConfig.extPath + extname, function(d) {
                            // Fails locally in Chrome 5
                            if (!d) {
                                var s = document.createElement("script");
                                s.src = curConfig.extPath + extname;
                                document.querySelector("head").appendChild(s);
                            }
                        });
                    });
                };

                // Load extensions
                // Bit of a hack to run extensions in local Opera/IE9
                if (document.location.protocol === "file:") {
                    setTimeout(extFunc, 100);
                } else {
                    extFunc();
                }
                $.svgIcons(curConfig.imgPath + "svg_edit_icons.svg", {
                    w: 27,
                    h: 27,
                    id_match: false,
                    no_img: true, // Opera & Firefox 4 gives odd behavior w/images
                    fallback_path: curConfig.imgPath,
                    fallback: {
                        logo: "logo.png",
                        select: "select.png",
                        //add new toll - cflorioluis - se usa el mismo nombre que en el item de placement
                        pocketTool: "pocket.png",
                        multiDrillingTool: "multiDrilling.png",
                        drillTool: "drill.png",
                        hingeTool: "hinge.png",
                        polyTool: "poly.png",
                        rectTools: "rectTool.png",
                        rectTool: "rectTool.png",
                        rectRoundTool: "rectRound.png",
                        select_node: "select_node.png",
                        pencil: "pencil.png",
                        pen: "line.png",
                        rect: "square.png",
                        ellipse: "ellipse.png",
                        path: "path.png",
                        text: "text.png",
                        image: "image.png",
                        zoom: "zoom.png",
                        delete: "delete.png",
                        spapelib: "shapelib.png",
                        node_delete: "node_delete.png",
                        align_left: "align-left.png",
                        align_center: "align-center.png",
                        align_right: "align-right.png",
                        align_top: "align-top.png",
                        align_middle: "align-middle.png",
                        align_bottom: "align-bottom.png",
                        arrow_right: "flyouth.png",
                        arrow_down: "dropdown.gif",
                    },
                    placement: {
                        "#logo": "logo",
                        "#tool_select": "select",
                        //add new toll - cflorioluis - Elegir el nombre de la Herramienta, este se usara para elegir la imagen de la misma
                        "#tool_pocketTool": "pocketTool",
                        "#tool_multiDrillingTool": "multiDrillingTool",
                        "#tool_drillTool": "drillTool",
                        "#tool_hingeTool": "hingeTool",
                        "#tool_polyTool": "polyTool",
                        "#tool_rectTools": "rectTools",
                        "#tool_rectTool": "rectTool",
                        "#tool_rectRoundTool": "rectRoundTool",

                        //
                        "#tool_fhpath": "pencil",
                        "#tool_line": "pen",
                        "#tool_rect,#tools_rect_show": "rect",
                        "#tool_ellipse,#tools_ellipse_show": "ellipse",
                        "#tool_path": "path",
                        "#tool_text,#layer_rename": "text",
                        "#tool_image": "image",
                        "#tool_zoom": "zoom",
                        "#tool_node_clone": "node_clone",
                        "#tool_node_delete": "node_delete",
                        "#tool_add_subpath": "add_subpath",
                        "#tool_openclose_path": "open_path",
                        "#tool_alignleft, #tool_posleft": "align_left",
                        "#tool_aligncenter, #tool_poscenter": "align_center",
                        "#tool_alignright, #tool_posright": "align_right",
                        "#tool_aligntop, #tool_postop": "align_top",
                        "#tool_alignmiddle, #tool_posmiddle": "align_middle",
                        "#tool_alignbottom, #tool_posbottom": "align_bottom",
                        "#cur_position": "align",
                        "#zoomLabel": "zoom",
                    },
                    resize: {
                        "#logo .svg_icon": 15,
                        ".flyout_arrow_horiz .svg_icon": 5,
                        "#fill_bg .svg_icon, #stroke_bg .svg_icon": svgedit.browser.isTouch() ?
                            24 : 24,
                        ".palette_item:first .svg_icon": svgedit.browser.isTouch() ?
                            30 : 16,
                        "#zoomLabel .svg_icon": 16,
                        "#zoom_dropdown .svg_icon": 7,
                    },
                    callback: function(icons) {
                        $(
                            ".toolbar_button button > svg, .toolbar_button button > img"
                        ).each(function() {
                            $(this).parent().prepend(this);
                        });
                        $(".tool_button, .tool_button_current").addClass("loaded");
                        var tleft = $("#tools_left");
                        if (tleft.length != 0) {
                            var min_height = tleft.offset().top + tleft.outerHeight();
                        }

                        // Look for any missing flyout icons from plugins
                        $(".tools_flyout").each(function() {
                            var shower = $("#" + this.id + "_show");
                            var sel = shower.attr("data-curopt");
                            // Check if there's an icon here
                            if (!shower.children("svg, img").length) {
                                var clone = $(sel).children().clone();
                                if (clone.length) {
                                    clone[0].removeAttribute("style"); //Needed for Opera
                                    shower.append(clone);
                                }
                            }
                        });
                        methodDraw.runCallbacks();

                        setTimeout(function() {
                            $(".flyout_arrow_horiz:empty").each(function() {
                                $(this).append($.getSvgIcon("arrow_right").width(5).height(5));
                            });
                        }, 1);
                    },
                });

                $("#rulers").on("dblclick", function(e) {
                    $("#base_unit_container").css({
                        top: e.pageY - 10,
                        left: e.pageX - 50,
                        display: "block",
                    });
                });
                $("#base_unit_container").on("mouseleave mouseenter", function(e) {
                    t = setTimeout(function() {
                        $("#base_unit_container").fadeOut(500);
                    }, 200);
                    if (event.type == "mouseover") clearTimeout(t);
                });
                $("#base_unit").on("change", function(e) {
                    savePreferences();
                });

                Editor.canvas = svgCanvas = new $.SvgCanvas(
                    document.getElementById("svgcanvas"),
                    curConfig
                );
                Editor.show_save_warning = false;
                Editor.paintBox = { fill: null, stroke: null, canvas: null };
                var palette = [
                        "#444444",
                        "#482816",
                        "#422C10",
                        "#3B2F0E",
                        "#32320F",
                        "#293414",
                        "#1F361B",
                        "#153723",
                        "#0C372C",
                        "#083734",
                        "#0E353B",
                        "#1A333F",
                        "#273141",
                        "#332D40",
                        "#3E2A3C",
                        "#462735",
                        "#4B252D",
                        "#4D2425",
                        "#4C261D",
                        "#666666",
                        "#845335",
                        "#7B572D",
                        "#6F5C2A",
                        "#62612C",
                        "#546433",
                        "#46673D",
                        "#396849",
                        "#306856",
                        "#2D6862",
                        "#33666C",
                        "#426373",
                        "#535F75",
                        "#645A73",
                        "#74556D",
                        "#805064",
                        "#884D58",
                        "#8B4D4B",
                        "#894F3F",
                        "#999999",
                        "#C48157",
                        "#B8874D",
                        "#A98E49",
                        "#97944B",
                        "#849854",
                        "#729C62",
                        "#619E73",
                        "#559E84",
                        "#529D94",
                        "#5B9BA2",
                        "#6D97AB",
                        "#8391AE",
                        "#9A8AAB",
                        "#AF84A3",
                        "#BF7E96",
                        "#C97A86",
                        "#CE7975",
                        "#CC7C65",
                        "#BBBBBB",
                        "#FFB27C",
                        "#FABA6F",
                        "#E6C36A",
                        "#CFCA6D",
                        "#B8D078",
                        "#A0D58A",
                        "#8CD79F",
                        "#7DD8B5",
                        "#7AD6CA",
                        "#84D3DB",
                        "#9ACEE6",
                        "#B6C7EA",
                        "#D3BEE7",
                        "#EDB6DC",
                        "#FFAFCC",
                        "#FFAAB8",
                        "#FFA9A2",
                        "#FFAC8D",
                        "#DDDDDD",
                        "#FFE7A2",
                        "#FFF093",
                        "#FFFA8D",
                        "#FFFF91",
                        "#EEFF9F",
                        "#D1FFB4",
                        "#B9FFCE",
                        "#A8FFE9",
                        "#A4FFFF",
                        "#B1FFFF",
                        "#CBFFFF",
                        "#EDFFFF",
                        "#FFF5FF",
                        "#FFEBFF",
                        "#FFE2FF",
                        "#FFDCEC",
                        "#FFDBD2",
                        "#FFDFB8",
                    ],
                    isMac = navigator.platform.indexOf("Mac") >= 0,
                    isWebkit = navigator.userAgent.indexOf("AppleWebKit") >= 0,
                    modKey = isMac ? "meta+" : "Ctrl+", // ⌘
                    path = svgCanvas.pathActions,
                    undoMgr = svgCanvas.undoMgr,
                    Utils = svgedit.utilities,
                    default_img_url = curConfig.imgPath + "placeholder.svg",
                    workarea = $("#workarea"),
                    canv_menu = $("#cmenu_canvas"),
                    exportWindow = null,
                    tool_scale = 1,
                    ui_context = "toolbars",
                    orig_source = "";

                // This puts the correct shortcuts in the menus
                if (!isMac) {
                    $(".shortcut").each(function() {
                        var text = $(this).text();
                        $(this).text(text.split("⌘").join("Ctrl+"));
                    });
                }

                // This sets up alternative dialog boxes. They mostly work the same way as
                // their UI counterparts, expect instead of returning the result, a callback
                // needs to be included that returns the result as its first parameter.
                // In the future we may want to add additional types of dialog boxes, since
                // they should be easy to handle this way.
                (function() {
                    $("#dialog_container").draggable({
                        cancel: "#dialog_content, #dialog_buttons *",
                        containment: "window",
                    });
                    var box = $("#dialog_box"),
                        btn_holder = $("#dialog_buttons");

                    //cflorioluis - editando dialogo para validaciones de los mecanizados
                    var dbox = function(type, msg, callback, width, height, custom, isCenter, machiningType, defText) {
                        //cflorioluis - custom dialog
                        if (custom !== undefined) {
                            btn_holder = $("#dialog_buttons_custom");
                            $("#dialog_container").draggable({
                                cancel: "#dialog_content_custom, #dialog_buttons_custom *",
                                containment: "window",
                            });

                            $("#dialog_content_custom")
                                .html(msg)
                                .toggleClass("prompt", type == "prompt");

                            $("#dialog_container").hide();
                            $("#dialog_container_custom").show();

                            //cflorioluis - hacer click fuera del cuadro de dialogo para aceptar cambios
                            $("#dialog_box").bind('click', (evt) => {
                                const flyoutElement = document.getElementById("dialog_box_overlay");
                                let targetElement = evt.target;
                                //do {
                                if (targetElement == flyoutElement) {
                                    // This is a click outside just return.
                                    $('#buttonDialogOK').trigger('click');
                                    $("#dialog_box").unbind('click');
                                    return;
                                }
                                //targetElement = targetElement.parentNode;
                                // } while (targetElement);
                            });
                        } else {
                            //console.log("original");
                            $("#dialog_content")
                                .html("<p>" + msg.replace(/\n/g, "</p><p>") + "</p>")
                                .toggleClass("prompt", type == "prompt");

                            $("#dialog_container_custom").hide();
                            $("#dialog_container").show();
                        }

                        //cflorioluis - Colocar la ventana a un lado, igual se puede mover con el mouse
                        if (width !== undefined || height !== undefined) {
                            var mousePosition;
                            var offset = [0, 0];
                            var div;
                            var isDown = false;


                            $("#dialog_container_custom").css({
                                width: width + "px",
                                height: height + "px",
                                right: "2%",
                                position: "absolute",
                            });

                            if (isCenter) {
                                $("#dialog_container_custom").css({
                                    width: width + "px",
                                    height: height + "px",
                                    left: "calc(50% " + (width / 2) + ")",
                                    top: "calc(35% - " + (height / 2) + "px)",
                                    position: "absolute",
                                });
                            }

                            $("#dialog_content_custom").css({
                                height: height - 65 + "px",
                                overflow: "visible",
                            });

                            //cflorioluis - hacer que la ventana se mueva con el mouse
                            div = document.getElementById("dialog_container_custom");
                            document.getElementById("moveConfirm").addEventListener(
                                "mousedown",
                                function(e) {
                                    isDown = true;
                                    offset = [
                                        div.offsetLeft - e.clientX,
                                        div.offsetTop - e.clientY,
                                    ];
                                },
                                true
                            );

                            document.addEventListener(
                                "mouseup",
                                function() {
                                    isDown = false;
                                },
                                true
                            );

                            document.addEventListener(
                                "mousemove",
                                function(event) {
                                    event.preventDefault();
                                    if (isDown) {
                                        mousePosition = {
                                            x: event.clientX,
                                            y: event.clientY,
                                        };
                                        div.style.left = mousePosition.x + offset[0] + 150 + "px";
                                        div.style.top = mousePosition.y + offset[1] + 80 + "px";
                                    }
                                },
                                true
                            );
                            ///////////////////////////////////////////////////////////////////
                            /*$("#dialog_container").css("background-color","");
                                                        $("#dialog_container").addClass("dialogRight")*/
                        } else {
                            //default values
                            $("#dialog_container").css({
                                width: "300px",
                                height: "150px",
                                "margin-left": "-150px",
                                "margin-top:": "-80px",
                            });

                            $("#dialog_content").css({
                                height: "95px",
                            });
                        }
                        ///

                        btn_holder.empty();

                        var ok = $('<input tabindex="100" type="button" value="OK" id="buttonDialogOK">').appendTo(btn_holder);

                        //cflorioluis - validar formulario con boton ok
                        switch (machiningType) {
                            case "pocket":
                                var rectRoundInputs = 0;
                                var errorInput = false;
                                $("#dialog_buttons_custom").children().first().click(function(event) {
                                    rectRoundInputs = $(
                                        'input[machiningOption="pocket"]:checked'
                                    ).length;
                                    if (rectRoundInputs == 0) {
                                        $(".tablero").addClass("input-error");
                                    } else {
                                        $(".tablero").removeClass("input-error");
                                    }

                                    if ($('#inputErrorWPocket').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }
                                    if ($('#inputErrorHPocket').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }
                                    if ($('#inputErrorRPocket').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if (errorInput) {
                                        $('#dialog_container_custom').width("-=60");
                                        $('#dialog_content_custom').width("-=60");
                                    }

                                    $('input[machiningInput="pocket"]').each(function() {
                                        $(this).removeClass("input-error");
                                        if ($(this).val() != "") {

                                            try {
                                                math.evaluate($(this).val(), curConfig.scope)
                                                rectRoundInputs++;

                                                if ($(this).hasClass("inputErrorWPocket"))
                                                    $('#inputErrorWPocket').hide();

                                                if ($(this).hasClass("inputErrorHPocket"))
                                                    $('#inputErrorHPocket').hide();

                                                if ($(this).hasClass("inputErrorRPocket"))
                                                    $('#inputErrorRPocket').hide();
                                            } catch (error) {
                                                //console.log(error.split('/n')[0]);
                                                $(this).addClass("input-error");
                                                errorInput = true;

                                                if ($(this).hasClass("inputErrorWPocket"))
                                                    $('#inputErrorWPocket').show();


                                                if ($(this).hasClass("inputErrorHPocket"))
                                                    $('#inputErrorHPocket').show();

                                                if ($(this).hasClass("inputErrorRPocket"))
                                                    $('#inputErrorRPocket').show();

                                                //if (!$('#inputErrorWHDrill').is(":visible")) {
                                                $('#dialog_container_custom').height("+=15");
                                                $('#dialog_content_custom').height("+=15");
                                            }
                                        } else {
                                            $(this).addClass("input-error");
                                        }
                                    });
                                    if (errorInput) {
                                        $('#dialog_container_custom').width("+=60");
                                        $('#dialog_content_custom').width("+=60");
                                    }

                                    if (rectRoundInputs == 4) {
                                        box.hide();
                                        var resp = type == "prompt" ? input.val() : true;
                                        if (callback) callback(resp);
                                    }
                                });
                                break;
                            case "drill":
                                var drillInputs = 0;
                                var inputs = 0;
                                var error = 0;

                                $("#dialog_buttons_custom").children().first().click(function(event) {
                                    drillInputs = $('input[machiningOption="drill"]:checked').length;
                                    //console.log(drillInputs);
                                    inputs = 0;
                                    if (drillInputs == 0) {
                                        $(".FaceSelection").addClass("input-error");
                                    } else {
                                        $(".FaceSelection").removeClass("input-error");
                                    }


                                    if ($('#inputErrorWDrill').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorHDrill').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorDiameterDrill').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorDepthDrill').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    $('input[machiningInput="drill"]').each(function() {
                                        $(this).removeClass("input-error");
                                        if ($(this).prop("required")) {
                                            if (($(this).val() != "") /*&& eval(!math.evaluate($(this).val(), curConfig.scope))*/ ) {

                                                try {
                                                    math.evaluate($(this).val(), curConfig.scope)
                                                    drillInputs++;
                                                    inputs++;

                                                    if ($(this).hasClass("inputErrorWDrill"))
                                                        $('#inputErrorWDrill').hide();
                                                    if ($(this).hasClass("inputErrorHDrill"))
                                                        $('#inputErrorHDrill').hide();
                                                    if ($(this).hasClass("inputErrorDiameterDrill"))
                                                        $('#inputErrorDiameterDrill').hide();
                                                    if ($(this).hasClass("inputErrorDepthDrill"))
                                                        $('#inputErrorDepthDrill').hide();


                                                } catch (error) {
                                                    $(this).addClass("input-error");

                                                    if ($(this).hasClass("inputErrorWDrill")) {
                                                        $('#inputErrorWDrill').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorHDrill")) {
                                                        $('#inputErrorHDrill').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorDiameterDrill")) {
                                                        $('#inputErrorDiameterDrill').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorDepthDrill")) {
                                                        $('#inputErrorDepthDrill').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }
                                                }
                                            } else {
                                                $(this).addClass("input-error");
                                            }
                                        }
                                    });

                                    $('input[type="checkbox"]').each(function() {
                                        $(this).removeClass("input-error");
                                        if ($(this).is(":checked")) {
                                            drillInputs++;
                                        } else {
                                            $(this).addClass("input-error");
                                        }
                                    });

                                    /*if ($('input[name="BroachDrill"]:checked').length == 0) {
                                                            $(".broachSelection").addClass("input-error");
                                                        } else {
                                                            $(".broachSelection").removeClass("input-error");
                                                            drillInputs++;
                                                        }*/
                                    //console.log(drillInputs);
                                    if ($('input[type="checkbox"]').is(":checked") && inputs == 5) {
                                        drillInputs--;
                                    }

                                    if (drillInputs == 6) {
                                        box.hide();
                                        var resp = type == "prompt" ? input.val() : true;
                                        if (callback) callback(resp);
                                    }
                                });

                                break;
                            case "hinge":
                                $("#dialog_buttons_custom").children().first().click(function(event) {
                                    /**var hingeInputs = 0,
                                        existsHinge = $("[machining=hinge]").length;

                                    $("#dialog_buttons_custom").removeClass("input-error");

                                    $('input[machiningInput="hinge"]').each(function() {
                                        $(this).removeClass("input-error");
                                        if ($(this).prop("required")) {
                                            if ($(this).val() != "") {

                                                hingeInputs++;

                                            } else {
                                                $(this).addClass("input-error");
                                            }
                                        }
                                    });

                                    if (hingeInputs == 7 ) {*/
                                    box.hide();
                                    var resp = type == "prompt" ? input.val() : true;
                                    if (callback) callback(resp);
                                    //}
                                });
                                break;
                            case "poly":
                                var polyInputs = 0;
                                $("#dialog_buttons_custom").children().first().click(function(event) {
                                    polyInputs = $('input[machiningOption="poly"]:checked')
                                        .length;
                                    if (polyInputs == 0) {
                                        $(".tablero").addClass("input-error");
                                    } else {
                                        $(".tablero").removeClass("input-error");
                                    }

                                    if ($('#inputErrorWPoly').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }
                                    if ($('#inputErrorHPoly').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    $('input[machiningInput="poly"]').each(function() {
                                        $(this).removeClass("input-error");
                                        if ($(this).val() != "") {

                                            try {
                                                math.evaluate($(this).val(), curConfig.scope)
                                                polyInputs++;

                                                if ($(this).hasClass("inputErrorWPoly"))
                                                    $('#inputErrorWPoly').hide();

                                                if ($(this).hasClass("inputErrorHPoly"))
                                                    $('#inputErrorHPoly').hide();
                                            } catch (error) {
                                                //console.log(error.split('/n')[0]);
                                                $(this).addClass("input-error");

                                                if ($(this).hasClass("inputErrorWPoly"))
                                                    $('#inputErrorWPoly').show();

                                                if ($(this).hasClass("inputErrorHPoly"))
                                                    $('#inputErrorHPoly').show();

                                                $('#dialog_container_custom').height("+=15");
                                                $('#dialog_content_custom').height("+=15");
                                            }

                                        } else {
                                            $(this).addClass("input-error");
                                        }
                                    });
                                    //console.log(polyInputs);

                                    if (polyInputs == 3) {
                                        box.hide();
                                        var resp = type == "prompt" ? input.val() : true;
                                        if (callback) callback(resp);
                                    }
                                });
                                break;
                            case "rect":
                                $("#dialog_buttons_custom").children().first().click(function(event) {
                                    var rectInputs = 0;

                                    if ($('#inputErrorRealXRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorRealYRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorWRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorHRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    $('input[machiningInput="rect"]').each(function() {
                                        $(this).removeClass("input-error");
                                        if ($(this).prop("required")) {
                                            if ($(this).val() != "") {

                                                try {
                                                    math.evaluate($(this).val(), curConfig.scope)
                                                    rectInputs++;

                                                    if ($(this).hasClass("inputErrorRealXRect"))
                                                        $('#inputErrorRealXRect').hide();
                                                    if ($(this).hasClass("inputErrorRealYRect"))
                                                        $('#inputErrorRealYRect').hide();
                                                    if ($(this).hasClass("inputErrorWRect"))
                                                        $('#inputErrorWRect').hide();
                                                    if ($(this).hasClass("inputErrorHRect"))
                                                        $('#inputErrorHRect').hide();


                                                } catch (error) {
                                                    $(this).addClass("input-error");

                                                    if ($(this).hasClass("inputErrorRealXRect")) {
                                                        $('#inputErrorRealXRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorRealYRect")) {
                                                        $('#inputErrorRealYRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorWRect")) {
                                                        $('#inputErrorWRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorHRect")) {
                                                        $('#inputErrorHRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                }
                                            } else {
                                                $(this).addClass("input-error");
                                            }
                                        }
                                    });

                                    if (rectInputs == 4) {
                                        box.hide();
                                        var resp = type == "prompt" ? input.val() : true;
                                        if (callback) callback(resp);
                                    }
                                });
                                break;
                            case "rectRound":
                                $("#dialog_buttons_custom").children().first().click(function(event) {
                                    var rectRoundInputs = 0;

                                    if ($('#inputErrorRealXRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorRealYRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorWRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorHRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorRXRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    if ($('#inputErrorRYRect').is(":visible")) {
                                        $('#dialog_container_custom').height("-=15");
                                        $('#dialog_content_custom').height("-=15");
                                    }

                                    $('input[machiningInput="rectRound"]').each(function() {
                                        $(this).removeClass("input-error");
                                        if ($(this).prop("required")) {
                                            if ($(this).val() != "") {

                                                try {
                                                    math.evaluate($(this).val(), curConfig.scope)
                                                    rectRoundInputs++;

                                                    if ($(this).hasClass("inputErrorRealXRect"))
                                                        $('#inputErrorRealXRect').hide();
                                                    if ($(this).hasClass("inputErrorRealYRect"))
                                                        $('#inputErrorRealYRect').hide();
                                                    if ($(this).hasClass("inputErrorWRect"))
                                                        $('#inputErrorWRect').hide();
                                                    if ($(this).hasClass("inputErrorHRect"))
                                                        $('#inputErrorHRect').hide();
                                                    if ($(this).hasClass("inputErrorRXRect"))
                                                        $('#inputErrorRXRect').hide();
                                                    if ($(this).hasClass("inputErrorRYRect"))
                                                        $('#inputErrorRYRect').hide();


                                                } catch (error) {
                                                    $(this).addClass("input-error");

                                                    if ($(this).hasClass("inputErrorRealXRect")) {
                                                        $('#inputErrorRealXRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorRealYRect")) {
                                                        $('#inputErrorRealYRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorWRect")) {
                                                        $('#inputErrorWRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorHRect")) {
                                                        $('#inputErrorHRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorRXRect")) {
                                                        $('#inputErrorRXRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                    if ($(this).hasClass("inputErrorRYRect")) {
                                                        $('#inputErrorRYRect').show();
                                                        $('#dialog_container_custom').height("+=15");
                                                        $('#dialog_content_custom').height("+=15");
                                                    }

                                                }
                                            } else {
                                                $(this).addClass("input-error");
                                            }
                                        }
                                    });

                                    //console.log(rectRoundInputs);

                                    if (rectRoundInputs == 6) {
                                        box.hide();
                                        var resp = type == "prompt" ? input.val() : true;
                                        if (callback) callback(resp);
                                    }
                                });
                                break;
                            default:
                                break;
                        }
                        /////////////////////////////////////////////////

                        if (type != "alert") {
                            $('<input type="button" value="Cancel"  id="buttonDialogCancel">')
                                .appendTo(btn_holder)
                                .on("click touchstart", function() {
                                    box.hide();
                                    callback(false);
                                });
                        }

                        if (type == "prompt") {
                            var input = $('<input type="text">').prependTo(btn_holder);
                            input.val(defText || "");
                            input.bind("keydown", "return", function() {
                                ok.trigger("click touchstart");
                            });
                        }

                        if (type == "process") {
                            ok.hide();
                        }

                        box.show();
                        //cflorioluis - ocultar evento callback original si se trata de un mecanizado
                        switch (machiningType) {
                            case "rectRound":
                            case "rect":
                            case "poly":
                            case "hinge":
                            case "drill":
                            case "pocket":
                                break;
                            default:
                                ok.on("click touchstart", function() {
                                    box.hide();
                                    var resp = type == "prompt" ? input.val() : true;
                                    if (callback) callback(resp);
                                }).focus();
                                break;
                        }
                        if (type == "prompt") input.focus();
                    };

                    $.alert = function(msg, cb) {
                        dbox("alert", msg, cb);
                    };
                    $.confirm = function(msg, cb, width, height, custom, isCenter, machiningType) {
                        dbox("confirm", msg, cb, width, height, custom, isCenter, machiningType);
                    };
                    $.process_cancel = function(msg, cb) {
                        dbox("process", msg, cb);
                    };
                    $.prompt = function(msg, txt, cb) {
                        dbox("prompt", msg, cb, txt);
                    };
                })();

                var setSelectMode = function() {
                    var curr = $(".tool_button_current");
                    if (curr.length && curr[0].id !== "tool_select") {
                        curr.removeClass("tool_button_current").addClass("tool_button");
                        $("#tool_select")
                            .addClass("tool_button_current")
                            .removeClass("tool_button");
                    }
                    svgCanvas.setMode("select");
                };

                var setEyedropperMode = function() {
                    var curr = $(".tool_button_current");
                    if (curr.length && curr[0].id !== "tool_eyedropper") {
                        curr.removeClass("tool_button_current").addClass("tool_button");
                        $("#tool_eyedropper")
                            .addClass("tool_button_current")
                            .removeClass("tool_button");
                    }
                    svgCanvas.setMode("eyedropper");
                };

                var togglePathEditMode = function(editmode, elems) {
                    $("#tools_bottom_2,#tools_bottom_3").toggle(!editmode);
                    if (editmode) {
                        // Change select icon
                        $(".context_panel").hide();
                        $("#path_node_panel").show();
                        $(".tool_button_current")
                            .removeClass("tool_button_current")
                            .addClass("tool_button");
                        $("#tool_select")
                            .addClass("tool_button_current")
                            .removeClass("tool_button");
                        setIcon("#tool_select", "select_node");
                        multiselected = false;
                    } else {
                        if (elems[0]) {
                            var selector = svgCanvas.selectorManager.requestSelector(
                                elems[0]
                            );
                            selector.reset(elems[0]);
                            selector.selectorRect.setAttribute("display", "inline");
                        }

                        setIcon("#tool_select", "select");
                    }
                };

                // used to make the flyouts stay on the screen longer the very first time
                var flyoutspeed = 1250;
                var textBeingEntered = false;
                var selectedElement = null;
                var multiselected = false;
                var editingsource = false;
                var docprops = false;
                var preferences = false;
                var cur_context = "";

                var saveHandler = function(window, svg) {};

                var exportHandler = function(window, data) {
                    var issues = data.issues;

                    if (!$("#export_canvas").length) {
                        $("<canvas>", { id: "export_canvas" }).hide().appendTo("body");
                    }
                    var c = $("#export_canvas")[0];

                    c.width = svgCanvas.contentW;
                    c.height = svgCanvas.contentH;
                    canvg(c, data.svg, {
                        renderCallback: function() {
                            var datauri = c.toDataURL("image/png");
                            exportWindow.location.href = datauri;
                            var done = $.pref("export_notice_done");
                            if (done !== "all") {
                                var note =
                                    'Select "Save As..." in your browser to save this image as a PNG file.';
                                // Check if there's issues
                                if (issues.length) {
                                    var pre = "\n \u2022 ";
                                    note +=
                                        "\n\n" +
                                        "Also note the following issues: " +
                                        pre +
                                        issues.join(pre);
                                }

                                // Note that this will also prevent the notice even though new issues may appear later.
                                // May want to find a way to deal with that without annoying the user
                                $.pref("export_notice_done", "all");
                                exportWindow.alert(note);
                            }
                        },
                    });
                };

                // called when we've selected a different element
                var selectedChanged = function(window, elems) {
                    var mode = svgCanvas.getMode();
                    if (mode === "select") setSelectMode();
                    if (mode === "pathedit") return updateContextPanel();
                    // if elems[1] is present, then we have more than one element
                    selectedElement =
                        elems.length == 1 || elems[1] == null ? elems[0] : null;
                    elems = elems.filter(Boolean);
                    multiselected = elems.length >= 2 ? elems : false;
                    if (svgCanvas.elementsAreSame(multiselected))
                        selectedElement = multiselected[0];
                    if (selectedElement != null) {
                        $("#multiselected_panel").hide();
                        updateToolbar();
                        if (multiselected.length) {
                            //multiselected elements are the same
                            $("#tools_top").addClass("multiselected");
                        }
                    } else if (multiselected.length) {
                        $(".context_panel").hide();
                        $("#tools_top").removeClass("multiselected");
                        $("#multiselected_panel").show();
                    } else {
                        $(".context_panel").hide();
                        $("#canvas_panel").show();
                        $("#tools_top").removeClass("multiselected");
                    }
                    svgCanvas.runExtensions("selectedChanged", {
                        elems: elems,
                        selectedElement: selectedElement,
                        multiselected: multiselected,
                    });
                };

                // Call when part of element is in process of changing, generally
                // on mousemove actions like rotate, move, etc.
                var elementTransition = function(window, elems) {
                    var mode = svgCanvas.getMode();
                    var elem = elems[0];

                    if (!elem) return;

                    multiselected = elems.length >= 2 && elems[1] != null ? elems : null;
                    // Only updating fields for single elements for now
                    if (!multiselected) {
                        switch (mode) {
                            case "rotate":
                                var ang = svgCanvas.getRotationAngle(elem);
                                $("#angle").val(Math.round(ang));
                                rotateCursor(ang);
                                $("#tool_reorient").toggleClass("disabled", ang == 0);
                                break;

                                // TODO: Update values that change on move/resize, etc
                                //            case "select":
                                //            case "resize":
                                //              break;
                        }
                    }
                    svgCanvas.runExtensions("elementTransition", {
                        elems: elems,
                    });
                };

                // called when any element has changed
                var elementChanged = function(window, elems) {
                    var mode = svgCanvas.getMode();
                    if (mode === "select") {
                        setSelectMode();
                    }

                    for (var i = 0; i < elems.length; ++i) {
                        var elem = elems[i];

                        // if the element changed was the svg, then it could be a resolution change
                        if (elem && elem.tagName === "svg") {
                            //populateLayers();
                            updateCanvas();
                        }
                        // Update selectedElement if element is no longer part of the image.
                        // This occurs for the text elements in Firefox
                        else if (
                            elem &&
                            selectedElement &&
                            selectedElement.parentNode == null
                        ) {
                            //            || elem && elem.tagName == "path" && !multiselected) { // This was added in r1430, but not sure why
                            selectedElement = elem;
                        }
                    }

                    Editor.show_save_warning = true;

                    // we update the contextual panel with potentially new
                    // positional/sizing information (we DON'T want to update the
                    // toolbar here as that creates an infinite loop)
                    // also this updates the history buttons

                    // we tell it to skip focusing the text control if the
                    // text element was previously in focus
                    updateContextPanel();

                    // In the event a gradient was flipped:
                    if (selectedElement && mode === "select") {
                        Editor.paintBox.fill.update();
                        Editor.paintBox.stroke.update();
                    }

                    svgCanvas.runExtensions("elementChanged", {
                        elems: elems,
                    });
                };

                var zoomChanged = function(window, bbox, autoCenter) {
                    var scrbar = 15,
                        res = svgCanvas.getResolution(),
                        w_area = workarea,
                        canvas_pos = $("#svgcanvas").position();
                    var z_info = svgCanvas.setBBoxZoom(
                        bbox,
                        w_area.width() - scrbar,
                        w_area.height() - scrbar
                    );
                    if (!z_info) return;
                    var zoomlevel = z_info.zoom,
                        bb = z_info.bbox;

                    if (zoomlevel < 0.001) {
                        changeZoom({ value: 0.1 });
                        return;
                    }
                    if (typeof animatedZoom != "undefined")
                        window.cancelAnimationFrame(animatedZoom);
                    // zoom duration 500ms
                    var start = Date.now();
                    var duration = 500;
                    var diff = zoomlevel - res.zoom;
                    var zoom = $("#zoom")[0];
                    var current_zoom = res.zoom;
                    var animateZoom = function(timestamp) {
                        var progress = Date.now() - start;
                        var tick = progress / duration;
                        tick = Math.pow(tick - 1, 3) + 1;
                        svgCanvas.setZoom(current_zoom + diff * tick);
                        updateCanvas();
                        if (tick < 1 && tick > -0.9) {
                            window.animatedZoom = requestAnimationFrame(animateZoom);
                        } else {
                            $("#zoom").val(parseInt(zoomlevel * 100));
                            $("option", "#zoom_select").removeAttr("selected");
                            $(
                                "option[value=" + parseInt(zoomlevel * 100) + "]",
                                "#zoom_select"
                            ).attr("selected", "selected");
                        }
                    };
                    animateZoom();

                    //if(autoCenter) {
                    //  updateCanvas();
                    //} else {
                    //  updateCanvas(false, {x: bb.x * zoomlevel + (bb.width * zoomlevel)/2, y: bb.y * zoomlevel + (bb.height * zoomlevel)/2});
                    //}

                    if (svgCanvas.getMode() == "zoom" && bb.width) {
                        // Go to select if a zoom box was drawn
                        setSelectMode();
                    }

                    zoomDone();
                };

                //cflorioluis - cambiar zoom respecto al tamaño de la pieza
                var changeZoomPiece = async function() {
                    var w_area = workarea;
                    var zoomValue = 0;
                    //cflorioluis - Calcular el zoom optimo para que las piezas siempre se vean a un tamaño similar
                    if (curConfig.dimensions[0] > curConfig.dimensions[1]) {
                        zoomValue = (w_area.width() / curConfig.dimensions[0] / 1.25) * 100;
                    } else {
                        zoomValue =
                            (w_area.height() / curConfig.dimensions[1] / 1.25) * 100;
                    }

                    var zoomlevel = zoomValue / 100;
                    if (zoomlevel < 0.001) {
                        zoomValue = 0.1;
                        return;
                    }
                    var zoom = await svgCanvas.getZoom();

                    zoomChanged(
                        window, {
                            width: 0,
                            height: 0,
                            // center pt of scroll position
                            x: (w_area[0].scrollLeft + w_area.width() / 2) / zoom,
                            y: (w_area[0].scrollTop + w_area.height() / 2) / zoom,
                            zoom: zoomlevel,
                        },
                        true
                    );
                    /*console.log("w_area[0].scrollLeft");
                                        console.log(w_area[0].scrollLeft);
                                        console.log("w_area[0].scrollTop");
                                        console.log(w_area[0].scrollTop);
                                        console.log("w_area.width()");
                                        console.log(w_area.width());
                                        console.log("w_area.height()");
                                        console.log(w_area.height());

                                        console.log("zoom");
                                        console.log(zoom);*/
                };

                changeZoomPiece();

                $("#cur_context_panel").delegate("a", "click", function() {
                    var link = $(this);
                    if (link.attr("data-root")) {
                        svgCanvas.leaveContext();
                    } else {
                        svgCanvas.setContext(link.text());
                    }
                    svgCanvas.clearSelection();
                    return false;
                });

                var contextChanged = function(win, context) {
                    var link_str = "";
                    if (context) {
                        var str = "";
                        link_str =
                            '<a href="#" data-root="y">' +
                            svgCanvas.getCurrentDrawing().getCurrentLayerName() +
                            "</a>";

                        $(context)
                            .parentsUntil("#svgcontent > g")
                            .andSelf()
                            .each(function() {
                                if (this.id) {
                                    str += " > " + this.id;
                                    if (this !== context) {
                                        link_str += ' > <a href="#">' + this.id + "</a>";
                                    } else {
                                        link_str += " > " + this.id;
                                    }
                                }
                            });

                        cur_context = str;
                    } else {
                        cur_context = null;
                    }
                    $("#cur_context_panel").toggle(!!context).html(link_str);
                };

                // Makes sure the current selected paint is available to work with
                var prepPaints = function() {
                    Editor.paintBox.fill.prep();
                    Editor.paintBox.stroke.prep();
                };

                var flyout_funcs = {};

                var setupFlyouts = function(holders) {
                    $.each(holders, function(hold_sel, btn_opts) {
                        var buttons = $(hold_sel).children();
                        var show_sel = hold_sel + "_show";
                        var shower = $(show_sel);
                        var def = false;
                        buttons
                            .addClass("tool_button")
                            .unbind("click mousedown mouseup") // may not be necessary
                            .each(function(i) {
                                // Get this buttons options
                                var opts = btn_opts[i];

                                // Remember the function that goes with this ID
                                flyout_funcs[opts.sel] = opts.fn;

                                if (opts.isDefault) def = i;

                                // Clicking the icon in flyout should set this set's icon
                                var func = function(event) {
                                    var options = opts;
                                    //find the currently selected tool if comes from keystroke
                                    if (event.type === "keydown") {
                                        var flyoutIsSelected = $(options.parent + "_show").hasClass(
                                            "tool_button_current"
                                        );
                                        var currentOperation = $(options.parent + "_show").attr(
                                            "data-curopt"
                                        );
                                        $.each(holders[opts.parent], function(i, tool) {
                                            if (tool.sel == currentOperation) {
                                                if (!event.shiftKey || !flyoutIsSelected) {
                                                    options = tool;
                                                } else {
                                                    options =
                                                        holders[opts.parent][i + 1] ||
                                                        holders[opts.parent][0];
                                                }
                                            }
                                        });
                                    }
                                    if ($(this).hasClass("disabled")) return false;
                                    if (toolButtonClick(show_sel)) {
                                        options.fn();
                                    }
                                    if (options.icon) {
                                        var icon = $.getSvgIcon(options.icon, true);
                                    } else {
                                        var icon = $(options.sel).children().eq(0).clone();
                                    }

                                    icon[0].setAttribute("width", shower.width());
                                    icon[0].setAttribute("height", shower.height());
                                    shower.children(":not(.flyout_arrow_horiz)").remove();
                                    shower.append(icon).attr("data-curopt", options.sel); // This sets the current mode
                                };

                                $(this).mouseup(func);

                                if (opts.key) {
                                    $(document).bind(
                                        "keydown",
                                        opts.key[0] + " shift+" + opts.key[0],
                                        func
                                    );
                                }
                            });

                        if (def) {
                            shower.attr("data-curopt", btn_opts[def].sel);
                        } else if (!shower.attr("data-curopt")) {
                            // Set first as default
                            shower.attr("data-curopt", btn_opts[0].sel);
                        }

                        var timer;

                        var pos = $(show_sel).position();
                        $(hold_sel).css({ left: pos.left + 34, top: pos.top + 77 });

                        // Clicking the "show" icon should set the current mode
                        shower
                            .mousedown(function(evt) {
                                $("#workarea").one("mousedown", function() {
                                    $("#tools_shapelib").hide();
                                });
                                if ($("#tools_shapelib").is(":visible"))
                                    toolButtonClick(show_sel, false);
                                if (shower.hasClass("disabled")) return false;
                                var holder = $(hold_sel);
                                var l = pos.left + 34;
                                var w = holder.width() * -1;
                                var time = holder.data("shown_popop") ? 200 : 0;
                                timer = setTimeout(function() {
                                    // Show corresponding menu
                                    if (!shower.data("isLibrary")) {
                                        holder.css("left", w).show().animate({
                                                left: l,
                                            },
                                            50
                                        );
                                    } else {
                                        holder.css("left", l).show();
                                    }
                                    holder.data("shown_popop", true);
                                }, time);
                                evt.preventDefault();
                            })
                            .mouseup(function(evt) {
                                clearTimeout(timer);
                                var opt = $(this).attr("data-curopt");
                                // Is library and popped up, so do nothing
                                if (
                                    shower.data("isLibrary") &&
                                    $(show_sel.replace("_show", "")).is(":visible")
                                ) {
                                    toolButtonClick(show_sel, true);
                                    return;
                                }
                                if (toolButtonClick(show_sel) && opt in flyout_funcs) {
                                    flyout_funcs[opt]();
                                }
                            });

                        //  $('#tools_rect').mouseleave(function(){$('#tools_rect').fadeOut();});
                    });

                    setFlyoutTitles();
                };

                var makeFlyoutHolder = function(id, child) {
                    var div = $("<div>", {
                            class: "tools_flyout",
                            id: id,
                        })
                        .appendTo("#svg_editor")
                        .append(child);

                    return div;
                };

                var setFlyoutPositions = function() {
                    $(".tools_flyout").each(function() {
                        var shower = $("#" + this.id + "_show");
                        var pos = shower.offset();
                        var w = shower.outerWidth();
                        $(this).css({ left: (pos.left + w) * tool_scale, top: pos.top });
                    });
                };

                var setFlyoutTitles = function() {
                    $(".tools_flyout").each(function() {
                        var shower = $("#" + this.id + "_show");
                        if (shower.data("isLibrary")) return;

                        var tooltips = [];
                        $(this)
                            .children()
                            .each(function() {
                                tooltips.push(this.title);
                            });
                        shower[0].title = tooltips.join(" / ");
                    });
                };

                var resize_timer;

                var extAdded = function(window, ext) {
                    var cb_called = false;
                    var resize_done = false;
                    var cb_ready = true; // Set to false to delay callback (e.g. wait for $.svgIcons)

                    function prepResize() {
                        if (resize_timer) {
                            clearTimeout(resize_timer);
                            resize_timer = null;
                        }
                        if (!resize_done) {
                            resize_timer = setTimeout(function() {
                                resize_done = true;
                                setIconSize(curPrefs.iconsize);
                            }, 50);
                        }
                    }

                    var runCallback = function() {
                        if (ext.callback && !cb_called && cb_ready) {
                            cb_called = true;
                            ext.callback();
                        }
                    };

                    var btn_selects = [];

                    if (ext.context_tools) {
                        $.each(ext.context_tools, function(i, tool) {
                            // Add select tool
                            var cont_id = tool.container_id ?
                                ' id="' + tool.container_id + '"' :
                                "";

                            var panel = $("#" + tool.panel);

                            // create the panel if it doesn't exist
                            if (!panel.length)
                                panel = $("<div>", { id: tool.panel })
                                .appendTo("#tools_top")
                                .hide();

                            // TODO: Allow support for other types, or adding to existing tool
                            switch (tool.type) {
                                case "tool_button":
                                    var html = '<div class="tool_button">' + tool.id + "</div>";
                                    var div = $(html).appendTo(panel);
                                    if (tool.events) {
                                        $.each(tool.events, function(evt, func) {
                                            $(div).bind(evt, func);
                                        });
                                    }
                                    break;

                                case "select":
                                    var html =
                                        "<label" + cont_id + ">" + '<select id="' + tool.id + '">';
                                    $.each(tool.options, function(val, text) {
                                        var sel = val == tool.defval ? " selected" : "";
                                        html +=
                                            '<option value="' +
                                            val +
                                            '"' +
                                            sel +
                                            ">" +
                                            text +
                                            "</option>";
                                    });
                                    html += "</select></label>";
                                    // Creates the tool, hides & adds it, returns the select element
                                    var sel = $(html).appendTo(panel).find("select");

                                    $.each(tool.events, function(evt, func) {
                                        $(sel).bind(evt, func);
                                    });
                                    break;
                                case "button-select":
                                    var html =
                                        '<div id="' +
                                        tool.id +
                                        '" class="dropdown toolset" title="' +
                                        tool.title +
                                        '">' +
                                        '<div id="cur_' +
                                        tool.id +
                                        '" class="icon_label"></div><button></button></div>';

                                    var list = $('<ul id="' + tool.id + '_opts"></ul>').appendTo(
                                        "#option_lists"
                                    );
                                    if (tool.colnum) {
                                        list.addClass("optcols" + tool.colnum);
                                    }

                                    // Creates the tool, hides & adds it, returns the select element
                                    var dropdown = $(html).appendTo(panel).children();

                                    btn_selects.push({
                                        elem: "#" + tool.id,
                                        list: "#" + tool.id + "_opts",
                                        title: tool.title,
                                        callback: tool.events.change,
                                        cur: "#cur_" + tool.id,
                                    });

                                    break;
                                case "input":
                                    var html =
                                        "<label" +
                                        cont_id +
                                        ">" +
                                        '<span id="' +
                                        tool.id +
                                        '_label">' +
                                        tool.label +
                                        ":</span>" +
                                        '<input id="' +
                                        tool.id +
                                        '" title="' +
                                        tool.title +
                                        '" size="' +
                                        (tool.size || "4") +
                                        '" value="' +
                                        (tool.defval || "") +
                                        '" type="text"/></label>';

                                    // Creates the tool, hides & adds it, returns the select element

                                    // Add to given tool.panel
                                    var inp = $(html).appendTo(panel).find("input");

                                    if (tool.spindata) {
                                        inp.SpinButton(tool.spindata);
                                    }

                                    if (tool.events) {
                                        $.each(tool.events, function(evt, func) {
                                            inp.bind(evt, func);
                                        });
                                    }
                                    break;

                                default:
                                    break;
                            }
                        });
                    }

                    if (ext.buttons) {
                        var fallback_obj = {},
                            placement_obj = {},
                            svgicons = ext.svgicons;
                        var holders = {};

                        // Add buttons given by extension
                        $.each(ext.buttons, function(i, btn) {
                            var icon;
                            var id = btn.id;
                            var num = i;
                            // Give button a unique ID
                            while ($("#" + id).length) {
                                id = btn.id + "_" + ++num;
                            }
                            if (!svgicons) {
                                icon =
                                    btn.type == "menu" ? "" : $('<img src="' + btn.icon + '">');
                            } else {
                                fallback_obj[id] = btn.icon;
                                var svgicon = btn.svgicon ? btn.svgicon : btn.id;
                                if (btn.type == "app_menu") {
                                    placement_obj["#" + id + " > div"] = svgicon;
                                } else {
                                    placement_obj["#" + id] = svgicon;
                                }
                            }

                            var cls, parent;

                            // Set button up according to its type
                            switch (btn.type) {
                                case "mode_flyout":
                                case "mode":
                                    cls = "tool_button";
                                    if (btn.cls) {
                                        cls += " " + btn.cls;
                                    }
                                    parent = "#tools_left";
                                    break;
                                case "context":
                                    cls = "tool_button";
                                    parent = "#" + btn.panel;
                                    // create the panel if it doesn't exist
                                    if (!$(parent).length)
                                        $("<div>", { id: btn.panel }).appendTo("#tools_top");
                                    break;
                                case "menu":
                                    cls = "menu_item tool_button";
                                    parent = "#" + (btn.after || btn.panel);
                                    break;
                                case "app_menu":
                                    cls = "";
                                    parent = btn.parent || "#main_menu ul";
                                    // create the panel if it doesn't exist
                                    if (!$(parent).length)
                                        $("<div>", { id: btn.panel }).appendTo("#tools_top");
                                    break;
                            }

                            var button = $(
                                    btn.list || btn.type == "app_menu" ? "<li/>" : "<div/>"
                                )
                                .attr("id", id)
                                .attr("title", btn.title)
                                .addClass(cls);
                            if (!btn.includeWith && !btn.list) {
                                if ("position" in btn) {
                                    $(parent).children().eq(btn.position).before(button);
                                } else {
                                    if (btn.type != "menu" || !btn.after) button.appendTo(parent);
                                    else $(parent).after(button);
                                }

                                if (btn.type == "mode_flyout") {
                                    // Add to flyout menu / make flyout menu
                                    //              var opts = btn.includeWith;
                                    //              // opts.button, default, position
                                    var ref_btn = $(button);

                                    var flyout_holder = ref_btn.parent();
                                    // Create a flyout menu if there isn't one already
                                    if (!ref_btn.parent().hasClass("tools_flyout")) {
                                        // Create flyout placeholder
                                        var tls_id = ref_btn[0].id.replace("tool_", "tools_");
                                        var show_btn = ref_btn
                                            .clone()
                                            .attr("id", tls_id + "_show")
                                            .append($("<div>", { class: "flyout_arrow_horiz" }));

                                        ref_btn.before(show_btn);

                                        // Create a flyout div
                                        flyout_holder = makeFlyoutHolder(tls_id, ref_btn);
                                        flyout_holder.data("isLibrary", true);
                                        show_btn.data("isLibrary", true);
                                    }

                                    //              var ref_data = Actions.getButtonData(opts.button);

                                    placement_obj["#" + tls_id + "_show"] = btn.id;
                                    // TODO: Find way to set the current icon using the iconloader if this is not default

                                    // Include data for extension button as well as ref button
                                    var cur_h = (holders["#" + flyout_holder[0].id] = [{
                                            sel: "#" + id,
                                            fn: btn.events.click,
                                            icon: btn.id,
                                            //key: btn.key,
                                            isDefault: true,
                                        },
                                        ref_data,
                                    ]);
                                } else if (btn.type == "app_menu" || btn.type == "menu") {
                                    button.append(btn.title);
                                }
                            } else if (btn.list) {
                                // Add button to list
                                button.addClass("push_button");
                                $("#" + btn.list + "_opts").append(button);
                                if (btn.isDefault) {
                                    $("#cur_" + btn.list).append(button.children().clone());
                                    var svgicon = btn.svgicon ? btn.svgicon : btn.id;
                                    placement_obj["#cur_" + btn.list] = svgicon;
                                }
                            } else if (btn.includeWith) {
                                // Add to flyout menu / make flyout menu
                                var opts = btn.includeWith;
                                // opts.button, default, position
                                var ref_btn = $(opts.button);

                                var flyout_holder = ref_btn.parent();
                                // Create a flyout menu if there isn't one already
                                if (!ref_btn.parent().hasClass("tools_flyout")) {
                                    // Create flyout placeholder
                                    var tls_id = ref_btn[0].id.replace("tool_", "tools_");
                                    var show_btn = ref_btn
                                        .clone()
                                        .attr("id", tls_id + "_show")
                                        .append($("<div>", { class: "flyout_arrow_horiz" }));

                                    ref_btn.before(show_btn);

                                    // Create a flyout div
                                    flyout_holder = makeFlyoutHolder(tls_id, ref_btn);
                                }

                                var ref_data = Actions.getButtonData(opts.button);

                                if (opts.isDefault) {
                                    placement_obj["#" + tls_id + "_show"] = btn.id;
                                }
                                // TODO: Find way to set the current icon using the iconloader if this is not default

                                // Include data for extension button as well as ref button
                                var cur_h = (holders["#" + flyout_holder[0].id] = [{
                                        sel: "#" + id,
                                        fn: btn.events.click,
                                        icon: btn.id,
                                        key: btn.key,
                                        isDefault: btn.includeWith ? btn.includeWith.isDefault : 0,
                                    },
                                    ref_data,
                                ]);

                                // {sel:'#tool_rect', fn: clickRect, evt: 'mouseup', key: 4, parent: '#tools_rect', icon: 'rect'}

                                var pos = "position" in opts ? opts.position : "last";
                                var len = flyout_holder.children().length;

                                // Add at given position or end
                                if (!isNaN(pos) && pos >= 0 && pos < len) {
                                    flyout_holder.children().eq(pos).before(button);
                                } else {
                                    flyout_holder.append(button);
                                    cur_h.reverse();
                                }
                            }

                            if (!svgicons) {
                                button.append(icon);
                            }

                            if (!btn.list) {
                                // Add given events to button
                                $.each(btn.events, function(name, func) {
                                    if (name == "click") {
                                        if (btn.type == "mode") {
                                            if (btn.includeWith) {
                                                button.bind(name, func);
                                            } else {
                                                button.bind(name, function() {
                                                    if (toolButtonClick(button)) {
                                                        func();
                                                    }
                                                });
                                            }
                                            if (btn.key) {
                                                $(document).bind("keydown", btn.key, func);
                                                if (btn.title)
                                                    button.attr(
                                                        "title",
                                                        btn.title + " [" + btn.key + "]"
                                                    );
                                            }
                                        } else {
                                            button.bind(name, func);
                                        }
                                    } else {
                                        button.bind(name, func);
                                    }
                                });
                            }
                            setupFlyouts(holders);
                        });

                        $.each(btn_selects, function() {
                            addAltDropDown(this.elem, this.list, this.callback, {
                                seticon: true,
                            });
                        });

                        if (svgicons) cb_ready = false; // Delay callback

                        $.svgIcons(svgicons, {
                            w: 27,
                            h: 27,
                            id_match: false,
                            no_img: !isWebkit,
                            fallback: fallback_obj,
                            placement: placement_obj,
                            callback: function(icons) {
                                // Non-ideal hack to make the icon match the current size
                                if (curPrefs.iconsize && curPrefs.iconsize != "m") {
                                    prepResize();
                                }
                                cb_ready = true; // Ready for callback
                                runCallback();
                            },
                        });
                    }

                    runCallback();
                };

                var getPaint = function(color, opac, type) {
                    // update the editor's fill paint
                    var opts = null;
                    if (color.indexOf("url(#") === 0) {
                        var refElem = svgCanvas.getRefElem(color);
                        if (refElem) {
                            refElem = refElem.cloneNode(true);
                        } else {
                            refElem = $("#" + type + "_color defs *")[0];
                        }

                        opts = { alpha: opac };
                        opts[refElem.tagName] = refElem;
                    } else if (color.indexOf("#") === 0) {
                        opts = {
                            alpha: opac,
                            solidColor: color.substr(1),
                        };
                    } else {
                        opts = {
                            alpha: opac,
                            solidColor: "none",
                        };
                    }
                    return new $.jGraduate.Paint(opts);
                };

                // set the canvas properties at init
                var res = svgCanvas.getResolution();
                if (curConfig.baseUnit !== "px") {
                    res.w = svgedit.units.convertUnit(res.w) + curConfig.baseUnit;
                    res.h = svgedit.units.convertUnit(res.h) + curConfig.baseUnit;
                }

                //cflorioluis - Cambiar la funcion para que cree todos los fondos de todos los elementos
                var createBackground = function(fill) {
                    svgCanvas.createLayer("background");
                    cur_shape = svgCanvas.addSvgElementFromJson({
                        element: "rect",
                        attr: {
                            x: 4, //-1
                            y: 4, //-1
                            width: res.w - 8, //res.w + 2
                            height: res.h - 8, //res.h + 2
                            stroke: "none",
                            id: "canvas_background",
                            opacity: 1,
                            fill: fill || "url(#imgCanvasBackground)", //"#0ff",
                            style: "pointer-events:none",
                        },
                    });
                    svgCanvas.setCurrentLayer("Pieza " + curConfig.partW + "x" + curConfig.partL);
                    svgCanvas.setCurrentLayerPosition("1");
                };

                // create a new layer background if it doesn't exist
                if (!document.getElementById("canvas_background")) createBackground();
                var fill = document
                    .getElementById("canvas_background")
                    .getAttribute("fill");

                // updates the toolbar (colors, opacity, etc) based on the selected element
                // This function also updates the opacity and id elements that are in the context panel
                var updateToolbar = function() {
                    if (selectedElement != null) {
                        switch (selectedElement.tagName) {
                            case "use":
                                $(".context_panel").hide();
                                $("#use_panel").show();
                                break;
                            case "image":
                                $(".context_panel").hide();
                                $("#image_panel").show();
                                break;
                            case "foreignObject":
                                $(".context_panel").hide();
                                break;
                            case "g":
                            case "a":
                                // Look for common styles
                                var gWidth = null;

                                var childs = selectedElement.getElementsByTagName("*");
                                for (var i = 0, len = childs.length; i < len; i++) {
                                    var swidth = childs[i].getAttribute("stroke-width");
                                    if (i === 0) {
                                        gWidth = swidth;
                                    } else if (gWidth !== swidth) {
                                        gWidth = null;
                                    }
                                }

                                $("#stroke_width").val(gWidth === null ? "0" : gWidth);
                                updateContextPanel();
                                break;
                            default:
                                //removed because multiselect shouldnt set color
                                //Editor.paintBox.fill.update(false);
                                //Editor.paintBox.stroke.update(false);

                                $("#stroke_width").val(
                                    selectedElement.getAttribute("stroke-width") || 0
                                );
                                var dash =
                                    selectedElement.getAttribute("stroke-dasharray") || "none";
                                $("option", "#stroke_style").removeAttr("selected");
                                $('#stroke_style option[value="' + dash + '"]').attr(
                                    "selected",
                                    "selected"
                                );
                                $("#stroke_style").trigger("change");

                                $.fn.dragInput.updateCursor($("#stroke_width")[0]);
                                $.fn.dragInput.updateCursor($("#blur")[0]);
                        }
                    }

                    // All elements including image and group have opacity
                    if (selectedElement != null) {
                        var opac_perc =
                            (selectedElement.getAttribute("opacity") || 1.0) * 100;
                        $("#group_opacity").val(opac_perc);
                        $.fn.dragInput.updateCursor($("#group_opacity")[0]);
                    }
                };

                var setImageURL = (Editor.setImageURL = function(url) {
                    if (!url) url = default_img_url;

                    svgCanvas.setImageURL(url);
                    $("#image_url").val(url);
                });

                var setInputWidth = function(elem) {
                    var w = Math.min(Math.max(12 + elem.value.length * 6, 50), 300);
                    $(elem).width(w);
                };

                // updates the context panel tools based on the selected element
                var updateContextPanel = function(e) {
                    var elem = selectedElement;
                    //console.log(elem); //cflorioluis
                    // If element has just been deleted, consider it null
                    if (elem != null && !elem.parentNode) elem = null;
                    if (
                        multiselected &&
                        multiselected[0] != null &&
                        !multiselected[0].parentNode
                    )
                        multiselected = false;

                    var currentLayerName = svgCanvas
                        .getCurrentDrawing()
                        .getCurrentLayerName();
                    var currentMode = svgCanvas.getMode();
                    var unit = curConfig.baseUnit !== "px" ? curConfig.baseUnit : null;
                    var is_node = currentMode == "pathedit"; //elem ? (elem.id && elem.id.indexOf('pathpointgrip') == 0) : false;

                    if (is_node) {
                        $(".context_panel").hide();
                        $("#path_node_panel").show();
                        $("#stroke_panel").hide();
                        var point = path.getNodePoint();
                        $("#tool_add_subpath")
                            .removeClass("push_button_pressed")
                            .addClass("tool_button");
                        $("#tool_node_delete").toggleClass(
                            "disabled", !path.canDeleteNodes
                        );

                        // Show open/close button based on selected point
                        setIcon(
                            "#tool_openclose_path",
                            path.closed_subpath ? "open_path" : "close_path"
                        );

                        if (point) {
                            var seg_type = $("#seg_type");
                            if (unit) {
                                point.x = svgedit.units.convertUnit(point.x);
                                point.y = svgedit.units.convertUnit(point.y);
                            }
                            $("#path_node_x").val(Math.round(point.x));
                            $("#path_node_y").val(Math.round(point.y));
                            if (point.type) {
                                seg_type.val(point.type).removeAttr("disabled");
                                $("#seg_type_label").html(
                                    point.type == 4 ? "Straight" : "Curve"
                                );
                            } else {
                                seg_type.val(4).attr("disabled", "disabled");
                            }
                        }
                        $("#tools_top").removeClass("multiselected");
                        $("#stroke_panel").hide();
                        $("#canvas_panel").hide();
                        return;
                    }

                    var menu_items = $("#cmenu_canvas li");
                    $(".context_panel").hide();
                    $(".menu_item", "#edit_menu").addClass("disabled");
                    $(".menu_item", "#object_menu").addClass("disabled");

                    //hack to show the proper multialign box
                    if (multiselected) {
                        multiselected = multiselected.filter(Boolean);
                        elem = svgCanvas.elementsAreSame(multiselected) ?
                            multiselected[0] :
                            null;
                        if (elem) $("#tools_top").addClass("multiselected");
                    }

                    if (!elem && !multiselected) {
                        $("#tools_top").removeClass("multiselected");
                        $("#stroke_panel").hide();
                        $("#canvas_panel").show();
                    }

                    if (elem != null) {
                        if (!$(elem).attr("machining")) {
                            //cforioluis
                            $("#stroke_panel").show();
                        }
                        var elname = elem.nodeName;
                        var angle = svgCanvas.getRotationAngle(elem);
                        $("#angle").val(Math.round(angle));

                        var blurval = svgCanvas.getBlur(elem);
                        $("#blur").val(blurval);
                        if (!is_node && currentMode != "pathedit") {
                            if (!$(elem).attr("machining")) {
                                //cflorioluis - no monstrar el panel original de los elementos seleccionados
                                $("#selected_panel").show();
                            }

                            $(".action_selected").removeClass("disabled");
                            // Elements in this array already have coord fields
                            var x, y;
                            if (["g", "polyline", "path"].indexOf(elname) >= 0) {
                                var bb = svgCanvas.getStrokedBBox([elem]);
                                if (bb) {
                                    x = bb.x;
                                    y = bb.y;
                                }
                            }

                            if (unit) {
                                x = svgedit.units.convertUnit(x);
                                y = svgedit.units.convertUnit(y);
                            }

                            $("#" + elname + "_x").val(Math.round(x));
                            $("#" + elname + "_y").val(Math.round(y));
                            if (elname === "polyline") {
                                //we're acting as if polylines were paths
                                $("#path_x").val(Math.round(x));
                                $("#path_y").val(Math.round(y));
                            }

                            // Elements in this array cannot be converted to a path
                            var no_path = ["image", "text", "path", "g", "use"].indexOf(elname) == -1;
                            if (no_path)
                                $(".action_path_convert_selected").removeClass("disabled");
                            if (elname === "path")
                                $(".action_path_selected").removeClass("disabled");
                        }

                        var link_href = null;
                        if (el_name === "a") {
                            link_href = svgCanvas.getHref(elem);
                            $("#g_panel").show();
                        }

                        if (elem.parentNode.tagName === "a") {
                            if (!$(elem).siblings().length) {
                                $("#a_panel").show();
                                link_href = svgCanvas.getHref(elem.parentNode);
                            }
                        }

                        // Hide/show the make_link buttons
                        $("#tool_make_link, #tool_make_link").toggle(!link_href);

                        if (link_href) {
                            $("#link_url").val(link_href);
                        }

                        // update contextual tools here
                        var panels = {
                            g: [],
                            a: [],
                            /*rect: ["rx", "width", "height", "x", "y"],*/
                            image: ["width", "height", "x", "y"],
                            circle: ["cx", "cy", "r"],
                            ellipse: ["cx", "cy", "rx", "ry"],
                            line: ["x1", "y1", "x2", "y2"],
                            text: ["x", "y"],
                            use: [],
                            path: [],
                            //cforioluis - Herramientas laterales de Mecanizados
                            pocket: ["widthX", "heightY", "radio"],
                            drill: ["realX", "realY", "diameter"],
                            poly: ["widthX", "heightY"],
                            rect: ["width", "height", "realX", "realY"],
                            rectRound: ["width", "height", "realX", "realY", "rx", "ry"],
                            hinge: ["beginX", "endX", "hingeCount", "axisDist"], //qwerty
                            multiDrilling: ["beginX", "endX", "beginY", "endY", "count", "drillCount", "drillDepth", "axisDist", "step", "drillDiameter"]
                        };

                        /*cfloriluis - si el elemento es un cajeado se modificara el comportamiento del codigo original*/
                        //console.log(elem);

                        if (!$(elem).attr("machining")) {
                            var el_name = elem.tagName;
                        } else {
                            var el_name = $(elem).attr("machining");
                        }

                        /*console.log("elem.tagName");
                                                            console.log(elem.tagName);*/

                        if ($(elem).data("gsvg")) {
                            $("#g_panel").show();
                        }

                        if (!$(elem).attr("machining")) {
                            if (el_name == "path" || el_name == "polyline") {
                                $("#path_panel").show();
                            }
                        }

                        if (panels[el_name]) {
                            var cur_panel = panels[el_name];
                            //cflorioluis - buscar cerca de aqui ya que aqui se colocan las herramientas personalizadas de la derecha

                            //cflorioluis - Hacer que el panel lateral se ajuste a cada herramienta de mecanizado
                            //if(elem.)
                            //console.log("cur_panel")
                            //console.log(cur_panel)
                            /*switch ($(elem).attr("machining")) {
                                                            case "pocket":
                                                                $("#pocket_panel").show();
                                                                break;
                                                            case "drill":
                                                                $("#drill_panel").show();
                                                                break;

                                                            default:
                                                                break;
                                                        }
                                                        if (!$(elem).attr("machining")) {*/
                            $("#" + el_name + "_panel").show();
                            //}
                            //console.log($(elem).attr("machining"))

                            // corner radius has to live in a different panel
                            // because otherwise it changes the position of the
                            // of the elements
                            /*switch (el_name) {
                                case "rect":
                                    $("#cornerRadiusLabel").show();
                                    break;
                                case "hinge":
                                    if ($('#hinge_endX').val() == "0")
                                        $("#hinge_endX").val($("#textEnd").val());
                                    if ($('#hinge_axisDist').val() == "0")
                                        $("#hinge_axisDist").val($("#textEqual").val());
                                    break;

                                default:
                                    $("#cornerRadiusLabel").hide();
                                    break;
                            }*/
                            if (el_name == "rect") $("#cornerRadiusLabel").show();
                            else $("#cornerRadiusLabel").hide();

                            $.each(cur_panel, function(i, item) {
                                //console.log("elem");
                                //console.log(elem);
                                var attrVal = elem.getAttribute(item);
                                //console.log("attrVal");
                                //console.log(attrVal);

                                if (curConfig.baseUnit !== "px" && elem[item]) {
                                    var bv = elem[item].baseVal.value;
                                    attrVal = svgedit.units.convertUnit(bv);
                                }

                                //update the draginput cursors
                                //console.log("item");
                                //console.log(item);
                                var name_item = document.getElementById(el_name + "_" + item);
                                //console.log("name_item");
                                //console.log(name_item);
                                name_item.value = Math.round(attrVal) || 0;
                                if (name_item.getAttribute("data-cursor") === "true") {
                                    $.fn.dragInput.updateCursor(name_item);
                                }
                            });

                            if (el_name == "text") {
                                var font_family = elem.getAttribute("font-family");
                                var select = document.getElementById("font_family_dropdown");
                                select.selectedIndex = 3;

                                $("#text_panel").css("display", "inline");
                                $("#tool_italic").toggleClass("active", svgCanvas.getItalic());
                                $("#tool_bold").toggleClass("active", svgCanvas.getBold());
                                $("#font_family").val(font_family);
                                $("#font_size").val(elem.getAttribute("font-size"));
                                $("#text").val(elem.textContent);
                                $("#preview_font")
                                    .text(font_family.split(",")[0].replace(/'/g, ""))
                                    .css("font-family", font_family);
                                if (svgCanvas.addedNew) {
                                    // Timeout needed for IE9
                                    setTimeout(function() {
                                        $("#text").focus().select();
                                    }, 100);
                                }
                            } // text
                            else if (el_name == "image") {
                                setImageURL(svgCanvas.getHref(elem));
                            } // image
                            else if (el_name === "g" || el_name === "use") {
                                $("#container_panel").show();
                                $(".action_group_selected").removeClass("disabled");
                                var title = svgCanvas.getTitle();
                            }
                        }
                        menu_items[
                            (el_name === "g" ? "en" : "dis") + "ableContextMenuItems"
                        ]("#ungroup");
                        menu_items[
                            (el_name === "g" || !multiselected ? "dis" : "en") +
                            "ableContextMenuItems"
                        ]("#group");
                    }

                    if (multiselected) {
                        $("#multiselected_panel").show();
                        $(".action_multi_selected").removeClass("disabled");
                        menu_items
                            .enableContextMenuItems("#group")
                            .disableContextMenuItems("#ungroup");
                    }

                    if (!elem) {
                        menu_items.disableContextMenuItems(
                            "#delete,#cut,#copy,#group,#ungroup,#move_front,#move_up,#move_down,#move_back"
                        );
                    }

                    // update history buttons
                    if (undoMgr.getUndoStackSize() > 0) {
                        $("#tool_undo").removeClass("disabled");
                    } else {
                        $("#tool_undo").addClass("disabled");
                    }
                    if (undoMgr.getRedoStackSize() > 0) {
                        $("#tool_redo").removeClass("disabled");
                    } else {
                        $("#tool_redo").addClass("disabled");
                    }

                    svgCanvas.addedNew = false;

                    if ((elem && !is_node) || multiselected) {
                        // update the selected elements' layer
                        $("#selLayerNames").removeAttr("disabled").val(currentLayerName);

                        // Enable regular menu options
                        canv_menu.enableContextMenuItems(
                            "#delete,#cut,#copy,#move_front,#move_up,#move_down,#move_back"
                        );
                    }
                };

                $("#text").on("focus", function(e) {
                    textBeingEntered = true;
                });
                $("#text").on("blur", function() {
                    textBeingEntered = false;
                });

                // bind the selected event to our function that handles updates to the UI
                svgCanvas.bind("selected", selectedChanged);
                svgCanvas.bind("transition", elementTransition);
                svgCanvas.bind("changed", elementChanged);
                svgCanvas.bind("exported", exportHandler);
                svgCanvas.bind("zoomed", zoomChanged);
                svgCanvas.bind("contextset", contextChanged);
                svgCanvas.bind("extension_added", extAdded);
                svgCanvas.textActions.setInputElem($("#text")[0]);

                var str =
                    '<div class="palette_item transparent" data-rgb="none"></div>\
                <div class="palette_item black" data-rgb="#000000"></div>\
                <div class="palette_item white" data-rgb="#ffffff"></div>';
                palette.forEach(function(item, i) {
                    str +=
                        '<div class="palette_item" style="background-color: ' +
                        item +
                        ';" data-rgb="' +
                        item +
                        '"></div>';
                });
                $("#palette").append(str);

                var changeFontSize = function(ctl) {
                    svgCanvas.setFontSize(ctl.value);
                };

                var changeStrokeWidth = function(ctl) {
                    var val = ctl.value;
                    if (
                        val == 0 &&
                        selectedElement && ["line", "polyline"].indexOf(selectedElement.nodeName) >= 0
                    ) {
                        val = ctl.value = 1;
                    }
                    svgCanvas.setStrokeWidth(val);
                };

                //cache
                var $indicator = $("#tool_angle_indicator");
                var $reorient = $("#tool_reorient");

                rotateCursor = function(angle) {
                    var rotate_string = "rotate(" + angle + "deg)";
                    $indicator.css({
                        "-webkit-transform": rotate_string,
                        "-moz-transform": rotate_string,
                        "-o-transform": rotate_string,
                        "-ms-transform": rotate_string,
                        transform: rotate_string,
                    });
                };

                var changeRotationAngle = function(ctl) {
                    var preventUndo = true;
                    svgCanvas.setRotationAngle(ctl.value, preventUndo);
                    rotateCursor(ctl.value);
                    $("#tool_reorient").toggleClass("disabled", ctl.value == 0);
                };

                var changeZoom = function(ctl) {
                    //console.log(ctl);

                    var zoomlevel = ctl.value / 100;
                    if (zoomlevel < 0.001) {
                        ctl.value = 0.1;
                        return;
                    }
                    var zoom = svgCanvas.getZoom();
                    var w_area = workarea;
                    zoomChanged(
                        window, {
                            width: 0,
                            height: 0,
                            // center pt of scroll position
                            x: (w_area[0].scrollLeft + w_area.width() / 2) / zoom,
                            y: (w_area[0].scrollTop + w_area.height() / 2) / zoom,
                            zoom: zoomlevel,
                        },
                        true
                    );
                    /*
                                                            console.log("w_area[0].scrollLeft");
                                                            console.log(w_area[0].scrollLeft);
                                                            console.log("w_area[0].scrollTop");
                                                            console.log(w_area[0].scrollTop);
                                                            console.log("w_area.width()");
                                                            console.log(w_area.width());
                                                            console.log("w_area.height()");
                                                            console.log(w_area.height());

                                                            console.log("zoom");
                                                            console.log(zoom);*/
                };

                var changeBlur = function(ctl, completed) {
                    val = ctl.value;
                    $("#blur").val(val);
                    if (completed) {
                        svgCanvas.setBlur(val, true);
                    } else {
                        svgCanvas.setBlurNoUndo(val);
                    }
                };

                var operaRepaint = function() {
                    // Repaints canvas in Opera. Needed for stroke-dasharray change as well as fill change
                    if (!window.opera) return;
                    $("<p/>").hide().appendTo("body").remove();
                };

                $("#stroke_style").change(function() {
                    svgCanvas.setStrokeAttr("stroke-dasharray", $(this).val());
                    $("#stroke_style_label").html(this.options[this.selectedIndex].text);
                    operaRepaint();
                });

                $("#seg_type").change(function() {
                    svgCanvas.setSegType($(this).val());
                    $("#seg_type_label").html(this.options[this.selectedIndex].text);
                });

                // Lose focus for select elements when changed (Allows keyboard shortcuts to work better)
                $("select").change(function() {
                    $(this).blur();
                });

                $("#font_family").change(function() {
                    svgCanvas.setFontFamily(this.value);
                });

                $("#text").keyup(function() {
                    svgCanvas.setTextContent(this.value);
                });

                changeAttributePocket = function(el, completed) {
                    var attr = el.getAttribute("data-attr");
                    var multiplier = el.getAttribute("data-multiplier") || 1;
                    multiplier = parseFloat(multiplier);
                    var val = math.evaluate(el.value, curConfig.scope) * multiplier;
                    var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
                    if (!valid) {
                        $.alert("Invalid value given");
                        el.value = selectedElement.getAttribute(attr);
                        return false;
                    }

                    var minValue = parseInt($("#pocket_heightY").val());

                    if (parseInt($("#pocket_widthX").val()) < minValue) {
                        minValue = parseInt($("#pocket_widthX").val());
                    }

                    if (parseInt($("#pocket_radio").val()) > minValue) {
                        r = minValue;
                        $("#pocket_radio").val(minValue);
                    }

                    svgCanvas.getSelectedElems()[0].setAttribute("widthX", $("#pocket_widthX").val());
                    svgCanvas.getSelectedElems()[0].setAttribute("heightY", $("#pocket_heightY").val());
                    svgCanvas.getSelectedElems()[0].setAttribute("radio", $("#pocket_radio").val());

                    var side = svgCanvas.getSelectedElems()[0].getAttribute("side");
                    var w = svgCanvas.getSelectedElems()[0].getAttribute("widthX");
                    var h = svgCanvas.getSelectedElems()[0].getAttribute("heightY");
                    var r = svgCanvas.getSelectedElems()[0].getAttribute("radio");
                    var id = svgCanvas.getSelectedElems()[0].getAttribute("id");
                    var face = svgCanvas.getSelectedElems()[0].getAttribute("face");
                    var d = svgCanvas.createRoundedPocketSide(w, h, r, side, face);

                    svgCanvas.getSelectedElems()[0].setAttribute("d", d);
                    svgCanvas.editLinesInEdges(side, w, h, id, face);
                    svgCanvas.selectorManager.requestSelector(selectedElement).resize();

                    svgCanvas.changeSelectedAttributeNoUndo(attr, val);
                };

                changeAttributeDrill = function(el, completed) {
                    var attr = el.getAttribute("data-attr");
                    var multiplier = el.getAttribute("data-multiplier") || 1;
                    multiplier = parseFloat(multiplier);
                    var val = el.value * multiplier;
                    var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
                    if (!valid) {
                        $.alert("Invalid value given");
                        el.value = selectedElement.getAttribute(attr);
                        return false;
                    }
                    var realX = parseInt($("#drill_realX").val()),
                        realY = parseInt($("#drill_realY").val()),
                        diameter = parseInt($("#drill_diameter").val()),
                        face = svgCanvas.getSelectedElems()[0].getAttribute("face"),
                        quadrant = svgCanvas.getSelectedElems()[0].getAttribute("quadrant");

                    svgCanvas.getSelectedElems()[0].setAttribute("r", diameter / 2);


                    svgCanvas.getSelectedElems()[0].setAttribute("cx", realX + 100);
                    svgCanvas.getSelectedElems()[0].setAttribute("cy", realY + 100);

                    switch (Math.abs(parseInt(face) - parseInt(quadrant))) {
                        case 1:
                            svgCanvas.getSelectedElems()[0].setAttribute("cy", curConfig.realDimensions[1] - realY + 100);
                            break;
                        case 2:
                            svgCanvas.getSelectedElems()[0].setAttribute("cx", curConfig.realDimensions[0] - realX + 100);
                            svgCanvas.getSelectedElems()[0].setAttribute("cy", curConfig.realDimensions[1] - realY + 100);
                            break;
                        case 3:
                            svgCanvas.getSelectedElems()[0].setAttribute("cx", curConfig.realDimensions[0] - realX + 100);
                            break;
                        case 4:
                            svgCanvas.getSelectedElems()[0].setAttribute("cx", realX + 100);
                            svgCanvas.getSelectedElems()[0].setAttribute("cy", realY + 100);
                            break;
                    }

                    svgCanvas.changeSelectedAttributeNoUndo(attr, val);
                    //var r = parseInt(svgCanvas.getSelectedElems()[0].getAttribute("r"));
                };

                changeAttributeHinge = function(el, completed) {
                    var attr = el.getAttribute("data-attr");
                    var multiplier = el.getAttribute("data-multiplier") || 1;
                    multiplier = parseFloat(multiplier);
                    var val = el.value * multiplier;
                    var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
                    if (!valid) {
                        $.alert("Invalid value given");
                        el.value = selectedElement.getAttribute(attr);
                        return false;
                    }

                    svgCanvas.editHinge(attr, val)

                    svgCanvas.changeSelectedAttributeNoUndo(attr, val);
                };

                changeAttributeMultiDrilling = function(el, completed) {
                    var attr = el.getAttribute("data-attr");
                    var multiplier = el.getAttribute("data-multiplier") || 1;
                    multiplier = parseFloat(multiplier);
                    var val = el.value * multiplier;
                    var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
                    if (!valid) {
                        $.alert("Invalid value given");
                        el.value = selectedElement.getAttribute(attr);
                        return false;
                    }

                    svgCanvas.editMultiDrilling(attr, val)

                    svgCanvas.changeSelectedAttributeNoUndo(attr, val);
                };




                changeAttributeRect = function(el, completed) {
                    var attr = el.getAttribute("data-attr");
                    var multiplier = el.getAttribute("data-multiplier") || 1;
                    multiplier = parseFloat(multiplier);
                    var val = el.value * multiplier;
                    var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
                    if (!valid) {
                        $.alert("Invalid value given");
                        el.value = selectedElement.getAttribute(attr);
                        return false;
                    }
                    var realX = parseInt($("#rect_realX").val()),
                        realY = parseInt($("#rect_realY").val()),
                        width = parseInt($("#rect_width").val()),
                        height = parseInt($("#rect_height").val()),
                        quadrant = svgCanvas.getSelectedElems()[0].getAttribute("quadrant"),
                        face = svgCanvas.getSelectedElems()[0].getAttribute("face"),
                        isCenter = svgCanvas.getSelectedElems()[0].getAttribute("lw") == "2" ? true : false,
                        cX = realX + 100,
                        cY = realY + 100,
                        posX, posY;

                    if (realX + width > curConfig.partW) {
                        //$("#rect_width").val(curConfig.partW - realX);
                        //svgCanvas.getSelectedElems()[0].setAttribute("width", curConfig.partW - realX);
                        return
                    } else if (realY + height > curConfig.partL) {
                        //$("#rect_height").val(curConfig.partL - realY);
                        //svgCanvas.getSelectedElems()[0].setAttribute("height", curConfig.partL - realY);
                        return
                    }

                    svgCanvas.getSelectedElems()[0].setAttribute("x", cX);
                    svgCanvas.getSelectedElems()[0].setAttribute("y", cY);

                    posX = curConfig.realDimensions[0] - realX - width + 100;
                    posY = curConfig.realDimensions[1] - realY - height + 100;


                    switch (Math.abs(parseInt(face) - parseInt(quadrant))) {
                        case 1:
                            if (isCenter) {
                                cX -= (width / 2);
                                posY += (height / 2);
                                svgCanvas.getSelectedElems()[0].setAttribute("x", cX);
                            }
                            svgCanvas.getSelectedElems()[0].setAttribute("y", posY);
                            break;
                        case 2:

                            if (isCenter) {
                                posX += (width / 2);
                                posY += (height / 2);
                            }
                            svgCanvas.getSelectedElems()[0].setAttribute("x", posX);
                            svgCanvas.getSelectedElems()[0].setAttribute("y", posY);
                            break;
                        case 3:
                            if (isCenter) {
                                posX += (width / 2);
                                cY -= (height / 2);
                                svgCanvas.getSelectedElems()[0].setAttribute("y", cY);
                            }
                            svgCanvas.getSelectedElems()[0].setAttribute("x", posX);
                            break;
                        case 4:
                            if (isCenter) {
                                cX -= (width / 2);
                                cY -= (height / 2);
                                svgCanvas.getSelectedElems()[0].setAttribute("x", cX);
                                svgCanvas.getSelectedElems()[0].setAttribute("y", cY);
                            }
                            break;
                    }
                    svgCanvas.changeSelectedAttributeNoUndo(attr, val);
                };

                changeAttributeRectRound = function(el, completed) {
                    var attr = el.getAttribute("data-attr");
                    var multiplier = el.getAttribute("data-multiplier") || 1;
                    multiplier = parseFloat(multiplier);
                    var val = el.value * multiplier;
                    var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
                    if (!valid) {
                        $.alert("Invalid value given");
                        el.value = selectedElement.getAttribute(attr);
                        return false;
                    }
                    var realX = parseInt($("#rectRound_realX").val()),
                        realY = parseInt($("#rectRound_realY").val()),
                        width = parseInt($("#rectRound_width").val()),
                        height = parseInt($("#rectRound_height").val()),
                        rx = parseInt($("#rectRound_rx").val()),
                        ry = parseInt($("#rectRound_ry").val()),
                        quadrant = svgCanvas.getSelectedElems()[0].getAttribute("quadrant"),
                        face = svgCanvas.getSelectedElems()[0].getAttribute("face"),
                        isCenter = svgCanvas.getSelectedElems()[0].getAttribute("lw") == "2" ? true : false,
                        posX, posY,
                        cX = realX + 100,
                        cY = realY + 100;

                    if (realX + width > curConfig.partW) {
                        /*$("#rectRound_width").val(curConfig.partW - realX);
                        svgCanvas.getSelectedElems()[0].setAttribute("width", curConfig.partW - realX);*/
                        return
                    } else if (realY + height > curConfig.partL) {
                        /*$("#rectRound_height").val(curConfig.partL - realY);
                        svgCanvas.getSelectedElems()[0].setAttribute("height", curConfig.partL - realY);*/
                        return
                    }

                    if (rx > width / 2)
                        svgCanvas.getSelectedElems()[0].setAttribute("x", cX);
                    svgCanvas.getSelectedElems()[0].setAttribute("y", cY);

                    posX = curConfig.realDimensions[0] - realX - width + 100;
                    posY = curConfig.realDimensions[1] - realY - height + 100;


                    switch (Math.abs(parseInt(face) - parseInt(quadrant))) {
                        case 1:
                            if (isCenter) {
                                cX -= (width / 2);
                                posY += (height / 2);
                                svgCanvas.getSelectedElems()[0].setAttribute("x", cX);
                            }
                            svgCanvas.getSelectedElems()[0].setAttribute("y", posY);
                            break;
                        case 2:

                            if (isCenter) {
                                posX += (width / 2);
                                posY += (height / 2);
                            }
                            svgCanvas.getSelectedElems()[0].setAttribute("x", posX);
                            svgCanvas.getSelectedElems()[0].setAttribute("y", posY);
                            break;
                        case 3:
                            if (isCenter) {
                                posX += (width / 2);
                                cY -= (height / 2);
                                svgCanvas.getSelectedElems()[0].setAttribute("y", cY);
                            }
                            svgCanvas.getSelectedElems()[0].setAttribute("x", posX);
                            break;
                        case 4:
                            if (isCenter) {
                                cX -= (width / 2);
                                cY -= (height / 2);
                                svgCanvas.getSelectedElems()[0].setAttribute("x", cX);
                                svgCanvas.getSelectedElems()[0].setAttribute("y", cY);
                            }
                            break;
                    }

                    /*switch (face) {
                        case "0":
                            switch (quadrant) {

                            }
                            break;

                        case "5":
                            switch (quadrant) {
                                case "4":
                                    if (isCenter) {
                                        cX -= (width / 2);
                                        posY += (height / 2);
                                        svgCanvas.getSelectedElems()[0].setAttribute("x", cX);
                                    }
                                    svgCanvas.getSelectedElems()[0].setAttribute("y", posY);
                                    break;
                                case "3":

                                    if (isCenter) {
                                        posX += (width / 2);
                                        posY += (height / 2);
                                    }
                                    svgCanvas.getSelectedElems()[0].setAttribute("x", posX);
                                    svgCanvas.getSelectedElems()[0].setAttribute("y", posY);
                                    break;
                                case "2":
                                    if (isCenter) {
                                        posX += (width / 2);
                                        cY -= (height / 2);
                                        svgCanvas.getSelectedElems()[0].setAttribute("y", cY);
                                    }
                                    svgCanvas.getSelectedElems()[0].setAttribute("x", posX);
                                    break;
                                case "1":
                                    if (isCenter) {
                                        cX -= (width / 2);
                                        cY -= (height / 2);
                                        svgCanvas.getSelectedElems()[0].setAttribute("x", cX);
                                        svgCanvas.getSelectedElems()[0].setAttribute("y", cY);
                                    }
                                    break;
                            }
                            break;
                    }*/

                    svgCanvas.changeSelectedAttributeNoUndo(attr, val);
                };

                changeAttributePoly = function(el, completed) {
                    var attr = el.getAttribute("data-attr");
                    var multiplier = el.getAttribute("data-multiplier") || 1;
                    multiplier = parseFloat(multiplier);
                    var val = el.value * multiplier;
                    var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
                    if (!valid) {
                        $.alert("Invalid value given");
                        el.value = selectedElement.getAttribute(attr);
                        return false;
                    }

                    var minValue = parseInt($("#poly_heightY").val());

                    if (parseInt($("#poly_widthX").val()) < minValue) {
                        minValue = parseInt($("#poly_widthX").val());
                    }

                    svgCanvas
                        .getSelectedElems()[0]
                        .setAttribute("widthX", $("#poly_widthX").val());
                    svgCanvas
                        .getSelectedElems()[0]
                        .setAttribute("heightY", $("#poly_heightY").val());

                    var side = svgCanvas.getSelectedElems()[0].getAttribute("side");
                    var w = svgCanvas.getSelectedElems()[0].getAttribute("widthX");
                    var h = svgCanvas.getSelectedElems()[0].getAttribute("heightY");
                    var id = svgCanvas.getSelectedElems()[0].getAttribute("id");
                    var face = svgCanvas.getSelectedElems()[0].getAttribute("face");
                    var points = svgCanvas.createPolySide(w, h, side);

                    svgCanvas.getSelectedElems()[0].setAttribute("points", points);
                    svgCanvas.editLinesInEdges(side, w, h, id, face);
                    svgCanvas.selectorManager.requestSelector(selectedElement).resize();

                    svgCanvas.changeSelectedAttributeNoUndo(attr, val);
                };

                changeAttribute = function(el, completed) {
                    var attr = el.getAttribute("data-attr");
                    var multiplier = el.getAttribute("data-multiplier") || 1;
                    multiplier = parseFloat(multiplier);
                    var val = el.value * multiplier;
                    var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
                    if (!valid) {
                        $.alert("Invalid value given");
                        el.value = selectedElement.getAttribute(attr);
                        return false;
                    }

                    svgCanvas.changeSelectedAttributeNoUndo(attr, val);
                };

                picking = false;
                $(document).on("mouseup", function() {
                    picking = false;
                });

                $("#palette")
                    .on(
                        "mousemove mousedown touchstart touchmove",
                        ".palette_item",
                        function(evt) {
                            evt.preventDefault();

                            if (evt.type == "mousedown") picking = true;
                            if (picking) {
                                var isStroke = $("#tool_stroke").hasClass("active");
                                var picker = isStroke ? "stroke" : "fill";
                                var color = $(this).attr("data-rgb");
                                var paint = null;
                                var noUndo = true;
                                if (evt.type == "mousedown") noUndo = false;
                                // Webkit-based browsers returned 'initial' here for no stroke
                                if (
                                    color === "transparent" ||
                                    color === "initial" ||
                                    color === "#none"
                                ) {
                                    color = "none";
                                    paint = new $.jGraduate.Paint();
                                } else {
                                    paint = new $.jGraduate.Paint({
                                        alpha: 100,
                                        solidColor: color.substr(1),
                                    });
                                }

                                Editor.paintBox[picker].setPaint(paint);

                                if (isStroke) {
                                    svgCanvas.setColor("stroke", color, noUndo);
                                    if (color != "none" && svgCanvas.getStrokeOpacity() != 1) {
                                        svgCanvas.setPaintOpacity("stroke", 1.0);
                                    }
                                } else {
                                    svgCanvas.setColor("fill", color, noUndo);
                                    if (color != "none" && svgCanvas.getFillOpacity() != 1) {
                                        svgCanvas.setPaintOpacity("fill", 1.0);
                                    }
                                }
                            }
                        }
                    )
                    .bind("contextmenu", function(e) {
                        e.preventDefault();
                    });

                $("#toggle_stroke_tools").toggle(
                    function() {
                        $(".stroke_tool").css("display", "table-cell");
                        $(this).addClass("expanded");
                        resetScrollPos();
                    },
                    function() {
                        $(".stroke_tool").css("display", "none");
                        $(this).removeClass("expanded");
                        resetScrollPos();
                    }
                );

                // This is a common function used when a tool has been clicked (chosen)
                // It does several common things:
                // - removes the tool_button_current class from whatever tool currently has it
                // - hides any flyouts
                // - adds the tool_button_current class to the button passed in
                var toolButtonClick = function(button, noHiding) {

                    if ($(button).hasClass("disabled")) return false;
                    if ($(button).parent().hasClass("tools_flyout")) return true;
                    var fadeFlyouts = fadeFlyouts || "normal";
                    if (!noHiding) {
                        $(".tools_flyout").fadeOut(fadeFlyouts);
                    }
                    $("#styleoverrides").text("");
                    $(".tool_button_current")
                        .removeClass("tool_button_current")
                        .addClass("tool_button");
                    $(button).addClass("tool_button_current").removeClass("tool_button");

                    //console.log($(button).parent().parent().hasClass("parent"));
                    if ($(button).parent().parent().hasClass("parent")) {
                        //$(button).parent().parent().css("background-color", "#ffb300");

                        /*$('#tool_rectTools').attr("id","tool_rectTools");*/
                        /*$('#tool_rectTools').attr("id", "tool_rectRoundTools");*/

                        $('.tool_rectTools').css("background-color", "#ffb300");
                        $('.tool_rectRoundTools').css("background-color", "#ffb300");

                    } else {
                        $(".tool_rectTools").css("background-color", "#ccc");
                        $('.tool_rectRoundTools').css("background-color", "#ccc");
                    }
                    return true;
                };

                (function() {
                    var last_x = null,
                        last_y = null,
                        w_area = workarea[0],
                        panning = false,
                        keypan = false;

                    var move_pan = function(evt) {
                        if (panning === false) return;

                        w_area.scrollLeft -= evt.clientX - last_x;
                        w_area.scrollTop -= evt.clientY - last_y;
                        last_x = evt.clientX;
                        last_y = evt.clientY;
                        if (evt.type === "mouseup" || evt.type === "touchend")
                            panning = false;
                        return false;
                    };

                    var start_pan = function(evt) {
                        if (
                            evt.button === 1 ||
                            keypan === true ||
                            (evt.originalEvent.touches &&
                                evt.originalEvent.touches.length >= 2)
                        ) {
                            panning = true;
                            last_x = evt.clientX;
                            last_y = evt.clientY;
                            return false;
                        }
                    };

                    $("#svgcanvas")
                        .on("mousemove mouseup touchend", move_pan)
                        .on("mousedown touchmove", start_pan);

                    $(window).mouseup(function() {
                        panning = false;
                    });

                    $(document)
                        .bind("keydown", "space", function(evt) {
                            evt.preventDefault();
                            svgCanvas.spaceKey = keypan = true;
                        })
                        .bind("keyup", "space", function(evt) {
                            evt.preventDefault();
                            svgCanvas.spaceKey = keypan = false;
                        })
                        .bind("keydown", "alt", function(evt) {
                            if (svgCanvas.getMode() === "zoom") {
                                workarea.addClass("out");
                            }
                        })
                        .bind("keyup", "alt", function(evt) {
                            if (svgCanvas.getMode() === "zoom") {
                                workarea.removeClass("out");
                            }
                        });
                })();

                function setStrokeOpt(opt, changeElem) {
                    var id = opt.id;
                    var bits = id.split("_");
                    var pre = bits[0];
                    var val = bits[1];

                    if (changeElem) {
                        svgCanvas.setStrokeAttr("stroke-" + pre, val);
                    }
                    operaRepaint();
                    setIcon("#cur_" + pre, id, 20);
                    $(opt).addClass("current").siblings().removeClass("current");
                }

                //menu handling
                var menus = $(".menu");
                var blinker = function(e) {
                    e.target.style.background = "#fff";
                    setTimeout(function() {
                        e.target.style.background = "#ddd";
                    }, 50);
                    setTimeout(function() {
                        e.target.style.background = "#fff";
                    }, 150);
                    setTimeout(function() {
                        e.target.style.background = "#ddd";
                    }, 200);
                    setTimeout(function() {
                        e.target.style.background = "";
                    }, 200);
                    setTimeout(function() {
                        $("#menu_bar").removeClass("active");
                    }, 220);
                    return false;
                };
                var closer = function(e) {
                    if (e.target.nodeName && e.target.nodeName.toLowerCase() === "input")
                        return false;
                    if (!$(e.target).hasClass("menu_title") &&
                        !$(e.target).parent().hasClass("menu_title")
                    ) {
                        if (!$(e.target).hasClass("disabled") &&
                            $(e.target).hasClass("menu_item")
                        )
                            blinker(e);
                        else $("#menu_bar").removeClass("active");
                    }
                };

                $(".menu_item").on("mousedown touchstart", function(e) {
                    blinker(e);
                });
                $("svg, body").on("mousedown  touchstart", function(e) {
                    closer(e);
                });

                var accumulatedDelta = 0;
                $("#workarea").on("mousewheel", function(e, delta, deltaX, deltaY) {
                    if (e.altKey || e.ctrlKey) {
                        e.preventDefault();
                        zoom = parseInt($("#zoom").val());
                        $("#zoom")
                            .val(parseInt(zoom + deltaY * (e.altKey ? 10 : 5)))
                            .change();
                    }
                });

                $(".menu_title")
                    .on("mousedown", function() {
                        $("#tools_shapelib").hide();
                        $("#menu_bar").toggleClass("active");
                        menus.removeClass("open");
                        $(this).parent().addClass("open");
                    })
                    .on("mouseover", function() {
                        menus.removeClass("open");
                        $(this).parent().addClass("open");
                    });

                // Made public for UI customization.
                // TODO: Group UI functions into a public methodDraw.ui interface.
                Editor.addDropDown = function(elem, callback, dropUp) {
                    if ($(elem).length == 0) return; // Quit if called on non-existant element
                    var button = $(elem).find("button");

                    var list = $(elem)
                        .find("ul")
                        .attr("id", $(elem)[0].id + "-list");

                    if (!dropUp) {
                        // Move list to place where it can overflow container
                        $("#option_lists").append(list);
                    }

                    var on_button = false;
                    if (dropUp) {
                        $(elem).addClass("dropup");
                    }

                    list.find("li").bind("mouseup", callback);

                    $(window).mouseup(function(evt) {
                        if (!on_button) {
                            button.removeClass("down");
                            list.hide();
                        }
                        on_button = false;
                    });

                    button
                        .bind("mousedown", function() {
                            if (!button.hasClass("down")) {
                                button.addClass("down");

                                if (!dropUp) {
                                    var pos = $(elem).offset();
                                    // position slider
                                    list.css({
                                        top: pos.top,
                                        left: pos.left - 110,
                                    });
                                }
                                list.show();

                                on_button = true;
                            } else {
                                button.removeClass("down");
                                list.hide();
                            }
                        })
                        .hover(function() {
                            on_button = true;
                        })
                        .mouseout(function() {
                            on_button = false;
                        });
                };

                // TODO: Combine this with addDropDown or find other way to optimize
                var addAltDropDown = function(elem, list, callback, opts) {
                    var button = $(elem);
                    var list = $(list);
                    var on_button = false;
                    var dropUp = opts.dropUp;
                    if (dropUp) {
                        $(elem).addClass("dropup");
                    }
                    list.find("li").bind("mouseup", function() {
                        if (opts.seticon) {
                            setIcon("#cur_" + button[0].id, $(this).children());
                            $(this).addClass("current").siblings().removeClass("current");
                        }
                        callback.apply(this, arguments);
                    });

                    $(window).mouseup(function(evt) {
                        if (!on_button) {
                            button.removeClass("down");
                            list.hide();
                            list.css({ top: 0, left: 0 });
                        }
                        on_button = false;
                    });

                    var height = list.height();
                    $(elem)
                        .bind("mousedown", function() {
                            var off = $(elem).offset();
                            if (dropUp) {
                                off.top -= list.height();
                                off.left += 8;
                            } else {
                                off.top += $(elem).height();
                            }
                            $(list).offset(off);

                            if (!button.hasClass("down")) {
                                button.addClass("down");
                                list.show();
                                on_button = true;
                                return false;
                            } else {
                                button.removeClass("down");
                                // CSS position must be reset for Webkit
                                list.hide();
                                list.css({ top: 0, left: 0 });
                            }
                        })
                        .hover(function() {
                            on_button = true;
                        })
                        .mouseout(function() {
                            on_button = false;
                        });

                    if (opts.multiclick) {
                        list.mousedown(function() {
                            on_button = true;
                        });
                    }
                };

                $("#font_family_dropdown").change(function() {
                    var fam = this.options[this.selectedIndex].value;
                    var fam_display = this.options[this.selectedIndex].text;
                    $("#preview_font").html(fam_display).css("font-family", fam);
                    $("#font_family").val(fam).change();
                });

                $("div", "#position_opts").each(function() {
                    this.addEventListener("mouseup", function() {
                        var letter = this.id.replace("tool_pos", "").charAt(0);
                        svgCanvas.alignSelectedElements(letter, "page");
                    }, { passive: true });
                });

                /*

      When a flyout icon is selected
        (if flyout) {
        - Change the icon
        - Make pressing the button run its stuff
        }
        - Run its stuff

      When its shortcut key is pressed
        - If not current in list, do as above
        , else:
        - Just run its stuff

      */

                // Unfocus text input when workarea is mousedowned.
                (function() {
                    var inp;
                    var unfocus = function() {
                        $(inp).blur();
                    };

                    $("#svg_editor")
                        .find("button, select, input:not(#text)")
                        .focus(function() {
                            inp = this;
                            ui_context = "toolbars";
                            workarea.mousedown(unfocus);
                        })
                        .blur(function() {
                            ui_context = "canvas";
                            workarea.unbind("mousedown", unfocus);
                            // Go back to selecting text if in textedit mode
                            if (svgCanvas.getMode() == "textedit") {
                                $("#text").focus();
                            }
                        });
                })();

                var clickSelect = function() {
                    if (toolButtonClick("#tool_select")) {
                        svgCanvas.setMode("select");
                    }
                };
                //add new toll - cflorioluis



                var clickSelectMachining = function() {
                    if (selectedElement == null) return;
                    //else
                    switch (selectedElement.getAttribute("machining")) {
                        case "pocket":
                            svgCanvas.clickPocketTool(selectedElement);
                            return;
                        case "multiDrilling":
                            svgCanvas.clickmultiDrillingTool(selectedElement);
                            return;
                        case "drill":
                            svgCanvas.clickDrillTool(selectedElement);
                            return;
                        case "hinge":
                            svgCanvas.clickHingeTool(selectedElement);
                            return;
                        case "poly":
                            svgCanvas.clickPolyTool(selectedElement);
                            return;
                        case "rect":
                            svgCanvas.clickRectTool(selectedElement);
                            return;
                        case "rectRound":
                            svgCanvas.clickRectRoundTool(selectedElement);
                            return;
                        default:
                            break;
                    }
                    /* if (toolButtonClick("#tool_pocketTool")) {
                         svgCanvas.setMode("pocket");
                     }
                     svgCanvas.clearSelection();
                     svgCanvas.clickPocketTool(null);*/
                    //cflorioluis - al presionar r se repite la ultima funcion
                };


                var clickPocketTool = function() {
                    if (toolButtonClick("#tool_pocketTool")) {
                        svgCanvas.setMode("pocket");
                    }
                    svgCanvas.clearSelection();
                    svgCanvas.clickPocketTool(null);
                    //cflorioluis - al presionar r se repite la ultima funcion
                    repeatFn(clickPocketTool)
                };

                var clickmultiDrillingTool = function() {
                    if (toolButtonClick("#tool_multiDrillingTool")) {
                        svgCanvas.setMode("multiDrillingToolCanvas");
                    }
                    svgCanvas.clearSelection();
                    svgCanvas.clickmultiDrillingTool(null);

                    //cflorioluis - al presionar r se repite la ultima funcion
                    repeatFn(clickmultiDrillingTool)
                };

                var clickDrillTool = function() {
                    if (toolButtonClick("#tool_drillTool")) {
                        svgCanvas.setMode("drill");
                    }
                    svgCanvas.clearSelection();
                    svgCanvas.clickDrillTool(null);
                    //cflorioluis - al presionar r se repite la ultima funcion
                    repeatFn(clickDrillTool)
                };

                var clickHingeTool = function() {
                    if (toolButtonClick("#tool_hingeTool")) {
                        svgCanvas.setMode("hinge");
                    }
                    svgCanvas.clearSelection();
                    svgCanvas.clickHingeTool(null);
                    //cflorioluis - al presionar r se repite la ultima funcion
                    repeatFn(clickHingeTool)
                };

                var clickPolyTool = function() {
                    if (toolButtonClick("#tool_polyTool")) {
                        svgCanvas.setMode("poly");
                    }
                    svgCanvas.clearSelection();
                    svgCanvas.clickPolyTool(null);
                    //cflorioluis - al presionar r se repite la ultima funcion
                    repeatFn(clickPolyTool)
                };

                var clickRectTool = function() {
                    if (toolButtonClick("#tool_rectTool")) {
                        svgCanvas.setMode("rectTool");
                    }
                    svgCanvas.clearSelection();
                    svgCanvas.clickRectTool(null);
                    //cflorioluis - al presionar r se repite la ultima funcion
                    repeatFn(clickRectTool)

                    $('#tool_rectTools').removeClass("tool_rectRoundTools");
                    $('#tool_rectTools').removeClass("tool_rectTools");
                    $('#tool_rectTools').addClass("tool_rectTools");
                };

                var clickRectRoundTool = function() {
                    if (toolButtonClick("#tool_rectRoundTool")) {
                        svgCanvas.setMode("rectRoundTool");
                    }
                    svgCanvas.clearSelection();
                    svgCanvas.clickRectRoundTool(null);
                    //cflorioluis - al presionar r se repite la ultima funcion
                    repeatFn(clickRectRoundTool)

                    $('#tool_rectTools').removeClass("tool_rectRoundTools");
                    $('#tool_rectTools').removeClass("tool_rectTools");
                    $('#tool_rectTools').addClass("tool_rectRoundTools");
                };

                var clickFHPath = function() {
                    if (toolButtonClick("#tool_fhpath")) {
                        svgCanvas.setMode("fhpath");
                    }
                };

                var clickLine = function() {
                    if (toolButtonClick("#tool_line")) {
                        svgCanvas.setMode("line");
                    }
                };

                var clickSquare = function() {
                    if (toolButtonClick("#tool_square")) {
                        svgCanvas.setMode("square");
                    }
                };

                var clickRect = function() {
                    if (toolButtonClick("#tool_rect")) {
                        svgCanvas.setMode("rect");
                    }
                };

                var clickFHRect = function() {
                    if (toolButtonClick("#tool_fhrect")) {
                        svgCanvas.setMode("fhrect");
                    }
                };

                var clickCircle = function() {
                    if (toolButtonClick("#tool_circle")) {
                        svgCanvas.setMode("circle");
                    }
                };

                var clickEllipse = function() {
                    if (toolButtonClick("#tool_ellipse")) {
                        svgCanvas.setMode("ellipse");
                    }
                };

                var clickFHEllipse = function() {
                    if (toolButtonClick("#tool_fhellipse")) {
                        svgCanvas.setMode("fhellipse");
                    }
                };

                var clickImage = function() {
                    if (toolButtonClick("#tool_image")) {
                        svgCanvas.setMode("image");
                    }
                };

                var clickZoom = function() {
                    if (toolButtonClick("#tool_zoom")) {
                        svgCanvas.setMode("zoom");
                    }
                };

                var dblclickZoom = function() {
                    if (toolButtonClick("#tool_zoom")) {
                        zoomImage();
                        setSelectMode();
                    }
                };

                var clickText = function() {
                    if (toolButtonClick("#tool_text")) {
                        svgCanvas.setMode("text");
                    }
                };

                var clickPath = function() {
                    if (toolButtonClick("#tool_path")) {
                        svgCanvas.setMode("path");
                    }
                };

                // Delete is a contextual tool that only appears in the ribbon if
                // an element has been selected
                var deleteSelected = function() {
                    curConfig.quadrant = 1;
                    svgCanvas.updateRulersQuadrant(curConfig.quadrant, $('#faceSelector').val())
                    if (selectedElement != null || multiselected) {
                        //mantener los id de la seleccion para ver si son mecanizados y borrar
                        //sus relacionados de manera correcta para que queden en el historial Ctrl-Z
                        var tempMultiSelected = multiselected;
                        var tempSelected = selectedElement;
                        var isMulti = false;

                        svgCanvas.deleteSelectedElements();

                        if (tempMultiSelected) {
                            for (let ii = 0; ii < tempMultiSelected.length; ii++) {
                                isMulti = true;

                                var element = tempMultiSelected[ii];
                                //cflorioluis - si es un cajeado eliminar su linea respectiva que se representa en el canto de la pieza
                                if (
                                    element.getAttribute("machining") == "pocket" ||
                                    element.getAttribute("machining") == "poly"
                                ) {
                                    svgCanvas.addToSelection(
                                        [svgCanvas.getElem(element.id + "_line1")],
                                        true
                                    );
                                    svgCanvas.addToSelection(
                                        [svgCanvas.getElem(element.id + "_line2")],
                                        true
                                    );
                                    svgCanvas.deleteSelectedElements();
                                }
                            }
                        }

                        if (!isMulti) {
                            if (
                                tempSelected.getAttribute("machining") == "pocket" ||
                                tempSelected.getAttribute("machining") == "poly"
                            ) {
                                svgCanvas.addToSelection(
                                    [svgCanvas.getElem(tempSelected.id + "_line1")],
                                    true
                                );
                                svgCanvas.addToSelection(
                                    [svgCanvas.getElem(tempSelected.id + "_line2")],
                                    true
                                );
                                svgCanvas.deleteSelectedElements();
                            }
                        }
                    }
                    if (path.getNodePoint()) {
                        path.deletePathNode();
                    }

                    /*console.log(multiselected);
                                        if (selectedElement != null || multiselected) {
                                            svgCanvas.deleteSelectedElements();
                                        }
                                        if (path.getNodePoint()) {
                                            path.deletePathNode();
                                        }*/
                };

                var cutSelected = function() {
                    if (selectedElement != null || multiselected) {
                        flash($("#edit_menu"));
                        svgCanvas.cutSelectedElements();
                    }
                };

                var copySelected = function() {
                    if (selectedElement != null || multiselected) {
                        flash($("#edit_menu"));
                        svgCanvas.copySelectedElements();
                    }
                };

                var pasteSelected = function() {
                    flash($("#edit_menu"));
                    var zoom = svgCanvas.getZoom();
                    var x =
                        (workarea[0].scrollLeft + workarea.width() / 2) / zoom -
                        svgCanvas.contentW;
                    var y =
                        (workarea[0].scrollTop + workarea.height() / 2) / zoom -
                        svgCanvas.contentH;
                    svgCanvas.pasteElements("point", x, y);
                };

                var moveToTopSelected = function() {
                    if (selectedElement != null) {
                        flash($("#object_menu"));
                        svgCanvas.moveToTopSelectedElement();
                    }
                };

                var moveToBottomSelected = function() {
                    if (selectedElement != null) {
                        flash($("#object_menu"));
                        svgCanvas.moveToBottomSelectedElement();
                    }
                };

                var moveUpSelected = function() {
                    if (selectedElement != null) {
                        flash($("#object_menu"));
                        svgCanvas.moveUpDownSelected("Up");
                    }
                };

                var moveDownSelected = function() {
                    if (selectedElement != null) {
                        flash($("#object_menu"));
                        svgCanvas.moveUpDownSelected("Down");
                    }
                };

                var moveUpDownSelected = function(dir) {
                    if (selectedElement != null) {
                        flash($("#object_menu"));
                        svgCanvas.moveUpDownSelected(dir);
                    }
                };

                var convertToPath = function() {
                    if (selectedElement != null) {
                        svgCanvas.convertToPath();
                        var elems = svgCanvas.getSelectedElems();
                        svgCanvas.selectorManager.requestSelector(elems[0]).reset(elems[0]);
                        svgCanvas.selectorManager
                            .requestSelector(elems[0])
                            .selectorRect.setAttribute("display", "none");
                        svgCanvas.setMode("pathedit");
                        path.toEditMode(elems[0]);
                        svgCanvas.clearSelection();
                        updateContextPanel();
                    }
                };

                var reorientPath = function() {
                    if (selectedElement != null) {
                        path.reorient();
                    }
                };

                var makeHyperlink = function() {
                    if (selectedElement != null || multiselected) {
                        $.prompt("Enter the new hyperlink URL", "http://", function(url) {
                            if (url) svgCanvas.makeHyperlink(url);
                        });
                    }
                };

                var moveSelected = function(dx, dy) {
                    if (selectedElement != null || multiselected) {
                        if (curConfig.gridSnapping) {
                            // Use grid snap value regardless of zoom level
                            var multi = svgCanvas.getZoom() * curConfig.snappingStep;
                            dx *= multi;
                            dy *= multi;
                        }
                        $("input").blur();
                        //cflorioluis - evitar que un mecanizado se mueva correctamente con las flechas del techado
                        switch (selectedElement.getAttribute("machining")) {
                            case "hinge":
                            case "poly":
                            case "pocket":
                                return;
                            case "drill":
                                var posX = parseInt(selectedElement.getAttribute("cx")) - 100,
                                    posY = parseInt(selectedElement.getAttribute("cy")) - 100,
                                    face = parseInt(selectedElement.getAttribute("face")),
                                    quadrant = parseInt(selectedElement.getAttribute("quadrant")),
                                    DY = dy;

                                if ($('#faceSelector').val() == "5")
                                    DY = -dy

                                posX += dx
                                posY += DY

                                if (posX < 0 || posY < 0 || posX > curConfig.realDimensions[0] || posY > curConfig.realDimensions[1]) return;

                                switch (Math.abs(parseInt(face) - quadrant)) {
                                    case 1:
                                        selectedElement.setAttribute("realX", posX);
                                        selectedElement.setAttribute("realY", curConfig.realDimensions[1] - posY);
                                        break;
                                    case 2:
                                        selectedElement.setAttribute("realX", curConfig.realDimensions[0] - posX);
                                        selectedElement.setAttribute("realY", curConfig.realDimensions[1] - posY);
                                        break;
                                    case 3:
                                        selectedElement.setAttribute("realX", curConfig.realDimensions[0] - posX);
                                        selectedElement.setAttribute("realY", posY);
                                        break;
                                    case 4:
                                        selectedElement.setAttribute("realX", posX);
                                        selectedElement.setAttribute("realY", posY);
                                        break;
                                }

                                svgCanvas.moveSelectedElements(dx, DY); //-dy ya que la cordenada inicial 0,0 se cambio a abajo a la izquierda
                                break;
                            case "rect":
                            case "rectRound":
                                var posX = parseInt(selectedElement.getAttribute("x")) - 100,
                                    posY = parseInt(selectedElement.getAttribute("y")) - 100,
                                    face = parseInt(selectedElement.getAttribute("face")),
                                    quadrant = parseInt(selectedElement.getAttribute("quadrant")),
                                    isCenter = selectedElement.getAttribute("lw") == "2" ? true : false,
                                    DY = dy;

                                var width = parseInt(selectedElement.getAttribute("width")),
                                    height = parseInt(selectedElement.getAttribute("height")),
                                    cX = curConfig.realDimensions[0] - posX - width,
                                    cY = curConfig.realDimensions[1] - posY - height;


                                if ($('#faceSelector').val() == "5")
                                    DY = -dy

                                posX += dx
                                posY += DY
                                cX -= dx
                                cY -= DY

                                if ((posX < 0 || posY < 0 || posX > curConfig.realDimensions[0] || posY > curConfig.realDimensions[1])) return;
                                if ((cX < 0 || cY < 0 || cX > curConfig.realDimensions[0] || cY > curConfig.realDimensions[1])) return;

                                switch (Math.abs(parseInt(face) - quadrant)) {
                                    case 1:
                                        if (isCenter) {
                                            posX += (width / 2);
                                            cY += (height / 2);
                                        }
                                        selectedElement.setAttribute("realX", posX);
                                        selectedElement.setAttribute("realY", cY);
                                        break;
                                    case 2:
                                        if (isCenter) {
                                            cX += (width / 2);
                                            cY += (height / 2);
                                        }
                                        selectedElement.setAttribute("realX", cX);
                                        selectedElement.setAttribute("realY", cY);
                                        break;
                                    case 3:
                                        if (isCenter) {
                                            cX += (width / 2);
                                            posY += (height / 2);
                                        }
                                        selectedElement.setAttribute("realX", cX);
                                        selectedElement.setAttribute("realY", posY);
                                        break;
                                    case 4:
                                        if (isCenter) {
                                            posX += (width / 2);
                                            posY += (height / 2);
                                        }
                                        selectedElement.setAttribute("realX", posX);
                                        selectedElement.setAttribute("realY", posY);
                                        break;
                                }
                                svgCanvas.moveSelectedElements(dx, DY);
                                break;
                        }

                    }
                };

                var scaleRadiusSelected = function(r) {
                    if (
                        selectedElement != null ||
                        selectedElement.getAttribute("machining") != null ||
                        selectedElement.getAttribute("machining") != "drill"
                    )
                        return;

                    var radio = parseInt(selectedElement.getAttribute("r"));
                    selectedElement.setAttribute("r", radio + r);
                };

                var linkControlPoints = function() {
                    //  var linked = document.getElementById('tool_node_link').checked;
                    //  path.linkControlPoints(linked);
                };

                var clonePathNode = function() {
                    if (path.getNodePoint()) {
                        path.clonePathNode();
                    }
                };

                var deletePathNode = function() {
                    if (path.getNodePoint()) {
                        path.deletePathNode();
                    }
                };

                var addSubPath = function() {
                    var button = $("#tool_add_subpath");
                    var sp = !button.hasClass("push_button_pressed");
                    if (sp) {
                        button.addClass("push_button_pressed").removeClass("tool_button");
                    } else {
                        button.removeClass("push_button_pressed").addClass("tool_button");
                    }

                    path.addSubPath(sp);
                };

                var opencloseSubPath = function() {
                    path.opencloseSubPath();
                };

                var selectNext = function() {
                    svgCanvas.cycleElement(1);
                };

                var selectPrev = function() {
                    svgCanvas.cycleElement(0);
                };

                var rotateSelected = function(cw, step) {
                    if (selectedElement == null || multiselected) return;
                    if (!cw) step *= -1;
                    var new_angle = $("#angle").val() * 1 + step;
                    svgCanvas.setRotationAngle(new_angle);
                    updateContextPanel();
                };


                //cflorioluis - Eliminar Cantos, definicion de la Funcion
                var clickClearEdges = function() {

                    var dims = curConfig.dimensions;
                    $.confirm(
                        `<strong> <h2 id="moveConfirm" style="cursor: move;line-height: normal;">Desea Borrar Todos los Cantos del Tablero?</h2></strong>\nEsta Opcion no se puede deshacer`,
                        function(ok) {
                            if (!ok) return;

                            svgCanvas.updateEdges(["", "", "", ""]);

                            var newOrder = JSON.parse(localStorage.newOrder);
                            var currentRowSelected = JSON.parse(localStorage.currentRowSelected);

                            newOrder[currentRowSelected][6] = null;
                            newOrder[currentRowSelected][7] = null;
                            newOrder[currentRowSelected][8] = null;
                            newOrder[currentRowSelected][9] = null;
                            localStorage.setItem("newOrder", JSON.stringify(newOrder));
                        },
                        350,
                        150,
                        true,
                        true
                    );
                };

                var clickClear = function() {
                    var dims = curConfig.dimensions;
                    $.confirm(
                        `<strong> <h2 id="moveConfirm" style="cursor: move;line-height: normal;">Desea Borrar Todos los Mecanizados del Tablero?</h2></strong>\nEsta Opcion no se puede deshacer`,
                        function(ok) {
                            if (!ok) return;
                            //cflorioluis - dialogo para hacer el tablero nuevo
                            setSelectMode();
                            svgCanvas.deleteSelectedElements();
                            svgCanvas.clear();
                            svgCanvas.setResolution(dims[0], dims[1]);
                            updateCanvas(true);
                            createBackground();
                            zoomImage();
                            updateContextPanel();
                            prepPaints();
                            svgCanvas.runExtensions("onNewDocument");

                            //crear divisiones
                            svgCanvas.createDivs(curConfig.edges);

                            changeZoomPiece();


                            var newOrder = JSON.parse(localStorage.newOrder);
                            var currentRowSelected = JSON.parse(localStorage.currentRowSelected);

                            newOrder[currentRowSelected][13] = null;
                            newOrder[currentRowSelected][14] = null;

                            localStorage.setItem("newOrder", JSON.stringify(newOrder));
                        },
                        350,
                        150,
                        true,
                        true,
                    );
                };

                var clickBold = function() {
                    svgCanvas.setBold(!svgCanvas.getBold());
                    updateContextPanel();
                };

                var clickItalic = function() {
                    svgCanvas.setItalic(!svgCanvas.getItalic());
                    updateContextPanel();
                };

                var clickExport = function() {
                    // Open placeholder window (prevents popup)
                    if (!customHandlers.pngsave) {
                        exportWindow = window.open(
                            "data:text/html;charset=utf-8,<title>Loading image, please wait...</title><h1>" +
                            str +
                            "</h1>"
                        );
                    }

                    if (window.canvg) {
                        svgCanvas.rasterExport();
                    } else {
                        $.getScript("canvg/rgbcolor.js", function() {
                            $.getScript("canvg/canvg.js", function() {
                                svgCanvas.rasterExport();
                            });
                        });
                    }
                };


                var generatePartDraw = (this.generatePartDraw = function() {
                    let csv =
                        '"partMat";"partDText";"partL";"partW";"partqty";"partRef";"partEdge1";"partEdge2";"partEdge3";"partEdge4";"PartFRef";"PartFDate";"partD";"partdraw"\n' +
                        curConfig.row[0] + ';' + curConfig.row[1] + ';' + curConfig.row[2] + ';' + curConfig.row[3] + ';' + curConfig.row[4] + ';' + curConfig.row[5] + ';' + curConfig.row[6] + ';' + curConfig.row[7] + ';' + curConfig.row[8] + ';' + curConfig.row[9] + ';' + curConfig.row[10] + ';' + curConfig.row[11] + ';' + curConfig.row[12] + ';';

                    var partDarw = '';

                    var machinings = $("[machining]");
                    //console.log(machinings);
                    var doc = document.implementation.createDocument('', '', null);
                    var findPoly = false;

                    for (let ii = 0; ii < machinings.length; ii++) {
                        const machining = machinings[ii];
                        var drawElement = doc.createElement("Draw");
                        var functNameElement = doc.createElement("FUNCTNAME");
                        var paramElement = doc.createElement("PARAM");
                        var opsideElement = doc.createElement("OPSIDE");
                        var sideElement = doc.createElement("SIDE");
                        var lwElement = doc.createElement("LW");

                        drawElement.appendChild(functNameElement);
                        drawElement.appendChild(paramElement);
                        drawElement.appendChild(opsideElement);
                        drawElement.appendChild(sideElement);

                        switch (machining.getAttribute("machining")) {
                            case "pocket":
                                functNameElement.append("_Cajeado");
                                var param = '"DiaFr" VAR "' + machining.getAttribute('radio') + '":"Hoek" VAR "' + machining.getAttribute('side') + '":"StartX" VAR "' + machining.getAttribute('widthX') + '":"StartY" VAR "' + machining.getAttribute("heightY") + '"';
                                paramElement.append(param);
                                opsideElement.append(machining.getAttribute("quadrant"));
                                sideElement.append(machining.getAttribute('face'));
                                break;
                            case "drill":
                                functNameElement.append("_Taladro");
                                var param = '"Origine" VAR "0":"Depart_X" VAR "' + machining.getAttribute("realX") + '":"Depart_Y" VAR "' + machining.getAttribute("realY") + '":"diametre" VAR "' + machining.getAttribute("diameter") + '":"profondeur" VAR "' + machining.getAttribute("depth") + '":"debouchant" VAR "' + machining.getAttribute("cross") + '"';
                                paramElement.append(param);
                                opsideElement.append(machining.getAttribute("quadrant"));
                                sideElement.append(machining.getAttribute('face'));
                                break;
                            case "hinge":
                                functNameElement.append("_Cazoleta");
                                var param = '"Origine" VAR "' + machining.getAttribute("origin") + '":"Depart_X" VAR "' + machining.getAttribute("beginX") + '":"Fin_X" VAR "' + machining.getAttribute("endX") + '":"nombre" VAR "' + machining.getAttribute("hingeCount") + '":"entraxe" VAR "' + machining.getAttribute("axisDist") + '":"Dia_insert" VAR "' + machining.getAttribute("drillDiameter") + '":"Prof_insert" VAR "' + machining.getAttribute("drillDepth") + '":"Dia_charniere" VAR "' + machining.getAttribute("hingeDiameter") + '":"Prof_charn" VAR "' + machining.getAttribute("hingeDepth") + '"';
                                paramElement.append(param);
                                opsideElement.append(machining.getAttribute("quadrant"));
                                sideElement.append(machining.getAttribute('face'));
                                break;

                            case "poly":
                                //cflorioluis - capturar todos los poly (angulos en lados)
                                if (findPoly)
                                    continue;

                                var polys = $('[machining="poly"]'),
                                    b1 = "",
                                    b2 = "",
                                    b3 = "",
                                    b4 = "",
                                    h1 = "",
                                    h2 = "",
                                    h3 = "",
                                    h4 = "";

                                for (let jj = 0; jj < polys.length; jj++) {
                                    const poly = polys[jj];

                                    switch (poly.getAttribute("side")) {
                                        case "1":
                                            b1 = poly.getAttribute("widthX");
                                            h1 = poly.getAttribute("heightY");
                                            break;
                                        case "2":
                                            b3 = poly.getAttribute("widthX");
                                            h3 = poly.getAttribute("heightY");
                                            break;
                                        case "3":
                                            b4 = poly.getAttribute("widthX");
                                            h4 = poly.getAttribute("heightY");
                                            break;
                                        case "4":
                                            b2 = poly.getAttribute("widthX");
                                            h2 = poly.getAttribute("heightY");
                                            break;
                                    }
                                }

                                functNameElement.append("_Anguloenlados");
                                var param = '"b1" VAR "' + b1 + '":"h1" VAR "' + h1 + '":"b2" VAR "' + b2 + '":"h2" VAR "' + h2 + '":"b3" VAR "' + b3 + '":"h3" VAR "' + h3 + '":"b4" VAR "' + b4 + '":"h4" VAR "' + h4 + '"';
                                paramElement.append(param);
                                opsideElement.append(machining.getAttribute("quadrant"));
                                findPoly = true;
                                break;
                            case "rect":
                                functNameElement.append("_Rectangulo");
                                var param = '"StartX1" VAR "' + machining.getAttribute("realX") + '":"StartY1" VAR "' + machining.getAttribute("realY") + '":"Width" VAR "' + machining.getAttribute("width") + '":"Height" VAR "' + machining.getAttribute("height") + '"';
                                paramElement.append(param);
                                opsideElement.append(machining.getAttribute("quadrant"));
                                drawElement.appendChild(lwElement);
                                lwElement.append(machining.getAttribute('lw'));
                                sideElement.append(machining.getAttribute('face'));
                                break;
                            case "rectRound":
                                functNameElement.append("_RectanguloRedondeado");
                                var param = '"StartX1" VAR "' + machining.getAttribute("realX") + '":"StartY1" VAR "' + machining.getAttribute("realY") + '":"Width" VAR "' + machining.getAttribute("width") + '":"Height" VAR "' + machining.getAttribute("height") + '":"RadiusX" VAR "' + machining.getAttribute("rx") + '":"RadiusY" VAR "' + machining.getAttribute("ry") + '"';
                                paramElement.append(param);
                                opsideElement.append(machining.getAttribute("quadrant"));
                                drawElement.appendChild(lwElement);
                                lwElement.append(machining.getAttribute('lw'));
                                sideElement.append(machining.getAttribute('face'));
                                break;

                            default:
                                continue;
                        }
                        doc.appendChild(drawElement);
                        var draw = new XMLSerializer().serializeToString(doc);
                        //console.log(draw);
                        partDarw += draw;
                        //console.log(csv);
                        doc.removeChild(drawElement);
                    }


                    localStorage.setItem("partDraw", partDarw);


                    /*localStorage.removeItem("row");
                              localStorage.removeItem("partDraw");*/

                    csv += partDarw;

                    return csv;

                });


                var saveFileCSV = (this.saveFileCSV = function(partDraw) {
                    // Once we are done looping, download the .csv by creating a link
                    let link = document.createElement("a");
                    let idDownload = "download-csv-" + new Date().getTime();
                    link.id = idDownload;
                    link.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(partDraw));
                    link.setAttribute("download", curConfig.realDimensions[0] + 'x' + curConfig.realDimensions[1] + '.csv');
                    document.body.appendChild(link);
                    document.querySelector("#" + idDownload).click();
                });

                //cflorioluis - evento al seleccionar guardar los cambios, definicion de la funcion
                /*var clickAutoSaveChanges = function() {

                    svgCanvas.removeDivsExport();

                    var newOrder = JSON.parse(localStorage.newOrder);
                    var currentRowSelected = JSON.parse(localStorage.currentRowSelected);

                    if (curConfig.currentRowSelected == currentRowSelected) {
                        newOrder[currentRowSelected][14] = svgCanvas.svgCanvasToString();
                    }

                    localStorage.setItem("newOrder", JSON.stringify(newOrder));

                    svgCanvas.createDivs(curConfig.edges);
                    generatePartDraw();
                };*/

                //cflorioluis - evento al seleccionar guardar los cambios, definicion de la funcion
                var clickSaveChanges = function() {

                    svgCanvas.removeDivsExport();

                    var newOrder = JSON.parse(localStorage.newOrder);
                    var currentRowSelected = JSON.parse(localStorage.currentRowSelected);

                    newOrder[currentRowSelected][14] = svgCanvas.svgCanvasToString();
                    localStorage.setItem("newOrder", JSON.stringify(newOrder));

                    svgCanvas.createDivs(curConfig.edges);
                    generatePartDraw();
                };

                //cflorioluis - evento al seleccionar exportar a partDraw, definicion de la funcion
                var clickExportPartDraw = function() {
                    svgCanvas.removeDivsExport();
                    var newOrder = JSON.parse(localStorage.newOrder);
                    var currentRowSelected = JSON.parse(localStorage.currentRowSelected);
                    newOrder[currentRowSelected][14] = svgCanvas.svgCanvasToString();

                    localStorage.setItem("newOrder", JSON.stringify(newOrder));

                    //localStorage.setItem("svgPreview", svgCanvas.svgCanvasToString());
                    svgCanvas.createDivs(curConfig.edges);
                    saveFileCSV(generatePartDraw());
                };


                // by default, svgCanvas.open() is a no-op.
                // it is up to an extension mechanism (opera widget, etc)
                // to call setCustomHandlers() which will make it do something
                var clickOpen = function() {
                    svgCanvas.open();
                };
                var clickImport = function() {};

                var flash = function($menu) {
                    var menu_title = $menu.prev();
                    menu_title.css({
                        background: "white",
                        color: "black",
                    });
                    setTimeout(function() {
                        menu_title.removeAttr("style");
                    }, 200);
                };

                var clickUndo = function() {
                    if (undoMgr.getUndoStackSize() > 0) {
                        flash($("#edit_menu"));
                        undoMgr.undo();
                    }
                };

                var clickRedo = function() {
                    if (undoMgr.getRedoStackSize() > 0) {
                        flash($("#edit_menu"));
                        undoMgr.redo();
                    }
                };

                var clickGroup = function() {
                    // group
                    if (multiselected) {
                        flash($("#object_menu"));
                        svgCanvas.groupSelectedElements();
                    }
                    // ungroup
                    else if (selectedElement) {
                        flash($("#object_menu"));
                        svgCanvas.ungroupSelectedElement();
                    }
                };

                var clickClone = function() {
                    flash($("#edit_menu"));
                    svgCanvas.cloneSelectedElements(20, 20);
                };

                var clickAlign = function() {
                    var letter = this.id.replace("tool_align", "").charAt(0);
                    svgCanvas.alignSelectedElements(
                        letter,
                        $("#align_relative_to").val()
                    );
                };

                var clickSwitch = function() {
                    var stroke_rect = document.querySelector("#tool_stroke rect");
                    $("#tool_stroke").toggleClass("active");
                    $("#tool_fill").toggleClass("active");
                    var fill_rect = document.querySelector("#tool_fill rect");
                    var fill_color = fill_rect.getAttribute("fill");
                    var stroke_color = stroke_rect.getAttribute("fill");
                    var stroke_opacity = parseFloat(
                        stroke_rect.getAttribute("stroke-opacity")
                    );
                    if (isNaN(stroke_opacity)) {
                        stroke_opacity = 100;
                    }
                    var fill_opacity = parseFloat(fill_rect.getAttribute("fill-opacity"));
                    if (isNaN(fill_opacity)) {
                        fill_opacity = 100;
                    }
                    var stroke = getPaint(stroke_color, stroke_opacity, "stroke");
                    var fill = getPaint(fill_color, fill_opacity, "fill");
                    Editor.paintBox.fill.setPaint(stroke, true);
                    Editor.paintBox.stroke.setPaint(fill, true);
                };

                var zoomImage = function(multiplier) {
                    var res = svgCanvas.getResolution();
                    //console.log(res);

                    multiplier = multiplier ? res.zoom * multiplier : 1;
                    //    setResolution(res.w * multiplier, res.h * multiplier, true);
                    $("#zoom").val(multiplier * 100);
                    svgCanvas.setZoom(multiplier);
                    zoomDone();
                    updateCanvas(true);
                };

                var zoomDone = function() {
                    //    updateBgImage();
                    updateWireFrame();
                    //updateCanvas(); // necessary?
                };

                var clickWireframe = function() {
                    flash($("#view_menu"));
                    var wf = !$("#tool_wireframe").hasClass("push_button_pressed");
                    if (wf) $("#tool_wireframe").addClass("push_button_pressed");
                    else $("#tool_wireframe").removeClass("push_button_pressed");
                    workarea.toggleClass("wireframe");

                    if (supportsNonSS) return;
                    var wf_rules = $("#wireframe_rules");
                    if (!wf_rules.length) {
                        wf_rules = $('<style id="wireframe_rules"></style>').appendTo(
                            "head"
                        );
                    } else {
                        wf_rules.empty();
                    }

                    updateWireFrame();
                };

                var clickSnapGrid = function() {
                    flash($("#view_menu"));
                    var sg = !$("#tool_snap").hasClass("push_button_pressed");
                    if (sg) $("#tool_snap").addClass("push_button_pressed");
                    else $("#tool_snap").removeClass("push_button_pressed");
                    curConfig.gridSnapping = sg;
                };

                var minimizeModal = function() {
                    if (window.self != window.top) {
                        //we're in an iframe
                        top.exit_fullscreen();
                    }
                };

                var clickRulers = function() {
                    flash($("#view_menu"));
                    var rulers = !$("#tool_rulers").hasClass("push_button_pressed");
                    if (rulers) {
                        $("#tool_rulers").addClass("push_button_pressed");
                        $("#show_rulers").attr("checked", true);
                        curConfig.showRulers = true;
                    } else {
                        $("#tool_rulers").removeClass("push_button_pressed");
                        $("#show_rulers").attr("checked", false);
                        curConfig.showRulers = false;
                    }
                    $("#rulers").toggle(!!curConfig.showRulers);
                };

                //cflorioluis - Auto Guardar, definicion de la funcion
                var clickAutoSave = function() {
                    var autoSave = !$("#tool_autosave").hasClass("push_button_pressed");
                    if (autoSave) {
                        $("#tool_autosave").addClass("push_button_pressed");
                        curConfig.autoSave = setInterval(clickAutoSaveChanges, 1000);

                        localStorage.setItem("autoSave", true);

                    } else {
                        $("#tool_autosave").removeClass("push_button_pressed");
                        clearInterval(curConfig.autoSave);

                        localStorage.removeItem("autoSave");
                    }
                };

                //cflorioluis - Ver todos los Mecanizados, definicion de la funcion
                var clickViewAllMachining = function() {
                    flash($("#view_menu"));
                    var viewAllMachining = !$("#tool_viewAllMachining").hasClass("push_button_pressed");
                    //var face = "0";
                    //if ($("#faceSelector").val() == "1") face = "5";

                    var face = $("#faceSelector").val();

                    var machinings = $("[machining]");

                    curConfig.viewAllMachining = viewAllMachining;

                    if (viewAllMachining) {
                        $("#tool_viewAllMachining").addClass("push_button_pressed");

                        for (let ii = 0; ii < machinings.length; ii++) {
                            var machining = machinings[ii];
                            if (machining.getAttribute("cross") == "0") {
                                if (machining.getAttribute("face") != face) {
                                    $(machining).show();
                                    $(machining).attr("fill", "transparent");
                                    $(machining).attr("stroke-width", "1");
                                }
                            }
                        }
                    } else {
                        $("#tool_viewAllMachining").removeClass("push_button_pressed");
                        for (let ii = 0; ii < machinings.length; ii++) {
                            var machining = machinings[ii];
                            if (machining.getAttribute("cross") == "0") {
                                if (machining.getAttribute("face") != face) {
                                    $(machining).hide();
                                    $(machining).attr("fill", "#3F3F3F");
                                    $(machining).attr("stroke-width", "0");
                                }
                            }
                        }
                    }
                };

                //cflorioluis - Ver Version del Editor
                var clickViewAbout = function() {
                    //setTimeout(alert("Version 03/09/2020"), 5000);
                    $.confirm(
                        `<strong><h2 id="moveConfirm" style="cursor: move;margin-bottom: 5px;">Version 07/09/2020</h2></strong>`,
                        function(ok) {
                            if (!ok) {
                                return;
                            }
                        },
                        350,
                        150,
                        true,
                        true
                    );
                };



                var updateWireFrame = function() {
                    // Test support
                    if (supportsNonSS) return;

                    var rule =
                        "#workarea.wireframe #svgcontent * { stroke-width: " +
                        1 / svgCanvas.getZoom() +
                        "px; }";
                    $("#wireframe_rules").text(
                        workarea.hasClass("wireframe") ? rule : ""
                    );
                };

                var showSourceEditor = function(e, forSaving) {
                    if (editingsource) return;
                    flash($("#view_menu"));
                    editingsource = true;

                    $("#save_output_btns").toggle(!!forSaving);
                    $("#tool_source_back").toggle(!forSaving);

                    var str = (orig_source = svgCanvas.getSvgString());
                    $("#svg_source_textarea").val(str);
                    $("#svg_source_editor").fadeIn();
                    $("#svg_source_textarea").focus().select();
                };

                var clickSave = function() {
                    flash($("#file_menu"));
                    // In the future, more options can be provided here
                    var saveOpts = {
                        images: curPrefs.img_save,
                        round_digits: 6,
                    };
                    svgCanvas.save(saveOpts);
                    //console.log("clickSave");
                };

                var saveSourceEditor = function() {
                    if (!editingsource) return;

                    //console.log("saveSourceEditor");
                    var saveChanges = function() {
                        svgCanvas.clearSelection();
                        hideSourceEditor();
                        zoomImage();
                        prepPaints();
                    };

                    if (!svgCanvas.setSvgString($("#svg_source_textarea").val())) {
                        $.confirm(
                            "There were parsing errors in your SVG source.\nRevert back to original SVG source?",
                            function(ok) {
                                if (!ok) return false;
                                saveChanges();
                            },
                            350,
                            250,
                            true
                        );
                    } else {
                        saveChanges();
                    }
                    setSelectMode();
                };

                function setBackground(color, url) {
                    //        if(color == curPrefs.bkgd_color && url == curPrefs.bkgd_url) return;
                    $.pref("bkgd_color", color);
                    $.pref("bkgd_url", url);

                    // This should be done in svgcanvas.js for the borderRect fill
                    svgCanvas.setBackground(color, url);
                }

                var setIcon = (Editor.setIcon = function(elem, icon_id, forcedSize) {
                    var icon =
                        typeof icon_id === "string" ?
                        $.getSvgIcon(icon_id, true) :
                        icon_id.clone();
                    if (!icon) {
                        console.log("NOTE: Icon image missing: " + icon_id);
                        return;
                    }

                    $(elem).find("img").replaceWith(icon);
                });

                var ua_prefix;
                ua_prefix = (function() {
                    var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
                    var someScript = document.getElementsByTagName("script")[0];
                    for (var prop in someScript.style) {
                        if (regex.test(prop)) {
                            // test is faster than match, so it's better to perform
                            // that on the lot and match only when necessary
                            return prop.match(regex)[0];
                        }
                    }

                    // Nothing found so far?
                    if ("WebkitOpacity" in someScript.style) return "Webkit";
                    if ("KhtmlOpacity" in someScript.style) return "Khtml";

                    return "";
                })();

                var scaleElements = function(elems, scale) {
                    var prefix = "-" + ua_prefix.toLowerCase() + "-";

                    var sides = ["top", "left", "bottom", "right"];

                    elems.each(function() {
                        //          console.log('go', scale);

                        // Handled in CSS
                        // this.style[ua_prefix + 'Transform'] = 'scale(' + scale + ')';

                        var el = $(this);

                        var w = el.outerWidth() * (scale - 1);
                        var h = el.outerHeight() * (scale - 1);
                        var margins = {};

                        for (var i = 0; i < 4; i++) {
                            var s = sides[i];

                            var cur = el.data("orig_margin-" + s);
                            if (cur == null) {
                                cur = parseInt(el.css("margin-" + s));
                                // Cache the original margin
                                el.data("orig_margin-" + s, cur);
                            }
                            var val = cur * scale;
                            if (s === "right") {
                                val += w;
                            } else if (s === "bottom") {
                                val += h;
                            }

                            el.css("margin-" + s, val);
                            //            el.css('outline', '1px solid red');
                        }
                    });
                };

                var setIconSize = (Editor.setIconSize = function(size, force) {
                    if (size == curPrefs.size && !force) return;
                    //        return;
                    //        var elems = $('.tool_button, .push_button, .tool_button_current, .disabled, .icon_label, #url_notice, #tool_open');

                    var sel_toscale =
                        "#tools_top .toolset, #editor_panel > *, #history_panel > *,\
        #main_button, #tools_left > *, #path_node_panel > *, #multiselected_panel > *,\
        #g_panel > *, #tool_font_size > *, .tools_flyout";

                    var elems = $(sel_toscale);

                    var scale = 1;

                    if (typeof size == "number") {
                        scale = size;
                    } else {
                        var icon_sizes = { s: 0.75, m: 1, l: 1.25, xl: 1.5 };
                        scale = icon_sizes[size];
                    }

                    Editor.tool_scale = tool_scale = scale;

                    setFlyoutPositions();
                    var hidden_ps = elems.parents(":hidden");
                    hidden_ps.css("visibility", "hidden").show();
                    scaleElements(elems, scale);
                    hidden_ps.css("visibility", "visible").hide();

                    var rule_elem = $("#tool_size_rules");
                    if (!rule_elem.length) {
                        rule_elem = $('<style id="tool_size_rules"></style>').appendTo(
                            "head"
                        );
                    } else {
                        rule_elem.empty();
                    }

                    if (size != "m") {
                        var style_str = "";
                        $.each(cssResizeRules, function(selector, rules) {
                            selector =
                                "#svg_editor " + selector.replace(/,/g, ", #svg_editor");
                            style_str += selector + "{";
                            $.each(rules, function(prop, values) {
                                if (typeof values === "number") {
                                    var val = values * scale + "px";
                                } else if (values[size] || values.all) {
                                    var val = values[size] || values.all;
                                }
                                style_str += prop + ":" + val + ";";
                            });
                            style_str += "}";
                        });
                        //this.style[ua_prefix + 'Transform'] = 'scale(' + scale + ')';
                        var prefix = "-" + ua_prefix.toLowerCase() + "-";
                        style_str +=
                            sel_toscale +
                            "{" +
                            prefix +
                            "transform: scale(" +
                            scale +
                            ");}" +
                            " #svg_editor div.toolset .toolset {" +
                            prefix +
                            "transform: scale(1); margin: 1px !important;}" + // Hack for markers
                            " #svg_editor .ui-slider {" +
                            prefix +
                            "transform: scale(" +
                            1 / scale +
                            ");}"; // Hack for sliders
                        rule_elem.text(style_str);
                    }

                    setFlyoutPositions();
                });

                var cancelOverlays = function() {
                    $("#dialog_box").hide();
                    if (!editingsource && !docprops && !preferences) {
                        if (cur_context) {
                            svgCanvas.leaveContext();
                        }
                        return;
                    }

                    if (editingsource) {
                        if (orig_source !== $("#svg_source_textarea").val()) {
                            $.confirm(
                                "Ignore changes made to SVG source?",
                                function(ok) {
                                    if (ok) hideSourceEditor();
                                },
                                350,
                                250,
                                true
                            );
                        } else {
                            hideSourceEditor();
                        }
                    } else if (docprops) {
                        hideDocProperties();
                    } else if (preferences) {
                        hidePreferences();
                    }
                    resetScrollPos();
                };

                var hideSourceEditor = function() {
                    $("#svg_source_editor").hide();
                    editingsource = false;
                    $("#svg_source_textarea").blur();
                };

                var win_wh = { width: $(window).width(), height: $(window).height() };

                var resetScrollPos = $.noop,
                    curScrollPos;

                /* Fix for Issue 781: Drawing area jumps to top-left corner on window resize (IE9)
      if(svgedit.browser.isIE()) {
        (function() {
          resetScrollPos = function() {
            if(workarea[0].scrollLeft === 0
            && workarea[0].scrollTop === 0) {
              workarea[0].scrollLeft = curScrollPos.left;
              workarea[0].scrollTop = curScrollPos.top;
            }
          }

          curScrollPos = {
            left: workarea[0].scrollLeft,
            top: workarea[0].scrollTop
          };

          $(window).resize(resetScrollPos);
          methodDraw.ready(function() {
            // TODO: Find better way to detect when to do this to minimize
            // flickering effect
            setTimeout(function() {
              resetScrollPos();
            }, 500);
          });

          workarea.scroll(function() {
            curScrollPos = {
              left: workarea[0].scrollLeft,
              top: workarea[0].scrollTop
            };
          });
        }());
      }*/

                $(window).resize(function(evt) {
                    updateCanvas();
                });

                (function() {
                    workarea.scroll(function() {
                        // TODO:  jQuery's scrollLeft/Top() wouldn't require a null check
                        if ($("#ruler_x").length != 0) {
                            $("#ruler_x")[0].scrollLeft = workarea[0].scrollLeft;
                        }
                        if ($("#ruler_y").length != 0) {
                            $("#ruler_y")[0].scrollTop = workarea[0].scrollTop;
                        }
                    });
                })();

                $("#url_notice").click(function() {
                    $.alert(this.title);
                });

                $("#change_image_url").click(promptImgURL);

                function promptImgURL() {
                    var curhref = svgCanvas.getHref(selectedElement);
                    curhref = curhref.indexOf("data:") === 0 ? "" : curhref;
                    $.prompt("Enter the new image URL", curhref, function(url) {
                        if (url) setImageURL(url);
                    });
                }

                // TODO: go back to the color boxes having white background-color and then setting
                //       background-image to none.png (otherwise partially transparent gradients look weird)
                var colorPicker = function(elem) {
                    var picker = elem[0].id == "stroke_color" ? "stroke" : "fill";
                    var is_background = elem[0].id == "canvas_color";
                    if (is_background) picker = "canvas";
                    //        var opacity = (picker == 'stroke' ? $('#stroke_opacity') : $('#fill_opacity'));
                    var paint = Editor.paintBox[picker].paint;

                    var title =
                        picker == "stroke" ?
                        "Pick a Stroke Paint and Opacity" :
                        "Pick a Fill Paint and Opacity";
                    var was_none = false;
                    var pos = is_background ? { right: 175, top: 50 } : { left: 50, bottom: 50 };

                    $("#color_picker")
                        .draggable({
                            cancel: ".jGraduate_tabs, .jGraduate_colPick, .jGraduate_gradPick, .jPicker",
                            containment: "window",
                        })
                        .removeAttr("style")
                        .css(pos)
                        .jGraduate({
                                paint: paint,
                                window: { pickerTitle: title },
                                images: { clientPath: curConfig.jGraduatePath },
                                newstop: "inverse",
                            },
                            function(p) {
                                paint = new $.jGraduate.Paint(p);

                                Editor.paintBox[picker].setPaint(paint);
                                svgCanvas.setPaint(picker, paint);

                                $("#color_picker").hide();
                            },
                            function(p) {
                                $("#color_picker").hide();
                            }
                        );
                };

                var PaintBox = function(container, type) {
                    var background = document.getElementById("canvas_background");
                    var cur = { color: "fff", opacity: 1 };
                    if (type == "stroke") cur = curConfig["initStroke"];
                    if (type == "fill") cur = curConfig["initFill"];
                    if (type == "canvas" && background) {
                        var rgb = background
                            .getAttribute("fill")
                            .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                        if (rgb) {
                            var hex =
                                ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
                                ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
                                ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
                            cur = { color: hex, opacity: 1 };
                        }
                    }

                    // set up gradients to be used for the buttons
                    var svgdocbox = new DOMParser().parseFromString(
                        '<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%"\
          fill="#' +
                        cur.color +
                        '" opacity="' +
                        cur.opacity +
                        '"/>\
          <defs><linearGradient id="gradbox_"/></defs></svg>',
                        "text/xml"
                    );
                    var docElem = svgdocbox.documentElement;

                    docElem = $(container)[0].appendChild(
                        document.importNode(docElem, true)
                    );
                    if (type === "canvas") docElem.setAttribute("width", 60.5);
                    else docElem.setAttribute("width", "100%");

                    this.rect = docElem.firstChild;
                    this.defs = docElem.getElementsByTagName("defs")[0];
                    this.grad = this.defs.firstChild;
                    this.paint = new $.jGraduate.Paint({ solidColor: cur.color });
                    this.type = type;

                    this.setPaint = function(paint, apply, noUndo) {
                        this.paint = paint;
                        var fillAttr = "none";
                        var ptype = paint.type;
                        var opac = paint.alpha / 100;
                        switch (ptype) {
                            case "solidColor":
                                fillAttr =
                                    paint[ptype] == "none" || paint[ptype] == "one" ?
                                    "none" :
                                    "#" + paint[ptype];
                                break;
                            case "linearGradient":
                            case "radialGradient":
                                this.defs.removeChild(this.grad);
                                this.grad = this.defs.appendChild(paint[ptype]);
                                var id = (this.grad.id = "gradbox_" + this.type);
                                fillAttr = "url(#" + id + ")";
                        }
                        this.rect.setAttribute("fill", fillAttr);
                        this.rect.setAttribute("opacity", opac);

                        if (this.type == "canvas") {
                            //recache background in case it changed
                            var background = document.getElementById("canvas_background");
                            if (background) {
                                res = svgCanvas.getResolution();
                                background.setAttribute("x", -1);
                                background.setAttribute("y", -1);
                                background.setAttribute("width", res.w);
                                background.setAttribute("height", res.h);
                                if (fillAttr.indexOf("url") == -1)
                                    background.setAttribute("fill", fillAttr);
                            } else createBackground(fillAttr);
                        }

                        if (apply) {
                            svgCanvas.setColor(this.type, fillAttr, true);
                            svgCanvas.setPaintOpacity(this.type, opac, true);
                        }
                    };

                    this.update = function(apply) {
                        if (!selectedElement) return;
                        var type = this.type;
                        switch (selectedElement.tagName) {
                            case "use":
                            case "image":
                            case "foreignObject":
                                // These elements don't have fill or stroke, so don't change
                                // the current value
                                return;
                            case "g":
                            case "a":
                                var gPaint = null;

                                var childs = selectedElement.getElementsByTagName("*");
                                for (var i = 0, len = childs.length; i < len; i++) {
                                    var elem = childs[i];
                                    var p = elem.getAttribute(type);
                                    if (i === 0) {
                                        gPaint = p;
                                    } else if (gPaint !== p) {
                                        gPaint = null;
                                        break;
                                    }
                                }
                                if (gPaint === null) {
                                    // No common color, don't update anything
                                    var paintColor = null;
                                    return;
                                }
                                var paintColor = gPaint;

                                var paintOpacity = 1;
                                break;
                            default:
                                var paintOpacity = parseFloat(
                                    selectedElement.getAttribute(type + "-opacity")
                                );
                                if (isNaN(paintOpacity)) {
                                    paintOpacity = 1.0;
                                }

                                var defColor = type === "fill" ? "black" : "none";
                                var paintColor = selectedElement.getAttribute(type) || defColor;
                        }
                        if (apply) {
                            svgCanvas.setColor(type, paintColor, true);
                            svgCanvas.setPaintOpacity(type, paintOpacity, true);
                        }

                        paintOpacity *= 100;

                        var paint = getPaint(paintColor, paintOpacity, type);
                        // update the rect inside #fill_color/#stroke_color
                        this.setPaint(paint);
                    };

                    this.prep = function() {
                        var ptype = this.paint.type;

                        switch (ptype) {
                            case "linearGradient":
                            case "radialGradient":
                                var paint = new $.jGraduate.Paint({ copy: this.paint });
                                svgCanvas.setPaint(type, paint);
                        }
                    };
                };

                Editor.paintBox.fill = new PaintBox("#fill_color", "fill");
                Editor.paintBox.stroke = new PaintBox("#stroke_color", "stroke");
                //cflorioluis - quitar funcion para pintar hoja (pieza)
                //Editor.paintBox.canvas = new PaintBox("#canvas_color", "canvas");

                $("#stroke_width").val(curConfig.initStroke.width);
                $("#group_opacity").val(curConfig.initOpacity * 100);

                // Use this SVG elem to test vectorEffect support
                var test_el = Editor.paintBox.fill.rect.cloneNode(false);
                test_el.setAttribute("style", "vector-effect:non-scaling-stroke");
                var supportsNonSS = test_el.style.vectorEffect === "non-scaling-stroke";
                test_el.removeAttribute("style");
                var svgdocbox = Editor.paintBox.fill.rect.ownerDocument;
                // Use this to test support for blur element. Seems to work to test support in Webkit
                var blur_test = svgdocbox.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "feGaussianBlur"
                );
                if (typeof blur_test.stdDeviationX === "undefined") {
                    $("#tool_blur").hide();
                }
                $(blur_test).remove();

                // Test for embedImage support (use timeout to not interfere with page load)
                setTimeout(function() {
                    svgCanvas.embedImage(
                        "images/placeholder.svg",
                        function(datauri) {
                            if (!datauri) {
                                // Disable option
                                $("#image_save_opts [value=embed]").attr(
                                    "disabled",
                                    "disabled"
                                );
                                $("#image_save_opts input").val(["ref"]);
                                curPrefs.img_save = "ref";
                                $("#image_opt_embed")
                                    .css("color", "#666")
                                    .attr("title", "Feature not supported");
                            }
                        }
                    );
                }, 1000);

                $("#tool_fill").click(function() {
                    if ($("#tool_fill").hasClass("active")) {
                        colorPicker($("#fill_color"));
                    } else {
                        $("#tool_fill").addClass("active");
                        $("#tool_stroke").removeClass("active");
                    }
                });

                $("#tool_stroke").on("click", function() {
                    if ($("#tool_stroke").hasClass("active")) {
                        colorPicker($("#stroke_color"));
                    } else {
                        $("#tool_stroke").addClass("active");
                        $("#tool_fill").removeClass("active");
                    }
                });

                //cflorioluis - quitar funcion para pintar hoja (pieza)
                /*$("#tool_canvas").on("click touchstart", function() {
                                                                                                                                                            colorPicker($("#canvas_color"));
                                                                                                                                                        });*/

                $("#tool_stroke").on("touchstart", function() {
                    $("#tool_stroke").addClass("active");
                    $("#tool_fill").removeClass("active");
                    colorPicker($("#stroke_color"));
                });

                $("#tool_fill").on("touchstart", function() {
                    $("#tool_fill").addClass("active");
                    $("#tool_stroke").removeClass("active");
                    colorPicker($("#fill_color"));
                });

                $("#zoom_select").on("change", function() {
                    var val = this.options[this.selectedIndex].text;
                    val = val.split("%")[0];
                    $("#zoom").val(val).trigger("change");
                });

                $(".push_button")
                    .mousedown(function() {
                        if (!$(this).hasClass("disabled")) {
                            $(this)
                                .addClass("push_button_pressed")
                                .removeClass("push_button");
                        }
                    })
                    .mouseout(function() {
                        $(this).removeClass("push_button_pressed").addClass("push_button");
                    })
                    .mouseup(function() {
                        $(this).removeClass("push_button_pressed").addClass("push_button");
                    });

                //  function changeResolution(x,y) {
                //    var zoom = svgCanvas.getResolution().zoom;
                //    setResolution(x * zoom, y * zoom);
                //  }

                var centerCanvas = function() {
                    // this centers the canvas vertically in the workarea (horizontal handled in CSS)
                    workarea.css("line-height", workarea.height() + "px");
                };

                $(window).bind("load resize", centerCanvas);

                function stepFontSize(elem, step) {
                    var orig_val = elem.value - 0;
                    var sug_val = orig_val + step;
                    var increasing = sug_val >= orig_val;
                    if (step === 0) return orig_val;

                    if (orig_val >= 24) {
                        if (increasing) {
                            return Math.round(orig_val * 1.1);
                        } else {
                            return Math.round(orig_val / 1.1);
                        }
                    } else if (orig_val <= 1) {
                        if (increasing) {
                            return orig_val * 2;
                        } else {
                            return orig_val / 2;
                        }
                    } else {
                        return sug_val;
                    }
                }

                function stepZoom(elem, step) {
                    var orig_val = elem.value - 0;
                    if (orig_val === 0) return 100;
                    var sug_val = orig_val + step;
                    if (step === 0) return orig_val;

                    if (orig_val >= 100) {
                        return sug_val;
                    } else {
                        if (sug_val >= orig_val) {
                            return orig_val * 2;
                        } else {
                            return orig_val / 2;
                        }
                    }
                }

                var changeCanvasSize = function(ctl) {
                    var width = $("#canvas_width");
                    var height = $("#canvas_height");
                    var w = width.val();
                    var h = height.val();

                    if (w != "fit" && !svgedit.units.isValidUnit("width", w)) {
                        $.alert("Invalid value given");
                        width.parent().addClass("error");
                        return false;
                    }

                    width.parent().removeClass("error");

                    if (h != "fit" && !svgedit.units.isValidUnit("height", h)) {
                        $.alert("Invalid value given");
                        height.parent().addClass("error");
                        return false;
                    }
                    height.parent().removeClass("error");
                    if (!svgCanvas.setResolution(w, h)) {
                        $.alert("No content to fit to");
                        var dims = svgCanvas.getResolution();
                        width.val(dims.w);
                        height.val(dims.h);
                        return false;
                    }
                    updateCanvas();
                };

                $("#resolution").change(function() {
                    var w = $("#canvas_width")[0];
                    var h = $("#canvas_height")[0];
                    if (!this.selectedIndex) {
                        $("#resolution_label").html("Custom");
                        w.removeAttribute("readonly");
                        w.focus();
                        w.select();
                        if (w.value == "fit") {
                            w.value = 100;
                            h.value = 100;
                        }
                    } else if (this.value == "content") {
                        w.value = "fit";
                        h.value = "fit";
                        changeCanvasSize();
                        var res = svgCanvas.getResolution();
                        w.value = res.w;
                        h.value = res.h;
                    } else {
                        var dims = this.value.split("x");
                        dims[0] = parseInt(dims[0]);
                        dims[1] = parseInt(dims[1]);
                        var diff_w = dims[0] - w.value;
                        var diff_h = dims[1] - h.value;
                        //animate
                        var start = Date.now();
                        var duration = 1000;
                        var animateCanvasSize = function(timestamp) {
                            var progress = Date.now() - start;
                            var tick = progress / duration;
                            tick = Math.pow(tick - 1, 3) + 1;
                            w.value = (dims[0] - diff_w + tick * diff_w).toFixed(0);
                            h.value = (dims[1] - diff_h + tick * diff_h).toFixed(0);
                            changeCanvasSize();
                            if (tick >= 1) {
                                var res = svgCanvas.getResolution();
                                $("#canvas_width").val(res.w.toFixed());
                                $("#canvas_height").val(res.h.toFixed());
                                $("#resolution_label").html(
                                    "<div class='pull'>" +
                                    res.w +
                                    "<span>×</span></br>" +
                                    res.h +
                                    "</div>"
                                );
                            } else {
                                requestAnimationFrame(animateCanvasSize);
                            }
                        };
                        animateCanvasSize();
                    }
                });

                $("#zoom").change(function() {
                    changeZoom(this);
                });

                //Prevent browser from erroneously repopulating fields
                $("input,select").attr("autocomplete", "off");

                // Associate all button actions as well as non-button keyboard shortcuts
                var Actions = (function() {
                    // sel:'selector', fn:function, evt:'event', key:[key, preventDefault, NoDisableInInput]

                    var tool_buttons = [{
                            sel: "#tool_select",
                            fn: clickSelect,
                            evt: "click",
                            key: [modKey + "Shift+1"],
                        },
                        //add new toll - cflorioluis

                        {
                            sel: "#textErrorVariable",
                            fn: clickSelectMachining,
                            evt: "click",
                            key: ["Space"],
                            //key: [modKey + "Shift+9"],
                        },

                        {
                            sel: "#tool_pocketTool",
                            fn: clickPocketTool,
                            evt: "click",
                            key: [modKey + "Shift+2"],
                        },
                        {
                            sel: "#tool_multiDrillingTool",
                            fn: clickmultiDrillingTool,
                            evt: "click",
                            key: [modKey + "Shift+3"],
                        },
                        {
                            sel: "#tool_drillTool",
                            fn: clickDrillTool,
                            evt: "click",
                            key: [modKey + "Shift+4"],
                        },
                        {
                            sel: "#tool_hingeTool",
                            fn: clickHingeTool,
                            evt: "click",
                            key: [modKey + "Shift+5"],
                        },
                        {
                            sel: "#tool_polyTool",
                            fn: clickPolyTool,
                            evt: "click",
                            key: [modKey + "Shift+6"],
                        },
                        {
                            sel: "#tool_rectTool",
                            fn: clickRectTool,
                            evt: "click",
                            key: [modKey + "Shift+7"],
                        },
                        {
                            sel: "#tool_rectRoundTool",
                            fn: clickRectRoundTool,
                            evt: "click",
                            key: [modKey + "Shift+8"],
                        },

                        {
                            sel: "#tool_fhpath",
                            fn: clickFHPath,
                            evt: "click",
                            key: ["Q", true],
                        },
                        {
                            sel: "#tool_line",
                            fn: clickLine,
                            evt: "click",
                            key: ["L", true],
                        },
                        {
                            sel: "#tool_rect",
                            fn: clickRect,
                            evt: "click",
                            key: ["R", true],
                            icon: "rect",
                        },
                        {
                            sel: "#tool_ellipse",
                            fn: clickEllipse,
                            evt: "mouseup",
                            key: ["CC", true],
                            icon: "ellipse",
                        },
                        //{sel:'#tool_circle', fn: clickCircle, evt: 'mouseup', icon: 'circle'},
                        //{sel:'#tool_fhellipse', fn: clickFHEllipse, evt: 'mouseup', parent: '#tools_ellipse', icon: 'fh_ellipse'},
                        {
                            sel: "#tool_path",
                            fn: clickPath,
                            evt: "click",
                            key: ["P", true],
                        },
                        {
                            sel: "#tool_text",
                            fn: clickText,
                            evt: "click",
                            key: ["T", true],
                        },
                        { sel: "#tool_image", fn: clickImage, evt: "mouseup" },
                        {
                            sel: "#tool_zoom",
                            fn: clickZoom,
                            evt: "mouseup",
                            key: ["Z", true],
                        },
                        {
                            sel: "#tool_clear",
                            fn: clickClear,
                            evt: "mouseup",
                            key: [modKey + "N", true],
                        },
                        //cflorioluis - Eliminar Cantos, definicion del evento
                        {
                            sel: "#tool_edges_clear",
                            fn: clickClearEdges,
                            evt: "mouseup",
                            key: [modKey + "N", true],
                        },
                        {
                            sel: "#tool_save",
                            fn: function() {
                                editingsource ? saveSourceEditor() : clickSave();
                            },
                            evt: "mouseup",
                            key: [modKey + "S", true],
                        },
                        { sel: "#tool_export", fn: clickExport, evt: "mouseup" },
                        //cflorioluis - evento al seleccionar exportar a partDraw, definicion del evento
                        {
                            sel: "#tool_export_part_draw",
                            fn: clickExportPartDraw,
                            evt: "mouseup",
                        },

                        //cflorioluis - evento al seleccionar guardar los cambios, definicion del evento
                        {
                            sel: "#tool_save_changes",
                            fn: clickSaveChanges,
                            evt: "mouseup",
                        },
                        //cflorioluis - Auto Guardar, definicion del evento
                        {
                            sel: "#tool_autosave",
                            fn: clickAutoSave,
                            evt: "click",
                        },

                        { sel: "#tool_open", fn: clickOpen, evt: "mouseup" },
                        { sel: "#tool_import", fn: clickImport, evt: "mouseup" },
                        {
                            sel: "#tool_source",
                            fn: showSourceEditor,
                            evt: "click",
                            key: [modKey + "U", true],
                        },
                        { sel: "#tool_wireframe", fn: clickWireframe, evt: "click" },
                        { sel: "#tool_snap", fn: clickSnapGrid, evt: "click" },
                        { sel: "#tool_rulers", fn: clickRulers, evt: "click" },
                        //cflorioluis - Ver todos los Mecanizados, definicion del evento
                        {
                            sel: "#tool_viewAllMachining",
                            fn: clickViewAllMachining,
                            evt: "click",
                        },
                        //cflorioluis - Ver Version del Editor
                        {
                            sel: "#tool_about",
                            fn: clickViewAbout,
                            evt: "click",
                        },
                        {
                            sel: "#tool_source_cancel,#svg_source_overlay,#tool_docprops_cancel,#tool_prefs_cancel",
                            fn: cancelOverlays,
                            evt: "click",
                            key: ["esc", false, false],
                            hidekey: true,
                        },
                        { sel: "#tool_source_save", fn: saveSourceEditor, evt: "click" },
                        {
                            sel: "#tool_delete,#tool_delete_multi",
                            fn: deleteSelected,
                            evt: "click",
                            key: ["del/backspace", true],
                        },
                        { sel: "#tool_reorient", fn: reorientPath, evt: "click" },
                        { sel: "#tool_node_link", fn: linkControlPoints, evt: "change" },
                        { sel: "#tool_node_clone", fn: clonePathNode, evt: "click" },
                        { sel: "#tool_node_delete", fn: deletePathNode, evt: "click" },
                        { sel: "#tool_openclose_path", fn: opencloseSubPath, evt: "click" },
                        { sel: "#tool_add_subpath", fn: addSubPath, evt: "click" },
                        {
                            sel: "#tool_move_top",
                            fn: moveToTopSelected,
                            evt: "click",
                            key: modKey + "shift+up",
                        },
                        {
                            sel: "#tool_move_bottom",
                            fn: moveToBottomSelected,
                            evt: "click",
                            key: modKey + "shift+down",
                        },
                        {
                            sel: "#tool_move_up",
                            fn: moveUpSelected,
                            evt: "click",
                            key: [modKey + "up", true],
                        },
                        {
                            sel: "#tool_move_down",
                            fn: moveDownSelected,
                            evt: "click",
                            key: [modKey + "down", true],
                        },
                        { sel: "#tool_topath", fn: convertToPath, evt: "click" },
                        {
                            sel: "#tool_make_link,#tool_make_link_multi",
                            fn: makeHyperlink,
                            evt: "click",
                        },
                        {
                            sel: "#tool_clone,#tool_clone_multi",
                            fn: clickClone,
                            evt: "click",
                            key: [modKey + "D", true],
                        },
                        {
                            sel: "#tool_group",
                            fn: clickGroup,
                            evt: "click",
                            key: [modKey + "G", true],
                        },
                        {
                            sel: "#tool_ungroup",
                            fn: clickGroup,
                            evt: "click",
                            key: modKey + "shift+G",
                        },
                        { sel: "#tool_unlink_use", fn: clickGroup, evt: "click" },
                        { sel: "[id^=tool_align]", fn: clickAlign, evt: "click" },
                        {
                            sel: "#tool_undo",
                            fn: clickUndo,
                            evt: "click",
                            key: modKey + "z",
                        },
                        {
                            sel: "#tool_redo",
                            fn: clickRedo,
                            evt: "click",
                            key: ["y", true],
                        },
                        {
                            sel: "#tool_cut",
                            fn: cutSelected,
                            evt: "click",
                            key: [modKey + "x", true],
                        },
                        {
                            sel: "#tool_copy",
                            fn: copySelected,
                            evt: "click",
                            key: modKey + "c",
                        },
                        {
                            sel: "#tool_paste",
                            fn: pasteSelected,
                            evt: "click",
                            key: modKey + "v",
                        },
                        {
                            sel: "#tool_switch",
                            fn: clickSwitch,
                            evt: "click",
                            key: ["x", true],
                        },
                        {
                            sel: "#tool_bold",
                            fn: clickBold,
                            evt: "mousedown",
                            key: [modKey + "B", true],
                        },
                        {
                            sel: "#tool_italic",
                            fn: clickItalic,
                            evt: "mousedown",
                            key: [modKey + "I", true],
                        },
                        //{sel:'#sidepanel_handle', fn: toggleSidePanel, key: ['X']},
                        { sel: "#copy_save_done", fn: cancelOverlays, evt: "click" },

                        // Shortcuts not associated with buttons

                        {
                            key: "ctrl+left",
                            fn: function() {
                                rotateSelected(0, 1);
                            },
                        },
                        {
                            key: "ctrl+right",
                            fn: function() {
                                rotateSelected(1, 1);
                            },
                        },
                        {
                            key: "ctrl+shift+left",
                            fn: function() {
                                rotateSelected(0, 5);
                            },
                        },
                        {
                            key: "ctrl+shift+right",
                            fn: function() {
                                rotateSelected(1, 5);
                            },
                        },
                        { key: "shift+O", fn: selectPrev },
                        { key: "shift+P", fn: selectNext },
                        {
                            key: [modKey + "+", true],
                            fn: function() {
                                zoomImage(2);
                            },
                        },
                        {
                            key: [modKey + "-", true],
                            fn: function() {
                                zoomImage(0.5);
                            },
                        },
                        {
                            key: ["+", true],
                            fn: function() {
                                scaleRadiusSelected(1);
                            },
                        },
                        {
                            key: ["up", true],
                            fn: function() {
                                moveSelected(0, -1);
                            },
                        },
                        {
                            key: ["down", true],
                            fn: function() {
                                moveSelected(0, 1);
                            },
                        },
                        {
                            key: ["left", true],
                            fn: function() {
                                moveSelected(-1, 0);
                            },
                        },
                        {
                            key: ["right", true],
                            fn: function() {
                                moveSelected(1, 0);
                            },
                        },
                        {
                            key: "shift+up",
                            fn: function() {
                                moveSelected(0, -10);
                            },
                        },
                        {
                            key: "shift+down",
                            fn: function() {
                                moveSelected(0, 10);
                            },
                        },
                        {
                            key: "shift+left",
                            fn: function() {
                                moveSelected(-10, 0);
                            },
                        },
                        {
                            key: "shift+right",
                            fn: function() {
                                moveSelected(10, 0);
                            },
                        },
                        {
                            key: ["alt+up", true],
                            fn: function() {
                                svgCanvas.cloneSelectedElements(0, -1);
                            },
                        },
                        {
                            key: ["alt+down", true],
                            fn: function() {
                                svgCanvas.cloneSelectedElements(0, 1);
                            },
                        },
                        {
                            key: ["alt+left", true],
                            fn: function() {
                                svgCanvas.cloneSelectedElements(-1, 0);
                            },
                        },
                        {
                            key: ["alt+right", true],
                            fn: function() {
                                svgCanvas.cloneSelectedElements(1, 0);
                            },
                        },
                        {
                            key: ["alt+shift+up", true],
                            fn: function() {
                                svgCanvas.cloneSelectedElements(0, 32);
                            },
                        },
                        {
                            key: ["alt+shift+down", true],
                            fn: function() {
                                svgCanvas.cloneSelectedElements(0, -32);
                            },
                        },
                        {
                            key: ["alt+shift+left", true],
                            fn: function() {
                                svgCanvas.cloneSelectedElements(-32, 0);
                            },
                        },
                        {
                            key: ["alt+shift+right", true],
                            fn: function() {
                                svgCanvas.cloneSelectedElements(32, 0);
                            },
                        },
                        {
                            key: modKey + "A",
                            fn: function() {
                                svgCanvas.selectAllInCurrentLayer();
                            },
                        },
                        {
                            key: "I",
                            fn: function() {
                                setEyedropperMode();
                            },
                        },

                        // Standard shortcuts
                        { key: modKey + "shift+z", fn: clickRedo },
                        { key: "esc", fn: minimizeModal },
                    ];

                    // Tooltips not directly associated with a single function
                    var key_assocs = {
                        "4/Shift+4": "#tools_rect_show",
                        "5/Shift+5": "#tools_ellipse_show",
                    };

                    return {
                        setAll: function() {
                            var flyouts = {};

                            $.each(tool_buttons, function(i, opts) {
                                // Bind function to button
                                if (opts.sel) {
                                    var btn = $(opts.sel);
                                    if (btn.length == 0) return true; // Skip if markup does not exist
                                    if (opts.evt) {
                                        if (svgedit.browser.isTouch() && opts.evt === "click")
                                            opts.evt = "mousedown";
                                        btn[opts.evt](opts.fn);
                                    }

                                    // Add to parent flyout menu, if able to be displayed
                                    if (opts.parent && $(opts.parent + "_show").length != 0) {
                                        var f_h = $(opts.parent);
                                        if (!f_h.length) {
                                            f_h = makeFlyoutHolder(opts.parent.substr(1));
                                        }

                                        f_h.append(btn);

                                        if (!$.isArray(flyouts[opts.parent])) {
                                            flyouts[opts.parent] = [];
                                        }
                                        flyouts[opts.parent].push(opts);
                                    }
                                }

                                // Bind function to shortcut key
                                if (opts.key) {
                                    // Set shortcut based on options
                                    var keyval,
                                        shortcut = "",
                                        disInInp = true,
                                        fn = opts.fn,
                                        pd = false;
                                    if ($.isArray(opts.key)) {
                                        keyval = opts.key[0];
                                        if (opts.key.length > 1) pd = opts.key[1];
                                        if (opts.key.length > 2) disInInp = opts.key[2];
                                    } else {
                                        keyval = opts.key;
                                    }
                                    keyval += "";
                                    if (svgedit.browser.isMac && keyval.indexOf("+") != -1) {
                                        var modifier_key = keyval.split("+")[0];
                                        if (modifier_key == "ctrl") keyval.replace("ctrl", "cmd");
                                    }

                                    $.each(keyval.split("/"), function(i, key) {
                                        //console.log(key);
                                        $(document).bind("keydown", key, function(e) {
                                            fn();
                                            if (pd) {
                                                e.preventDefault();
                                            }
                                            // Prevent default on ALL keys?
                                            return false;
                                        });
                                    });

                                    // Put shortcut in title
                                    if (opts.sel && !opts.hidekey && btn.attr("title")) {
                                        var new_title =
                                            btn.attr("title").split("[")[0] + " (" + keyval + ")";
                                        key_assocs[keyval] = opts.sel;
                                        // Disregard for menu items
                                        if (!btn.parents("#main_menu").length) {
                                            btn.attr("title", new_title);
                                        }
                                    }
                                }
                            });

                            // Setup flyouts
                            setupFlyouts(flyouts);

                            /*$(window)
                                .bind("keydown", "tab", function(e) {
                                    if (ui_context === "canvas") {
                                        e.preventDefault();
                                        selectNext();
                                    }
                                })
                                .bind("keydown", "shift+tab", function(e) {
                                    if (ui_context === "canvas") {
                                        e.preventDefault();
                                        selectPrev();
                                    }
                                });*/

                            $("#tool_zoom").dblclick(dblclickZoom);
                        },
                        setTitles: function() {
                            $.each(key_assocs, function(keyval, sel) {
                                var menu = $(sel).parents("#main_menu").length;

                                $(sel).each(function() {
                                    if (menu) {
                                        var t = $(this).text().split(" [")[0];
                                    } else {
                                        var t = this.title.split(" [")[0];
                                    }
                                    var key_str = "";
                                    // Shift+Up
                                    $.each(keyval.split("/"), function(i, key) {
                                        var mod_bits = key.split("+"),
                                            mod = "";
                                        if (mod_bits.length > 1) {
                                            mod = mod_bits[0] + "+";
                                            key = mod_bits[1];
                                        }
                                        key_str += (i ? "/" : "") + mod + key;
                                    });
                                    if (menu) {
                                        this.lastChild.textContent = t + " [" + key_str + "]";
                                    } else {
                                        this.title = t + " [" + key_str + "]";
                                    }
                                });
                            });
                        },
                        getButtonData: function(sel) {
                            var b;
                            $.each(tool_buttons, function(i, btn) {
                                if (btn.sel === sel) b = btn;
                            });
                            return b;
                        },
                    };
                })();

                Actions.setAll();

                // Select given tool
                Editor.ready(function() {
                    var tool,
                        itool = curConfig.initTool,
                        container = $("#tools_left, #svg_editor .tools_flyout"),
                        pre_tool = container.find("#tool_" + itool),
                        reg_tool = container.find("#" + itool);
                    /*console.log("itool");
                                                                      console.log(itool);
                                                                      console.log("container");
                                                                      console.log(container);
                                                                      console.log("pre_tool");
                                                                      console.log(pre_tool);*/
                    /*console.log()
                                                                                    console.log()*/
                    if (pre_tool.length) {
                        tool = pre_tool;
                    } else if (reg_tool.length) {
                        tool = reg_tool;
                    } else {
                        tool = $("#tool_select");
                    }
                    tool.click().mouseup();

                    if (curConfig.wireframe) {
                        $("#tool_wireframe").click();
                    }

                    if (curConfig.showlayers) {
                        toggleSidePanel();
                    }

                    $("#rulers").toggle(!!curConfig.showRulers);
                });
                //cflorioluis - ver el tamaño de la pieza pero no editarlo
                $("#canvas_height").dragInput({
                    min: curConfig.realDimensions[1],
                    max: curConfig.realDimensions[1],
                    step: 0,
                    //callback: changeCanvasSize,
                    cursor: false,
                    dragAdjust: 0,
                });
                $("#canvas_height").prop("readonly", true);
                //cflorioluis - ver el tamaño de la pieza pero no editarlo
                $("#canvas_width").dragInput({
                    min: curConfig.realDimensions[0], //cflorioluis ajustar que las opciones de la pieza den la medida real
                    max: curConfig.realDimensions[0],
                    step: 0,
                    //callback: changeCanvasSize,
                    cursor: false,
                    dragAdjust: 0,
                });
                /*$("#rect_width").dragInput({
                                    min: 1,
                                    max: null,
                                    step: 1,
                                    callback: changeAttribute,
                                    cursor: false,
                                });
                                $("#rect_height").dragInput({
                                    min: 1,
                                    max: null,
                                    step: 1,
                                    callback: changeAttribute,
                                    cursor: false,
                                });*/
                $("#ellipse_cx").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#ellipse_cy").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#ellipse_rx").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#ellipse_ry").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#image_height").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#circle_cx").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#circle_cy").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#circle_r").dragInput({
                    min: 1,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#image_height").dragInput({
                    min: 0,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#selected_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#selected_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#path_node_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#path_node_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#image_width").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#line_x1").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#line_x2").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#line_y1").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#line_y2").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#path_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#path_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                //cflorioluis - agregar funciones al cajeado
                $("#pocket_widthX").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributePocket,
                    cursor: true,
                });
                $("#pocket_heightY").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributePocket,
                    cursor: true,
                });
                $("#pocket_radio").dragInput({
                    min: 0,
                    max: lowDimension - 200,
                    step: 1,
                    callback: changeAttributePocket,
                    cursor: true,
                });
                //cflorioluis - agregar funciones al Taladro
                $("#drill_realX").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributeDrill,
                    cursor: true,
                });
                $("#drill_realY").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeDrill,
                    cursor: true,
                });
                $("#drill_diameter").dragInput({
                    min: 1,
                    max: lowDimension - 200,
                    step: 1,
                    callback: changeAttributeDrill,
                    cursor: true,
                });
                //cflorioluis - agregar funciones al Angulo en Lados
                $("#poly_widthX").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributePoly,
                    cursor: true,
                });
                $("#poly_heightY").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributePoly,
                    cursor: true,
                });

                //cflorioluis - agragar funciones al Rectangulo
                $("#rect_realX").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributeRect,
                    cursor: true,
                });
                $("#rect_realY").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeRect,
                    cursor: true,
                });

                $("#rect_width").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributeRect,
                    cursor: true,
                });
                $("#rect_height").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeRect,
                    cursor: true,
                });

                //cflorioluis - agragar funciones al Rectangulo Redondeado
                $("#rectRound_realX").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributeRectRound,
                    cursor: true,
                });
                $("#rectRound_realY").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeRectRound,
                    cursor: true,
                });

                $("#rectRound_width").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributeRectRound,
                    cursor: true,
                });
                $("#rectRound_height").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeRectRound,
                    cursor: true,
                });

                $("#rectRound_rx").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributeRectRound,
                    cursor: true,
                });
                $("#rectRound_ry").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeRectRound,
                    cursor: true,
                });

                //cflorioluis - agragar funciones a la Cazoleta
                var textToNum = function(e, obj) {
                    if ($.isNumeric(obj.val())) {
                        if (e.originalEvent.wheelDelta / 120 > 0) {
                            obj.val(parseFloat(obj.val()) + 1)
                        } else {
                            obj.val(parseFloat(obj.val()) - 1)
                        }
                    } else {
                        obj.val("0")
                    }
                }

                $("#hinge_beginX").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributeHinge,
                    cursor: false,
                });

                $("#hinge_endX").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeHinge,
                    cursor: false,
                });
                $('#hinge_endX').bind('mousewheel', (e) => { textToNum(e, $('#hinge_endX')) });
                $('#hinge_endX').bind('mousedown', (e) => {
                    $('#hinge_endX').bind('mousemove', textToNum(e, $('#hinge_endX')));
                });


                /*$('#control-vol').bind('mousedown', function(e){
                  $('#control-vol').bind('mousemove', function(e){
                      var volumen = e.pageX - this.offsetLeft;
                      $('#barra-vol').width(volumen + 'px');
                      $('audio')[7].volume = volumen/50;
                  });

                  $('#control-vol').bind('mouseup',function(){
                      $('#control-vol').unbind('mousemove')
                  });
              });*/

                $("#hinge_hingeCount").dragInput({
                    min: 0,
                    max: 10,
                    step: 1,
                    callback: changeAttributeHinge,
                    cursor: false,
                });

                $("#hinge_axisDist").dragInput({
                    min: 0,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeHinge,
                    cursor: false,
                });
                $('#hinge_axisDist').bind('mousewheel', (e) => { textToNum(e, $('#hinge_axisDist')) });
                $('#hinge_axisDist').bind('mousedown', (e) => {
                    $('#hinge_axisDist').bind('mousemove', textToNum(e, $('#hinge_axisDist')));
                });


                //cflorioluis - Cremallera

                //cflorioluis - agragar funciones a la Cazoleta




                $("#multiDrilling_beginX").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[0],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });

                $("#multiDrilling_endX").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });

                $('#multiDrilling_endX').bind('mousewheel', (e) => { textToNum(e, $('#multiDrilling_endX')) });
                $('#multiDrilling_endX').bind('mousedown', (e) => {
                    $('#multiDrilling_endX').bind('mousemove', textToNum(e, $('#multiDrilling_endX')));
                });

                $("#multiDrilling_beginY").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });

                $("#multiDrilling_endY").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });

                $('#multiDrilling_endY').bind('mousewheel', (e) => { textToNum(e, $('#multiDrilling_endY')) });
                $('#multiDrilling_endY').bind('mousedown', (e) => {
                    $('#multiDrilling_endY').bind('mousemove', textToNum(e, $('#multiDrilling_endY')));
                });

                $("#multiDrilling_count").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });


                $("#multiDrilling_drillCount").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });



                $('#multiDrilling_drillCount').bind('mousewheel', (e) => { textToNum(e, $('#multiDrilling_drillCount')) });
                $('#multiDrilling_drillCount').bind('mousedown', (e) => {
                    $('#multiDrilling_drillCount').bind('mousemove', textToNum(e, $('#multiDrilling_drillCount')));
                });


                $("#multiDrilling_drillDepth").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });
                $("#multiDrilling_axisDist").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });



                $('#multiDrilling_axisDist').bind('mousewheel', (e) => { textToNum(e, $('#multiDrilling_axisDist')) });
                $('#multiDrilling_axisDist').bind('mousedown', (e) => {
                    $('#multiDrilling_axisDist').bind('mousemove', textToNum(e, $('#multiDrilling_axisDist')));
                });
                $("#multiDrilling_step").dragInput({
                    min: 16,
                    max: curConfig.realDimensions[1],
                    step: 16,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });
                $("#multiDrilling_drillDiameter").dragInput({
                    min: 1,
                    max: curConfig.realDimensions[1],
                    step: 1,
                    callback: changeAttributeMultiDrilling,
                    cursor: false,
                });



                $("#g_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#g_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#image_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#text_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#text_x").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#image_y").dragInput({
                    min: null,
                    max: null,
                    step: 1,
                    callback: changeAttribute,
                    cursor: false,
                });
                $("#rect_rx").dragInput({
                    min: 10,
                    max: 500,
                    step: 2,
                    callback: changeAttribute,
                    cursor: true,
                });
                $("#stroke_width").dragInput({
                    min: 0,
                    max: 99,
                    step: 1,
                    callback: changeStrokeWidth,
                    cursor: true,
                    smallStep: 0.1,
                    start: 1.5,
                });
                $("#angle").dragInput({
                    min: -180,
                    max: 180,
                    step: 1,
                    callback: changeRotationAngle,
                    cursor: false,
                    dragAdjust: 0.5,
                });
                $("#font_size").dragInput({
                    min: 1,
                    max: 250,
                    step: 1,
                    callback: changeFontSize,
                    cursor: true,
                    stepfunc: stepFontSize,
                    dragAdjust: 0.15,
                });
                $("#group_opacity").dragInput({
                    min: 0,
                    max: 100,
                    step: 5,
                    callback: changeAttribute,
                    cursor: true,
                    start: 100,
                });
                $("#blur").dragInput({
                    min: 0,
                    max: 10,
                    step: 0.1,
                    callback: changeBlur,
                    cursor: true,
                    start: 0,
                });
                // Set default zoom
                $("#zoom").val(svgCanvas.getZoom() * 100);

                $("#workarea").contextMenu({
                        menu: "cmenu_canvas",
                        inSpeed: 0,
                    },
                    function(action, el, pos) {
                        switch (action) {
                            case "delete":
                                deleteSelected();
                                break;
                            case "cut":
                                cutSelected();
                                break;
                            case "copy":
                                copySelected();
                                break;
                            case "paste":
                                svgCanvas.pasteElements();
                                break;
                            case "paste_in_place":
                                svgCanvas.pasteElements("in_place");
                                break;
                            case "group":
                                svgCanvas.groupSelectedElements();
                                break;
                            case "ungroup":
                                svgCanvas.ungroupSelectedElement();
                                break;
                            case "move_front":
                                moveToTopSelected();
                                break;
                            case "move_up":
                                moveUpDownSelected("Up");
                                break;
                            case "move_down":
                                moveUpDownSelected("Down");
                                break;
                            case "move_back":
                                moveToBottomSelected();
                                break;
                            default:
                                if (
                                    svgedit.contextmenu &&
                                    svgedit.contextmenu.hasCustomHandler(action)
                                ) {
                                    svgedit.contextmenu.getCustomHandler(action).call();
                                }
                                break;
                        }
                    }
                );

                $(".contextMenu li").mousedown(function(ev) {
                    ev.preventDefault();
                });

                $("#cmenu_canvas li").disableContextMenu();
                canv_menu.enableContextMenuItems("#delete,#cut,#copy");

                window.onbeforeunload = function() {
                    /*// Suppress warning if page is empty
                    if (undoMgr.getUndoStackSize() === 0) {
                        Editor.show_save_warning = false;
                    }

                    // show_save_warning is set to "false" when the page is saved.
                    if (!curConfig.no_save_warning && Editor.show_save_warning) {
                        // Browser already asks question about closing the page
                        return "There are unsaved changes.";
                    }*/

                    /*alert('Please press the Logout button to logout.');

                    $.alert("Error: Unable to load SVG data", function() {
                        callback(false);
                    });*/
                };

                Editor.openPrep = function(func) {
                    $("#main_menu").hide();
                    if (undoMgr.getUndoStackSize() === 0) {
                        func(true);
                    } else {
                        $.confirm(
                            "Do you want to open a new file?\nThis will also erase your undo history",
                            func,
                            350,
                            250,
                            true
                        );
                    }
                };

                if (window.FileReader) {
                    var import_image = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        $("#workarea").removeAttr("style");
                        $("#main_menu").hide();
                        var file = null;
                        if (e.type == "drop") file = e.dataTransfer.files[0];
                        else file = this.files[0];
                        if (file) {
                            if (file.type.indexOf("image") != -1) {
                                //detected an image

                                //svg handing
                                if (file.type.indexOf("svg") != -1) {
                                    var reader = new FileReader();
                                    reader.onloadend = function(e) {
                                        svgCanvas.importSvgString(e.target.result, true);
                                        svgCanvas.ungroupSelectedElement();
                                        svgCanvas.ungroupSelectedElement();
                                        svgCanvas.groupSelectedElements();
                                        svgCanvas.alignSelectedElements("m", "page");
                                        svgCanvas.alignSelectedElements("c", "page");
                                    };
                                    reader.readAsText(file);
                                }

                                //image handling
                                else {
                                    var reader = new FileReader();
                                    reader.onloadend = function(e) {
                                        // lets insert the new image until we know its dimensions
                                        insertNewImage = function(img_width, img_height) {
                                            var newImage = svgCanvas.addSvgElementFromJson({
                                                element: "image",
                                                attr: {
                                                    x: 0,
                                                    y: 0,
                                                    width: img_width,
                                                    height: img_height,
                                                    id: svgCanvas.getNextId(),
                                                    style: "pointer-events:inherit",
                                                },
                                            });
                                            svgCanvas.setHref(newImage, e.target.result);
                                            svgCanvas.selectOnly([newImage]);
                                            svgCanvas.alignSelectedElements("m", "page");
                                            svgCanvas.alignSelectedElements("c", "page");
                                            updateContextPanel();
                                        };
                                        // put a placeholder img so we know the default dimensions
                                        var img_width = 100;
                                        var img_height = 100;
                                        var img = new Image();
                                        img.src = e.target.result;
                                        document.body.appendChild(img);
                                        img.onload = function() {
                                            img_width = img.offsetWidth;
                                            img_height = img.offsetHeight;
                                            insertNewImage(img_width, img_height);
                                            document.body.removeChild(img);
                                        };
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }
                        }
                    };

                    var workarea = $("#workarea");

                    function onDragEnter(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        workarea.css({
                            "-webkit-transform": "scale3d(1.1,1.1,1)",
                            "-moz-transform": "scale3d(1.1,1.1,1)",
                            "-o-transform": "scale(1.1)",
                            "-ms-transform": "scale3d(1.1,1.1,1)",
                            transform: "scale3d(1.1,1.1,1)",
                        });
                    }

                    function onDragOver(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    }

                    function onDragLeave(e) {
                        workarea.removeAttr("style");
                        e.stopPropagation();
                        e.preventDefault();
                    }

                    workarea[0].addEventListener("dragenter", onDragEnter, false);
                    workarea[0].addEventListener("dragover", onDragOver, false);
                    workarea[0].addEventListener("dragleave", onDragLeave, false);
                    workarea[0].addEventListener("drop", import_image, false);

                    var open = $('<input type="file">').change(function() {
                        var f = this;
                        Editor.openPrep(function(ok) {
                            if (!ok) return;
                            svgCanvas.clear();
                            if (f.files.length == 1) {
                                var reader = new FileReader();
                                reader.onloadend = function(e) {
                                    loadSvgString(e.target.result);
                                    updateCanvas();
                                };
                                reader.readAsText(f.files[0]);
                            }
                        });
                    });
                    $("#tool_open").show().prepend(open);

                    var img_import = $('<input type="file">').change(import_image);
                    $("#tool_import").show().prepend(img_import);
                }

                var updateCanvas = (Editor.updateCanvas = function(center, new_ctr) {
                    var w = workarea.width(),
                        h = workarea.height();
                    var w_orig = w,
                        h_orig = h;
                    var zoom = svgCanvas.getZoom();
                    var w_area = workarea;
                    var cnvs = $("#svgcanvas");

                    var old_ctr = {
                        x: w_area[0].scrollLeft + w_orig / 2,
                        y: w_area[0].scrollTop + h_orig / 2,
                    };

                    var multi = curConfig.canvas_expansion;
                    w = Math.max(w_orig, svgCanvas.contentW * zoom * multi);
                    h = Math.max(h_orig, svgCanvas.contentH * zoom * multi);

                    if (w == w_orig && h == h_orig) {
                        workarea.css("overflow", "hidden");
                    } else {
                        workarea.css("overflow", "scroll");
                    }

                    var old_can_y = cnvs.height() / 2;
                    var old_can_x = cnvs.width() / 2;
                    cnvs.width(w).height(h);
                    var new_can_y = h / 2;
                    var new_can_x = w / 2;
                    var offset = svgCanvas.updateCanvas(w, h);

                    var ratio = new_can_x / old_can_x;

                    var scroll_x = w / 2 - w_orig / 2;
                    var scroll_y = h / 2 - h_orig / 2;

                    if (!new_ctr) {
                        var old_dist_x = old_ctr.x - old_can_x;
                        var new_x = new_can_x + old_dist_x * ratio;

                        var old_dist_y = old_ctr.y - old_can_y;
                        var new_y = new_can_y + old_dist_y * ratio;

                        new_ctr = {
                            x: new_x,
                            y: new_y,
                        };
                    } else {
                        (new_ctr.x += offset.x), (new_ctr.y += offset.y);
                    }

                    //width.val(offset.x)
                    //height.val(offset.y)

                    if (center) {
                        // Go to top-left for larger documents
                        if (svgCanvas.contentW > w_area.width()) {
                            // Top-left
                            workarea[0].scrollLeft = offset.x - 10;
                            workarea[0].scrollTop = offset.y - 10;
                        } else {
                            // Center
                            w_area[0].scrollLeft = scroll_x;
                            w_area[0].scrollTop = scroll_y;
                        }
                    } else {
                        w_area[0].scrollLeft = new_ctr.x - w_orig / 2;
                        w_area[0].scrollTop = new_ctr.y - h_orig / 2;
                    }
                    if (curConfig.showRulers) {
                        updateRulers(svgCanvas.getQuadrant(), cnvs, zoom);
                        //svgCanvas.updateRulersQuadrant(curConfig.quadrant, cnvs, zoom)
                        workarea.scroll();
                    }
                    if (curConfig.viewAllMachining) {
                        clickViewAllMachiningBegin();
                    }
                });

                // Make [1,2,5] array
                var r_intervals = [];
                for (var i = 0.1; i < 1e5; i *= 10) {
                    r_intervals.push(1 * i);
                    r_intervals.push(2 * i);
                    r_intervals.push(5 * i);
                }

                //cflorioluis - Ver todos los Mecanizados, definicion de la funcion
                var clickViewAllMachiningBegin = function() {
                    //var viewAllMachining = !$("#tool_viewAllMachining").hasClass("push_button_pressed");
                    //var face = "0";
                    //if ($("#faceSelector").val() == "1") face = "5";

                    var face = $("#faceSelector").val();
                    var machinings = $("[machining]");

                    //if (viewAllMachining) {
                    $("#tool_viewAllMachining").addClass("push_button_pressed");

                    for (let ii = 0; ii < machinings.length; ii++) {
                        var machining = machinings[ii];
                        if (machining.getAttribute("cross") == "0") {
                            if (machining.getAttribute("face") != face) {
                                $(machining).show();
                                $(machining).attr("fill", "transparent");
                                $(machining).attr("stroke-width", "1");
                            }
                        }
                    }
                    //}
                    /*else {
                        $("#tool_viewAllMachining").removeClass("push_button_pressed");
                        for (let ii = 0; ii < machinings.length; ii++) {
                            var machining = machinings[ii];
                            if (machining.getAttribute("cross") == "0") {
                                if (machining.getAttribute("face") != face) {
                                    $(machining).hide();
                                    $(machining).attr("fill", "#3F3F3F");
                                    $(machining).attr("stroke-width", "0");
                                }
                            }
                        }
                    }*/
                };

                function updateRulers(quadrant, scanvas, zoom) {
                    var workarea = document.getElementById("workarea");
                    var title_show = document.getElementById("title_show");
                    var offset_x = 66;
                    var offset_y = 48;
                    if (!zoom) zoom = svgCanvas.getZoom();
                    if (!scanvas) scanvas = $("#svgcanvas");

                    var limit = 30000;

                    var c_elem = svgCanvas.getContentElem();

                    var units = svgedit.units.getTypeMap();
                    var unit = units[curConfig.baseUnit]; // 1 = 1px

                    for (var d = 0; d < 2; d++) {
                        var is_x = d === 0;
                        var dim = is_x ? "x" : "y";
                        var lentype = is_x ? "width" : "height";
                        var content_d = c_elem.getAttribute(dim) - 0;

                        //console.log(c_elem);

                        var $hcanv_orig = $("#ruler_" + dim + " canvas:first");

                        // Bit of a hack to fully clear the canvas in Safari & IE9
                        $hcanv = $hcanv_orig.clone();
                        $hcanv_orig.replaceWith($hcanv);

                        var hcanv = $hcanv[0];

                        // Set the canvas size to the width of the container
                        var ruler_len = scanvas[lentype]() * 2;
                        var total_len = ruler_len;

                        //console.log(ruler_len);
                        //console.log(total_len);
                        hcanv.parentNode.style[lentype] = total_len + "px";

                        var canv_count = 1;
                        var ctx_num = 0;
                        var ctx_arr;
                        var ctx = hcanv.getContext("2d");

                        ctx.fillStyle = "rgb(200,0,0)";
                        ctx.fillRect(0, 0, hcanv.width, hcanv.height);

                        // Remove any existing canvasses
                        $hcanv.siblings().remove();

                        // Create multiple canvases when necessary (due to browser limits)
                        if (ruler_len >= limit) {
                            var num = parseInt(ruler_len / limit) + 1;
                            ctx_arr = Array(num);
                            ctx_arr[0] = ctx;
                            for (var i = 1; i < num; i++) {
                                hcanv[lentype] = limit;
                                var copy = hcanv.cloneNode(true);
                                hcanv.parentNode.appendChild(copy);
                                ctx_arr[i] = copy.getContext("2d");
                            }

                            copy[lentype] = ruler_len % limit;

                            // set copy width to last
                            ruler_len = limit;
                        }
                        hcanv[lentype] = ruler_len;

                        var u_multi = unit * zoom;

                        // Calculate the main number interval
                        var raw_m = 50 / u_multi;
                        var multi = 1;

                        //console.log(total_len);
                        for (var i = 0; i < r_intervals.length; i++) {
                            var num = r_intervals[i];

                            multi = num;

                            if (raw_m <= num) {
                                break;
                            }
                        }

                        var big_int = multi * u_multi;

                        ctx.font = "normal 9px 'Lucida Grande', sans-serif";
                        ctx.fillStyle = "#777";

                        var ruler_d = ((content_d / u_multi) % multi) * u_multi;

                        var label_pos = ruler_d - big_int;

                        for (; ruler_d < total_len; ruler_d += big_int) {
                            label_pos += big_int;
                            var real_d = ruler_d - content_d;

                            var cur_d = Math.round(ruler_d) + 0.5;
                            if (is_x) {
                                ctx.moveTo(cur_d, 15);
                                ctx.lineTo(cur_d, 0);
                            } else {
                                ctx.moveTo(15, cur_d);
                                ctx.lineTo(0, cur_d);
                            }

                            var num = (label_pos - content_d) / u_multi;
                            var label;
                            if (multi >= 1) {
                                //cflorioluis ajustar regla para que diga 0,0 abajo a la izquierda
                                var cuad = null
                                    //cflorioluis - Cambiar la Regla dependiendo del quadrante
                                if (quadrant) {
                                    cuad = quadrant;
                                    curConfig.quadrant = quadrant;
                                    //console.log("quadrante actualizado");
                                }

                                $('#svg__quadrant_1').attr('fill', '#3F3F3F');
                                $('#svg__quadrant_2').attr('fill', '#3F3F3F');
                                $('#svg__quadrant_3').attr('fill', '#3F3F3F');
                                $('#svg__quadrant_4').attr('fill', '#3F3F3F');

                                switch (cuad) {
                                    case 1: //Abajo a la Izquierda
                                        if (dim == "y") {
                                            label = -1 * (Math.round(num) - curConfig.dimensions[1] + 100);
                                        } else {
                                            label = Math.round(num) - 100;
                                        }
                                        $('#svg__quadrant_1').attr('fill', '#0F0');
                                        break;
                                    case 2: //Abajo a la Derecha
                                        if (dim == "y") {
                                            label = -1 * (Math.round(num) - curConfig.dimensions[1] + 100);
                                        } else {
                                            label = -1 * (Math.round(num) - curConfig.dimensions[0] + 100);
                                        }
                                        $('#svg__quadrant_2').attr('fill', '#0F0');
                                        break;
                                    case 3: //Arriba a la Derecha
                                        if (dim == "y") {
                                            label = Math.round(num) - 100;
                                        } else {
                                            label = -1 * (Math.round(num) - curConfig.dimensions[0] + 100);
                                        }
                                        $('#svg__quadrant_3').attr('fill', '#0F0');
                                        break;
                                    case 4: //Arriba a la Izquierda
                                        label = Math.round(num) - 100;
                                        $('#svg__quadrant_4').attr('fill', '#0F0');
                                        break;
                                }
                            } else {
                                var decs = (multi + "").split(".")[1].length;
                                label = num.toFixed(decs) - 0;
                            }

                            // Do anything special for negative numbers?
                            //            var is_neg = label < 0;
                            //            real_d2 = Math.abs(real_d2);

                            // Change 1000s to Ks
                            if (label !== 0 && label !== 1000 && label % 1000 === 0) {
                                label = label / 1000 + "K";
                            }

                            if (is_x) {
                                ctx.fillText(label, ruler_d + 2, 8);
                                ctx.fillStyle = "#777";
                            } else {
                                var str = (label + "").split("");
                                for (var i = 0; i < str.length; i++) {
                                    ctx.fillText(str[i], 1, ruler_d + 9 + i * 9);
                                    ctx.fillStyle = "#777";
                                }
                            }

                            var part = big_int / 10;
                            for (var i = 1; i < 10; i++) {
                                var sub_d = Math.round(ruler_d + part * i) + 0.5;
                                if (ctx_arr && sub_d > ruler_len) {
                                    ctx_num++;
                                    ctx.stroke();
                                    if (ctx_num >= ctx_arr.length) {
                                        i = 10;
                                        ruler_d = total_len;
                                        continue;
                                    }
                                    ctx = ctx_arr[ctx_num];
                                    ruler_d -= limit;
                                    sub_d = Math.round(ruler_d + part * i) + 0.5;
                                }

                                var line_num = i % 2 ? 12 : 10;
                                if (is_x) {
                                    ctx.moveTo(sub_d, 15);
                                    ctx.lineTo(sub_d, line_num);
                                } else {
                                    ctx.moveTo(15, sub_d);
                                    ctx.lineTo(line_num, sub_d);
                                }
                            }
                        }
                        ctx.strokeStyle = "#666";
                        ctx.stroke();
                    }
                }

                //      $(function() {
                updateCanvas(true);
                //      });

                //  var revnums = "svg-editor.js ($Rev: 2083 $) ";
                //  revnums += svgCanvas.getVersion();
                //  $('#copyright')[0].setAttribute("title", revnums);

                // Callback handler for embedapi.js
                try {
                    var json_encode = function(obj) {
                        //simple partial JSON encoder implementation
                        if (window.JSON && JSON.stringify) return JSON.stringify(obj);
                        var enc = arguments.callee; //for purposes of recursion
                        if (typeof obj == "boolean" || typeof obj == "number") {
                            return obj + ""; //should work...
                        } else if (typeof obj == "string") {
                            //a large portion of this is stolen from Douglas Crockford's json2.js
                            return (
                                '"' +
                                obj.replace(
                                    /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                    function(a) {
                                        return (
                                            "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                                        );
                                    }
                                ) +
                                '"'
                            ); //note that this isn't quite as purtyful as the usualness
                        } else if (obj.length) {
                            //simple hackish test for arrayish-ness
                            for (var i = 0; i < obj.length; i++) {
                                obj[i] = enc(obj[i]); //encode every sub-thingy on top
                            }
                            return "[" + obj.join(",") + "]";
                        } else {
                            var pairs = []; //pairs will be stored here
                            for (var k in obj) {
                                //loop through thingys
                                pairs.push(enc(k) + ":" + enc(obj[k])); //key: value
                            }
                            return "{" + pairs.join(",") + "}"; //wrap in the braces
                        }
                    };
                    window.addEventListener(
                        "message",
                        function(e) {
                            /*var cbid = parseInt(e.data.substr(0, e.data.indexOf(";"))); //cflorioluis - comentario de emergencia
                                                        try {
                                                            e.source.postMessage(
                                                                "SVGe" + cbid + ";" + json_encode(eval(e.data)),
                                                                "*"
                                                            );
                                                        } catch (err) {
                                                            e.source.postMessage(
                                                                "SVGe" + cbid + ";error:" + err.message,
                                                                "*"
                                                            );
                                                        }*/
                        },
                        false
                    );
                } catch (err) {
                    window.embed_error = err;
                }

                // For Compatibility with older extensions
                $(function() {
                    window.svgCanvas = svgCanvas;
                    svgCanvas.ready = methodDraw.ready;

                    $("#svgcontent").change(function() {
                        alert("Handler for .change() called.");
                    });

                    $("#color_tools").remove(); //cflorioluis - quitar seleccionador de color

                    svgCanvas.createDivs(curConfig.edges); //crear divisiones originales para ver los cantos

                    //cflorioluis - si hay informacion en la columa partDraw hacer dibujo de las piezas ya existentes
                    if (curConfig.row[13]) {

                        var svgContent = $("#svgcontent").children()[1] //ubicarse donde hay que insertar los elementos
                        var svgPreview = curConfig.row[14];
                        var parser = new DOMParser();
                        var xmlSvg = parser.parseFromString(svgPreview, "text/xml");
                        var machinnings = xmlSvg.getElementsByTagName("g");

                        var svgContent = $('#svgcontent').children()[1] //ubicarse donde hay que insertar los elementos

                        for (let ii = 1; ii < machinnings[2].childNodes.length; ii += 2) {
                            const element = machinnings[2].childNodes[ii];
                            if (element.hasAttribute("machining"))
                                svgContent.appendChild(element.cloneNode(true))
                        }
                    }

                    //cflorioluis - hacer animacion de cambio de cara
                    $("#faceSelector").on("change", function() {

                        svgCanvas.updateRulersQuadrant(curConfig.quadrant, $('#faceSelector').val())
                        var rotation = 0;
                        if ($(this).val() == "5") rotation = 180;

                        $("#svgroot").css("transform", "rotateX(" + rotation + "deg)");
                        $("#svgroot").css("transition", "0.6s");
                        $("#svgroot").css("transform-style", "preserve-3d");
                        $("#svgroot").css("position", "relative");

                        //console.log();
                        //bloquear cajeado para que no se haga por la cara tracera
                        var regExp = /\(([^)]+)\)/; //get command short for cajeado
                        var command = regExp.exec($("#tool_pocketTool")[0].title);

                        var machinings = $("[machining]");

                        var viewAllMachining = $("#tool_viewAllMachining").hasClass("push_button_pressed");


                        var face = $("#faceSelector").val();

                        if (viewAllMachining) {
                            for (let ii = 0; ii < machinings.length; ii++) {
                                var machining = machinings[ii];
                                if (machining.getAttribute("cross") == "0") {
                                    $(machining).attr("fill", "#3F3F3F");
                                    $(machining).attr("stroke-width", "0");
                                    $(machining).hide();
                                    if (machining.getAttribute("face") != face) {
                                        $(machining).show();
                                        $(machining).attr("fill", "transparent");
                                        $(machining).attr("stroke-width", "1");
                                    } else {
                                        $(machining).show();
                                    }

                                }
                            }
                        } else {
                            if (rotation == 180) {
                                //en cara tracera
                                for (let ii = 0; ii < machinings.length; ii++) {
                                    var machining = machinings[ii];
                                    if (machining.getAttribute("cross") == "0") {
                                        switch (machining.getAttribute("face")) {
                                            case "0":
                                                //$(machining).slideToggle("fast");
                                                $(machining).hide();
                                                $(machining).attr("fill", "transparent");
                                                $(machining).attr("stroke-width", "1");
                                                break;
                                            case "5":
                                                $(machining).show();
                                                break;
                                        }
                                    }
                                }
                            } else {
                                //en cara delantera
                                for (let ii = 0; ii < machinings.length; ii++) {
                                    var machining = machinings[ii];
                                    if (machining.getAttribute("cross") == "0") {
                                        switch (machining.getAttribute("face")) {
                                            case "0":
                                                $(machining).show();
                                                $(machining).attr("fill", "#3F3F3F");
                                                $(machining).attr("stroke-width", "0");
                                                break;
                                            case "5":
                                                $(machining).hide();
                                                break;
                                        }
                                    }
                                }
                            }
                        }
                        /*fill: "#3F3F3F",
                                                                        "stroke-width": "0",

                                                                        fill="transparent"  stroke-width="1" */

                        //$('#tool_pocketTool').off('keydown');

                        /*$(document).bind("keydown", key, function(e) {
                                                    fn();
                                                    if (pd) {
                                                        e.preventDefault();
                                                    }
                                                    // Prevent default on ALL keys?
                                                    return false;
                                                });*/
                    });
                });

                Editor.setLang = function(lang, allStrings) {
                    $.pref("lang", lang);
                    $("#lang_select").val(lang);
                    if (allStrings) {
                        var notif = allStrings.notification;

                        svgCanvas.runExtensions("langChanged", lang);

                        // Update flyout tooltips
                        setFlyoutTitles();

                        // Copy title for certain tool elements
                        var elems = {
                            "#stroke_color": "#tool_stroke .icon_label, #tool_stroke .color_block",
                            "#fill_color": "#tool_fill label, #tool_fill .color_block",
                            "#linejoin_miter": "#cur_linejoin",
                            "#linecap_butt": "#cur_linecap",
                        };

                        $.each(elems, function(source, dest) {
                            $(dest).attr("title", $(source)[0].title);
                        });

                        // Copy alignment titles
                        $("#multiselected_panel div[id^=tool_align]").each(function() {
                            $("#tool_pos" + this.id.substr(10))[0].title = this.title;
                        });
                    }
                };
            };

            var callbacks = [];

            function loadSvgString(str, callback) {
                var success = svgCanvas.setSvgString(str) !== false;
                callback = callback || $.noop;
                if (success) {
                    callback(true);
                } else {
                    $.alert("Error: Unable to load SVG data", function() {
                        callback(false);
                    });
                }
            }

            Editor.ready = function(cb) {
                if (!is_ready) {
                    callbacks.push(cb);
                } else {
                    cb();
                }
            };

            Editor.runCallbacks = function() {
                $.each(callbacks, function() {
                    this();
                });
                is_ready = true;
            };

            Editor.loadFromString = function(str) {
                Editor.ready(function() {
                    loadSvgString(str);
                });
            };

            Editor.loadFromURL = function(url, opts) {
                if (!opts) opts = {};

                var cache = opts.cache;
                var cb = opts.callback;

                Editor.ready(function() {
                    $.ajax({
                        url: url,
                        dataType: "text",
                        cache: !!cache,
                        success: function(str) {
                            loadSvgString(str, cb);
                        },
                        error: function(xhr, stat, err) {
                            if (xhr.status != 404 && xhr.responseText) {
                                loadSvgString(xhr.responseText, cb);
                            } else {
                                $.alert("Unable to load from URL" + ": \n" + err + "", cb);
                            }
                        },
                    });
                });
            };

            Editor.loadFromDataURI = function(str) {
                Editor.ready(function() {
                    var pre = "data:image/svg+xml;base64,";
                    var src = str.substring(pre.length);
                    loadSvgString(svgedit.utilities.decode64(src));
                });
            };

            Editor.addExtension = function() {
                var args = arguments;

                // Note that we don't want this on Editor.ready since some extensions
                // may want to run before then (like server_opensave).
                $(function() {
                    if (svgCanvas) svgCanvas.addExtension.apply(this, args);
                });
            };

            return Editor;
        })(jQuery);

    // Run init once DOM is loaded
    $(methodDraw.init);

    //cflorioluis - al presionar r se repite la ultima funcion
    var repeatFn = (this.repeatFn = function(fn) {
        $(document).bind("keydown", "r", () => { fn(); });
    });
})();