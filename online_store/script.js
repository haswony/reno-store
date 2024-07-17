
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (username.length < 5) {
            alert('يجب أن يكون اسم المستخدم على الأقل 5 أحرف');
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert('البريد الإلكتروني غير صحيح');
            event.preventDefault();
        } else if (password.length < 8) {
            alert('يجب أن تكون كلمة المرور على الأقل 8 أحرف');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
