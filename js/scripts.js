/* jquery */
$(function () {
    /* magnific video*/
    $('.video').magnificPopup({
        type: 'iframe',


        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '<div class="mfp-title">Some caption</div>' +
                '</div>'
        },
        callbacks: {
            markupParse: function (template, values, item) {
                values.title = item.el.attr('title');
            }
        }
    });
    /* slick */
    $('.single-item').slick({
        dots: true,
        arrows: false,
        speed: 500
    });

    $('.responsive').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 1920,
                settings: "unslick"
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.project_responsive').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 1920,
                settings: "unslick"
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // magnific popup form doesn't work yet
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });
});

