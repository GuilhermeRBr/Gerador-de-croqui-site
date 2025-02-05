function abrirJanela() {
    const modal = document.getElementById("janela_modal");
    modal.classList.add("abrir"); 

    modal.addEventListener("click", function(e) {
        if(e.target.id == "janela_modal" || e.target.className == "fechar") {
            modal.classList.remove("abrir");
        }
    });
}