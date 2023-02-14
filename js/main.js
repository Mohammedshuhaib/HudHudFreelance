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



function redirectToCategory(route) {
    window.location.href = `category.html#${route}`
}

function goToPhone() {
    window.open('tel:+971559305556')
}

function goToWhatsapp() {
    window.open("//api.whatsapp.com/send?phone=+971559305556MOBILE_NUMBER&text=Can you explain about your services")
}


function sendMail() {
    fetch("https://voltix-email-service.onrender.com/sendmail", {
        method: "POST",
        body: JSON.stringify({
            from: document.getElementById("email").value,
            to: 'hudhudad2010@gmail.com',
            subject: document.getElementById("subject").value,
            message: `name: ${document.getElementById("name").value}, message: ${document.getElementById("message").value}`
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((message) => {
        Swal.fire({
            title: 'Success!',
            text: 'Thank you for your valuable message',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
    })
        .catch((error) => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'Please check your email address'
            })
        })
}

function orderItem(ItemName) {
    console.log(ItemName)
    window.open(`//api.whatsapp.com/send?phone=+971559305556MOBILE_NUMBER&text=I need a ${ItemName}, Can i get the details?`)
}


