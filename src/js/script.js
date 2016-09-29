$(function() {
    $('.product__buy').on('click', function(e) {
        e.preventDefault();
        $('.overlay').addClass('shown');
    });

    $('.incart__close').on('click', function(e) {
        e.preventDefault();
        $('.overlay').removeClass('shown');
    });
});
