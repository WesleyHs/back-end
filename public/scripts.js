const modalOverlay = document.querySelector('.modal-overlay') //pega apenas o elemento relacionado

const cards = document.querySelectorAll('.card') //pega todos elementos

for (let card of cards){  
    //addEventListener ouvi diversos eventos
    card.addEventListener("click", function(){
        const videoId =card.getAttribute("id"); //ele vai pegar o atributo id da classe
        modalOverlay.classList.add('active') //quando clicar no card, vai acionar a class active
        //pegar iframe os videos

        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`;

    })
}

document.querySelector('.close-modal').addEventListener('click', function(){ //fechar o botao
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = "";
})