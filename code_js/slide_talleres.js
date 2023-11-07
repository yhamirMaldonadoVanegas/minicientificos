$(document).ready(function(){
    // Función para inicializar los sliders
    function initSliders() {
        // Verifica el ancho de la ventana
        if ($(window).width() > 700) {
            // Si el ancho es mayor a 700px, inicializa los sliders
            $('.first-row').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                infinite: true,
                speed: 300,
            });

            $('.second-row').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                infinite: true,
                speed: 300,
            });
        } else {
            // Si el ancho es menor o igual a 700px, destruye los sliders
            $('.first-row').slick('unslick');
            $('.second-row').slick('unslick');
        }
    }

    // Llama a la función para inicializar los sliders cuando se carga la página
    initSliders();

    // Verifica el tamaño de la ventana al redimensionar y vuelve a inicializar o destruir los sliders
    $(window).on('resize', function() {
        initSliders();
    });
});
