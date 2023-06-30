let email = document.querySelector('input#mail');
let botao = document.getElementById("botao");
let msg = document.getElementById("mensagem");

email.value = '';

function validarEmail(m) {
    var re = /\S+@\S+\.\S+/;
    return re.test(m);
    
}

function confirmacao() {
    if(email.value.length == 0) {
        window.alert('Fill in the data correctly.');
    } else if(validarEmail(email.value) == false) {
        let merro = window.document.getElementById('p');

        merro.style.display = 'inline-block';
        email.removeAttribute('id');
        email.classList.add('red');
        email.value = '';
    } else {
        let m = document.querySelector('#conteudo');
        let sucesso = document.getElementById("sucesso");
        /*let body = document.querySelector('body');
        body.style.background = 'hsl(235, 18%, 26%)';*/

        m.style.display = 'none';
        sucesso.style.display = 'block';
        msg.innerHTML = `<p>A confirmation email has been sent to ${email.value} Please open it and click the button inside to confirm your subscription.</p>`;
        email.value = '';
    }    
}

function voltar() {
    let sucesso = document.getElementById("sucesso");
    let merro = window.document.getElementById('p');
    let body = window.document.querySelector('body');
    let m = document.getElementById('conteudo');


    sucesso.style.display = 'none';
    m.style.display = 'block';
    merro.style.display = 'none';
    email.classList.remove('red');
    email.setAttribute('id', "mail");
}