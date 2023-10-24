
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("toggleMode");
    btn.addEventListener("click", function() {
        const body = document.body;
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            btn.textContent = "🌙";  
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            btn.textContent = "☀️";  
        }
    });
});

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});
