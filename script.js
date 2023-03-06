function toggleMode () {

    const html = document.documentElement
    const img = document.querySelector("#profile img")

    /*if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    /* A função a baixo (TOGGLE)faz exatamente o cód acima, ela verifica as 2 situações, se a class estiver ela tira, e se ñ estiver ela coloca*/

    html.classList.toggle('light')

    /* O setAttribute modifica, ajusta ou adiciona um novo atributo no HTML, o primeiro valor é qual atributo vc quer fzr a alteração e o segundo valor é o novo valor a ser colocado*/

    /* Verifica e modifica a img de acordo com a class light*/

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/light-mode.png')
    }else {
        img.setAttribute('src', './assets/dark-mode.png')
    }

    /* Verifica e modifica o texto alt da img de acordo com a class light*/

    if (html.classList.contains('light')) { 
        img.setAttribute("alt", "Foto de Gabriel Passos,  sorrindo, barba, camisa cor rosa e fundo azul.")
    }else {
        img.setAttribute("alt", "Foto de Gabriel Passos,  sorrindo, barba, camisa cor rosa e fundo laranja.")
    }
}