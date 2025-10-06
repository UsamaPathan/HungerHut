/**
 * @fileoverview Main JavaScript functionality for Grubfurn
 * @version 1.0.0
 * @author Usama Aziz
 * @language en
 * @description Handles all interactive features including cart, navigation,
 *             sliders, forms, and animations for the Grubfurn furniture website
 */

// ===== 1. Header Section =====
// left-sidebar
function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
let slid = document.getElementById("slid-btn");
if (slid !== null) {
  slid.onclick = () => {
    let dropdwon = document.getElementById("slid-drop");
    dropdwon.classList.toggle("aside-dropdwon");
  };
}
// End of left-sidebar
// DropDown menu slide section
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".navbar .dropdown");
  const asideDropdown = document.querySelector(".right-sidbar .dropdown-menu");
  const asideToggle = document.querySelector(".right-sidbar .dropdown > a");

  // Large screen dropdown (hover)
  dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  });

  // Small screen dropdown (click)
  if (asideToggle && asideDropdown) {
    asideDropdown.style.maxHeight = "0";
    asideDropdown.style.overflow = "hidden";
    asideDropdown.style.transition = "max-height 0.3s ease";

    asideToggle.addEventListener("click", function (e) {
      e.preventDefault(); // stop default <a> behavior
      const isOpen = asideDropdown.style.maxHeight !== "0px";
      asideDropdown.style.maxHeight = isOpen
        ? "0"
        : `${asideDropdown.scrollHeight}px`;
    });
  }
});

// End of 1.0. Header Section
// Swiper Slider Js
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (window.innerWidth <= 767 && index >= 4) return "";
        return `<span class="${className}"></span>`;
      },
    },
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30,

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
  const swiperEl = document.querySelector(".mySwiper");

  swiperEl.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });

  swiperEl.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });

  swiperEl.addEventListener("click", () => {
    swiper.autoplay.stop();
  });
});
// Form validation //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("popup");
  const okButton = popup.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    popup.style.display = "flex";
  });

  okButton.addEventListener("click", function () {
    popup.style.display = "none";
    form.reset();
  });
});

// 1.5. FAQ Section
document.addEventListener("DOMContentLoaded", function () {
  const faqButtons = document.querySelectorAll(
    ".justify-content-between > button.justify-content-lg-start"
  );

  faqButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const contentWrapper = this.nextElementSibling;

      if (contentWrapper) {
        const paragraph = contentWrapper.querySelector("p");
        if (paragraph) {
          paragraph.classList.toggle("show");
        }
      }

      // Optional: toggle active class on button (for styles)
      this.classList.toggle("active");
    });
  });
});
// Coming-Soon Timer JS 
document.addEventListener("DOMContentLoaded", function () {
  let totalSeconds = (3 * 24 * 60 * 60) + (9 * 60 * 60) + (45 * 60); 

  const spans = document.querySelectorAll(".d-flex.justify-content-center.align-items-center.flex-column .d-flex.gap-2");

  function updateTimerDisplay(days, hours, minutes, seconds) {
    const values = [
      String(days).padStart(2, "0"),
      String(hours).padStart(2, "0"),
      String(minutes).padStart(2, "0"),
      String(seconds).padStart(2, "0"),
    ];

    spans.forEach((group, index) => {
      const digits = values[index].split("");
      const spanElements = group.querySelectorAll("span");

      spanElements.forEach((el, i) => {
        el.textContent = digits[i];
      });
    });
  }

  function updateCountdown() {
    if (totalSeconds <= 0) return;

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    updateTimerDisplay(days, hours, minutes, seconds);

    totalSeconds--;
  }
  updateCountdown(); 
  setInterval(updateCountdown, 1000); 
});
