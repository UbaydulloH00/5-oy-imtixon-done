const formLogin = document.getElementById('formLogin');
const formPassword = document.getElementById('formPassword');
const loginButton = document.getElementById('login-button');
const errorLogin = document.getElementById('error-login');
const errorPassword = document.getElementById('error-password');
const cabinet = document.getElementById('cabinet');
const singIn = document.getElementById('sing-in');
const cards = document.getElementById('cards');

home.addEventListener('click',function(){
	window.location.href = '../HTML/index.html'
  })
  cabinet.addEventListener('click',function(){
	window.location.href = '../HTML/cabinet.html'
  })
  singIn.addEventListener('click',function(){
	window.location.href = '../HTML/sing-in.html'
  })

function checkCredentials(username, password) {
    let users = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];

   
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.name.toLowerCase() === username.toLowerCase() && user.password === password) {
            return true;
        }
    }
    return false;
}

function validate() {
    if (!formLogin.value) {
        alert('logini kiriting');
        formLogin.focus();
        return false;
    }
    if (formLogin.value) {
        let userinfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
        let userinfofilter = userinfo.filter(el => {
            return el.name.toLowerCase() == formLogin.value.toLowerCase();
        });

        if (!userinfofilter.length) {
            alert('logini togri kiriting');
            formLogin.value = '';
            formLogin.focus();
            return false;
        }
    }
    if (!formPassword.value) {
        alert('parolni kiriting');
        formPassword.focus();
        return false;
    }
    if (formPassword.value) {
        let userinfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
        userinfo.forEach(el => {
            if (el.name == formLogin.value && el.password != formPassword.value) {
                alert("parolni to'g'ri kiriting");
                formPassword.value = '';
                formLogin.focus();
                return false;
            }
        });
    }
    return true;
};

loginButton && loginButton.addEventListener('click', function () {
    let enterlogin = formLogin.value;
    let enterpassword = formPassword.value;

    if (!validate()) {
        return;
    }

    if (!checkCredentials(enterlogin, enterpassword)) {
        errorLogin.textContent = 'login yoki parol hato';
        return;
    }
    
    window.location.href = '../HTML/asosiy.html';
});
