// const navigation = document.querySelector('.navigation')
// document.querySelector('.toggle').onclick = function(){
//    this.classList.toggle('active')
//    navigation.classList.toggle('active')
// }

const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function(e) {
   if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
      toggle.classList.remove('active');
      navbar.classList.remove('active');
   }
}

toggle.onclick = function() {
   toggle.classList.toggle('active');
   navbar.classList.toggle('active');
}
