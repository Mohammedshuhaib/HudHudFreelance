(function ($) {

    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();



    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });




    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });



    const glightbox = GLightbox({
        selector: '.glightbox'
    });



})(jQuery);



function redirectToCategory() {
    window.location.href = "/category.html"
}

function goToPhone() {
    window.open('tel:+971559305556')
}

function goToWhatsapp() {
    window.open("//api.whatsapp.com/send?phone=+971559305556MOBILE_NUMBER&text=Can you explain about your services")
}


function sendMail() {
    console.log('call came')
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hudhudad2010@gmail.com",
        Password: "A1B0311AF901383BC89196957CFD7A03A77B",
        From: document.getElementById("email").value,
        To: 'hudhudad2010@gmail.com',
        Subject: document.getElementById("subject").value,
        Body: `Hi iam ${document.getElementById('name').value} , ${document.getElementById('message').value}`
    }).then(
        message => alert(message)
    );
}


