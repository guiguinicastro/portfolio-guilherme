function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function showMessage() {
    const msg = document.getElementById("msg");
    msg.innerText = "Obrigado pelo contato! Em breve retornarei.";
    msg.style.marginTop = "15px";
    msg.style.color = "#38bdf8";
}