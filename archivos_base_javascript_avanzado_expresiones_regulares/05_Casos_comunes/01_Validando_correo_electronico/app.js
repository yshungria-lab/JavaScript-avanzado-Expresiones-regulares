$(function() {
    let contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function(e) {
        e.preventDefault();

        console.log('¿El correo es válido?', isValidEmail());
    }

    let isValidEmail = function() {
        let email = document.getElementById('email');
        return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)
    }

});