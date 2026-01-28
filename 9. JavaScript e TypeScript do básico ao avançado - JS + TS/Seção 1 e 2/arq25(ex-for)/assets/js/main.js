const elementos = [
    {tag: 'p', texto: 'p'},
    {tag: 'div', texto: 'div'},
    {tag: 'section', texto: 'section'},
    {tag: 'footer', texto: 'footer'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i<elementos.length; i++){
    let {tag, texto} = elementos[i];
    let aux = document.createElement(tag);
    aux.innerHTML = texto;
    div.appendChild(aux)
}
container.appendChild(div);
