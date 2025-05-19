function escopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const grupo = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        
        grupo.push(pessoa);
        console.log(grupo);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}kg ${altura.value}M</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
escopo();