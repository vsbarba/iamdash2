$(document).ready(function () {
  $.firefly({
    images: ['//vsbarba.github.io/iamdash2/assets/img/firefly/1.jpg', '//vsbarba.github.io/iamdash2/assets/img/firefly/2.jpg'], //You can change images
    total: 65 // You can edit the number of flies
  });

  if (window.addEventListener) {  
    var kkeys = [],
      konami = "38";  
    window.addEventListener("keydown", function (e) {    
      kkeys.push(e.keyCode);    
      if (kkeys.toString().indexOf(konami) >= 0) {
        // User entered Konami Code, do something cool!!!
        alert('Fuck you bitches!!');
      }            
      kkeys = [];  
    }, true);
  }
});
