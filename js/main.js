'use strict';

{
  const open = document.getElementById('open');
  const showingMenu = document.querySelector('.showing-menu');
  const close = document.getElementById('close')

  open.addEventListener('click', ()=>{
      showingMenu.classList.add('show');
      open.classList.add('hide');
  });

  close.addEventListener('click', ()=>{
    showingMenu.classList.remove('show')
    open.classList.remove('hide');
  });

}