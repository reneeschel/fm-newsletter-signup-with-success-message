const form = document.getElementById('form__signup');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.form__field-message');
const dialog = document.getElementById('subscribe-success');
const closeBtn = document.getElementById('close-dialog');
const senderEmail = document.getElementById('sender-email');
const openBtn = document.getElementById('subscribe-btn');


closeBtn.addEventListener('click', () => {
  dialog.close();
});

dialog.addEventListener('close', () => {
  openBtn.focus(); // always restore focus even if closed via Esc
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        errorMsg.classList.add('is-visible');
        emailInput.classList.add('error');
        emailInput.focus();
        return;
    }

    errorMsg.classList.remove('is-visible')
    emailInput.classList.remove('error');
    errorMsg.textContent = "";


    senderEmail.textContent = email;    
    dialog.showModal();    
    closeBtn.focus(); 
       
  });
    

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}