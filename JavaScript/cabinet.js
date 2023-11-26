
const userform = document.getElementById('user-inform');
const cabinet = document.getElementById('cabinet');
const singIn = document.getElementById('sing-in');
const cards = document.getElementById('cards');
home.addEventListener('click',function(){
	window.location.href = '../HTML/asosiy.html'
  })
  cabinet.addEventListener('click',function(){
	window.location.href = '../HTML/cabinet.html'
  })
  singIn.addEventListener('click',function(){
	window.location.href = '../HTML/sing-in.html'
  })

document.addEventListener('DOMContentLoaded',function(){
    let user = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):[];
    let userlogincook = document.cookie;
    JSON.stringify(userlogincook);
    let userfindlogin = userlogincook.substring(6);

    user.forEach(el => {
      if(el.name.toLowerCase()== userfindlogin){
       let a = `
       <h1>User Name: ${el.name}</h1>
       <h2>User Email: ${el.email}</h2>
       <h2>user Password: ${el.password}</h2>
       `
       userform.innerHTML += a
      }        
    });

})