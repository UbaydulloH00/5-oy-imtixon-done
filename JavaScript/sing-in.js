const userName = document.getElementById('formName');
const userEmail = document.getElementById('formEmail');
const password = document.getElementById('formPassword');
const password1 = document.getElementById('formPassword1');
const creat = document.getElementById('create');
const btn = document.getElementById('btn');
const form = document.getElementById('form');
const error = document.getElementById('erro');
const cabinet = document.getElementById('cabinet');
const singIn = document.getElementById('sing-in');
const cards = document.getElementById('cards');

home.addEventListener('click', function () {
  window.location.href = '../HTML/asosiy.html'
})
cabinet.addEventListener('click', function () {
  window.location.href = '../HTML/cabinet.html'
})
singIn.addEventListener('click', function () {
  window.location.href = '../HTML/sing-in.html'
})

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validate() {
  if (!userName.value) {
    userName.focus();
    alert('User Nameni kiriting');
    return false;
  }
  if (!userEmail.value) {
    userEmail.focus();
    alert('emailni kiriting');
    return false;
  }
  if (!validateEmail(userEmail.value)) {
    userEmail.focus();
    alert('emailni togri kiriting');
    userEmail.value = '';
    return false;
  }
  if (!password.value) {
    password.focus();
    alert('Parolni kiriting');
    return false;
  }
  if (!password1.value) {
    password1.focus();
    alert('tasqiqlash uchun Parolni qayta kiriting kiriting');
    return false;
  }
  if (password.value !== password1.value) {
    alert('parolini togri kiriting');
    return false;
  }
  return true;
}

function validateuser() {
  let userInform = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
  for (let i = 0; i < userInform.length; i++) {
    const element = userInform[i];

    if (element.name === userName.value) {
      error.innerHTML = 'Bunday foydalanuvchi mavjud';
      return false;
    }
    if (element.email === userEmail.value) {
      return false;
    }
  }

  return true;
}

creat && creat.addEventListener('click', function () {
  if (!validate()) {
    form.reset();
    return;

  }

  if (validateuser()) {
    try {
      let userInform = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
      document.cookie = `login=${userName.value}; email=${userEmail.value}`;
      let user = {
        id: Date.now(),
        name: userName.value,
        email: userEmail.value,
        password: password.value,
      };
      userInform.push(user);
      localStorage.setItem('user', JSON.stringify(userInform));
      form.reset();
    } catch (error) {
      alert('hatolik yuz berdi');
      console.log(error);
    }

    window.location.href = '../HTML/asosiy.html'
  } else {
    form.reset();
    validateuser();
  }

});

