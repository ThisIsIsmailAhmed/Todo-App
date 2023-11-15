const input = document.querySelector('#input')
const ul = document.querySelector('#ul');
const form = document.querySelector('.add');
const itag = document.querySelector('.todos');
form.addEventListener('submit', e =>{
    e.preventDefault();
    var li = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${input.value}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

    ul.innerHTML += li

});

itag.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.tagName === 'I'){
        e.target.parentNode.remove()
    }
   })

  




