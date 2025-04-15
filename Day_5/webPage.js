document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  if (burger) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      burger.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("open");
        burger.classList.remove("active");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  const menuTabs = document.querySelectorAll(".menu-tab");
  const menuContents = document.querySelectorAll(".menu-tab-content");

  if (menuTabs.length && menuContents.length) {
    menuTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabId = this.dataset.tab;

        menuTabs.forEach((t) => t.classList.remove("active"));
        menuContents.forEach((c) => c.classList.remove("active"));

        this.classList.add("active");
        document.getElementById(tabId)?.classList.add("active");
      });
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const responseElem = document.getElementById("form-response");

      if (!name || !email || !message) {
        responseElem.textContent = "Please fill out all fields.";
        responseElem.style.color = "#ff3b67";
        return;
      }

      responseElem.textContent =
        "Thank you for contacting us! We'll get back to you soon.";
      responseElem.style.color = "#ff6f91";
      this.reset();

      setTimeout(() => (responseElem.textContent = ""), 5000);
    });
  }

  document.querySelectorAll(".gallery-item").forEach((item) => {
    const overlay = item.querySelector(".gallery-overlay");
    item.addEventListener("mouseenter", () => (overlay.style.opacity = "1"));
    item.addEventListener("mouseleave", () => (overlay.style.opacity = "0"));
  });
});
