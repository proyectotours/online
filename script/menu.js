// let menuBtn = $('.toggle');
// let menu = $('.navigation ul');

//   menuBtn.click(function(){
//   if (menu.hasClass('show')){
//     menu.removeClass('show');
//   }else{
//     menu.addClass('show');
//   }
// })



const toggle = document.querySelector('#toggle');

const navigation = document.querySelector('#navigation ul');


toggle.addEventListener('click', (e) => {
   toggle.classList.toggle('show');
   navigation.classList.toggle('show');

});