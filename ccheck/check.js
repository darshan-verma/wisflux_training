// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger) {
      burger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        burger.classList.toggle('active');
      });
    
      // Close mobile menu when clicking on a nav link
      const navItems = document.querySelectorAll('.nav-links a');
      navItems.forEach(item => {
        item.addEventListener('click', function() {
          navLinks.classList.remove('open');
          burger.classList.remove('active');
        });
      });
    }
  
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed navbar
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      });
    
      backToTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  
    // Menu Tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuContents = document.querySelectorAll('.menu-tab-content');
    
    if (menuTabs.length && menuContents.length) {
      menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
          // Remove active class from all tabs and content
          menuTabs.forEach(t => t.classList.remove('active'));
          menuContents.forEach(c => c.classList.remove('active'));
          
          // Add active class to clicked tab
          this.classList.add('active');
          
          // Get the tab content to show
          const tabContent = document.getElementById(this.dataset.tab);
          if (tabContent) {
            tabContent.classList.add('active');
          }
        });
      });
    }
  
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let currentTestimonial = 0;
    
    if (testimonials.length && dots.length) {
      // Function to show testimonial by index
      function showTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
      }
      
      // Next button click
      if (nextButton) {
        nextButton.addEventListener('click', function() {
          let nextIndex = (currentTestimonial + 1) % testimonials.length;
          showTestimonial(nextIndex);
        });
      }
      
      // Previous button click
      if (prevButton) {
        prevButton.addEventListener('click', function() {
          let prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
          showTestimonial(prevIndex);
        });
      }
      
      // Dot clicks
      dots.forEach(dot => {
        dot.addEventListener('click', function() {
          let dotIndex = parseInt(this.dataset.index);
          showTestimonial(dotIndex);
        });
      });
      
      // Auto rotate testimonials every 5 seconds
      setInterval(function() {
        if (!document.hidden) {
          let nextIndex = (currentTestimonial + 1) % testimonials.length;
          showTestimonial(nextIndex);
        }
      }, 5000);
    }
  
    // Scroll Animation
    const scrollElements = document.querySelectorAll('.fade-in');
    
    // Add 'appear' class to elements when they come into view
    const elementInView = (el, scrollOffset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
      );
    };
    
    const displayScrollElement = (element) => {
      element.classList.add('appear');
    };
    
    const hideScrollElement = (element) => {
      element.classList.remove('appear');
    };
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };
    
    // Add fade-in class to section elements
    const sections = document.querySelectorAll('.section-title, .about-container, .gallery-item, .menu-item, .testimonial, .contact-info, .contact-form');
    sections.forEach(section => {
      section.classList.add('fade-in');
    });
    
    // Run once on load
    setTimeout(handleScrollAnimation, 100);
    
    // Listen for scroll events
    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });
  
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate form (basic validation)
        if (!name || !email || !message) {
          showFormResponse('Please fill out all fields.', 'error');
          return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          showFormResponse('Please enter a valid email address.', 'error');
          return;
        }
        
        // Show success message (in real application, you would send to server)
        showFormResponse('Thank you for contacting us! We\'ll get back to you soon.');
        
        // Reset form
        this.reset();
      });
      
      // Function to show form response
      function showFormResponse(message, type = 'success') {
        const responseElem = document.getElementById('form-response');
        responseElem.textContent = message;
        
        // Add color based on response type
        if (type === 'error') {
          responseElem.style.color = '#ff3b67';
        } else {
          responseElem.style.color = '#ff6f91';
        }
        
        // Clear message after 5 seconds
        setTimeout(() => {
          responseElem.textContent = '';
        }, 5000);
      }
    }
  
    // Image hover effects for gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.querySelector('.gallery-overlay').style.opacity = '1';
      });
      
      item.addEventListener('mouseleave', function() {
        this.querySelector('.gallery-overlay').style.opacity = '0';
      });
    });
  });