const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps){
    p.style.color = 'black';
    p.style.backgroundColor = backgroundColorBody;
    p.style.borderRadius = '10px';
    p.style.padding = '10px';
}