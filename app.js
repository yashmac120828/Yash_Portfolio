// Global variables
let body = document.querySelector("body");
let nav = document.querySelectorAll("nav");
let themeButton = document.querySelector(".theme");
let hr = document.querySelectorAll(".hr"); 
let theme = localStorage.getItem('theme') || 'light'; 
// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.right ul');
const rightUlli = document.querySelectorAll('.right ul li');
let netf = document.querySelector(".netf");
let amazon = document.querySelector(".amzn");
let p = document.querySelectorAll(".p");
let c1 = document.querySelectorAll(".c1");
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
let interval = null;
let skillSection = document.querySelector(".skills-section");
let SectionTitle=document.querySelectorAll(".section-title");
let skillsContainer = document.querySelector('.skills-container');
let infoItem = document.querySelectorAll(".info-item");
let categoryBtn = document.querySelectorAll(".category-btn");
let skillCard= document.querySelectorAll(".skill-card");
let projectContent = document.querySelectorAll(".project-content");
let footer = document.querySelector("footer");
let footerHeadings = document.querySelectorAll("footer h2, footer h3");
let footerLinks = document.querySelectorAll("footer a");
let footerSections = document.querySelectorAll(".footer-section");
let footerContainer = document.querySelector(".footer-container");
let copyright = document.querySelector(".copyright");
let footerSocialIcons = document.querySelectorAll("footer .social-icons a");
let footerContactInfo = document.querySelectorAll("footer .contact-info p");
let footerContactIcons = document.querySelectorAll("footer .contact-info i");
// Theme functions
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'midnight') {
        // Midnight Theme
        
        themeButton.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        themeButton.style.backgroundColor = "#a970ff";
        infoItem.forEach(item => {
            item.style.color = "black";
        });
        navMenu.style.backgroundColor="#161b22";
        body.style.backgroundColor = "#0d1117";
        body.style.color = "#c9d1d9";
        skillSection.style.backgroundColor = "#0d1117";
        SectionTitle.forEach(title => {    
            title.style.color = "#c9d1d9";
        })
        categoryBtn.forEach(btn => {
            btn.style.backgroundColor = "#c9d1d9";
        });
        projectContent.forEach(item => {  
            item.style.backgroundColor="#c9d1d9";
        });
        skillCard.forEach(btn => {
            btn.style.backgroundColor = "#c9d1d9";
        });
        p.forEach(px => {
            px.style.color = "#c9d1d9";
        });

        hr.forEach(h => {
            h.style.borderColor = "#30363d";
        });

        nav.forEach(n => {
            n.style.backgroundColor = "#161b22";
            n.style.boxShadow = "0 2px 4px rgba(0,0,0,0.5)";
        });

        c1.forEach(cx => {
            cx.style.color = "#a970ff";
        });
        
        // Midnight Footer Styling
        if (footer) {
            footer.style.background = "linear-gradient(135deg, #2b2d42 0%, #121212 100%)";
            footer.style.color = "#ffffff";
            
            // Add gradient accent line to top of footer
            footer.style.position = "relative";
            footer.style.overflow = "hidden";
            
            // Create or update the ::before pseudo-element for the gradient line
            const style = document.createElement('style');
            style.innerHTML = `
                footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 5px;
                    background: linear-gradient(90deg, #8e2de2, #4a00e0, #8e2de2);
                    background-size: 200% 100%;
                    animation: gradientMove 3s ease infinite;
                }
                
                @keyframes gradientMove {
                    0% {background-position: 0% 50%}
                    50% {background-position: 100% 50%}
                    100% {background-position: 0% 50%}
                }
            `;
            document.head.appendChild(style);
        }
        
        footerHeadings.forEach(heading => {
            heading.style.color = "#ffffff";
        });
        
        footerSections.forEach(section => {
            const headings = section.querySelectorAll('h2, h3');
            headings.forEach(heading => {
                if (heading.tagName === 'H2') {
                    heading.style.position = "relative";
                    heading.style.display = "inline-block";
                    
                    // Create or update the ::after pseudo-element
                    const afterStyle = document.createElement('style');
                    afterStyle.innerHTML = `
                        #${heading.id}::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: -8px;
                            width: 50px;
                            height: 3px;
                            background: #8e2de2;
                        }
                    `;
                    document.head.appendChild(afterStyle);
                } else if (heading.tagName === 'H3') {
                    heading.style.position = "relative";
                    heading.style.display = "inline-block";
                    
                    // Create or update the ::after pseudo-element
                    const afterStyle = document.createElement('style');
                    afterStyle.innerHTML = `
                        #${heading.id}::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: -6px;
                            width: 40px;
                            height: 2px;
                            background: #8e2de2;
                        }
                    `;
                    document.head.appendChild(afterStyle);
                }
            });
        });
        
        footerLinks.forEach(link => {
            link.style.color = "#b8b8b8";
            link.style.textDecoration = "none";
            link.style.transition = "all 0.3s ease";
        });
        
        footerContactInfo.forEach(info => {
            info.style.color = "#b8b8b8";
        });
        
        footerContactIcons.forEach(icon => {
            icon.style.color = "#8e2de2";
        });
        
        if (copyright) {
            copyright.style.background = "rgba(0, 0, 0, 0.3)";
            copyright.style.color = "#999999";
        }
        
        if (footerSocialIcons) {
            footerSocialIcons.forEach(icon => {
                icon.style.background = "rgba(255, 255, 255, 0.1)";
                icon.style.color = "#ffffff";
                
                // Add hover effect
                icon.addEventListener('mouseenter', function() {
                    this.style.background = "#8e2de2";
                    this.style.transform = "translateY(-3px)";
                });
                
                icon.addEventListener('mouseleave', function() {
                    this.style.background = "rgba(255, 255, 255, 0.1)";
                    this.style.transform = "translateY(0)";
                });
            });
        }
        
    } else {
        // Light Theme
        
        themeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        themeButton.style.backgroundColor = "#b2679a";
        skillSection.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        SectionTitle.forEach(title => {    
            title.style.color = "black";
        })
        navMenu.style.backgroundColor="#31424a";
       skillCard.forEach(btn => {   btn.style.backgroundColor = "white";});
        categoryBtn.forEach(btn => {
            btn.style.backgroundColor = "white";
        });
        projectContent.forEach(item => {  
            item.style.backgroundColor="white";
        });
        p.forEach(px => {
            px.style.color = "#31424a";
        });
        // navMenu.style.backgroundColor="white";
       
       
       
        nav.forEach(n => {
            n.style.backgroundColor = "#31424a";
        });

        c1.forEach(cx => {
            cx.style.color = "#31424a";
        });

        hr.forEach(h => {
            h.style.borderColor = "#ccc";
        });
        
        // Light Theme Footer Styling
        if (footer) {
            footer.style.background = "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)";
            footer.style.color = "#333333";
            
            // Add gradient accent line to top of footer
            footer.style.position = "relative";
            footer.style.overflow = "hidden";
            
            // Create or update the ::before pseudo-element for the gradient line
            const style = document.createElement('style');
            style.innerHTML = `
                footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 5px;
                    background: linear-gradient(90deg, #6a11cb, #2575fc, #6a11cb);
                    background-size: 200% 100%;
                    animation: gradientMove 3s ease infinite;
                }
                
                @keyframes gradientMove {
                    0% {background-position: 0% 50%}
                    50% {background-position: 100% 50%}
                    100% {background-position: 0% 50%}
                }
            `;
            document.head.appendChild(style);
        }
        
        footerHeadings.forEach(heading => {
            heading.style.color = "#333333";
        });
        
        footerSections.forEach(section => {
            const headings = section.querySelectorAll('h2, h3');
            headings.forEach(heading => {
                if (heading.tagName === 'H2') {
                    heading.style.position = "relative";
                    heading.style.display = "inline-block";
                    
                    // Create or update the ::after pseudo-element
                    const afterStyle = document.createElement('style');
                    afterStyle.innerHTML = `
                        #${heading.id}::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: -8px;
                            width: 50px;
                            height: 3px;
                            background: #6a11cb;
                        }
                    `;
                    document.head.appendChild(afterStyle);
                } else if (heading.tagName === 'H3') {
                    heading.style.position = "relative";
                    heading.style.display = "inline-block";
                    
                    // Create or update the ::after pseudo-element
                    const afterStyle = document.createElement('style');
                    afterStyle.innerHTML = `
                        #${heading.id}::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: -6px;
                            width: 40px;
                            height: 2px;
                            background: #6a11cb;
                        }
                    `;
                    document.head.appendChild(afterStyle);
                }
            });
        });
        
        footerLinks.forEach(link => {
            link.style.color = "#555555";
            link.style.textDecoration = "none";
            link.style.transition = "all 0.3s ease";
        });
        
        footerContactInfo.forEach(info => {
            info.style.color = "#666666";
        });
        
        footerContactIcons.forEach(icon => {
            icon.style.color = "#6a11cb";
        });
        
        if (copyright) {
            copyright.style.background = "rgba(0, 0, 0, 0.05)";
            copyright.style.color = "#777777";
        }
        
        if (footerSocialIcons) {
            footerSocialIcons.forEach(icon => {
                icon.style.background = "rgba(0, 0, 0, 0.05)";
                icon.style.color = "#555555";
                
                // Add hover effect
                icon.addEventListener('mouseenter', function() {
                    this.style.background = "#6a11cb";
                    this.style.color = "#ffffff";
                    this.style.transform = "translateY(-3px)";
                });
                
                icon.addEventListener('mouseleave', function() {
                    this.style.background = "rgba(0, 0, 0, 0.05)";
                    this.style.color = "#555555";
                    this.style.transform = "translateY(0)";
                });
            });
        }
    }
}

