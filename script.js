

// 1. Criar o observador
const myObserver = new IntersectionObserver((entrada) => { // 'entrada' é uma convenção mais comum
    // 2. Dentro do observador, definir uma função 'entrada' que receberá outra função 'entrou'
    // 3. Definir a função 'entrou' que será: forEach (aplica uma função dada a ela a um array), no caso aplica a função 'entrou' à função 'entrada'.
    entrada.forEach((entrou) => {
        // 4. Definir if e else
        if (entrou.isIntersecting) {
            entrou.target.classList.add("show"); // Adiciona a classe 'show' quando o elemento está visível
        } else {
            entrou.target.classList.remove("show"); // Remove a classe 'show' quando o elemento não está visível
        }
    });
});

// Selecionar o conjunto de classes
const elements = document.querySelectorAll(".off");




// Através de forEach passar uma função a ela, element (essa função inicia o myObserver já definido) passo o parâmetro que quero observar, no caso o element
elements.forEach((element) => {
    myObserver.observe(element); // Observa cada elemento selecionado
});

