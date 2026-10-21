
document.addEventListener("DOMContentLoaded", function () {
    // 1. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 2. Product card interaction
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const productName = card.querySelector("h3");

            if (productName) {
                alert(
                    "You selected " +
                    productName.textContent +
                    ". Please contact us for product details."
                );
            }
        });
    });

    // 3. Contact form validation
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = contactForm.querySelector(
                '[name="name"], [name="user_name"]'
            );
            const email = contactForm.querySelector(
                '[name="email"], [name="user_email"]'
            );
            const message = contactForm.querySelector(
                '[name="message"]'
            );

            if (
                (name && !name.value.trim()) ||
                (email && !email.value.trim()) ||
                (message && !message.value.trim())
            ) {
                event.preventDefault();
                alert("Please fill in all the required fields.");
                return;
            }

            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }

    // 4. Update the copyright year automatically
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 5. Mobile navigation toggle (if a menu button exists)
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("active");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });
    }

    console.log("Industrial valves website loaded successfully!");
});
