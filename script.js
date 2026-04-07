// 1. MOBILE MENU LOGIC (NEW)
const menuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Link click hone par menu band ho jaye
    document.querySelectorAll('.nav-link-custom').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// 2. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.9)';
        navbar.style.padding = '10px 0'; // Thora mazeed compact
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.75)';
        navbar.style.padding = '20px 0';
    }
});

// 3. Form Handling (Simple Validation & Alert)
const sendBtn = document.querySelector('.btn-send');
if (sendBtn) {
    sendBtn.addEventListener('click', (e) => {
        // Validation check
        const name = document.querySelector('input[placeholder="Your Name"]').value;
        const email = document.querySelector('input[placeholder="Email Address"]').value;

        if (name === "" || email === "") {
            alert("Please fill name and email!");
            return;
        }

        const originalText = sendBtn.innerText;
        sendBtn.innerText = "Sending...";
        sendBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert("Shukriya! Aapka message receive ho gaya hai.");
            sendBtn.innerText = originalText;
            sendBtn.disabled = false;
            
            // Inputs clear karna
            document.querySelectorAll('.form-input').forEach(input => input.value = "");
        }, 1500);
    });
}

// 4. Simple Page Fade-in Effect
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});