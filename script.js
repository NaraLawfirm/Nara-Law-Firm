/* =========================================================
   NARA LAW FIRM
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    if (!loader) {
        return;
    }

    /*
        Opening animation:
        sekitar 1.2 detik
    */

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        /*
            Fallback untuk browser lama
        */

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menu =
        document.querySelector(".menu");

    const nav =
        document.querySelector(".nav");


    if (!menu || !nav) {
        return;
    }


    /* Open / close menu */

    menu.addEventListener("click", function () {

        nav.classList.toggle("open");

    });


    /* Close menu after clicking link */

    const links =
        document.querySelectorAll(".nav nav a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

        });

    });

});


/* =========================================================
   CONTACT DATA
   mengambil data dari config.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*
        Pastikan config.js sudah dimuat
        sebelum script ini dijalankan.
    */

    if (
        typeof NARA_CONTACT === "undefined"
    ) {

        console.warn(
            "NARA_CONTACT tidak ditemukan. Pastikan config.js sudah dimuat."
        );

        return;

    }


    /* =====================================================
       PHONE
    ===================================================== */

    const phone =
        document.getElementById("contact-phone");


    if (
        phone &&
        NARA_CONTACT.phoneDisplay
    ) {

        phone.textContent =
            NARA_CONTACT.phoneDisplay;

    }


    /* =====================================================
       EMAIL
    ===================================================== */

    const email =
        document.getElementById("contact-email");


    if (
        email &&
        NARA_CONTACT.email
    ) {

        email.textContent =
            NARA_CONTACT.email;

    }


    /* =====================================================
       ADDRESS
    ===================================================== */

    const address =
        document.getElementById("contact-address");


    if (
        address &&
        NARA_CONTACT.address
    ) {

        address.textContent =
            NARA_CONTACT.address;

    }


    /* =====================================================
       WHATSAPP
    ===================================================== */

    const whatsapp =
        NARA_CONTACT.whatsapp;


    if (!whatsapp) {
        return;
    }


    /*
        Pesan otomatis WhatsApp
    */

    const message =
        encodeURIComponent(
            "Halo NARA Law Firm, saya ingin berkonsultasi mengenai layanan hukum."
        );


    const whatsappURL =
        "https://wa.me/" +
        whatsapp +
        "?text=" +
        message;


    /* =====================================================
       CONTACT BUTTON
    ===================================================== */

    const contactButton =
        document.getElementById(
            "contact-whatsapp"
        );


    if (contactButton) {

        contactButton.href =
            whatsappURL;

        contactButton.target =
            "_blank";

        contactButton.rel =
            "noopener noreferrer";

    }


    /* =====================================================
       HERO CONSULTATION BUTTON
    ===================================================== */

    const heroButton =
        document.getElementById(
            "hero-whatsapp"
        );


    if (heroButton) {

        heroButton.href =
            whatsappURL;

        heroButton.target =
            "_blank";

        heroButton.rel =
            "noopener noreferrer";

    }

});


/* =========================================================
   PREVENT EMPTY HASH LINKS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const hashLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    hashLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                /*
                    Hanya mencegah link kosong.
                    Tidak mengganggu link section
                    seperti #home, #about, dll.
                */

                event.preventDefault();

            }
        );

    });

});
