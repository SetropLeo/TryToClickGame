/*CÓDIGO EM JAVASCRIPT*/

const handleClick = () => {
  const body = document.querySelector(
    "body"
  ); /*utilizado p selecionar elemento no JS*/
  body.innerHTML = `
        <h1>Hello JavaScript! </h1>
        <h2> and Hello World! </h2>
    `;

  body.style.backgroundColor = "#000"
  body.style.color = "#fff"
};

const el = document.getElementById('btn-start');
el.addEventListener('mouseover', () => {
  el.style.position = 'absolute';
  el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 18))}px`;
  el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 36))}px`;
});
el.addEventListener('click', handleClick);


const btnInfo = document.getElementById('btn-info')
const list = document.getElementById('ul')

const homeInfo = () => {
  list.classList.toggle('remove')
  if(list.classList.contains('remove')){
    btnInfo.innerText= 'Hide Infos'
  }else{
    btnInfo.innerText= 'Show Infos'
  }
}
btnInfo.addEventListener('click', homeInfo)
