$(document).bind("mobileinit",function(){
    // Codigo de inicio para jQM
    // y lo beuno que tenemos disponible el evento llamado $.mobile
    $.mobile.ajaxEnabled = "false";  // Con esto desactibamos automaticamente AJAX
    $.mobile.defaultPageTransition = "slideup";
    $.mobile.detaultDialogTransition = "flip";
    $-mobile.loadingMessage = "Por favor espere.....";
    $-mobile.pageErrorMessage = "No se ha podido cargar la pagina";

    // Ejemplo ddel 8.2

    $("zona").bind("tap", function(){

    });

    $("zona").bind("taphold", function(){

    });

    $("zona").bind("swipeleft", function(){

    });

    $("zona").bind("swiperight", function(){

    });

    // Eventos de mouse virtuales

    // 300 milisegundos despues que el usuario solto el teclado
    // eventos nuevos de HTML5 que estan disponible
    // jQuery nos ofrece estos nuevos eventos
    $("zona").bind("vclick", function(){

    });

    // Tenemos muchos que empoizan con v, ejemplo : vmouseover, vmouse
    $(document).bind("orientationchange", function(){

    });
    // Eventos de scroll:  El scroll tiene arrasre , incluso hay rebote
    $(document).bind("scrollstart", function(){

    });
    $(document).bind("scrollstop", function(){

    });

    // Eventos de pagina
        $(document).bind("pageinit", function(){

    });
        // Tambien se puede hacer a una pagina en particular, cuando la pagina1 comienza
    $("pagina1").bind("pageinit", function(){

    });

    // Eventos de pagina Externa (Caundo la pagina se carga via AJAX)
    // Se peude aplicar a una pagina en particular o a toda la pagina
    $(document).bind("pageload", function(){

    });
    $(document).bind("beforeload", function(){

    });
    $(document).bind("loadfailed", function(){

    });
    $(document).bind("scrollstart", function(){

    });
    $(document).bind("pageloadfailed", function(){
        alert("Fallo la carga de la pagina")
    });
    // Evento de cambio que tienen que ver con una pagina en particular normalmente
    $("pagina1").bind("pagebeforechange", function(){

    });
    $("pagina1").bind("pagebechange", function(){

    });
    $("pagina1").bind("pagechangefailed", function(){

    });
    // Los otros tiene que ver con el efecto, con la animacion , eventos que nos permitan hacer algo
    // antes que las paginas se cambien
    $("pagina1").bind("pagebeforeshow", function(){

    });
    $("pagina1").bind("pageshow", function(){

    });
    $("pagina1").bind("pagehide", function(){

    });
    $("pagina1").bind("pagebeforehide", function(){

    });
    // El no muy recomendado
    $("pagina1").bind("pagecreate", function(){

    });
    $("pagina1").bind("pageremove", function(){

    });
// Tener cuidados de generar muchos elementos en el DOM, ya que muchos elementos en el DOM
// significa mucho consumo de memoria y que el browser pueda tener problemas de rendimiento

// Evenrtos de LAYAUT
    $("document").bind("updatelayout", function(){

    });
    // Esto sucede cuando una animacion de CSS termina
    $("document").bind("animacionComplete", function(){

    });


});


