// ================================================
// FOOTBALL VIEW
// Kano State Viewing Center Management System
// Main JavaScript
// ================================================


// ================================================
// Mobile Menu
// ================================================

const mobileMenuButton =
  document.getElementById("mobileMenuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


if (mobileMenuButton && mobileMenu) {

  mobileMenuButton.addEventListener("click", () => {

    const isHidden =
      mobileMenu.classList.contains("hidden");

    mobileMenu.classList.toggle("hidden");

    // Accessibility state
    mobileMenuButton.setAttribute(
      "aria-expanded",
      String(isHidden)
    );

  });


  // Close mobile menu when a navigation link is clicked
  const mobileLinks =
    mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.add("hidden");

      mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// ================================================
// Navbar Background On Scroll
// ================================================

const navbar =
  document.getElementById("navbar");


const updateNavbar =
  () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

      navbar.classList.add(
        "shadow-xl",
        "shadow-black/10"
      );

    } else {

      navbar.classList.remove(
        "shadow-xl",
        "shadow-black/10"
      );

    }

  };


window.addEventListener(
  "scroll",
  updateNavbar,
  { passive: true }
);


// Run once when the page loads
updateNavbar();


// ================================================
// Close Mobile Menu With Escape Key
// ================================================

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") return;

    if (!mobileMenu || !mobileMenuButton) return;

    if (!mobileMenu.classList.contains("hidden")) {

      mobileMenu.classList.add("hidden");

      mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      mobileMenuButton.focus();

    }

  }
);


// ================================================
// Reveal Elements On Scroll
// ================================================

const revealElements =
  document.querySelectorAll(
    ".reveal-on-scroll"
  );


if (
  revealElements.length > 0 &&
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            "page-visible"
          );

          observer.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });

}


// ================================================
// Smooth Anchor Navigation
// ================================================

const anchorLinks =
  document.querySelectorAll(
    'a[href^="#"]'
  );


anchorLinks.forEach((link) => {

  link.addEventListener(
    "click",
    (event) => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }
  );

});


// ================================================
// Prevent Empty Search Form Submission
// ================================================

const searchForms =
  document.querySelectorAll(
    "[data-search-form]"
  );


searchForms.forEach((form) => {

  form.addEventListener(
    "submit",
    (event) => {

      const input =
        form.querySelector(
          'input[type="search"], input[name="search"]'
        );

      if (!input) return;

      if (!input.value.trim()) {

        event.preventDefault();

        input.focus();

      }

    }
  );

});


// ================================================
// Current Year
// ================================================

const currentYear =
  new Date().getFullYear();


document
  .querySelectorAll("[data-current-year]")
  .forEach((element) => {

    element.textContent =
      currentYear;

  });


// ================================================
// Password Visibility Toggle
// ================================================

const passwordToggles =
  document.querySelectorAll(
    ".password-toggle"
  );


passwordToggles.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      const targetId =
        button.getAttribute(
          "data-target"
        );

      if (!targetId) return;

      const input =
        document.getElementById(
          targetId
        );

      if (!input) return;

      const isPassword =
        input.type === "password";

      input.type =
        isPassword
          ? "text"
          : "password";


      // Update accessibility information
      button.setAttribute(
        "aria-label",
        isPassword
          ? "Hide password"
          : "Show password"
      );

      button.setAttribute(
        "aria-pressed",
        String(isPassword)
      );

    }
  );

});


// ================================================
// Back To Top
// ================================================

const backToTop =
  document.getElementById(
    "backToTop"
  );


if (backToTop) {

  const updateBackToTop =
    () => {

      if (window.scrollY > 500) {

        backToTop.classList.remove(
          "hidden"
        );

      } else {

        backToTop.classList.add(
          "hidden"
        );

      }

    };


  window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
  );


  updateBackToTop();


  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


// ================================================
// Page Loaded
// ================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document.body.classList.add(
      "page-loaded"
    );

  }
);


// ================================================
// Football View Frontend Loaded
// ================================================

console.log(
  "Football View frontend loaded successfully."
);
