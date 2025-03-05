        // Navbar scroll effect
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.querySelector('.navbar');
            
            function checkScroll() {
                if (window.scrollY > 10) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
            
            checkScroll();
            window.addEventListener('scroll', checkScroll);
        });
        
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Toggle scroll-indicator visibility 
        window.addEventListener('scroll', function() {     
            const scrollIndicator = document.querySelector('.scroll-indicator');     
            if (window.scrollY > 100) {         
                scrollIndicator.style.opacity = '0';     
            } else {         
                scrollIndicator.style.opacity = '1';     
            } 
        }); 

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission (prevent default for demo)
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzAp8tuDawf9VLiP93K0A8FAgz4q4zxMi_XYxgW1fOEXcc-jNJsDgyGZxi8JWqAmvKK/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
            alert('Thank You For Sending This Message , Your Message has been Recieved.');
            form.reset();
        });
        // const form = document.querySelector('form');
        // if (form) {
        //     form.addEventListener('submit', function(e) {
        //         e.preventDefault();
        //         alert('Thank you for your message! This is a demo, so no message was actually sent.');
        //         form.reset();
        //     });
        // }

        // Add this to your JS file to enable dynamic tilt effects
        document.querySelectorAll('.project-card, .fact-item').forEach(item => {
          item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xRotation = 20 * ((y - rect.height / 2) / rect.height);
            const yRotation = -20 * ((x - rect.width / 2) / rect.width);
            
            this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateZ(20px)`;
          });
          
          item.addEventListener('mouseout', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
          });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card-3d-effect');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const cardRect = card.getBoundingClientRect();
                    const cardCenterX = cardRect.left + cardRect.width / 2;
                    const cardCenterY = cardRect.top + cardRect.height / 2;
                    
                    const mouseX = e.clientX - cardCenterX;
                    const mouseY = e.clientY - cardCenterY;
                    
                    const rotateX = (mouseY / (cardRect.height / 2)) * (--card-rotate-amount);
                    const rotateY = (mouseX / (cardRect.width / 2)) * (--card-rotate-amount);
                    
                    card.style.setProperty('--mouse-rotate-x', rotateX + 'deg');
                    card.style.setProperty('--mouse-rotate-y', rotateY + 'deg');
                });
                
                card.addEventListener('mouseleave', function() {
                    card.style.setProperty('--mouse-rotate-x', '0deg');
                    card.style.setProperty('--mouse-rotate-y', '0deg');
                });
            });
            
            // Staggered entrance animation
            const staggerItems = document.querySelectorAll('.stagger-entrance');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate');
                        }, index * 100);
                    }
                });
            });
            
            staggerItems.forEach(item => {
                observer.observe(item);
            });
            
            // Scroll reveal animation
            const scrollItems = document.querySelectorAll('.scroll-reveal');
            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            });
            
            scrollItems.forEach(item => {
                scrollObserver.observe(item);
            });
        });
    