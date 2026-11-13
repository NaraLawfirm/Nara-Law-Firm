document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     LOADING SCREEN
  ========================== */

  const loader = document.getElementById("loader");

  setTimeout(function () {
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 1800);


  /* =========================
     MOBILE MENU
  ========================== */

  const menuBtn = document.getElementById("menuBtn");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll("#navLinks a");

  if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {
      navbar.classList.toggle("open");

      if (navbar.classList.contains("open")) {
        menuBtn.innerHTML = "✕";
      } else {
        menuBtn.innerHTML = "☰";
      }
    });

  }


  /* =========================
     CLOSE MOBILE MENU
  ========================== */

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      if (navbar) {
        navbar.classList.remove("open");
      }

      if (menuBtn) {
        menuBtn.innerHTML = "☰";
      }

    });

  });


  /* =========================
     SCROLL REVEAL
  ========================== */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.1
    }
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });


  /* =========================
     CURRENT YEAR
  ========================== */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =========================
     CONSULTATION FORM
  ========================== */

  const consultationForm =
    document.getElementById("consultationForm");

  if (consultationForm) {

    consultationForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const name =
          document.getElementById("name").value.trim();

        const phone =
          document.getElementById("phone").value.trim();

        const email =
          document.getElementById("email").value.trim();

        const service =
          document.getElementById("service").value;

        const message =
          document.getElementById("message").value.trim();


        /*
          GANTI NOMOR WHATSAPP DI BAWAH INI
          dengan nomor WhatsApp resmi NARA Law Firm.

          Contoh:
          6281234567890
        */

        const whatsappNumber =
          "6285850333555";


        let whatsappMessage =
          "Halo NARA Law Firm,%0A%0A";

        whatsappMessage +=
          "*PERMOHONAN KONSULTASI HUKUM*%0A%0A";

        whatsappMessage +=
          "*Nama:* " + name + "%0A";

        whatsappMessage +=
          "*WhatsApp:* " + phone + "%0A";

        if (email) {
          whatsappMessage +=
            "*Email:* " + email + "%0A";
        }

        if (service) {
          whatsappMessage +=
            "*Layanan:* " + service + "%0A";
        }

        whatsappMessage +=
          "%0A*Deskripsi Kebutuhan Hukum:*%0A";

        whatsappMessage +=
          message;


        const whatsappURL =
          "https://wa.me/" +
          whatsappNumber +
          "?text=" +
          whatsappMessage;


        window.open(
          whatsappURL,
          "_blank"
        );

      }
    );

  }

});
