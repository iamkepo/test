let logo = document.getElementById('logo');

logo.style.transform = 'translateY(100px)';
logo.style.width = `700px`;
window.addEventListener('scroll', (e) => {  
  myFunction(logo)
})