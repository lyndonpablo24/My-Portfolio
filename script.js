document.addEventListener("DOMContentLoaded", function() {
    
    const text = "I'm an aspiring Front-End Developer looking for an internship.";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    
    window.addEventListener("scroll", function() {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {
            header.style.background = "#ff758c";
        } else {
            header.style.background = "transparent";
        }
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    const menuButton = document.createElement("button");
    menuButton.innerText = "☰";
    menuButton.style.fontSize = "1.5rem";
    menuButton.style.background = "transparent";
    menuButton.style.border = "none";
    menuButton.style.color = "white";
    menuButton.style.cursor = "pointer";
    menuButton.style.display = "none";
    
    document.querySelector("header").prepend(menuButton);
    
    const navList = document.querySelector("nav ul");
    
    menuButton.addEventListener("click", function() {
        navList.classList.toggle("show");
    });

    
    function checkScreenSize() {
        if (window.innerWidth < 768) {
            menuButton.style.display = "block";
            navList.style.display = "none";
        } else {
            menuButton.style.display = "none";
            navList.style.display = "flex";
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
