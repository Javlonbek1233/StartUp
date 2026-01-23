 window.addEventListener('load', function() {
            const loader = document.getElementById('loader');
            const loaderProgress = document.getElementById('loaderProgress');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress > 100) {
                    progress = 100;
                    clearInterval(interval);
                    
                    setTimeout(() => {
                        loader.style.opacity = '0';
                        setTimeout(() => {
                            loader.style.display = 'none';
                        }, 500);
                    }, 300);
                }
                loaderProgress.style.width = progress + '%';
            }, 100);
        });
        
     
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
  
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                
          
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                link.classList.add('active');
            });
        });
        
     
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const barber = document.getElementById('barber').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const promo = document.getElementById('promo').value;
            
    
            let discountMessage = '';
            let finalPrice = '';
            
            if (promo === 'NEW35') {
                discountMessage = '35% chegirma qo\'llandi!';
          
                if (service.includes('65,000')) finalPrice = '42,250 so\'m';
                else if (service.includes('35,000')) finalPrice = '22,750 so\'m';
                else if (service.includes('40,000')) finalPrice = '26,000 so\'m';
                else if (service.includes('25,000')) finalPrice = '16,250 so\'m';
                else finalPrice = 'Chegirma qo\'llanildi';
            } else if (promo) {
                discountMessage = 'Promo kod noto\'g\'ri';
            }
            
         
            const form = document.getElementById('bookingForm');
            form.style.transform = 'scale(0.95)';
            setTimeout(() => {
                form.style.transform = 'scale(1)';
                
               
                alert(`BRON MUVAFFAQIYATLI QABUL QILINDI!\n\nISM: ${name}\nTELEFON: ${phone}\nXIZMAT: ${service}\nSARTAROSH: ${barber}\nSANA: ${date}\nVAQT: ${time}\n${discountMessage}\nYAKUNIY NARX: ${finalPrice}\n\nTEZ ORADA SIZ BILAN ALOQAGA CHIQAMIZ.`);
                
              
                form.reset();
                document.getElementById('promo').value = 'NEW35';
            }, 300);
        });
        
     
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);
        
       
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        const maxDateString = maxDate.toISOString().split('T')[0];
        document.getElementById('date').setAttribute('max', maxDateString);
        
        
        const now = new Date();
        let nextHour = now.getHours() + 1;
        if (nextHour > 20) nextHour = 9;
        const formattedTime = `${nextHour.toString().padStart(2, '0')}:00`;
        document.getElementById('time').value = formattedTime;
        
   
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 400)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
      
        document.querySelectorAll('.service-card, .barber-card, .tip-card, .gallery-item').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '100';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });
        
     
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero, .booking');
            
            parallaxElements.forEach(element => {
                const rate = scrolled * 0.5;
                element.style.backgroundPosition = `center ${rate}px`;
            });
        });
        
       
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.7);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    top: ${y}px;
                    left: ${x}px;
                `;
                
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
        
       
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);