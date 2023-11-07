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
           
            $('.first-row').slick('unslick');
            $('.second-row').slick('unslick');
        }
    }

    
    initSliders();

    
    $(window).on('resize', function() {
        initSliders();
    });
});
