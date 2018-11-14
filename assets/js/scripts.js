
const services = document.querySelector("#services");
const events = document.querySelector("#events");
if(services && events) {
  const typed = new Typed('#services', {
    strings: ['<strong>DJ</strong>', '<strong>FOTO</strong>', '<strong>VIDEO</strong>'],
    typeSpeed: 200,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
const typed2 = new Typed('#events', {
    strings: ['<strong>nunți</strong>', '<strong>botezuri</strong>', '<strong>cununii</strong>', '<strong>petreceri private</strong>'],
    typeSpeed: 100,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
}