function toggleTheme() {
    theme = (theme === 'midnight') ? 'light' : 'midnight';
    applyTheme(theme);
}

// Carousel functions
function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'flex' : 'none';
      indicators[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function resetAutoplay() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

// Sort skills alphabetically
function sortSkillsAlphabetically() {
    const skillsContainer = document.querySelector('.skills-container');
    if (!skillsContainer) return;
    
    const skillCards = Array.from(skillsContainer.querySelectorAll('.skill-card'));
    
    // Sort the skill cards based on skill name
    skillCards.sort((a, b) => {
      const nameA = a.querySelector('.skill-name').textContent.toLowerCase();
      const nameB = b.querySelector('.skill-name').textContent.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    
    // Clear and re-append the sorted cards
    skillsContainer.innerHTML = '';
    skillCards.forEach(card => {
      skillsContainer.appendChild(card);
    });
}

// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    // Apply theme based on user preference
    applyTheme(theme);
    
    // Theme toggle event listener
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
    
    // Initialize carousel if elements exist
    if (slides.length > 0 && indicators.length > 0) {
        showSlide(currentIndex);
        interval = setInterval(nextSlide, 5000);
        
        document.getElementById('nextBtn')?.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });

        document.getElementById('prevBtn')?.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });

        indicators.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                showSlide(i);
                resetAutoplay();
            });
        });
    }
    
    // Initialize Typed.js (only once)
    if (typeof Typed !== 'undefined') {
        var typed = new Typed('#element', {
            strings: ['Web Developer', 'Graphic Designer', 'UI/UX Designer', 'Video Editor'],
            typeSpeed: 50,
            backSpeed: 25, 
            backDelay: 1000, 
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.right a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Hero section parallax effect
    const illustration = document.querySelector('.main-illustration');
    const homeSection = document.getElementById('Home');
    
    if (homeSection && illustration) {
        homeSection.addEventListener('mousemove', function(e) {
            const xPos = (e.clientX / window.innerWidth) - 0.5;
            const yPos = (e.clientY / window.innerHeight) - 0.5;
            
            illustration.style.transform = `translate(${xPos * 20}px, ${yPos * 20}px)`;
            
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const factor = (index + 1) * 15;
                element.style.transform = `translate(${xPos * factor}px, ${yPos * factor}px)`;
            });
        });
        
        homeSection.addEventListener('mouseleave', function() {
            illustration.style.transform = 'translate(0, 0)';
            
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach(element => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    // About section parallax effect
    const profileImage = document.querySelector('.profile-image');
    const aboutSection = document.getElementById('AboutMe');
    
    if (aboutSection && profileImage) {
        aboutSection.addEventListener('mousemove', function(e) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            profileImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        aboutSection.addEventListener('mouseleave', function() {
            profileImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    }
    
    // Skills section animations and filtering
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                skillsObserver.unobserve(entry.target);
                
                // Animate progress bars sequentially
                if (entry.target.classList.contains('skills-container')) {
                    const progressBars = entry.target.querySelectorAll('.progress');
                    progressBars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.width = bar.style.width;
                        }, index * 100);
                    });
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe skills container
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skillsObserver.observe(skillsContainer);
        skillsContainer.classList.add('fade-in');
        
        // Animate progress bars
        const progressBars = skillsContainer.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 300);
        });
    }
    
    // Filter functionality for skill cards
    const categoryButtons = document.querySelectorAll('.category-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    
    if (categoryButtons.length > 0 && skillCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                
                // Filter cards
                skillCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Second section animations
    const secondSection = document.querySelector('.secondSection');
    const imgSkills = document.querySelectorAll('.imgskills');
    
    if (secondSection && imgSkills.length > 0) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imgSkills.forEach(imgSkill => {
                        imgSkill.classList.add('popout'); 
                    });
                } else {
                    imgSkills.forEach(imgSkill => {
                        imgSkill.classList.remove('popout'); 
                    });
                }
            });
        });

        sectionObserver.observe(secondSection);
        imgSkills.forEach(imgSkill => {
            imgSkill.addEventListener('animationend', () => {
                imgSkill.classList.remove('popout'); 
            });
        });
    }
    
    // General scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
    
   
    
    // Smooth scroll for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sort skills alphabetically
    sortSkillsAlphabetically();
});

const socialIcons = document.querySelectorAll('.social-icon');
        const socialNames = ['Instagram', 'GitHub', 'LinkedIn', 'LeetCode'];
        
        socialIcons.forEach((icon, index) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = socialNames[index];
            icon.appendChild(tooltip);
            
            icon.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
            });
            
            icon.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
        
        document.getElementById('download-btn').addEventListener('click', () => {
            // Create a link element
            const link = document.createElement('a');
            
            // Set the link's href to the path of your PDF file
            link.href = "PDF's/v card.pdf"; 
            
            
            link.download = 'Yash_Machhi_Contact_Card.pdf';
            
            // Append the link to the body
            document.body.appendChild(link);
            
            // Trigger the click event on the link
            link.click();
            
            // Remove the link from the body
            document.body.removeChild(link);
        });
        
        // Share functionality
        document.getElementById('share-btn').addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Yash Machhi - Contact Information',
                    text: 'Connect with Yash Machhi',
                    url: window.location.href,
                })
                .catch(err => console.error('Error sharing:', err));
            } else {
                alert('Share functionality not supported by your browser');
            }
        });
        
        // Animation on scroll
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.animate');
            
            animatedElements.forEach(el => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, parseInt(el.style.animationDelay) * 1000);
            });
        });