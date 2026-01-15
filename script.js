const form = document.getElementById('form__signup');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.form__field-message');
const main = document.querySelector('main');
const dialog = document.getElementById('subscribe-success');
const closeBtn = document.getElementById('close-dialog');

closeBtn.addEventListener('click', () => {
  dialog.close();
});


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        console.log("email is NOT VALID")
        errorMsg.classList.add('is-visible')
        emailInput.classList.add('error')
        // errorMsg.textContent = "please enter the correct email"
        emailInput.focus();
        console.log("NOT A SUCCESS")
        return;
    }
    errorMsg.classList.remove('is-visible');
    emailInput.classList.remove('error');
    errorMsg.textContent = "";
    main.hidden = true;          // better than display:none for state toggles
    dialog.showModal();          // <-- key part
  });

  dialog.addEventListener('close', () => {
    console.log("why won't it close?")
  main.hidden = false;         // bring the original UI back if you want
});
    
//     errorMsg.textContent = ""
//     console.log("EMAIL IS VALID SEND FORM")
//     form.submit()
//     errorMsg.classList.remove('is-visible');
//     emailInput.classList.remove('error');
//     main.style.display = 'none';
//     dialog.style.display = 'grid';
//     console.log("SUCCESS!!!")
    
    
// })

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}